import fetch from "common/fetch.js";

//歌曲列表
export default {
  state: {
    //歌曲列表{id:'',name:'',singer:'',album:''}
    musicList: []
  },
  getters: {
    musicCount: state => state.musicList.length,
    getMusic: state => index => {
      let count = state.musicList.length;
      if (count > 0) {
        return state.musicList[Math.max(index, Math.min(count - 1, 0))];
      }
      return null;
    },
    nextMusic: state => index => {
      let count = state.musicList.length;
      if (count > 0) {
        if (index === count) {
          index = 0;
        } else {
          ++index;
        }
        return state.musicList[Math.max(index, Math.min(count - 1, 0))];
      }
      return null;
    },
    preMusic: state => index => {
      let count = state.musicList.length;
      if (count > 0) {
        if (index === 0) {
          index = count - 1;
        } else {
          --index;
        }
        return state.musicList[Math.max(index, Math.min(count - 1, 0))];
      }
      return null;
    }
  },
  mutations: {
    pushMusics(state, obj) {
      state.musicList = state.musicList.concat(obj);
    },
    updateMusic(state, obj) {
      state.musicList[obj.index] = obj;
    },
    clearMusics(state) {
      state.musicList = [];
    }
  },
  actions: {
    iniMusicList({ commit }) {
      fetch({ types: "playlist", id: 3778678 }, data => {
        let music = [];
        for (let index in data.playlist.tracks) {
          let ele = data.playlist.tracks[index];
          let m = {
            album: ele.al.name,
            artist: ele.ar[0].name,
            id: ele.id,
            name: ele.name,
            pic: ele.al.picUrl + "?param=300y300",
            source: "netease",
            index: index,
            url: ""
          };
          music.push(m);
        }
        commit("pushMusics", music);
      });
    },
    getMusicUrl({ dispatch, commit }, obj) {
      fetch({ types: "url", id: obj.id, source: obj.source }, data => {
        obj.url = data.url;

        // 解决网易云音乐部分歌曲无法播放问题
        if (obj.source == "netease") {
          if (obj.url === "") {
            obj.url =
              "https://music.163.com/song/media/outer/url?id=" +
              music.id +
              ".mp3";
          } else {
            obj.url = obj.url.replace(/m7c.music./g, "m7.music.");
            obj.url = obj.url.replace(/m8c.music./g, "m8.music.");
          }
        } else if (obj.source == "baidu") {
          // 解决百度音乐防盗链
          obj.url = obj.url.replace(
            /http:\/\/zhangmenshiting.qianqian.com/g,
            "https://gss0.bdstatic.com/y0s1hSulBw92lNKgpU_Z2jR7b2w6buu"
          );
        }

        commit("updateMusic", obj);
        dispatch("playUpdate");
      });
    }
  }
};

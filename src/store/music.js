import axios from "axios";

const fetchApi = (data, callback) => {
  const toFormData = data => {
    let formData = new FormData();
    for (let it in data) {
      formData.append(it, data[it]);
    }
    return formData;
  };
  axios
    .post("/api", toFormData(data), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(res => callback(res.data))
    .catch(err => console.log(err.response));
};

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
      fetchApi({ types: "playlist", id: 3778678 }, data => {
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
      fetchApi({ types: "url", id: obj.id, source: obj.source }, data => {
        obj.url = data.url;
        commit("updateMusic", obj);
        dispatch("playUpdate");
      });
    }
  }
};

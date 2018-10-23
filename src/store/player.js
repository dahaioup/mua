import fetch from "common/fetch.js";
import player_cover from "assets/player_cover.png";
// 解析歌词
// 这一函数来自 https://github.com/TivonJJ/html5-music-player
// 参数：原始歌词文件
const parseLyric = lrc => {
  if (lrc === "") return "";
  var lyrics = lrc.split("\n");
  var lrcObj = {};
  for (var i = 0; i < lyrics.length; i++) {
    var lyric = decodeURIComponent(lyrics[i]);
    var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
    var timeRegExpArr = lyric.match(timeReg);
    if (!timeRegExpArr) continue;
    var clause = lyric.replace(timeReg, "");
    for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
      var t = timeRegExpArr[k];
      var min = Number(String(t.match(/\[\d*/i)).slice(1)),
        sec = Number(String(t.match(/\:\d*/i)).slice(1));
      var time = min * 60 + sec;
      lrcObj[time] = clause;
    }
  }
  return lrcObj;
};

//播放器
export default {
  state: {
    //歌词{time: context}
    lyric: {},
    index: -1, //歌词当前行
    duration: 50, //歌曲总时长
    ctime: false, //当前播放时间
    cover: player_cover //封面
  },
  getters: {},
  mutations: {
    setLyric(state, obj) {
      state.lyric = obj;
    },
    setCover(state, obj) {
      if (obj.length < 5) {
        obj = player_cover;
      }
      console.log(obj);
      state.cover = obj;
    }
  },
  actions: {
    lyricUpdate({ commit, getters }) {
      let obj = getters.curMusic;
      commit("setCover", obj.pic);
      fetch({ types: "lyric", id: obj.id, source: obj.source }, data => {
        commit("setLyric", parseLyric(data.lyric));
        console.log(this.state.player.lyric);
      });
    }
  }
};

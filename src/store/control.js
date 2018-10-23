//播放控制器
export default {
  state: {
    audio: null, //播放器
    music: null, //当前播放歌曲
    status: "pause", //状态:暂停(pause)，播放(playing)
    mode: "list", //模式:列表循环(list)，随机播放(random)，单曲循环(single)
    progress: 0, //播放进度(0-100)
    volume: 50, //音量(0-100)
    mute: false //是否静音(bool)
  },
  getters: {
    playing: state => state.status === "playing",
    curMusic: state => state.music,
    curIndex: state => {
      if (state.status === "playing" && state.music) {
        return state.music.index;
      }
      return -1;
    }
  },
  mutations: {
    setAudio(state, obj) {
      state.audio = obj;
    },
    setMusic(state, obj) {
      state.music = { ...obj };
      state.audio.src = obj.url;
      if (state.audio.src.substring(obj.url.length - 4) === ".mp3") {
        console.log(state.audio.src);
        state.audio.load();
        if ((state.status = "playing")) {
          state.audio.play();
        }
      }
    },
    setStatus(state, obj) {
      if (obj === "") {
        obj = state.status === "pause" ? "playing" : "pause";
      }
      if (obj === "pause") {
        state.status = "pause";
        if (state.audio.duration) {
          state.audio.pause();
        }
      } else {
        state.status = "playing";
        if (state.audio.duration) {
          state.audio.play();
        }
      }
    },
    setMode(state, obj) {
      if (obj === "") {
        if (state.mode === "list") {
          obj = "random";
        } else if (state.mode === "random") {
          obj = "single";
        } else {
          obj = "list";
        }
      }
      state.mode = obj;
    }
  },
  actions: {
    attachPlayer({ commit }, ele) {
      commit("setAudio", ele);
    },
    detachPlayer({ commit }) {
      commit("setAudio", null);
    },
    playStart({ commit, dispatch, state }, obj) {
      commit("setMusic", obj);
      if (!state.music.url) {
        dispatch("getMusicUrl", { ...state.music });
      }
      commit("setStatus", "playing");
      dispatch("lyricUpdate");
    },
    playNext({ commit, dispatch, state, getters }) {
      if (state.music) {
        commit("setMusic", getters.nextMusic(state.music.index));
      } else {
        commit("setMusic", getters.getMusic(0));
      }

      if (!state.music.url) {
        dispatch("getMusicUrl", { ...state.music });
      }
      commit("setStatus", "playing");
      dispatch("lyricUpdate");
    },
    playPrev({ commit, state, getters }) {
      if (state.music) {
        commit("setMusic", getters.preMusic(state.music.index));
      } else {
        commit("setMusic", getters.getMusic(0));
      }

      if (!state.music.url) {
        dispatch("getMusicUrl", { ...state.music });
      }
      commit("setStatus", "playing");
      dispatch("lyricUpdate");
    },
    playEnded({ dispatch, state, getters }) {
      //模式:列表循环(list)，随机播放(random)，单曲循环(single)
      if (state.mode === "single") {
        dispatch("playUpdate");
      } else if (state.mode === "random") {
        dispatch(
          "playStart",
          this.getters.getMusic(Math.floor(getters.musicCount * Math.random()))
        );
      } else {
        dispatch("playNext");
      }
    },
    playUpdate({ commit, state, getters }) {
      commit("setMusic", getters.getMusic(state.music.index));
    },
    playToggle({ dispatch, commit, state, getters }) {
      if (!state.music) {
        commit("setMusic", getters.getMusic(0));
        if (!state.music.url) {
          dispatch("getMusicUrl", { ...state.music });
        }
        dispatch("lyricUpdate");
      }
      commit("setStatus", "");
    },
    modeToggle({ commit }) {
      commit("setMode", "");
    }
  }
};

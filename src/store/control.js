//播放控制器
export default {
  state: {
    status: "pause", //状态:暂停(pause)，播放(playing)
    mode: "list", //模式:列表循环(list)，随机播放(random)，单曲循环(single)
    progress: 0, //播放进度(0-100)
    volume: 50, //音量(0-100)
    mute: false //是否静音(bool)
  },
  getters: {
    getStatus: state => state.status,
    getMode: state => state.mode,
    getProgress: state => state.progress,
    getVolume: state => state.volume,
    getMute: state => state.mute
  },
  mutations:{
      play(state){
          state.status = 'playing';
      },
      pause(state){
          state.status = 'pause';
      }
  }
};

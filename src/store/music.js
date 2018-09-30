//歌曲列表
export default {
  state: {
    //歌曲列表{id:'',name:'',singer:'',album:''}
    musicList: [
      {
        album: "粥请客（二）",
        artist: "花粥",
        id: 574566207,
        lyric_id: 574566207,
        name: "盗将行",
        pic:
          "http://p1.music.126.net/a1U7azl9lHF_1vZdJ8YYmA==/109951163366440346.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m8.music.126.net/20180930155349/553bd53a4f2df91b9b308292740dda41/ymusic/07fa/a2a1/35ea/732937117d6d0a8c13a81bb40184662e.mp3",
        url_id: 574566207
      },
      {
        album: "陷阱",
        artist: "王北车",
        id: 1294899063,
        lyric_id: 1294899063,
        name: "陷阱",
        pic:
          "http://p1.music.126.net/1hyPx7SxIQH8nnsIhcgmfQ==/109951163415300959.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m7.music.126.net/20180927170957/022bd2e191311c16a9860c43fd7bfb18/ymusic/2e28/b752/5718/481c8dddd7d5e58e89db8c3b2ec06eef.mp3",
        url_id: 1294899063
      },
      {
        album: "一百万个可能",
        artist: "Christine Welch",
        id: 29722582,
        lyric_id: 29722582,
        name: "一百万个可能",
        pic:
          "http://p1.music.126.net/SSGt30LAVJwW31-qreZDFA==/2532175280446455.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m8.music.126.net/20180930160100/50e58db900ad2031a9d59f42e5f80a17/ymusic/fc09/ba27/091f/b817b89ea35414a8c08c5ab0b34b3ae1.mp3",
        url_id: 29722582
      },
      {
        album: "可能否",
        artist: "木小雅",
        id: 569214126,
        lyric_id: 569214126,
        name: "可能否",
        pic:
          "http://p1.music.126.net/SJYnDay7wgewU3O7tPfmOQ==/109951163322541581.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m7.music.126.net/20180927182021/5c6913886b58818522cd6acb0c2d3fc3/ymusic/0315/6567/aec4/571c53753324f59988788fe518798f66.mp3",
        url_id: 569214126
      },
      {
        album: "中国新说唱 第3期",
        artist: "艾热",
        id: 1296583188,
        lyric_id: 1296583188,
        name: "星球坠落 (Live)",
        pic:
          "http://p1.music.126.net/4k-pMEO-en8IE6PdJoAYfg==/109951163429466895.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m8.music.126.net/20180927182032/b19355b84cbfae096763ab86c05d91ea/ymusic/738c/33e6/7f1c/71ac4a1de28d1d4b754d7940161d8021.mp3",
        url_id: 1296583188
      },
      {
        album: "卡路里",
        artist: "火箭少女101",
        id: 1294924781,
        lyric_id: 1294924781,
        name: "卡路里",
        pic:
          "http://p1.music.126.net/fcmIRLdxD1ngZABV9N5maA==/109951163425833838.jpg?param=300y300",
        pic_id: null,
        source: "netease",
        url:
          "http://m8.music.126.net/20180930160243/91c2ea03e8a980a71fd4bad66e1ab86a/ymusic/71d1/2443/0839/8684ed9cd0d050e078335cf3b53ed85e.mp3",
        url_id: 1294924781
      }
    ]
  },
  getters: {
    getMusics: state => state.musicList
  },
  mutations: {}
};

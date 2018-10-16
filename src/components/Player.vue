<template>
  <!-- 右侧封面及歌词展示 -->
  <div class="player" id="player">
    <!--歌曲封面-->
    <div class="cover">
      <img src="~assets/player_cover.png" class="music-cover" id="music-cover">
    </div>
    <!--滚动歌词-->
    <div class="lyric">
      <ul id="lyric">
        <li v-for="(value,key,index) in lyric" :key="index" data-no="index" class="lrc-item">
          <p v-if="value===''">&nbsp;</p>
          <p v-else>{{value}}</p>
        </li>
      </ul>
    </div>
    <div id="music-info" title="点击查看歌曲信息"></div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({ lyric: state => state.player.lyric })
  }
};
</script>
<style lang="less" scoped>
/* 播放器主体(歌词和封面) */
.player {
  height: 100%;
  width: 400px;
  float: right;
  position: relative;
}

/* 歌曲封面区域 */
.cover {
  position: relative;
  display: block;
  width: 186px;
  height: 186px;
  margin: auto;
}

.cover:after {
  content: "";
  position: absolute;
  left: 9px;
  top: 0;
  width: 201px;
  height: 180px;
  background: url(~assets/album_cover_player.png) 0 0 no-repeat;
  pointer-events: none;
}
/* 歌曲封面图片 */
.music-cover {
  vertical-align: middle;
  width: 186px;
  height: 186px;
}

/* 歌词显示区域 */
.lyric {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 195px;
  bottom: 10px;
  overflow: hidden;
  text-align: center;
  color: #bdbdbe;
  color: rgba(225, 225, 225, 0.8);
  line-height: 28px;
  padding: 20px 0;
}
/* 歌词ul */
#lyric {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
#lyric > li {
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 正在播放的那一句歌词 */
#lyric .lplaying {
  color: #31c27c;
}
/* 歌词显示区显示的提示语(如加载中、无歌词等) */
.lyric-tip {
  position: absolute;
  width: 100%;
  top: 50%;
}

/* 歌曲信息按钮 */
#music-info {
  transition: all 0.25s ease;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  position: absolute;
  width: 27px;
  height: 26px;
  border-radius: 13px;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 26px;
  font-weight: bold;
  background-image: url(~assets/player.png);
  background-position: -28px -367px;
  background-color: #353535;
  opacity: 0.3;
  filter: Alpha(opacity=30);
}
#music-info:hover {
  opacity: 1;
  filter: Alpha(opacity=100);
}
</style>

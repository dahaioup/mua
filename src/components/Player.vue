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
          <li data-no="0" class="lrc-item">幽静窗外满地片片寒花</li>
          <li data-no="1" class="lrc-item">一瞬间永恒的时差</li>
          <li data-no="2" class="lrc-item">窝在棉被里</li>
          <li data-no="3" class="lrc-item">倾听踏雪听沈默的声音</li>
          <li data-no="4" class="lrc-item">飘雪藏永恒的身影</li>
          <li data-no="5" class="lrc-item">雪树下等你</li>
          <li data-no="6" class="lrc-item">&nbsp;</li>
          <li data-no="7" class="lrc-item">在一瞬间有一百万个可能</li>
          <li data-no="8" class="lrc-item">该向前走或者继续等</li>
          <li data-no="9" class="lrc-item">这冬夜里有百万个不确定</li>
          <li data-no="10" class="lrc-item">渐入深夜或期盼天明</li>
          <li data-no="11" class="lrc-item">云空的泪一如冰凌结晶了</li>
          <li data-no="12" class="lrc-item">成雪花垂</li>
          <li data-no="13" class="lrc-item">这一瞬间有一百万个可能</li>
          <li data-no="14" class="lrc-item">窝进棉被或面对寒冷</li>
          <li data-no="15" class="lrc-item">&nbsp;</li>
          <li data-no="16" class="lrc-item">幽静寒风吹来一缕声音</li>
          <li data-no="17" class="lrc-item">一瞬间看着你走近</li>
          <li data-no="18" class="lrc-item">暖了我冬心</li>
          <li data-no="19" class="lrc-item">倾听踏雪听沈默的声音</li>
          <li data-no="20" class="lrc-item">飘雪藏永恒的身影</li>
          <li data-no="21" class="lrc-item">雪树下等你</li>
          <li data-no="22" class="lrc-item">&nbsp;</li>
          <li data-no="23" class="lrc-item">在一瞬间有一百万个可能</li>
          <li data-no="24" class="lrc-item">该向前走或者继续等</li>
          <li data-no="25" class="lrc-item">这冬夜里有百万个不确定</li>
          <li data-no="26" class="lrc-item">渐入深夜或期盼天明</li>
          <li data-no="27" class="lrc-item">云空的泪一如冰凌结晶了</li>
          <li data-no="28" class="lrc-item">成雪花垂</li>
          <li data-no="29" class="lrc-item">这一瞬间有一百万个可能</li>
          <li data-no="30" class="lrc-item">窝进棉被或面对寒冷</li>
          <li data-no="31" class="lrc-item">&nbsp;</li>
          <li data-no="32" class="lrc-item">那晚上会是哪个瞬间</li>
          <li data-no="33" class="lrc-item">说好的爱会不会改变</li>
          <li data-no="34" class="lrc-item">而你让我徘徊在千里之外</li>
          <li data-no="35" class="lrc-item">yeah你让我等了好久baby</li>
          <li data-no="36" class="lrc-item">突然间那是哪个瞬间</li>
          <li data-no="37" class="lrc-item">你终於出现就是那个瞬间</li>
          <li data-no="38" class="lrc-item">等了好久忍不住伸手那个瞬间</li>
          <li data-no="39" class="lrc-item">&nbsp;</li>
          <li data-no="40" class="lrc-item">在一瞬间有一百万个可能</li>
          <li data-no="41" class="lrc-item">该向前走或者继续等</li>
          <li data-no="42" class="lrc-item">这深夜里有百万个不确定</li>
          <li data-no="43" class="lrc-item">渐入冬林或走向街灯</li>
          <li data-no="44" class="lrc-item">云空的泪一如冰凌结晶了</li>
          <li data-no="45" class="lrc-item">成雪花垂</li>
          <li data-no="46" class="lrc-item">&nbsp;</li>
          <li data-no="47" class="lrc-item">这一瞬间有一百万个可能</li>
          <li data-no="48" class="lrc-item">暖这冬心或面对寒冷</li>
          <li data-no="49" class="lrc-item">该向前走或者继续等</li>
          <li data-no="50" class="lrc-item">渐入冬林或走向街灯</li>
          <li data-no="51" class="lrc-item">窝进棉被或面对寒冷</li>
          <li data-no="52" class="lrc-item">暖这冬心或面对寒冷</li>
          <li data-no="53" class="lrc-item">&nbsp;</li>
        </ul>
      </div>
      <div id="music-info" title="点击查看歌曲信息"></div>
    </div>
</template>
<script>
export default {
  name: "Player"
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

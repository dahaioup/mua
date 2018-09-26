<template>
  <div class="player">
    <div class="cover">
      <img src="http://p1.music.126.net/SSGt30LAVJwW31-qreZDFA==/2532175280446455.jpg?param=300y300" class="music-cover">
    </div>
    <!-- 滚动歌词 -->
    <div class="lyric">
      <ul id="lyric"></ul>
    </div>
    <div class="music-info" title="点击查看歌曲信息"></div>
  </div>
</template>
<script>
export default {
  name: "Player"
};
</script>
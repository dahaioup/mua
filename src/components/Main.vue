<template>
  <div class="hello">
    <div class="blur-bk"></div>
    <div class="center">
      <div class="container">
        <div class="btn-bar">
          <!-- tab按钮区 -->
          <div class="btn-box">
            <router-link to="/player" tag="span" class="btn" hidden>播放器</router-link>
            <router-link to="/" tag="span" class="btn">正在播放</router-link>
            <router-link to="/sheet" tag="span" class="btn">播放列表</router-link>
            <router-link to="/search" tag="span" class="btn">歌曲搜索</router-link>
          </div>
        </div>

        <div class="data-area">
          <router-view></router-view>
        </div>

        <v-player></v-player>
      </div>
    </div>
    <v-control></v-control>
  </div>
</template>

<script>
import player from '@/components/Player'
import control from '@/components/Control'

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{

  },
  components:{
    'v-player':player,
    'v-control':control
  },
  created(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/style.less";

.center {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 100px;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.btn-bar {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 400px;
  height: 55px;
}

.btn-box {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.btn {
  transition: all 0.25s ease;
  user-select: none;
  position: relative;
  border-radius: 2px;
  border: 1px solid rgba(150, 150, 150, 0.5);
  color: #fff;
  opacity: 0.8;
  filter: alpha(opacity=80);
  cursor: pointer;
  font-size: 14px;
  padding: 6px 25px;
  margin: 0 2px;
}

.btn:hover {
  border: 1px solid #fff;
  opacity: 1;
  filter: alpha(opacity=100);
}

.blur-bk {
  .pos();
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.blur-bk::after {
  content: "";
  .pos(absolute,-10%,-10%,120%,120%);
  filter: blur(30px);
  background: center
    url("http://p1.music.126.net/SSGt30LAVJwW31-qreZDFA==/2532175280446455.jpg?param=300y300")
    no-repeat;
  background-size: 100% 100%;
  z-index: -1;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    margin: 0;
    padding: 0
}

/* html,body{
    height: 100%;
    width: 100%;
    background-color: #777970;
    overflow: hidden;
}
body { */
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ba43a8+0,ea4fce+62,537bad+100&amp;0.38+0,0.17+61,0.8+100 */
    /* IE9 SVG, needs conditional override of 'filter' to 'none' */
    /* background: #000000;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7f7280', endColorstr='#000000');
    background-image: linear-gradient(200deg, #7f7280, #000000);
    overflow: hidden;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>

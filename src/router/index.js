import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Music from "@/components/Music";
import Sheet from "@/components/Sheet";
import Search from "@/components/Search";
import Player from "@/components/Player";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          component: Music
        },
        {
          path: "player",
          component: Player
        },
        {
          path: "sheet",
          component: Sheet
        },
        {
          path: "search",
          component: Search
        }
      ]
    }
  ]
});

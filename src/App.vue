<template>
  <div id="app">
    <menuBarCoo :menuData="menuData" @menu-router="onMenuRouter" class="menu-bar"></menuBarCoo>
    <router-view></router-view>
  </div>
</template>

<script>
import EventBus from "./util/event-bus";
import menuBarCoo from "./components/menuBarCoo";
export default {
  name: "app",
  components: { menuBarCoo },
  data() {
    return {
      menuData: [
        { name: "Page One", routerKey: "pageone" },
        { name: "Page Two", routerKey: "pagetwo" },
        { name: "Page Three", routerKey: "pagethree" },
        { name: "Black Hole", routerKey: "blackhole" }
      ]
    };
  },
  computed: {},
  methods: {
    onMenuRouter(v) {
      EventBus.$emit("router-to", v);
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  width: 8px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
.menu-bar {
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  top: 50px;
  left: 50px;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 3px;
}
</style>

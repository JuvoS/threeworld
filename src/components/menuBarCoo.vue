<template>
  <div class="menuBarCoo">
    <div
      class="menuBarItem"
      v-for="(item,key) in menuData"
      :key="key"
      @click="$emit('menu-router',item.routerKey)"
    >{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "menuBarCoo",
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  methods: {}
};
</script>

<style scoped>
.menuBarItem {
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}
</style>

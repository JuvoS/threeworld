<template>
  <div>
    <world v-if="routerState == 'pageone'"></world>
    <pageTwo v-if="routerState == 'pagetwo'"></pageTwo>
    <pageThree v-if="routerState == 'pagethree'"></pageThree>
    <blackHole v-if="routerState == 'blackhole'"></blackHole>
  </div>
</template>
<script>
import EventBus from "../../util/event-bus";
import world from "../../components/pageone";
import pageTwo from "../../components/pagetwo";
import pageThree from "../../components/pagethree";
import blackHole from "../../components/blackhole";
export default {
  components: { world, pageTwo, pageThree, blackHole },
  data() {
    return {
      routerState: "pageone"
    };
  },
  mounted() {
    EventBus.$on("router-to", this.onRouterTo);
  },
  methods: {
    onRouterTo(v) {
      this.routerState = v;
    }
  }
};
</script>
<style scoped>
</style>
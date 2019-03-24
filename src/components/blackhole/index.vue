<template>
  <div class="universe">
    <div class="black-hole">
      <img class="img-black-hole" :src="blackholeImg">
    </div>
  </div>
</template>
 
<script>
export default {
  name: "ThreeTest",
  data() {
    return {
      blackholeImg: require("@/assets/img/blackhole.png")
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.universe {
  width: 100%;
  height: 100%;
  background: #000;
}
.black-hole {
  height: 500px;
  margin: 10px auto;
  position: relative;
}
.img-black-hole {
  animation: rotates 15s linear 0s infinite normal none running;
  z-index: 302;
  height: 100%;
  text-align: center;
  padding: 0px;
}
@keyframes rotates {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
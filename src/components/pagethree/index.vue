<template>
  <div>
    <div id="container"></div>
  </div>
</template>
 
<script>
import * as THREE from "three";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: undefined,
      scene: undefined,
      renderer: undefined,

      mouseX: 0,
      mouseY: 0,

      particles: []
    };
  },
  methods: {
    init() {
      //照相机的参数
      this.camera = new THREE.PerspectiveCamera(
        80,
        window.innerWidth / window.innerHeight,
        1,
        4000
      );

      //将相机屏幕外移动
      this.camera.position.z = 1000;

      //场景
      this.scene = new THREE.Scene();

      this.scene.add(this.camera);

      //渲染器
      this.renderer = new THREE.WebGLRenderer();
      //设置2Dcanvas的大小
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      //将渲染器的canvas domElement加入到body中
      document
        .getElementById("container")
        .appendChild(this.renderer.domElement);

      this.makeParticles();

      //设置鼠标移动监听
      document.addEventListener("mousemove", this.onMouseMove, false);

      //每秒渲染30次
      setInterval(this.update, 1000 / 30);
    },
    update() {
      //作用是将粒子向前移动
      this.updateParticles();
      //从相机的视角渲染场景
      this.renderer.render(this.scene, this.camera);
    },
    makeParticles() {
      var particle, material; //创建粒子和材质

      for (var zpos = -1000; zpos < 1000; zpos += 20) {
        //创建材质
        material = new THREE.PointsMaterial({
          // color: this.getRandomColor(),
          color: 0xffffff

          // program: this.particleRender
        });

        //创建粒子
        particle = new THREE.Sprite(material);

        particle.position.x = Math.random() * 1000 - 500;
        particle.position.y = Math.random() * 1000 - 500;

        particle.position.z = zpos;

        //将其放大一点
        particle.scale.x = particle.scale.y = 10;

        //放入到场景中
        this.scene.add(particle);

        //将粒子加入到particles数组中
        this.particles.push(particle);
      }
    },
    particleRender(context) {
      context.beginPath();
      context.arc(0, 0, 1, 0, Math.PI * 2, true);
      context.fill();
    },
    getRandomColor() {
      var r = (255 * Math.random()) | 0,
        g = (255 * Math.random()) | 0,
        b = (255 * Math.random()) | 0;
      return "0x" + parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
    },
    updateParticles() {
      for (var i = 0; i < this.particles.length; i++) {
        let particle = this.particles[i];
        particle.position.z += this.mouseY * 0.1;
        if (particle.position.z > 1000) particle.position.z -= 2000;
      }
    },
    onMouseMove(event) {
      this.mouseX = event.cilentX;
      this.mouseY = event.clientY;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped>
#container {
  height: 400px;
}
</style>
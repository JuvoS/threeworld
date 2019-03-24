<template>
  <div>
    <div>
      <div id="WebGL-output"></div>
    </div>
  </div>
</template>
 
<script>
import * as THREE from "three";
export default {
  name: "PageOne",
  data() {
    return {
      scene: undefined,
      camera: undefined,
      render: undefined,
      WIDTH: undefined,
      HEIGHT: undefined
    };
  },
  methods: {
    init() {
      this.WIDTH = window.innerWidth;
      this.HEIGHT = window.innerHeight;
      // 创建场景，相机和渲染器
      this.createScene();
    },
    createScene() {
      // 创建场景
      this.scene = new THREE.Scene();

      // 创建相机
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.WIDTH / this.HEIGHT,
        0.1,
        1000
      );

      // 设置相机的位置
      this.camera.position.x = -20;
      this.camera.position.z = 40;
      this.camera.position.y = 30;
      this.camera.lookAt(this.scene.position);

      // 创建渲染器
      this.render = new THREE.WebGLRenderer();
      this.render.setSize(this.WIDTH, this.HEIGHT);
      this.render.setClearColor(0xeeeeee);
      let axes = new THREE.AxesHelper(20);
      //生成一个平面
      var planeGeometry = new THREE.PlaneGeometry(60, 20, 10, 10); //注意参数
      //生成一个材质，设置材质的颜色，同时显示线框
      var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        wireframe: true
      });
      //生成一个网格，将平面和材质放在一个网格中，组合在一起，组成一个物体
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 15;
      plane.position.y = 0;
      plane.position.z = 0;

      //将相机，渲染器，坐标轴，平面都追加到场景中，然后对场景和相机进行渲染
      this.scene.add(this.camera);
      this.scene.add(this.render);
      this.scene.add(axes);
      this.scene.add(plane);
      this.render.render(this.scene, this.camera);
      document
        .getElementById("WebGL-output")
        .appendChild(this.render.domElement);
    }
  },
  mounted() {
    window.addEventListener("load", this.init, false);
  }
};
</script>
<style scoped>
</style>
<template>
  <div class="userinfor">
    <div id="container"></div>
    <script type="x-shader/x-vertex" id="vertexshader">
  uniform float amplitude;
  attribute vec3 displacement;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
  	vec3 newPosition = position + amplitude * displacement;
  	vColor = customColor;
  	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
    </script>
    <script type="x-shader/x-fragment" id="fragmentshader">
  uniform vec3 color;
  uniform float opacity;
  varying vec3 vColor;
  void main() {
  	gl_FragColor = vec4( vColor * color, opacity );
  }
    </script>
    <div class="information">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>基本信息</span>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">姓名</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">马强</div>
              </el-col>
              <el-col :span="4">
                <div class="text-info"></div>
              </el-col>
              <el-col :span="4">
                <div class="text-label">电话号码</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">1870620689</div>
              </el-col>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">籍贯</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">陕西</div>
              </el-col>
              <el-col :span="4">
                <div class="text-info"></div>
              </el-col>
              <el-col :span="4">
                <div class="text-label">身体状况</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">健康</div>
              </el-col>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">学历</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">本科</div>
              </el-col>
              <el-col :span="4">
                <div class="text-info"></div>
              </el-col>
              <el-col :span="4">
                <div class="text-label">身份证号</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">610627199110240951</div>
              </el-col>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">政治</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">团员</div>
              </el-col>
              <el-col :span="4">
                <div class="text-info"></div>
              </el-col>
              <el-col :span="4">
                <div class="text-label">出生日期</div>
              </el-col>
              <el-col :span="6">
                <div class="text-info">1991年10月24日</div>
              </el-col>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">现居住地址</div>
              </el-col>
              <el-col :span="20">
                <div class="text-info">陕西省西安市雁塔区东仪路沙浮沱村南三番街</div>
              </el-col>
            </div>
            <div class="text">
              <el-col :span="4">
                <div class="text-label">出生地</div>
              </el-col>
              <el-col :span="20">
                <div class="text-info">陕西省延安市甘泉县城关镇西沟村申屯委员会小组</div>
              </el-col>
            </div>
            <div style="width:100%;height:90px;line-height:90px;">
              <div class="text">
                <el-col :span="24">
                  <el-row>
                    <el-button
                      round
                      @click="gohome"
                      style="background-color: transparent;color:#fff;"
                    >返回首页</el-button>
                  </el-row>
                </el-col>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>职业信息</span>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item"> -->
            <el-table
              :data="tableData"
              style="width: 100%;background-color: transparent;color:#000;"
            >
              <el-table-column
                prop="id"
                label="技能"
                width="150"
                style="background-color: transparent"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="熟练度"
                width="150"
                style="background-color: transparent"
              ></el-table-column>
              <!-- <el-table-column prop="address" label="地址"></el-table-column> -->
            </el-table>
            <!-- </div> -->
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>



<script type="module">
import * as THREE from "three";
//
import Stats from "../../../node_modules/three/examples/jsm/libs/stats.module";

var renderer, scene, camera, stats;

var line, uniforms;

var loader = new THREE.FontLoader();
const fontJson = require("../../../node_modules/three/examples/fonts/helvetiker_bold.typeface.json");

const font = new THREE.Font(fontJson);
export default {
  name: "HomeInfor",
  data() {
    return {
      tableData: [
        {
          id: "html/h5",
          name: "精通"
        },
        {
          id: "css/css3",
          name: "精通"
        },
        {
          id: "javascript",
          name: "精通"
        },
        {
          id: "highcharts",
          name: "熟练"
        },
        {
          id: "echarts",
          name: "熟练"
        },
        {
          id: "three.js",
          name: "熟练"
        },
        {
          id: "vue",
          name: "熟练"
        },
        {
          id: "react",
          name: "熟练"
        },
        {
          id: "angular",
          name: "精通"
        },
        {
          id: "java",
          name: "熟练"
        },
        {
          id: "sql",
          name: "熟练"
        }
      ]
    };
  },
  mounted() {
    init(font);
    animate();
  },
  methods: {
    gohome() {
      window.location.href = "http://localhost:8080";
    }
  }
};

function init(font) {
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / 200, 1, 10000);
  camera.position.z = 400;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030303);

  uniforms = {
    amplitude: { value: 5.0 },
    opacity: { value: 0.3 },
    color: { value: new THREE.Color(0xffffff) }
  };

  var shaderMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById("vertexshader").textContent,
    fragmentShader: document.getElementById("fragmentshader").textContent,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true
  });

  var geometry = new THREE.TextBufferGeometry("Personal Information", {
    font: font,
    size: 50,
    height: 10,
    curveSegments: 20,
    bevelThickness: 5,
    bevelSize: 1.5,
    bevelEnabled: true,
    bevelSegments: 10
  });

  geometry.center();

  var count = geometry.attributes.position.count;

  var displacement = new THREE.Float32BufferAttribute(count * 3, 3);
  geometry.setAttribute("displacement", displacement);

  var customColor = new THREE.Float32BufferAttribute(count * 3, 3);
  geometry.setAttribute("customColor", customColor);

  var color = new THREE.Color(0xffffff);

  for (var i = 0, l = customColor.count; i < l; i++) {
    color.setHSL(i / l, 0.5, 0.5);
    color.toArray(customColor.array, i * customColor.itemSize);
  }

  line = new THREE.Line(geometry, shaderMaterial);
  line.rotation.x = 0.2;
  scene.add(line);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth * 0.8, 200);

  var container = document.getElementById("container");
  container.appendChild(renderer.domElement);

  stats = new Stats();
  //   container.appendChild(stats.dom);

  //

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / 200;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth * 0.8, 200);
}

function animate() {
  requestAnimationFrame(animate);

  render();
  stats.update();
}

function render() {
  var time = Date.now() * 0.001;

  line.rotation.y = 0.3 * time;

  uniforms.amplitude.value = Math.sin(0.6 * time);
  uniforms.color.value.offsetHSL(0.0005, 0, 0);

  var attributes = line.geometry.attributes;
  var array = attributes.displacement.array;

  for (var i = 0, l = array.length; i < l; i += 3) {
    array[i] += 0.3 * (0.5 - Math.random());
    array[i + 1] += 0.3 * (0.5 - Math.random());
    array[i + 2] += 0.3 * (0.5 - Math.random());
  }

  attributes.displacement.needsUpdate = true;

  renderer.render(scene, camera);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./homeinfor.css";
</style>

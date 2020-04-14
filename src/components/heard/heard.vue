<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in datas" :key="item.id">
        <div class="medium">
            <img :src="item.url" :alt="item.id">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="module">
export default {
  name: "Heard",
  data() {
    return {
      msg: "我的个人经历",
      datas:[
          {id:"1",url:require("../../assets/htcss.jpg")},
          {id:"2",url:require("../../assets/javas.jpg")},
          {id:"3",url:require("../../assets/echat.jpg")},
          {id:"4",url:require("../../assets/jsp.jpg")},
          {id:"5",url:require("../../assets/java.jpg")},
          {id:"6",url:require("../../assets/three.jpg")},
      ]
    };
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./heard.css";
</style>

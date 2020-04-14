<template>
  <div id="experience">
    <heard></heard>
    <el-container style="background: rgb(3,3,3);">
      <el-header>{{msg}}</el-header>
      <el-main>
        <Mainexper></Mainexper>
      </el-main>
      <el-footer>
        <el-row>
          <el-button round @click="gohome" style="background-color: transparent;color:#fff;border: none;">返回首页</el-button>
        </el-row>
      </el-footer>
       <div style="background: rgba(3, 3, 3);color:#fff;border: none;width:100%;height:300px;"></div>
    </el-container>
  </div>
</template>

<script type="module">
import heard from "@/components/heard/heard";
import Mainexper from "@/components/mainexper/mainexper";
export default {
  name: "HomeExperience",
  data() {
    return {
      msg: "我的个人经历"
    };
  },
  components: { heard, Mainexper },
  methods: {
    gohome() {
      window.location.href = "http://localhost:8080";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./homeexperience.css";
</style>

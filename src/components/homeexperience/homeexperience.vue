<template>
  <div class="user">
  {{msg}}
  </div>
</template>

<script type="module">
export default {
  name: "HomeExperience",
  data(){
      return {
          msg:"我的个人经历"
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./homeexperience.css";
</style>

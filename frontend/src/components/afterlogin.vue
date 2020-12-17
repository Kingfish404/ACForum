<template>
  <div id="login-box">
    <h1>用户名：{{user.username}}</h1><br>
    用户ID：{{user.userID}}
    <div class="input-box">
        <b-button @click="logout()">注销</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  props:["user"],
  methods: {
      logout(){
          document.getElementById("afterloginbox").style.display= "none";
          document.getElementById("loginbox").style.display= "block";
      }
  },
};
</script>
<style scoped>
.input-box{
  margin-top:20px;
  margin-bottom:20px;
}
</style>
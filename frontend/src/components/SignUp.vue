<template>
  <div id="login-box">
    <h1>注册</h1>
    <div class="input-box">
    <b-field id="input">
      <b-input v-model="username" 
              placeholder="Username">
              </b-input>
    </b-field>
    </div>
    <div class="input-box">
      <b-field id="input">
            <b-input type="password"
                v-model="password"
                placeholder="Password"
                password-reveal>
            </b-input>
        </b-field>
    </div>
    <div class="input-box">
      <b-field id="input">
            <b-input type="password"
                v-model="password1"
                placeholder="Confirm Password"
                password-reveal>
            </b-input>
        </b-field>
    </div>
    <div class="input-box inputButton">
        <b-button @click="toLogin()">Register</b-button>
        <b-button @click="goLogin()">Sing In</b-button>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import Qs from 'qs';
export default {
  name: "SignUp",
  data() {
    return {
        username: "",
        password: "",
        password1:"",
    };
  },
  methods: {
    toLogin() {
      if(this.password!=this.password1){
        alert("两次输入密码不一致,注册失败！")
      }
      else if(this.username==="" || this.password===""){
        alert("用户名或密码不能为空");
      }
      else{
            axios({
            method: "post",
            url: "https://sql.tian999.top/signUp/",
            data: Qs.stringify({
                userName: this.username,
                password: this.password,
            }),
        }).then((res)=> {
            console.log(res.data);
            alert('注册成功');
            document.getElementById("signupbox").style.display= "none";
            document.getElementById("loginbox").style.display= "block";
        })
      }
    },

    goLogin(){
        document.getElementById("signupbox").style.display= "none";
        document.getElementById("loginbox").style.display= "block";
    }
  },
};
</script>
<style scoped>
.input-box{
  margin-top: 20px;
  margin-bottom: 20px;
}
.inputButton{
  display: flex;
  justify-content: space-between;
  align-items: center
}
</style>
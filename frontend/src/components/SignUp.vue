<template>
  <div id="login-box">
    <h1>Register</h1>
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
    <div class="input-box">
        <b-button @click="toLogin()">Register</b-button>
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
      }else{
            axios({
            method: "post",
            url: "https://sql.tian999.top/signUp/",
            data: Qs.stringify({
                userName: this.username,
                password: this.password,
            }),
        }).then((res)=> {
            console.log(res.data);
            alert('注册成功')
        })
      }
    },
  },
};
</script>
<style scoped>
#login-box {
  background-color: #00000068;
  border-radius: 13px;
  text-align: center; 
  margin: 0px auto;
  margin-top: 175px;
  width: 350px;
  height: 400px;
}
#login-box h1 {
  font-size:35px;
  padding-top: 20px;
  color: #ccc;
}
.input-box {
  margin-top: 35px;
  text-align:center;
}
#input {
    width:250px;
    margin:0px auto;
}
</style>
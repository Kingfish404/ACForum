<template>
  <div id="login-box">
    <h1>Sign in</h1>
    <div class="input-box">
    <b-field id="input">
      <b-input v-model="username" placeholder="Username"></b-input>
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
        <b-button @click="toLogin()">Sign in</b-button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Qs from 'qs';
export default {
  name: "SignIn",
  data() {
    return {
        username: "",
        password: "",
    };
  },
  methods: {
    toLogin() {
        axios({
            method: "post",
            url: "https://sql.tian999.top/signIn/",
            data: Qs.stringify({
                userName: this.username,
                password: this.password,
            }),
        }).then((res)=> {
            console.log(res.data);
            if (res.data == 'pwderr'){
                alert('密码错误')
                return 
            }
            if (res.data == 'nouser'){
                alert('用户名不存在')
                return 
            }
            alert('登录成功')

        })
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
  padding-top: 50px;
  color: #ccc;
}
.input-box {
  margin-top: 50px;
  text-align:center;
}
#input {
    width:250px;
    margin:0px auto;
}
</style>
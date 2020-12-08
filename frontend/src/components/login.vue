<template>
  <div id="login-box">
    <h1>登录</h1>
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
.input-box{
  margin-top:20px;
  margin-bottom:20px;
}

</style>
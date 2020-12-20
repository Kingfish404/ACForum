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
    <div class="input-box" style="display: flex;justify-content: space-between;align-items: center;">
        <b-button @click="toLogin()">Sign in</b-button>
        <b-button @click="toRegister()">Register</b-button>
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

  components:{

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
            if (res.data.message == 'password error'){
                alert('密码错误')
                return 
            }
            if (res.data.message == 'None User'){
                alert('用户名不存在')
                return 
            }
            alert('登录成功')
            var user = {username:'',userID:''};
            user.username = this.username;
            this.username="";
            this.password="";
            var respond = Qs.parse(res.data);
            user.userID = respond.data.userID;
            this.$emit('showUser',user);

            
        })
    },
    toRegister(){
      document.getElementById("loginbox").style.display= "none";
      document.getElementById("signupbox").style.display= "block";
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
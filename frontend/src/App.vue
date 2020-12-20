<template>
  <div id="App">
    <div id="Top">
      <NavMenu />
    </div>

    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>
        <div id="Main">
          <div class="sep20"></div>
          <div class="box" id="BOX">
            <router-view></router-view>
          </div>
        </div>
        <div id="Rightbar">
          <div class="sep20"></div>
          <div class="box" id="signupbox" style="display: none">
            <signup></signup>
          </div>
          <div class="box" id="loginbox" style="display: block">
            <login @showUser="getUser"></login>
          </div>
          <div class="box" id="afterloginbox" style="display: none">
            <afterlogin :user="this.user"></afterlogin>
          </div>
          <router-link to="/sendMsg">
            <b-button
              @click="sendtopic()"
              class="box"
              id="sendtopic"
              style="display: none; width: 100%"
              >发布主题</b-button
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import login from "./components/login.vue";
import signup from "./components/SignUp";
import afterlogin from "./components/afterlogin";

export default {
  name: "App",
  data() {
    return {
      user: {},
    };
  },

  components: {
    NavMenu,
    login,
    signup,
    afterlogin,
  },

  methods: {
    toHomepage() {
      this.$router.push("/");
    },
    getUser(user) {
      this.user = user;
      document.getElementById("loginbox").style.display = "none";
      document.getElementById("afterloginbox").style.display = "block";
      document.getElementById("sendtopic").style.display = "block";
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100;
}
#App {
  height: 100%;
  width: 100%;
  background-color: #e2e2e2;
}
#Top {
  background-color: white;
}

#Wrapper {
  text-align: center;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}

#Leftbar {
  width: 0;
  float: left;
}

#Rightbar {
  width: 20%;
  float: left;
}

#Main {
  width: auto;
  float: left;
  margin: auto 2em;
  width: 70%;
}

.navbar-brand {
  padding-left: 2em;
}

.sep20 {
  height: 20px;
}

.box {
  background-color: var(--box-background-color);
  border-radius: var(--box-border-radius);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--box-border-color);
}

#BOX {
  padding: 0;
}

@media screen and (max-width: 760px) {
  #Main {
    width: 90%;
    margin-left: 5%;
  }
  #Rightbar {
    width: 90%;
    margin-left: 5%;
  }
}
</style>

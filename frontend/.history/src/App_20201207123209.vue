import NavMenu from './components/NavMenu.vue'

<template>
<div id="App">
  <div id="menu">
    <NavMenu />
  </div>
  <div id="body">
    <div id="container">
       <Container />
    </div>
    <div id="login">
       <Login />
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './components/NavMenu'
import Container from './components/container'
import Login from './components/login'

export default {
  name: 'App',
  components: {
    NavMenu,
    Container,
    Login
  },
  methods: {
      toHomepage () {
        this.$router.push('/')
    }
  }
}
</script>

<style>
#
#menu{
    margin-left: 300px;
    margin-right: 300px;
}

#body{
    margin-left: 300px;
    margin-right: 300px;
}

#container{
    width:700px;
    float:left;
    padding-right: 100px;
}

#login{
  width:200px;
  float:left;
}

</style>

<template>
<div id="App">
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
#App{
   border: 25px solid green;
}
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

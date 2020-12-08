<template>
<div id="App">
  <div id="NavMenu">
    <NavMenu/>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'


export default {
  name: 'App',
  components: {
     NavMenu,
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
  background-color:#DDDDDD;
}

#NavMenu{
  padding-right:300px;
  padding-left:300px;
  margin-bottom: 25px;
  background-color: white;
}

</style>

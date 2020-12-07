<template>
<div id="App">
  <div id="NavMenu">
    <NavMenu msg="1123123123"/>
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
#NavMenu{
  padding-right:300px;
  padding-left:300px;
  margin-bottom: 25px;
}

</style>

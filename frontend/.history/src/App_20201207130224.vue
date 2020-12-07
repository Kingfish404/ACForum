<template>
<div id="App">
  <div id="NavMenu">
    
  </div>
  <NavMenu />
  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
     NavMenu
  },
  methods: {
      toHomepage () {
        this.$router.push('/')
    }
  }
}
</script>

<style>


</style>

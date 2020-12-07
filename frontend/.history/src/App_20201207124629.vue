<template>
<div id="App">
  <nav-menu
  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './components/NavMenu'
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
     NavMenu
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

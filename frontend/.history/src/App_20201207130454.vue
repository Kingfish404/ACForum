<template>
<div id="App">
  <div id="NavMenu">
    <NavMenu />
  </div>
  
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
#NavMenu{
  padding-right:50px;
  padding-left:50px;
}

</style>

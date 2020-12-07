<template>
<div id="App">

  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from 

export default {
  name: 'App',
  components: {
    
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

<template>
<div id="App">

  <router-view></router-view>
</div>
</template>

<script>
import NavMenu fro

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

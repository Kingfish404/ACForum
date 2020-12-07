<template>
<div id="App">
  <router-view></router-view>
</div>
</template>

<script>
import Login from './components/login'

export default {
  name: 'App',
  components: {
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


</style>

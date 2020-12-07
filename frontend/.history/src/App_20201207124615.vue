<template>
<div id="App">

  <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './components/NavMenu'

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

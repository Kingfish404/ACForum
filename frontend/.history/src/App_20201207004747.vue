import NavMenu from './components/NavMenu.vue'

<template>
  <div id="menu">
  <NavMenu />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
#menu
{
    margin: 25px;
}

</style>

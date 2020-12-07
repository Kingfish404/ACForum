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
    margin-right: 50px;
    margin-lift:50px
}

</style>

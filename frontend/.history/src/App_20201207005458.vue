import NavMenu from './components/NavMenu.vue'

<template>
  <div id="menu">
  <NavMenu />
  </div>
  <div id
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import container from './components/container.vue'
export default {
  name: 'App',
  components: {
    NavMenu,
    container
  }
}
</script>

<style>
#menu
{
    margin-right: 300px;
    margin-left: 300px;
}

</style>

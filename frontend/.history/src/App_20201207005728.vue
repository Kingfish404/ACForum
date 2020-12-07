import NavMenu from './components/NavMenu.vue'

<template>
<div id="App">
  <div id="menu">
  <NavMenu />
  </div>
  <div id="container">
  <Container />
  </div>
</div>
 
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import Container from './components/container.vue'
export default {
  name: 'App',
  components: {
    NavMenu,
    Container
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

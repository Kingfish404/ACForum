<template>
<div id="App">
  <div id="Top">
         <NavMenu/>
  </div>
 
  <div id="Wrapper">
    <div class="content">
       <div id="Leftbar"></div>
       <div id="Rightbar">
         <div class="sep20"></div>
         <div class="box">
           <signup></signup>
         </div>
         <div class="sep20"></div>
         <div class="box">
           <login></login>   
         </div>
       </div>
       <div id="Main">
         <div class="sep20"></div>    
         <div class="box" id="BOX">
           <router-view></router-view>
         </div>  
       </div>
    </div>
  </div>
 
</div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import login from './components/login.vue'
import signup from './components/SignUp'

export default {
  name: 'App',
  components: {
     NavMenu,
     login,
     signup
  },
  methods: {
      toHomepage () {
        this.$router.push('/')
    }
  }
}
</script>

<style>
#Top{
  padding-right:300px;
  padding-left:300px;
  background-color: white;
}

#Wrapper {
    text-align: center;
    background-color: #e2e2e2;
    background-image: url(/static/img/shadow_light.png);
    background-repeat: repeat-x;
}

.content {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
}

#Leftbar {
    width: 0;
    float: left;
}

#Rightbar {
    width: 270px;
    float: right;
    margin-right: 20px;
}

#Main {
    width: auto;
    margin: 0 310px 0 20px;
}

.sep20 {
    height: 20px;
}

.box {
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    border-bottom: 1px solid var(--box-border-color);
}

#BOX{
  padding:0;
}


</style>

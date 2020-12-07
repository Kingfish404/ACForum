<template>
<div id="App">
  <div class="gs-menu-bg"></div>
    <div class="gs-header">
      <div class="gs-quick-menu">
        <div class="gs-profile">
          <span>你好，游客</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>消息 <strong>0</strong></span>
        </div>
        <ul class="gs-nav">
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/order">我的订单</router-link>
          </li>
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/cart">
              <i class="fa fa-shopping-cart"></i>&nbsp;购物车
            </router-link>
          </li>
          <li class="gs-nav-item">
            <span class="gs-link gs-forbid">收藏夹</span>
          </li>
          <li class="gs-nav-item">
            <span class="gs-link gs-forbid">商家入口</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="gs-logo" @click="toHomepage"></div>
        <div class="gs-search-box">
          <input
            class="gs-search-input"
            type="text"
            placeholder="请输入 商品/店铺"><!--
          --><span class="gs-search-btn">搜&nbsp;&nbsp;索</span>
        </div>
      </div>
    </div>
    <div class="gs-dividor"></div>
    <router-view/>
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

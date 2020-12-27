<template>
  <b-navbar>
    <h1>{{}}</h1>
    <template slot="brand">
      <b-navbar-item id="navbar-self" tag="router-link" :to="{ path: '/' }">
        <img src="../icon/icon-1.png" alt="ICON" id="ICON1" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        <router-link to="container"> 主页 </router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style>
#navbar-self {
  padding: 0;
  margin: auto auto auto 5em;
}
#navbar-self img {
  max-height: 2.75rem;
}
@media screen and (max-width: 960px) {
  #navbar-self {
    padding: 0;
    margin: 0;
  }
}
</style>
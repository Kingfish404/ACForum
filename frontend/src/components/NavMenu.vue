<template>
    <b-navbar>
        <h1>{{  }}</h1>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../icon/icon-1.png"
                    alt="ICON"
                    id="ICON1"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link to='container'>
                    主页 
                </router-link>    
            </b-navbar-item>
            <b-navbar-dropdown label="信息 ">
                <b-navbar-item href="#">
                    关于
                </b-navbar-item>
                <b-navbar-item href="#">
                    联系
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>
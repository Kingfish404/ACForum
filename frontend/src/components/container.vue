<template>
    <div id="Tabs" class="inner">
        <b-tabs multiline="multiline" type="is-boxed">
            <template v-for="tab in tabss">
                <b-tab-item id="table_item"
                    :key="tab.categoryName"
                    :value="tab.categoryName"
                    :label="tab.categoryName">
                     <ContainerTable :Topic="tab.topicArr"></ContainerTable>
                </b-tab-item>
            </template>
        </b-tabs>
    </div>
</template>

<script>
import ContainerTable from './ContainerTable'
import axios from "axios";
import Qs from 'qs';
    export default {
        data() {
            return {
                tabss:''
            }
        },
        components: {
            ContainerTable
       },
        mounted() {
            this.gettabs();
        },
        methods:{
            gettabs(){
                axios({
                    method: "get",
                    url: "https://sql.tian999.top/getCatalog/",
                }).then((res)=> {
                    var respond = Qs.parse(res.data.catalog);
                    this.tabss = respond;
                })
            }    
        }
    }
</script>

<style>

#Tabs {
    background-color: var(--box-background-color);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.inner {
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
}

#table_item{
    padding:0px;
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 3px 2px 3px 2px rgba(0,0,0,.1);
    border-bottom: 1px solid var(--box-border-color);
    border-top: 1px solid var(--box-border-color);
}
</style>
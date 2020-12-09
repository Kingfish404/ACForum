<template>
    <div >
        <div v-for="topic in Topic" :key="topic"  class="cell item" style>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td width="48" valign="top" align="center">
                            <a id = "id"><div style="font-size:20px">{{topic.topicID}}</div></a> 
                        </td>
                        <td width="10"></td>
                        <td width="auto" hight="auto" valign="middle">                    
                            <!-- <a id="item_title" style="front-size:25px"><div style="font-size:20px">{{topic.title}}</div></a> -->
                            <router-link to="/content" id="item_title" style="front-size:25px"><div style="font-size:20px">{{topic.title}}</div></router-link>
                        </td>
                        <td width="200" hight="10">
                            <a id="username">{{topic.username}}</a><br>
                            发布日期：<a id="data">{{topic.data}}</a>
                        </td>  
                    </tr>
                </tbody>               
            </table>   
        </div>
    </div>    
</template>

<script>
    export default {
        props:["Topic"],
        data() {
            return {

            }
        }
    }
</script>



<style>

.cell {
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid;
    border-bottom-color: rgba(226,226,226,0.8);
}

.item {
    background-position: 0 bottom;
    background-repeat: repeat-x;
}

table {
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    width: 100%;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

.item_title {
    line-height: 130%;
    text-shadow: 0 1px 0 #fff;
    word-break: break-word;
    hyphens: auto;
}

#item_title:hover {text-decoration:underline;}

#item_title{
    color:black;
    font-size:15px;
}

#id{
    color:black;   
}

#username{
    color:black;
}

#username:hover{text-decoration:underline;}

#data{
    color:black;
}

</style>






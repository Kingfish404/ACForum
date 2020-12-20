<template>
    <div id="box-content" class="inner">
        <div class="header">
            <router-link to="/"><a href="#">ACFourm</a></router-link>
            <span class="chevron">&nbsp;›&nbsp;</span>
            <a href="#">技术</a>
            <h3>{{topic.title}}</h3>
            <small class="gray"><a href="#">{{topic.userName}}</a>发布日期：{{topic.date}}</small>
        </div>
        <div class="cell2">
            <div class="topic_content">
                <p>{{topic.description}}</p>
            </div>
        </div>
        <div class="sep10"></div>

        <div class="box">
            <div class="cell2">
            <span class="gray">{{topic.commentArr.length}}条评论</span>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr v-for="(comment,index) in topic.commentArr" :key="index">
                    <td width="7" valign="top"></td>
                    <td width="auto" valign="top" align="left">
                        <strong><a href="#">{{comment.userName}}&nbsp;&nbsp;{{comment.date}}</a></strong>
                        <div class="sep5"></div>
                        <div class="reply_content">{{comment.content}}</div>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import { Event } from '../bus'
export default {
    name:"Content",
    data() {
        return {
            usercomment:[
            {
                username:'SingeeKing',
                comment:'Jetbrains系列IDE包括一下几个IDE，分别用于不同的语言，它们的设置大同小异，主要差异在于相关语言和开发包的设置。'
            },
            {
                username:'Ma Baoguo',
                comment:'不讲武德'
            },
            {
                username:'小明',
                comment:'楼上你好！'
            },
            {
                username:'一棵草',
                comment:'The greatest test of courage on earth is to bear defeat without losing heart.世界上對勇氣的最大考驗是忍受失敗而不喪失信心。'
            }
        ],
            topic:{},
        }
    },
    mounted(){
            Event.$on('totopic',showIndex => {  // $on接收发送方传给我们的数据
            this.topic = showIndex.topiclog;
            console.log(this.topic);
    })
}
    
}
</script>
<style scoped>
.inner {
    background-color:white;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    color: #4a4a4a;
    display: block;
    border-radius: 6px;
}
.header {
    padding: 10px;
    font-size: 15px;
    line-height: 120%;
    text-align: left;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    overflow: auto;
}
.content h3:not(:first-child) {
    margin-top: 0.8em;
}
.chevron {
    font-family: lucida grande;
    font-weight: 500;
}
.topic_content {
    font-size: 14px;
    line-height: 1.6;
}
.sep5 {
    height: 5px;
}
.sep10 {
    height: 10px;
}
.gray {
    color: #999;
}
.cell2 {
    padding: 5px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
}
.box {
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
}
</style>
<template>
    <div id="box-content" class="inner">
        <div class="header">
            <router-link to="/"><a href="#">ACFourm</a></router-link>
            <span class="chevron">&nbsp;›&nbsp;</span>
            <a href="#">技术</a>
            <h3>自从用了一年多的Jet Brains IDE</h3>
            <small class="gray"><a href="#">wk </a>发布日期：2020-12-8</small>
        </div>
        <div class="cell2">
            <div class="topic_content">
                <p>用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，
                    我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加
                    进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，
                    然后告诉 Vue Router 在哪里渲染它们。</p>
                <ul>
                    <li>嵌套的路由/视图表</li>
                    <li>模块化的、基于组件的路由配置</li>
                    <li>路由参数、查询、通配符</li>
                    <li>基于 Vue.js 过渡系统的视图过渡效果</li>
                    <li>带有自动激活的 CSS class 的链接</li>
                </ul>
            </div>
        </div>
        <div class="sep10"></div>

        <div class="box">
            <div class="cell2">
            <span class="gray">4条评论</span>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr v-for="(user,index) in usercomment" :key="index">
                    <td width="7" valign="top"></td>
                    <td width="auto" valign="top" align="left">
                        <strong><a href="#">{{user.username}}</a></strong>
                        <div class="sep5"></div>
                        <div class="reply_content">{{user.comment}}</div>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
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
        ]
        }
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
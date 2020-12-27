<template>
  <div id="box-content" class="inner">
    <div class="header">
      <router-link to="/"><a href="#">ACFourm</a></router-link>
      <span class="chevron">&nbsp;›&nbsp;</span>
      <a href="#">{{ category }}</a>
      <h3>{{ topic.title }}</h3>
      <small class="gray"
        ><a href="#">{{ topic.userName }}</a
        >发布日期：{{ topic.date }}</small
      >
    </div>
    <div class="cell2">
      <div class="topic_content">
        <p>{{ topic.description }}</p>
      </div>
    </div>
    <div class="sep10"></div>

    <div class="box">
      <div class="cell2">
        <span class="gray">{{lencom}}条评论</span>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr v-for="(comment, index) in topic.commentArr" :key="index">
            <td width="7" valign="top"></td>
            <td width="auto" valign="top" align="left">
              <strong
                ><a href="#">{{ comment.userName }}</a></strong
              >
              <div class="sep5"></div>
              <div class="reply_content">{{ comment.content }}</div>
            </td>
            <td valign="top" align="right">{{ comment.date }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="del"><b-button type="is-danger is-light" @click="del">删除主题</b-button></div>
    <sendcomment v-if="seen" :topicid="topicid"></sendcomment>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs"
import { Event } from "../bus";
import sendcomment from "./sendcomment.vue";

export default {
  name: "Content",
  components: {
    sendcomment,
  },
  data() {
    return {
      topic: {},
      seen: true,
      topicid: 0,
      category: "",
      lencom:0,
    };
  },
  created() {
    axios({
      method: "get",
      url: "https://sql.tian999.top/getCatalog/",
      params: {},
    }).then((res) => {
        if(res.data.catalog){
          var len = res.data.catalog.length;
        }
      for (var i = 0; i < len; i++) {
        if (this.topic.categoryID == res.data.catalog[i].categoryID) {
          this.category = res.data.catalog[i].categoryName;
        }
      }
    });
    this.topicid = this.$route.query.topicid;
    axios({
        method: "get",
        url: "https://sql.tian999.top/getComment/",
        params :{
          topicID: this.topicid,
        },
    }).then((res)=>{
      this.topic = res.data.topiclog;
      this.lencom = this.topic.commentArr.length;
    });
  },
  mounted() {
    Event.$on("logout", (showIndex2) => {
      this.seen = showIndex2;
    });
    Event.$on("signsuccess", (showIndex3) => {
      this.seen = showIndex3;
    });
  },
  methods:{
    del(){
      var jwtToken;
      jwtToken = localStorage.getItem("jwttoken");
      axios({
      method: "post",
      url: "https://sql.tian999.top/deleteTopic/",
      data: Qs.stringify({
        jwttoken:jwtToken,
        topicID:this.topicid,
      }),
    }).then((res) => {
        if(res.data.message == "success"){
          alert("删除主题成功！")
          this.$router.push({path:'/container'});
        }else{
          alert("您不能删除该主题！")
        }
    });
    }
  }
};
</script>
<style scoped>
.inner {
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  color: #4a4a4a;
  display: block;
  border-radius: 6px;
}
.header {
  padding: 10px;
  font-size: 15px;
  line-height: 120%;
  text-align: left;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
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
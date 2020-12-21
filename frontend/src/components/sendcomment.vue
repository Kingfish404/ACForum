<template>
  <div class="send_com">
    <div class="sep5"></div>
    <b-field label="发表评论：" class="inputtxt">
      <b-input
        maxlength="200"
        type="textarea"
        placeholder="请发表你的看法..."
        v-model="comtext"
      ></b-input>
    </b-field>
    <div class="btn">
      <b-button type="is-link is-light" @click="sendcomm">发表评论</b-button
      ><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "sendcomment",
  props: ["topicid"],
  data() {
    return {
      comtext: "",
    };
  },
  methods: {
    sendcomm() {
      var jwtToken;
      jwtToken = localStorage.getItem("jwttoken");
      if (this.comtext) {
        axios({
          method: "post",
          url: "https://sql.tian999.top/createComment/",
          data: Qs.stringify({
            jwttoken: jwtToken,
            content: this.comtext,
            topicID: this.topicid,
          }),
        }).then((res) => {
          console.log(res.date);
          alert("评论发表成功！！！")
        });
      } else {
        alert("评论为空请输入内容再发表！！！");
      }
    },
  },
};
</script>
<style  scoped>
.send_com {
  background-color: white;
}
.sep5 {
  height: 10px;
}
</style>
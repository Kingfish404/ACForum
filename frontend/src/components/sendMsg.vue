<template>
  <div id="MsgCom">
    <h4 class="AC-form">AC-Form</h4>
    <!-- 主题 -->
    <div id="Tabs" class="inner">
      <b-tabs multiline="multiline" type="is-boxed" @input="changeName">
        <template v-for="tab in tabss">
          <b-tab-item
            id="table_item"
            :key="tab.categoryName"
            :label="tab.categoryName"
            ref="NowName"
          ></b-tab-item>
        </template>
      </b-tabs>
    </div>
    <!-- 主题 主题描述输入框 -->
    <div>
      <el-card class="box-card">
        <el-row :gutter="30">
          <el-col :span="3" style="padding-left: 5px; padding-right:5px; padding-top: 3px;">
            <el-tag size="medium" style="margin:0px">主题</el-tag>
          </el-col>
          <el-col :span="8" style="padding-left:0px; padding-right: 0px;">
            <el-input v-model="inputitle" placeholder="请输入主题" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="20" style="padding-left:25px;margin-top:20px;">
            <el-input v-model="inputitledes" type="textarea" :rows="18" placeholder="请输入主题描述"></el-input>
          </el-col>
          <el-col>
            <el-button @click="published" style="margin-left:380px;margin-top:10px;">发表主题</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      tabss: "",
      nowID: "0",
      inputitle: "",
      inputitledes: "",
      author1: "username"
    };
  },
  created() {
    this.gettabs();
  },
  methods: {
    gettabs() {
      axios({
        method: "get",
        url: "https://sql.tian999.top/getCatalog/"
      }).then(res => {
        var respond = Qs.parse(res.data.catalog);
        this.tabss = respond;
      });
    },
    changeName() {
      for (var i = 0; i < this.$refs.NowName.length; i++) {
        if (this.$refs.NowName[i].isActive) {
          this.nowID = i;
        }
      }
    },
    published() {
      var jwtToken;
      jwtToken = localStorage.getItem("jwttoken");
      if (this.inputitledes && this.inputitle)
        axios({
          method: "post",
          url: "https://sql.tian999.top/createTopic/",
          data: Qs.stringify({
            jwttoken: jwtToken,
            title: this.inputitle,
            description: this.inputitledes,
            categoryID: this.tabss[this.nowID].categoryID,
            author: this.author1
          })
        }).then(res => {
          alert("主题发表成功！！！");
          console.log(res);
        });
      else {
        alert("请输入主题内容与主题描述");
      }
    }
  }
};
</script>

<style scoped>
.AC-form {
  position: relative;
  left: -300px;
  padding-top: 20px;
  padding-left: 0px;
  margin-left: 15px;
}
#tabs {
  margin-top: -20px;
}
.tab-content {
  display: none;
}
</style>
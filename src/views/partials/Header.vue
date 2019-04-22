<template>
  <div class="nvheader">
  <el-menu class="el-menu" >
    <el-menu-item index="1" @click="click1">演讲管理</el-menu-item>
    <el-menu-item index="2" @click="click2">导师管理</el-menu-item>
    <el-menu-item index="3" @click="click3">消息管理</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Cookies from 'js-cookie'

export default {
  name: 'nvHeader',

  data () {
    return {
      user: {}
    }
  },

  components: {
  },

  computed: {
  },
   methods: {
    click1() {
      this.$router.push('speechList')
    },
     click2() {
       this.$router.push('tutorList')
     },
     click3() {
       this.$router.push('notification')
     }
   }
}
</script>

<style lang="scss">
  .nvheader {
    display: block;
  }
  .el-menu--horizontal .el-menu-item{
    line-height: 30px;
  }
</style>

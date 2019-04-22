<template>
  <div class="main-page" >
    <el-container v-loading="loading" >
      <el-aside>
      <nvheader class="nvHeader"></nvheader>
      </el-aside>
      <el-main>
    <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import nvheader from './partials/Header'
  export default{
    data () {
      return {
        loading: false
      }
    },
    created () {
      console.log('i am created')
      this.$bus.$on('lock', () => {
        console.log('locked the screen')
        this.loading = true
      })
      this.$bus.$on('unlock', () => {
        this.loading = false
      })
    },
    mounted () {
    },
    components: {
      nvheader
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .el-main{
    padding: 0px 10px
  }
  .main-page{
    height: 100%
  }
  .el-container{
    height: 100%
  }
</style>

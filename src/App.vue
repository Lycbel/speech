<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  created() {
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
 #app {
   position: absolute;
   top: 0px;
   left: 0px;
   padding: 0px 10px
 }
</style>

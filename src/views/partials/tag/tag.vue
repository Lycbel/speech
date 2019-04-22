<template>
  <li >
    <span>{{tagInfo}}</span><a class="boxClose"  @click="remove()"></a>
  </li>
</template>

<script>
  export default {
    name: 'myTag',
    props: ['tagInfo'],
    created() {
    },
    data() {
      return {
      }
    },
    methods: {
      remove() {
        this.$emit('closetag', this.tagInfo)
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  li  {
    display: block;
    float: left;
    color: white;
    text-align: center;
    padding-top: 3px;
    padding-left: 10px;
    text-decoration: none;
    background-color: rgba(164, 216, 84, 0.81);
    border-radius: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  a.boxClose{
    float:right;
    margin-top:0px;
    margin-left:5px;
    cursor:pointer;
    border-radius: 50px;
    background: rgba(127, 162, 122, 0);
    float: right;
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    line-height: 0px;
    padding: 10px 1px;
    color: #03a9f4;
  }

  .boxClose:before {
    content: "×";
  }
</style>

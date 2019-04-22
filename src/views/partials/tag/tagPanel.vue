<template>
        <ul>
            <my-tag v-for="tagInfo in tags" :key="tagInfo" class="tagP"
                    @closetag="closeTag"
                    :tagInfo="tagInfo">
            </my-tag>
        </ul>
</template>

<script>
    import MyTag from './tag'
export default {
    components: {MyTag},
    name: 'tag-panel',
    props: ['tags'],
    data() {
        return {
        }
    },
    methods: {
      closeTag(tagInfo) {
        this.$emit('closetag', tagInfo)
      }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #eff3ed00;
        top: 0px;
        left: 0px;
        height : auto;
        width: 100% ;
        z-index: 5000;
    }

</style>


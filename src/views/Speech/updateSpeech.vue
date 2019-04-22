<template>

  <el-dialog :visible.async="showSpeechDialog" width="60%" modal-append-to-body="true"  :close-on-click-modal="false"  @close="closeSpeechBox">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="myform">
      <el-form-item label="演讲标题" prop="name">
        <el-input v-model="form.name"  placeholder="演讲标题" ></el-input>
      </el-form-item>
      <el-form-item label="演讲描述" prop="desc">
        <el-input type="textarea" v-model="form.desc"  placeholder="演讲描述" ></el-input>
      </el-form-item>
      <el-form-item prop="date" label="演讲日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="tutor" label="选择导师">
        <el-autocomplete
          @select="handleSelect"
          :fetch-suggestions="querySearch"
          placeholder="输入导师"
          v-model="form.tutor"
        ></el-autocomplete>
        <el-button type="text" @click="addTutor">添加新导师</el-button>
      </el-form-item>
      <el-form-item v-if="isUpdate" label="历史截图">
          <img  class="histImg"  :src="form.picSrc"/>
      </el-form-item>
      <el-form-item prop="pics" label="上传截图">
      <el-upload
        ref="upload"
        :auto-upload="false"
        class="upload-demo"
        :file-list="fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture">
        <el-button size="small" type="primary" >点击上传</el-button>
          <div slot="tip" class="el-upload__tip">{{picUploadTip}}</div>
      </el-upload>
      </el-form-item>
      <div class="tag-panel" >
        <tag-panel :tags="tagInPanel" @closetag="closeTag"> </tag-panel>
      </div>
      <el-form-item label="添加标签">
        <el-input   placeholder="添加标签 (若一次添加多个标签请用 ',' 隔开)" v-model="tags" @keyup.enter.native="addTag"></el-input> <el-button type="text" @click="addTag">添加标签</el-button>
      </el-form-item>
      <el-form-item label="视频链接" prop="link">
        <el-input v-model="form.link"  placeholder="视频链接" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitData" v-if="isUpdate">确认修改</el-button>
        <el-button type="primary" @click="submitData"  v-if="!isUpdate">确认添加</el-button>
        <el-button @click="closeSpeechBox">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<script>
  import TagPanel from '../partials/tag/tagPanel'
  export default {
    components: {TagPanel},
    name: 'update-speech',
    props: ['form', 'showSpeechDialog'], // if data is null means creating a new speech, if data is not will update current one
    data() {
      return {
        isUpdate: false,
        tags: [],
        tagInPanel: ['test', 'test2'],
        fileList: [],
        rules: {
          name: [{required: true, message: '姓名不能为空', trigger: 'blur'}],
          link: [{required: true, message: '链接不能为空', trigger: 'blur'}],
          desc: [{required: true, message: '描述不能为空', trigger: 'blur'},
            {max: 150, message: '输入字数过多'}],
          date: [{required: true, message: '日期不能为空', trigger: 'blur'}],
          tutor: [{required: true, message: '导师不能为空', trigger: 'blur'}]
        }
      }
    },
    created() {
      if (this.data) {
        this.form = this.getFormData(null)
        this.isUpdate = true
      }
    },
    methods: {
      getFormData(data) {
        return data // todo
      },
      submitData() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            if (this.$refs.upload.uploadFiles && this.$refs.upload.uploadFiles.length >= 1) {
              let file = this.$refs.upload.uploadFiles[0].raw // todo need to check is file here when createing new
              this.succeedOnUpload() // todo not here just for test, also need the new pic url from Server
              // todo submit data
            } else {
              // todo not valid file
            }
          } else {
            console.log('data not valid')
          }
        })
      },
      handleSelect(item) {

      },
      async querySearch(queryString, cb) {
        let tutors = await this.$api.fetchTutorSuggestionList(queryString)
        console.log(tutors)
        cb(tutors);
      },
      closeSpeechBox(item) {
        console.log('closing box')
        this.$emit('closeSpeechDialog')
      },
      addTag() {
        let tagsO = this.tags.replace(/，/g, ',')
        let tags = tagsO.split(',')
        tags.forEach((el) => {
          let trimmed = el.trim()
          if (trimmed && trimmed !== '') {
            this.tagInPanel.push(trimmed)
          }
        })
        this.tags = []
      },
      addTutor() {
        // todo
      },
      closeTag(tagInfo) {
        console.log('close tag' + tagInfo)
        let index = this.tagInPanel.indexOf(tagInfo)
        if (index >= 0) {
          this.tagInPanel.splice(index, 1)
        } else {
          console.log('can\'t remove tag' + tagInfo)
        }
      },
      succeedOnUpload() {
        console.log('succ')
        if (this.$refs.upload.uploadFiles && this.$refs.upload.uploadFiles.length >= 1) {
          this.$refs.upload.uploadFiles = []
        }
        // todo this.form.picSrc = 'new src'
        this.$emit('succeedUpload', event)
      },
      failed() {
        this.$emit('fail', 'Message //todo')
      }
    },
  watch: {
    showSpeechDialog() {
      if (this.$utils.isEmpty(this.form)) {
        this.isUpdate = false
      } else {
        this.isUpdate = true
      }
  }
  },
    computed: {
      picUploadTip() {
        if (!this.isUpdate) {
          return '只能上传jpg/png文件，且不超过500kb， 若上传多个只会上传第一个'
        } else {
          return '原来图片会被替换! 只能上传jpg/png文件，且不超过500kb， 若上传多个只会上传第一个'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.speechBox {
  margin: 0px 20%;
  position: absolute;
  top: 10%;
}
  .myform {
    margin: 0px 0px
  }
  .histImg{
    width: 80px;
    height: 60px;
    transition: transform .2s; /* Animation */
    position: absolute;
    z-index: 2500;
  }
 .histImg:hover {
  transform: scale(5.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
 }
</style>

<template>

  <el-dialog :visible.async="showTutorDialog" width="70%" modal-append-to-body="true" @close="closeTutorBox">
    <el-form ref="form" :model="form" label-width="80px" class="myform">
      <el-form-item label="导师姓名">
        <el-input v-model="form.name" placeholder="导师姓名" ></el-input>
      </el-form-item>
      <el-form-item>
      <el-switch
        style="display: block"
        v-model="internal"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="内部导师"
        inactive-text="外部导师">
      </el-switch>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.tel" placeholder="手机" ></el-input>
      </el-form-item>
      <div v-if="internal">
        <el-form-item  label="企业微信">
          <el-input v-model="form.eWechat" placeholder="企业微信" ></el-input>
        </el-form-item>
        <el-form-item  label="部门">
          <el-input v-model="form.department" placeholder="部门" ></el-input>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item  label="邮箱">
          <el-input v-model="form.email" placeholder="邮箱" ></el-input>
        </el-form-item>
        <el-form-item  label="公司">
          <el-input v-model="form.company" placeholder="公司" ></el-input>
        </el-form-item>
      </div>
      <el-form-item  label="职位">
        <el-input v-model="form.positon" placeholder="职位" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitData" v-if="isUpdate">确认修改</el-button>
        <el-button type="primary" @click="submitData"  v-if="!isUpdate">确认添加</el-button>
        <el-button @click="closeTutorBox">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<script>
  export default {
    components: {},
    name: 'update-tutor',
    props: ['form', 'showTutorDialog'], // if data is null means creating a new speech, if data is not will update current one
    data() {
      return {
        form: {},
        isUpdate: false,
        internal: true
      }
    },
    created() {
      if (this.data) {
        this.form = this.getFormData()
        this.isUpdate = true
      }
    },
    methods: {
      getFormData(data) {
        return data // todo
      },
      submitData() {
        // todo
      },
      handleSelect(item) {

      },
      querySearch(queryString, cb) {
        var tutors = [{'value': 'hahahha', id: 'yichang'}, {'value': 'hahahha'}, {'value': 'hahahha'}]
        cb(tutors);
      },
      closeTutorBox() {
        this.$emit('closeTutorDialog')
      }
    },
  watch: {
    showTutorDialog() {
      if (this.$utils.isEmpty(this.form)) {
        this.isUpdate = false
      } else {
        this.isUpdate = true
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
</style>

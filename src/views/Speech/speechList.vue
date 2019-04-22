<template>

<div class="speechList">
  <div class="searchBar">
    <el-date-picker
      size="small"
      v-model="startDate"
      type="date"
      placeholder="选择开始日期">
    </el-date-picker>
    <el-date-picker
      size="small"
      v-model="endDate"
      type="date"
      placeholder="选择截至日期">
    </el-date-picker>
    <el-input class='searchInput' size="small" v-model="keyWords" placeholder="输入关键字" clearable></el-input>
    <el-button type="primary" size="small" icon="el-icon-search" @click="search">搜索</el-button>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="add">添加</el-button>
  </div>
  <update-speech :form="dataPass" :showSpeechDialog="showSpeechDialog" @closeSpeechDialog="closeSpeechDialog" @succeedUpload.stop="succeedUpload"></update-speech>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="演讲标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tutor"
      label="导师"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="delete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row class="page-row">
    <el-pagination
      @current-change="handlePageCurrentChange"
      :current-page="currentPage"
      layout="prev, pager, next"
      :page-size="limit"
      :current-page.sync="page"
      :total="total">
    </el-pagination>
  </el-row>
</div>
</template>

<script>
  import updateSpeech from './updateSpeech'
  export default {
    components: {
      updateSpeech,
      date: []
    },
    name: 'speech',
    data() {
      return {
        showSpeechDialog: false,
        keyWords: '',
        startDate: null,
        endDate: null,
        currentPage: 1,
        limit: 20,
        total: 0,
        tableData: [],
        dataPass: {},
        dataCopy: null,
        dataCurrentEditing: null,
        closeMessageLock: true // this is the lock to block the event from close event triggered by change showSpeechDialog to false
      }
    },
    mounted() {
     this.waitForSpeechListResult()
    },
    methods: {
      closeSpeechDialog() {
        console.log('closeed')
        if (this.closeMessageLock) {
          this.showSpeechDialog = false
          this.cancelEdit()
        }
        this.closeMessageLock = true
      },
      search() {

      },
      add () {
        this.dataPass = {}
        this.dataCurrentEditing = null
        this.showSpeechDialog = true
        this.dataCopy = null
      },
      edit(row) {
        this.dataCurrentEditing = row
        this.dataCopy = JSON.parse(JSON.stringify(row));
        this.dataPass = row
        this.showSpeechDialog = true
      },
      cancelEdit() {
        if (this.dataCopy && this.dataCurrentEditing) {
          let index = this.tableData.indexOf(this.dataCurrentEditing)
          if (index >= 0) {
            this.tableData.splice(index, 1, this.dataCopy)
          } else {
            console.log('ca\'t cancel')
          }
        }
      },
      delete(row) {

      },
      async waitForSpeechListResult(val) {
        val = !val ? 1 : val
        let data = await this.$api.fetchSpeechList(this.startDate, this.endDate, this.query, val, this.limit)
        this.tableData = data.data
      },
      handlePageCurrentChange(val) {
        this.waitForSpeechListResult(val)
      },
      succeedUpload() {
        this.closeMessageLock = false
        this.showSpeechDialog = false  // this code will somehow unexpectedly trigger @close in the dialog box so need the closeMessageLock
        console.log('succ upload')
        // todo handle message
      },
      failedOnUpload() {
        // todo handle message
      }
    }
  }
</script>

<style  lang="scss" scoped>
.searchInput {
  width: 20%

}
</style>

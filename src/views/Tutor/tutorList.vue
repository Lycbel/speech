<template>
<div class="tutor-list">
  <div class="searchBar">
    <el-input class='searchInput' size="small" v-model="keyWords" placeholder="输入关键字" clearable></el-input>
    <el-button type="primary" size="small" icon="el-icon-search" @click="search">搜索</el-button>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="add">添加</el-button>
  </div>
  <update-tutor :form="passData" @closeTutorDialog="closeTutorDialog" :showTutorDialog="showTutorDialog"></update-tutor>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="导师姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="company"
      label="导师公司"
      width="180">
    </el-table-column>
    <el-table-column
      prop="position"
      label="导师职位">
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
      :current-page="currentPage"
      layout="prev, pager, next, jumper"
      :page-size="limit"
      :current-page.sync="page"
      :total="total">
    </el-pagination>
  </el-row>
</div>
</template>

<script>
  import updateTutor from './updateTutor'
    export default {
        name: 'tutor-list',
      data() {
        return {
          showTutorDialog: false,
          keyWords: '',
          startDate: null,
          endDate: null,
          currentPage: 1,
          limit: 20,
          total: 0,
          tableData: [],
          passData: {}
        }
      },
      components: {
          updateTutor
      },
      mounted() {
          this.tableData = this.$api.fetchTutorList().data
      },
      methods: {
        closeTutorDialog() {
          this.showTutorDialog = false
        },
        addNewTutor() {
          this.showTutorDialog = true
        },
      edit(row) {
        this.passData = row
        this.showTutorDialog = true
      },
      delete(row) {

      },
        search() {

        },
        add() {
          this.passData = {}
          this.showTutorDialog = true
        }
      }

    }
</script>

<style lang="scss" scoped>
  .searchInput {
    width: 20%

  }
</style>

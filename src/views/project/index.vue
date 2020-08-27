<template>
  <div id="project" class="app-container">
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <RegionOption v-model="region" />
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <label class="radio-label">工程名称: </label>
            <div class="el-select el-select--medium">
              <el-input v-model="name" placeholder="请输入工程名称" prefix-icon="el-icon-document" clearable/>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <StatusOption v-model="status" />
        </el-col>
        <el-col :span="6">
          <div style="display:inline-block;">
            <el-button :loading="loading" type="primary" @click="handleQuery">查询</el-button>
            <el-button type="primary" @click="handleReset">重置</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-container style="padding:20px 0px;">
      <el-button :loading="loading" type="primary" icon="el-icon-document" @click="handleInsert">
        新增
      </el-button>
    </el-container>

    <ProjectList />

    <ProjectCreate ref="ProjectCreate" v-if="dialog" :visible.sync="dialog"></ProjectCreate>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
import RegionOption from './components/RegionOption'
import StatusOption from './components/StatusOption'
import ProjectList from './list'
import ProjectCreate from './create'

export default {
  name: 'Project',
  components: { RegionOption, StatusOption, ProjectList, ProjectCreate },
  data() {
    return {
      region: null,
      name:'',
      status: 1,
      loading: false,
      dialog: false
    }
  },
  created() {

  },
  methods: {
    handleQuery() {
    },
    handleReset() {        
    },
    handleInsert() {
      this.dialog = true;
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>


</style>


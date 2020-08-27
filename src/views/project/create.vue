<template>
  <div id="projectCreate" class="app-container">
    <el-dialog title="工程创建" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="工程名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工程区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择工程区域" style="width:100%" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工程描述" :label-width="formLabelWidth">
          <el-input  v-model="form.desc" type="textarea" :rows="4" placeholder="请输入内容"></el-input>    
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script> 
export default {
  name: 'ProjectCreate',
  props: {
    visible : {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    handleClose(){
      this.$emit("update:visible", false)
    },
    handleSubmit(){
      this.$emit("update:visible", false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


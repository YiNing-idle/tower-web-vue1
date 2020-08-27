<template>
  <div id="roleCreate" class="app-container">
    <el-dialog title="角色创建" :visible.sync="visible">
      <el-form :model="form">
        <el-form-item label="角色名称" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入角色名称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编码" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="#+大写字母" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" required :label-width="formLabelWidth">
          <el-radio-group v-model="form.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>       
        </el-form-item>
        <el-form-item label="权限配置" required :label-width="formLabelWidth">
          <el-select v-model="form.right" multiple filterable allow-create default-first-option placeholder="请选择文章标签" style="width:100%">
            <el-option v-for="item in allrights" 
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input  v-model="form.remark" type="textarea" :rows="4" placeholder="请输入内容"></el-input>    
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer" style="text-align:center;">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script> 
let rights =  [{
  value: 'menu1',
  label: '工程管理'
}, {
  value: 'menu2',
  label: '经营分析'
}, {
  value: 'menu3',
  label: '系统配置'
}]
  
export default {
  name: 'RoleCreate',
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
      allrights: rights,
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

<style scoped>

</style>

<style lang="scss">
#roleCreate{
  .el-dialog__body{
    padding-bottom: 0px;
  }
}
</style>


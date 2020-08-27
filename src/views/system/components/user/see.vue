<template>
    <div id="userEdit" class="app-container">
        <el-dialog title="用户查看" :visible.sync="visibles" @close='closeDialog'>
            <el-form :model="form" disabled>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.staffCode" placeholder="6~18个字符，可使用字母、数字、下划线，需以字母开头" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码"  :label-width="formLabelWidth">
                    <el-input type="password" v-model="form.passwd" placeholder="6~16个字符，区分大小写" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态"  :label-width="formLabelWidth">
                    <el-radio-group v-model="form.status">
                        <el-radio :label="2">启用</el-radio>
                        <el-radio :label="1">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="姓名"  :label-width="formLabelWidth">
                    <el-input v-model="form.staffName" placeholder="请输入姓名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码"  :label-width="formLabelWidth">
                    <el-input v-model="form.phone" placeholder="请输入手机号码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色名称"  :label-width="formLabelWidth">
                    <el-input v-model="form.roleName" placeholder="请输入角色名" autocomplete="off"></el-input>
                </el-form-item>


                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.regionName" placeholder="请输入详细地址" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input  v-model="form.remark" type="textarea" :rows="4"></el-input>
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

    export default {
        name: 'userEdit',
        props: {
            visible : Boolean,
            form : Object
        },
        data(){
            return {
                visibles: this.visible,
                formLabelWidth: '120px'
            }
        },
        methods:{
            closeDialog(){
                this.visibles = false;
                this.$emit("update:visible", this.visibles)
            },
            handleClose(){
                this.visibles = false;
                this.$emit("update:visible", this.visibles)
            },
            handleSubmit(){
                this.visibles = false;
                this.$emit("update:visible", this.visibles)
            }
        }
    }
</script>

<style scoped>

</style>

<style lang="scss">
    #userEdit{
        .el-dialog__body{
            padding-bottom: 0px;
        }
    }
</style>


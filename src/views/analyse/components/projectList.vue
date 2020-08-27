<template>
    <div id="projectList">
        <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
            <el-table-column  prop="projectCode" align="center" label="项目编码"  style="width: 10%"></el-table-column>
            <el-table-column  prop="regionName" align="center"   style="width: 10%" label="地市"></el-table-column>
            <el-table-column  prop="regionCode" align="center"   style="width: 10%" label="地市编码"></el-table-column>
            <el-table-column  prop="countyName" align="center"  style="width: 10%" label="区县"></el-table-column>
            <el-table-column  prop="countyCode" align="center"  style="width: 10%" label="区县编码"></el-table-column>
            <el-table-column  prop="projectName" align="center"  style="width: 20%" label="工程点"></el-table-column>
            <el-table-column  prop="projectDesc" align="center"   style="width: 10%" label="类型"></el-table-column>
            <el-table-column align="center"   style="width: 10%" label="工程状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.projectStatus | statusFilter}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="操作"  style="width: 10%">
                <template slot-scope="scope">
                    <router-link :to="'/project/detail/'+scope.row.projectCode">
                        <el-button type="primary" size="small" icon="el-icon-edit">
                            查看
                        </el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>
</template>

<script>
    import { projectList } from '@/api/project'
    import Pagination from '@/components/Pagination'
    export default {
        name: 'ProjectList',
        components: { Pagination },
        props:{
            getCountyCode:String,
            name:String
        },
        filters: {
            statusFilter(projectStatus) {
                const statusMap = {
                    1: '未开始',
                    2: '进行中',
                    3: '已完成'
                }
                return statusMap[projectStatus]
            }
        },
        data() {
            return {
                list: null,
                total: 0,
                listQuery: {
                    page: 1,
                    limit: 10
                },
                listLoading: false,
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                let params = {};
                params = JSON.parse(JSON.stringify( this.listQuery));
                if(this.name){
                    params["projectName"] = this.name;
                }
                if(this.getCountyCode){
                    params["countyCode"] = this.getCountyCode;
                }
                projectList(params).then(response => {
                    this.list = response.data.items
                    this.total = response.data.total
                    this.listLoading = false
                })
            }
        },
        watch:{
            getCountyCode(){
                this.getList()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div id="echart">
        <div id="_top"  style="width:600px;height: 400px;margin-top:50px;margin-left: 30px; float:left;">
        </div>
        <div  style="width:600px;height: 550px;margin-top:20px;float:left;margin-right:20px;padding-left: 40px">
                <span style="font-weight:800;font-size:18px">工程进度统计表</span>
            <el-table
                    :data="dataList"
                    style="width: 100%"
                    :show-header="false">
                <el-table-column
                        prop="regionName"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="yData1"
                        width="120">
                    <template slot-scope="scope">
                        <span>工程总数：{{ scope.row.sumCount }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yData1" width="100">
                    <template slot-scope="scope">
                        <span>未开始：{{ scope.row.yData1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yData2" width="100">
                    <template slot-scope="scope">
                        <span>进行中：{{ scope.row.yData2 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="yData3" width="100">
                    <template slot-scope="scope">
                        <span>已完成：{{ scope.row.yData3 }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center"  width="60">
                    <template slot-scope="scope">
                        <el-link @click="openDetail(scope.row.regionCode)"  style="padding:0px 10px;">></el-link>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    import {getEchartData} from '@/api/analyse'
    export default {
        name: 'echart',
        props:{
            regionCode:Array,
            regionCodeMax:String,
            visible:Boolean
        },
        data () {
            return {
                charts: '',
                yData1:['2.0', '4.9', '7.0', '23.2', '25.6', '76.7', '135.6', '162.2', '32.6', '20.0', '6.4', '3.3'],
                yData2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                yData3:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                xData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                dataList: null,
                countyCode:null
            }
        },
        methods:{
            drawPie(){
                this.charts = echarts.init(document.getElementById('_top'))
               // this.charts.setOption(option)
                this.charts.setOption({
                    title : {
                        text: '工程进度情况',
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['未开始','进行中','已完成']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data : this.xData,
                            axisLabel: {
                                interval:0,
                                rotate:40
                            }
                        },
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'未开始',
                            type:'bar',
                            data:this.yData1
                        },
                        {
                            name:'进行中',
                            type:'bar',
                            data:this.yData2,
                        },
                        {
                            name:'已完成',
                            type:'bar',
                            data:this.yData3
                        }
                    ]
                })
            },
            openDetail(regionCode){
                if(regionCode.indexOf("00000000")>=0){//跳区域
                    this.regionCode.push(regionCode)
                    this.getData();
                }else{//跳列表
                    this.$parent.getListByCounty(regionCode);

                }
            },
            getData(){
                var param = {regionCode:this.regionCode.join(",")}
                getEchartData(param).then(response=>{
                    const data = response.data;
                    this.xData=data.regionName
                    this.yData1=data.yData1
                    this.yData2=data.yData2
                    this.yData3=data.yData3
                    this.dataList = data.dataList
                    this.drawPie()
                })
            }
        },
        mounted(){
            this.$nextTick(function() { //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行
                this.drawPie()
            })
        },
        created(){
            this.getData();
        },
        watch:{
            regionCode(){
                if(this.regionCode==""){
                    this.regionCode.push(this.regionCodeMax)
                }
                var param = {regionCode:this.regionCode.join(",")}
                getEchartData(param).then(response=>{
                    const data = response.data;
                    this.xData=data.regionName
                    this.yData1=data.yData1
                    this.yData2=data.yData2
                    this.yData3=data.yData3
                    this.dataList = data.dataList
                    this.drawPie()
                })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .data-list{
        font-size: 12px;
        margin:10px 0 10px 0;
    }
    .data-tr{
        margin:0 30px 0 0;
    }
</style>
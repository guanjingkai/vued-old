<template>
<div>
    <Row>
        <Col span="12">
            <ChartLine
            title="Vued Line 演示" 
            legendPosition="top" 
            legendShow="true" 
            backgroundColor='#ffffff' 
            :dimension="dimension" 
            :chartData="chartData" 
            :stack="stack"
            :metric="metric"
            :yAxisName="yAxisName">
        </ChartLine>
        </Col>
        <Col span="12">
            <ChartBar
            title="Vued Bar 演示" 
            legendPosition="top" 
            legendShow="true" 
            backgroundColor='#ffffff' 
            :dimension="dimension" 
            :chartData="chartData" 
            :stack="stack"
            :metric="metric"
            :yAxisName="yAxisName">
        </ChartBar>
        </Col>
    </Row>
    <Row>
        <Col span="12">
            <ChartPie
            title="Vued Pie 演示" 
            legendPosition="bottom" 
            legendShow="true" 
            backgroundColor='#ffffff' 
            :dimension="dimension" 
            :chartData="chartData" 
            :stack="stack"
            :metric="metric2">
            </ChartPie>
        </Col>
        <Col span="12">
            <ChartFunnel
            title="Vued Funnel 演示" 
            legendPosition="top" 
            legendShow="true" 
            pyramid="false"
            backgroundColor='#ffffff' 
            :dimension="dimension1" 
            :chartData="funnelData" 
            :stack="stack1"
            :metric="metric1">
            </ChartFunnel>
        </Col>
    </Row>
    <Row>
        <Col span="12">
            <ChartTreemap
            title="Vued Treemap 演示" 
            legendPosition="bottom" 
            legendShow="true" 
            backgroundColor='#ffffff' 
            :dimension="dimension" 
            :chartData="chartData" 
            :stack="stack"
            :metric="metric2">
            </ChartTreemap>
        </Col>
        <Col span="12">
            <ChartFunnel
            title="Vued Funnel 演示" 
            legendPosition="top" 
            legendShow="true" 
            pyramid="false"
            backgroundColor='#ffffff' 
            :dimension="dimension1" 
            :chartData="funnelData" 
            :stack="stack1"
            :metric="metric1">
            </ChartFunnel>
        </Col>
    </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                funnelData:[{
                    '节点': '客户需求',
                    '预计': 61,
                    '实际': 61,
                },{
                    '节点': '产品确认',
                    '预计': 48,
                    '实际': 40,
                },{
                    '节点': '设计完成',
                    '预计': 40,
                    '实际': 28,
                },{
                    '节点': '开发中',
                    '预计': 31,
                    '实际': 18,
                },{
                    '节点': '测试中',
                    '预计': 19,
                    '实际': 10,
                },{
                    '节点': '上线交付',
                    '预计': 15,
                    '实际': 9,
                }],
                dimension1: ['节点'],
                metric1:['预计','实际'],
                stack1: {'产出对比':['实际','预计']},
                yAxisName1: ['产出对比'],
                chartData: [{
                        '日期': '1月1日',
                        '销售额-1季度': 1523,
                        '销售额-2季度': 2331,
                        '占比': 0.12,
                        '其他': 100
                    },
                    {
                        '日期': '1月2日',
                        '销售额-1季度': 1223,
                        '销售额-2季度': 1762,
                        '占比': 0.345,
                        '其他': 100
                    },
                    {
                        '日期': '1月3日',
                        '销售额-1季度': 2123,
                        '销售额-2季度': 1822,
                        '占比': 0.7,
                        '其他': 100
                    },
                    {
                        '日期': '1月4日',
                        '销售额-1季度': 4123,
                        '销售额-2季度': 1199,
                        '占比': 0.31,
                        '其他': 100
                    },
                    {
                        '日期': '1月5日',
                        '销售额-1季度': 3123,
                        '销售额-2季度': 2019,
                        '占比': 0.12,
                        '其他': 100
                    },
                    {
                        '日期': '1月6日',
                        '销售额-1季度': 7123,
                        '销售额-2季度': 1982,
                        '占比': 1,
                        '其他': 100
                    }
                ],
                dimension: ['日期'],
                metric:['销售额-1季度','销售额-2季度'],
                metric2:['销售额-1季度'],
                stack: {'销售额':['销售额-2季度','销售额-1季度']},
                yAxisName: ['销售额']
            }
        },
        mounted() {
            //var MyComponent = this.component('ChartLine')
    
        },
        methods: {
            test() {
                //var MyComponent = Vue.component('my-component')
            }
        }
    }
</script>

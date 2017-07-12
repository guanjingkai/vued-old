<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                metric:['销售额-1季度','销售额-2季度','占比'],
                stack: {'销售额':['销售额-2季度','销售额-1季度']},
                yAxisName: ['销售额', '占比']
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

<template>
    <div id="main2" style="height:300px;">
    </div>
</template>

<script src="../theme/vintage.js">
    
</script>

<script>
    import echarts from '../../../utils/echarts';
    import ChartTheme from '../theme/vuedtheme';
    import {chart as Chart} from '../../../mixins/chart.js';
    import {
        oneOf
    } from '../../../utils/assist';
    const prefixCls = 'ued-chartline';
    
    export default {
        name: 'ChartBar',
        mixins:[Chart],
        props: {
            //
            
        },
        data() {
            return {
                chartType:'line',
                currentValue: this.value
            };
        },
        mounted() {
            this.init();
            this.cinit();
        },
        computed: {
    
        },
        methods: {
            init() {
                this.setLegend();//设置图例
                this.setGrid();//设置坐标系
                this.setData();//格式化数据
                this.setXAxis();
            },
            cinit() {
                // 基于准备好的dom，初始化echarts实例
    
                var myChart = echarts.init(document.getElementById('main2'), ChartTheme);
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: 'Vued Line 入门示例'
                    },
                    backgroundColor:this.$props.backgroundColor,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: this.legendInfo,
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {
                                readOnly: false
                            },
                            magicType: {
                                type: ['line', 'bar', 'stack', 'tiled']
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    grid: this.gridInfo,
                    xAxis: this.xAxis,
                    yAxis: [{
                        type: 'value'
                    }],
                    series: this.series
                });
            }
        },
        watch: {
    
        }
    };
</script>

<template>
    <div :id="thisChartId" style="height:300px;">
    </div>
</template>
</script>

<script>
    import echarts from 'echarts';
    import ChartTheme from '../theme/vuedtheme';
    import {chart as Chart} from '../../../mixins/chart.js';
    import {
        oneOf
    } from '../../../utils/assist';
    const prefixCls = 'ued-chartline';
    
    export default {
        name: 'ChartLine',
        mixins:[Chart],
        props: {
            //
            
        },
        data() {
            return {
                thisChartId:'line_'+ parseInt(10000*Math.random()),
                chartType:'line',
                currentValue: this.value,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                    }
                }
            };
        },
        mounted() {
            this.init();
            this.cinit();
        },
        computed: {
    
        },
        methods: {
            cinit() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById(this.thisChartId), ChartTheme);
                // 绘制图表
                myChart.setOption({
                    title: this.chartTitle,
                    backgroundColor:this.$props.backgroundColor,
                    tooltip:this.setTooltip(),
                    legend: this.legendInfo,
                    grid: this.gridInfo,
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    series: this.series
                });
                window.addEventListener('resize',function(){myChart.resize();},false);
            }
        },
        watch: {
    
        }
    };
</script>

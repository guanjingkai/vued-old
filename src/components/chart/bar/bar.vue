<template>
    <div :id="thisChartId" style="height:300px;">
    </div>
</template>

</script>

<script>
    import echarts from '../../../utils/echarts';
    import ChartTheme from '../theme/vuedtheme';
    import {
        chart as Chart
    } from '../../../mixins/chart.js';
    import {
        oneOf
    } from '../../../utils/assist';
    const prefixCls = 'ued-chartbar';
    
    export default {
        name: 'ChartBar',
        mixins: [Chart],
        props: {
            //
    
        },
        data() {
            return {
                thisChartId: 'bar_' + parseInt(10000 * Math.random()),
                chartType: 'bar',
                currentValue: this.value,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
                    backgroundColor: this.$props.backgroundColor,
                    tooltip: this.tooltip,
                    legend: this.legendInfo,
                    grid: this.gridInfo,
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    series: this.series
                });
            }
        },
        watch: {
    
        }
    };
</script>

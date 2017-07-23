<template>
    <div :id="thisChartId" style="width:100%;height:400px;">
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
    const prefixCls = 'ued-chartfunnel';
    
    export default {
        name: 'ChartFunnel',
        mixins:[Chart],
        props: {
            pyramid:{
                type: String,
                default: false,
                validator(value) {
                    return oneOf(value, ['true', 'false']);
                }
            }
            
        },
        data() {
            return {
                thisChartId:'funnel'+ parseInt(10000*Math.random()),
                chartType:'funnel',
                currentValue: this.value,
                tooltip: {}
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
                    series: this.series
                });
                window.addEventListener('resize',function(){myChart.resize();},false);
            }
        },
        watch: {
    
        }
    };
</script>

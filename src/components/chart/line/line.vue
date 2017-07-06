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
                currentValue: this.value,
                legendInfo: {},
                gridInfo: {}
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
                this.setLegend();
                this.setGrid();
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
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                            name: '直接访问',
                            type: 'line',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'line',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '谷歌',
                            type: 'line',
                            data: [120, 132, 101, 134, 290, 230, 220]
                        },
                        {
                            name: '必应',
                            type: 'line',
                            data: [60, 72, 71, 74, 190, 130, 110]
                        },
                        {
                            name: '其他',
                            type: 'line',
                            data: [62, 82, 91, 84, 109, 110, 120]
                        }
                    ]
                });
            }
        },
        watch: {
    
        }
    };
</script>

import {
    oneOf
} from '../utils/assist';
export var chart = {
    data() {
        return {
            series: [],
            thisData: {},
            xAxis: {},
            chartDimension: [],
            chartMetric: [],
            legendInfo: {},
            gridInfo: {}
        };
    },
    props: {
        //原始数据源
        chartData: {},
        dimension: {
            default: [0],
        },
        metric: {
            default: null,
        },
        //背景色
        backgroundColor: {
            type: String,
            default: '#ffffff',
        },
        //位置
        legendPosition: {
            type: String,
            default: 'right',
            validator(value) {
                return oneOf(value, ['top', 'left', 'right', 'bottom']);
            }
        },
        legendShow: {
            type: String,
            default: true,
            validator(value) {
                return oneOf(value, ['true', 'false']);
            }
        }
    },
    methods: {
        setData() {
            this.thisData = this.arrToObj(this.$props.chartData);
            this.setSeries();
        },
        setSeries() {
            const newSeries = [];
            const chartSet = this.$props.chartSet;
            //计算唯独 Array 
            this.chartDimension = this.$props.dimension;
            //获取指标
            this.chartMetric = this.$props.metric;
            if (this.chartMetric == null) {
                this.chartMetric = [];
                //拼装metric
                for (var i in this.thisData[0]) {
                    if (!this.inArray(i, this.chartDimension)) {
                        this.chartMetric.push(i);
                    }
                }
            }
            //合成series
            for (var i = 0; i < this.chartMetric.length; i++) {
                const metricValue = [];
                for (var j in this.thisData) {
                    metricValue[j] = this.thisData[j][this.chartMetric[i]];
                }
                const metricItem = {};
                metricItem.name = i;
                metricItem.type = this.chartType;
                metricItem.data = metricValue;
                //处理stack
                newSeries[i] = metricItem;
            }
            this.series = newSeries;

        },
        setXAxis() {
            this.xAxis = {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四']
            }
        },
        setLegend() {
            const legendSet = {};
            const legendShow = this.$props.legendShow == 'true';
            legendSet.show = legendShow; //this.$props.legendShow;
            legendSet.tooltip = {
                show: true
            };
            if (this.$props.legendPosition == 'top') {
                legendSet.top = 0
            } else if (this.$props.legendPosition == 'bottom') {
                legendSet.bottom = 0
            } else if (this.$props.legendPosition == 'right') {
                legendSet.width = '100px';
                legendSet.orient = 'vertical';
                legendSet.left = 'right';
                legendSet.bottom = '20%';
                legendSet.align = 'left';
            } else if (this.$props.legendPosition == 'left') {
                legendSet.width = '100px';
                legendSet.orient = 'vertical';
                legendSet.left = 'left';
                legendSet.bottom = '20%';
                legendSet.align = 'right';
            }
            legendSet.data = ['0', '1', '2'];
            this.legendInfo = legendSet;
        },
        setGrid() {
            const gridSet = {
                left: '8',
                right: '8',
                bottom: '32',
                containLabel: true
            };
            switch (this.$props.legendShow) {
                case 'true':
                    if (this.$props.legendPosition == 'top') {

                    } else if (this.$props.legendPosition == 'bottom') {
                        gridSet.bottom = 32
                    } else if (this.$props.legendPosition == 'right') {
                        gridSet.right = 100
                    } else
                        if (this.$props.legendPosition == 'left') {
                            gridSet.left = 100
                        }
            }

            this.gridInfo = gridSet;
        },
        arrToObj(data) {
            const ajson = {};
            for (var i = 0; i < data.length; i++) {
                //ajson[i] = data[i];
                if (Array.isArray(data[i])) {
                    ajson[i] = this.arrToObj(data[i]);
                } else {
                    ajson[i] = data[i];
                }
            }
            return ajson;
        },
        inArray(search, array) {
            for (var i in array) {
                if (array[i] == search) {
                    return true;
                }
            }
            return false;
        }
    }
};
export var frame = {

};
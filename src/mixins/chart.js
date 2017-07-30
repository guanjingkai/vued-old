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
            chartStack: {},
            legendInfo: {},
            gridInfo: {},
            xAxisData: [],
            yAxis: [],
            chartTitle: {}
        };
    },
    props: {
        title: '',
        //原始数据源
        chartData: {},
        dimension: {
            default: [0],
        },
        metric: {
            default: null,
        },
        stack: {
            default: null
        },
        yAxisName: {
            default: null
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
        init() {
            this.thisData = this.arrToObj(this.$props.chartData);
            this.chartDimension = this.$props.dimension;
            this.chartMetric = this.$props.metric;
            this.chartStack = this.arrToObj(this.$props.stack);
            this.setTitle();
            this.setXAxis();
            this.setYAxis();
            this.setLegend(); //设置图例
            this.setGrid(); //设置坐标系
            this.setData(); //格式化数据
        },
        setTitle() {
            var titleShow = true;
            if (this.$props.title == '' || this.$props.title == null) {
                titleShow = false;
            }
            this.chartTitle = {
                show: titleShow,
                text: this.$props.title
            }
        },
        setData() {
            this.setSeries();
        },
        setSeries() {
            var _self = this;
            const newSeries = [];
            if (this.chartMetric == null) {
                this.chartMetric = [];
                //拼装metric
                for (var i in this.thisData[0]) {
                    if (this.inArray(i, this.chartDimension) === false) {
                        this.chartMetric.push(i);
                    }
                }
            }
            //合成series
            for (var i = 0; i < this.chartMetric.length; i++) {
                const metricValue = [];
                for (var j in this.thisData) {
                    metricValue[j] = { value: this.thisData[j][this.chartMetric[i]], name: this.thisData[j][this.chartDimension[0]] };
                }
                const metricItem = {};
                metricItem.name = this.chartMetric[i];
                metricItem.type = this.chartType;
                metricItem.data = metricValue;
                //分组设置
                const stack = this.getStack(this.chartMetric[i]);
                (stack !== null) ? metricItem.stack = stack: 1 == 1;
                if (this.inArray(this.chartMetric[i], this.$props.yAxisName) !== false) {
                    metricItem.yAxisIndex = this.inArray(this.chartMetric[i], this.$props.yAxisName);
                } else if (this.inArray(stack, this.$props.yAxisName !== false)) {
                    metricItem.yAxisIndex = this.inArray(stack, this.$props.yAxisName);
                }
                //pie预处理
                if (this.chartType == 'pie') {
                    const pieX = (i + 1) / (this.chartMetric.length + 1) * 100 + '%';
                    metricItem.center = [pieX, '50%']
                }
                if (this.chartType == 'funnel') {
                    if (this.$props.pyramid == true || this.$props.pyramid == 'true') {
                        metricItem.sort = 'ascending'
                    }
                    const opacity = (i + 1) / this.chartMetric.length;
                    if ((i + 1) == this.chartMetric.length) {
                        let formatter = {};
                        for (var o in this.thisData) {
                            //metricValue[j] = { value: this.thisData[j][this.chartMetric[i]], name: this.thisData[j][this.chartDimension[0]] };
                            for (var j = 0; j < this.chartMetric.length; j++) {
                                if (j == 0) {
                                    formatter[this.thisData[o][this.chartDimension[0]]] = this.thisData[o][this.chartDimension[0]] + ' ' + this.chartMetric[j] + ':' + this.thisData[o][this.chartMetric[j]];
                                } else {
                                    formatter[this.thisData[o][this.chartDimension[0]]] = formatter[this.thisData[o][this.chartDimension[0]]] + '-' + this.chartMetric[j] + ':' + this.thisData[o][this.chartMetric[j]];
                                }

                            }
                        }
                        metricItem.label = {
                            normal: {
                                position: 'inside',
                                formatter: function(params) {
                                    let formatter = {};
                                    for (var o in _self.thisData) {
                                        //metricValue[j] = { value: this.thisData[j][this.chartMetric[i]], name: this.thisData[j][this.chartDimension[0]] };
                                        for (var j = 0; j < _self.chartMetric.length; j++) {
                                            if (j == 0) {
                                                formatter[_self.thisData[o][_self.chartDimension[0]]] = _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                            } else {
                                                formatter[_self.thisData[o][_self.chartDimension[0]]] = formatter[_self.thisData[o][_self.chartDimension[0]]] + '-' + _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                            }

                                        }
                                    }
                                    return formatter[params.name];
                                },
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: function(params) {
                                    let formatter = {};
                                    for (var o in _self.thisData) {
                                        //metricValue[j] = { value: this.thisData[j][this.chartMetric[i]], name: this.thisData[j][this.chartDimension[0]] };
                                        for (var j = 0; j < _self.chartMetric.length; j++) {
                                            if (j == 0) {
                                                formatter[_self.thisData[o][_self.chartDimension[0]]] = _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                            } else {
                                                formatter[_self.thisData[o][_self.chartDimension[0]]] = formatter[_self.thisData[o][_self.chartDimension[0]]] + '-' + _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                            }

                                        }
                                    }
                                    return formatter[params.name];
                                }
                            }
                        }
                    }
                    metricItem.itemStyle = {
                        normal: {
                            opacity: opacity
                        }
                    }
                }
                //处理stacks
                newSeries[i] = metricItem;
            }
            this.series = newSeries;

        },
        setXAxis() {
            var boundaryGap = true;
            if (this.chartType == 'line') {
                boundaryGap = false;
            }
            for (var i = 0; i < this.chartDimension.length; i++) {
                for (var j in this.thisData) {
                    this.xAxisData.push(this.thisData[j][this.chartDimension[i]]);
                }
            }
            this.xAxis = {
                type: 'category',
                boundaryGap: boundaryGap,
                data: this.xAxisData
            }
        },
        setYAxis() {
            var yName = this.$props.yAxisName;
            if (yName == null) {
                this.yAxis = [{
                    type: 'value'
                }];
            } else {
                for (var i = 0; i < yName.length; i++) {
                    const yItemData = {};
                    yItemData.name = yName[i];
                    yItemData.type = 'value';
                    this.yAxis.push(yItemData);
                }

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
            legendSet.data = this.getLegendData();
            this.legendInfo = legendSet;
        },
        getLegendData() {
            let legendData;
            if (this.chartType == 'line' || this.chartType == 'bar') {
                legendData = this.$props.metric;
            } else if (this.chartType == 'pie') {
                legendData = this.xAxisData;
            }

            return legendData;
        },
        setGrid() {
            const gridSet = {
                left: '8',
                right: '32',
                bottom: '32',
                containLabel: true
            };
            switch (this.$props.legendShow) {
                case 'true':
                    if (this.$props.legendPosition == 'top') {

                    } else if (this.$props.legendPosition == 'bottom') {
                        gridSet.bottom = 32
                    } else if (this.$props.legendPosition == 'right') {
                        gridSet.right = 128;
                    } else
                    if (this.$props.legendPosition == 'left') {
                        gridSet.left = 100
                    }
            }

            this.gridInfo = gridSet;
        },
        setTooltip() {
            let tooltip;
            if (this.chartType == 'line' || this.chartType == 'bar') {
                tooltip = {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                    }
                };
            } else if (this.chartType == 'pie') {
                tooltip = {
                    trigger: 'item'
                };
            } else if (this.chartType == 'funnel') {
                var _self = this;
                tooltip = {
                    trigger: 'item',
                    formatter: function(params) {
                        let formatter = {};
                        for (var o in _self.thisData) {
                            //metricValue[j] = { value: this.thisData[j][this.chartMetric[i]], name: this.thisData[j][this.chartDimension[0]] };
                            for (var j = 0; j < _self.chartMetric.length; j++) {
                                if (j == 0) {
                                    formatter[_self.thisData[o][_self.chartDimension[0]]] = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color + '"></span>' + _self.thisData[o][_self.chartDimension[0]] + ' ' + _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                } else {
                                    formatter[_self.thisData[o][_self.chartDimension[0]]] = formatter[_self.thisData[o][_self.chartDimension[0]]] + '-' + _self.chartMetric[j] + ':' + _self.thisData[o][_self.chartMetric[j]];
                                }

                            }
                        }
                        return formatter[params.name];
                    }
                };
            }
            return tooltip;
        },
        arrToObj(data) {
            var ajson = {};
            if (Array.isArray(data)) {

                for (var i = 0; i < data.length; i++) {
                    //ajson[i] = data[i];
                    if (Array.isArray(data[i])) {
                        ajson[i] = this.arrToObj(data[i]);
                    } else {
                        ajson[i] = data[i];
                    }
                }
            } else {
                for (var i in data) {
                    //ajson[i] = data[i];
                    if (Array.isArray(data[i])) {
                        ajson[i] = this.arrToObj(data[i]);
                    } else {
                        ajson[i] = data[i];
                    }
                }
            }

            return ajson;
        },
        inArray(search, array) {
            for (var i in array) {
                if (array[i] == search) {
                    return i;
                }
            }
            return false;
        },
        getStack(name) {
            var stack = null;
            console.log(this.chartStack);
            for (var i in this.chartStack) {
                if (this.inArray(name, this.chartStack[i]) !== false) {
                    stack = i
                }
            }
            return stack;
        }
    }
};
export var charts = {

};
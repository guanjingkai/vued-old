import {
    oneOf
} from '../utils/assist';
export var chart = {
    props: {
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
            legendSet.data = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'];
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
        }
    }
};
export var frame = {

};
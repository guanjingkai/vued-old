<template>
    <div>
        <ChartLine
            legendPosition = "right" 
            legendShow = "true" 
            backgroundColor = '#ffffff' 
            :dimension="dimension"
            :chartData="chartData" 
            :stack="stack">
        </ChartLine> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                chartData:[[1,2,3],[2,2,3],[3,2,3],[4,2,2]],
                dimension:[1],
                stack:[[1,2]],
                chartSet:{
                    dimension:[0],
                    stack:[]
                }
            }
        },
        mounted(){
            //var MyComponent = this.component('ChartLine')
            
        },
        methods: {
            test(){
                //var MyComponent = Vue.component('my-component')
            }
        }
    }
</script>

<template>
    <div>
        <ChartLine legendPosition = "right" legendShow = "true" backgroundColor = '#ffffff' :chartData="chartData" :chartSet="chartSet">
        </ChartLine> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                chartData:[[1,2,3],[2,2,3],[3,2,3],[4,2,2]],
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

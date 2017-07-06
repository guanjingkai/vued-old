<template>
    <div>
        <ChartBar></ChartBar>
        <ChartLine legendPosition = "right" legendShow = "true" backgroundColor = '#ffffff'>
        </ChartLine> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        mounted(){
            //var MyComponent = this.component('ChartLine')
            console.log(this.$refs.table.exportCsv({}));
            var frame =  this.$refs;
            console.log(frame);
        },
        methods: {
            test(){
                //var MyComponent = Vue.component('my-component')
            }
        }
    }
</script>

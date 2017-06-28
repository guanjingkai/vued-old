<template>
    <div>
        <Button  @click="consoleMd">打印当前md</Button>
        <Button  @click="showAllImg">查看当前上传的图片</Button>
        <Button  @click="imgAdd(imgAddInfo.filename,imgAddInfo.File)">刚上传的图片</Button>
        <Button  @click="imgDel(imgDelInfo.filename,imgDelInfo.File)">刚删除的图片</Button>
        <Button  @click="helptoggle(helptogglestate)">是否开启帮助</Button>
        <Button  @click="subfieldtoggle(subfieldtogglestate)">单双栏状态</Button>
        <Button  @click="htmlcode(htmlcodestate)">是否展示源码</Button>
        <Button  @click="readmodel(readmodelstate)">是否开启阅读模式</Button>
        <Button  @click="fullscreen(screenstate)">当前窗口状态</Button>
        <br/><br/>
        <MdEditor v-model="md" @fullscreen="fullscreen" @readmodel="readmodel" @htmlcode="htmlcode" @subfieldtoggle="subfieldtoggle" @helptoggle="helptoggle" @imgAdd="imgAdd" @imgDel="imgDel"></MdEditor>
        <ChartLine></ChartLine> 
    </div>
</template>
<script>
    export default {
        data () {
            return {
                md:"## asdflasjdlasdfasdfasfdsfdsfajf",
                screenstate:false,
                readmodelstate:false,
                htmlcodestate:false,
                subfieldtogglestate:false,
                helptogglestate:false,
                imgAdds:{},
                imgAddInfo:{
                    filename:"",
                    File:{}
                },
                imgDelInfo:{
                    filename:""
                }
            }
        },
        methods: {
            showAllImg:function(){
                console.log("以下是全部图片");
                //var l = 1;
                for(var i in this.imgAdds){
                    console.log("第"+i+"张图片路径:"+this.imgAdds[i].filename+"图片名称是:"+this.imgAdds[i].File.name);
                    //l++;
                }
            },
            imgAdd:function(filename,File){
                this.imgAddInfo.filename = filename;
                this.imgAddInfo.File = File;
                const imgname = this.imgAddInfo.filename.split("/");
                
                
                if(this.imgAddInfo.filename != ""){
                    console.log("刚刚上传的图片路径:"+this.imgAddInfo.filename+",图片名称是:"+this.imgAddInfo.File.name);
                    this.imgAdds[imgname[1]] = {};
                    this.imgAdds[imgname[1]].filename = this.imgAddInfo.filename;
                    this.imgAdds[imgname[1]].File = this.imgAddInfo.File;
                }else{
                    console.log("刚刚没有上传图片");
                }
                
            },
            imgDel:function(filename){
                this.imgDelInfo.filename = filename;
                const imgname = this.imgDelInfo.filename.split("/");
                if(this.imgDelInfo.filename != "" && this.imgAdds.hasOwnProperty(imgname[1])){
                    console.log("刚刚删除的图片路径:"+this.imgDelInfo.filename);
                    delete this.imgAdds[imgname[1]];
                }else if(this.imgDelInfo.filename != "" && !this.imgAdds.hasOwnProperty(imgname[1])){
                    console.log("刚刚删除的图片路径:"+this.imgDelInfo.filename);
                }else{
                    console.log("刚刚没有删除图片");
                }
            },
            consoleMd:function(){
                console.log(this.md);
            },
            fullscreen:function(state){
                this.screenstate = state;
                if(this.screenstate == false){
                    console.log('MdEditor窗口化了');
                }else{
                    console.log('MdEditor全屏了');
                }
            },
            readmodel:function(state){
                this.readmodelstate = state;
                if(this.readmodelstate == false){
                    console.log('关闭了阅读模式');
                }else{
                    console.log('开启了阅读模式');
                }
            },
            htmlcode:function(state){
                this.htmlcodestate = state;
                if(this.htmlcodestate == false){
                    console.log('关闭了源码模式');
                }else{
                    console.log('开启了源码模式');
                }
            },
            subfieldtoggle:function(state){
                this.subfieldtogglestate = state;
                if(this.subfieldtogglestate == false){
                    console.log('开启单栏');
                }else{
                    console.log('开启双栏');
                }
            },
            helptoggle:function(state){
                this.helptogglestate = state;
                if(this.helptogglestate == false){
                    console.log('关闭了帮助');
                }else{
                    console.log('开启了帮助');
                }
            }
        }
    }
</script>

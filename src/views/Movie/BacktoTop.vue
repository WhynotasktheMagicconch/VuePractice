<template>
    <div class="backtop" v-if="isShow" @click="toTop">
            <p class="iconfont icon-maoyan"></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    activated(){
        window.addEventListener("scroll",this.listenHander)  
    },
    deactivated(){
       window.removeEventListener("scroll",this.listenHander) 
    },
    methods:{
        listenHander(e){
            let top = document.documentElement.scrollTop || document.body.scrollTop
            if(top>=300 && !this.isShow){
                this.isShow = true; 
            }else if(top<300 && this.isShow){
                this.isShow = false;
            }
        },
        toTop(){
            window.scrollTo(0,0);
        }
    }
}
</script>

<style lang="scss">
    .backtop{
        text-align: center;
    }
    .iconfont{
        font-size: 40px;
        color: red;
    }
    
</style>
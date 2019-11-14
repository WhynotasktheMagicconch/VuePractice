<template>
    <div id="movie">
        <section class="topbar" style="">
            <div class="white-bg topbar-bg ">
                <div class="city-entry">
                    <span class="city-name">北京</span>
                </div>
                <div class="switch-hot">
                    <div :class="['hot-item',{active:type===nav.type}]" 
                    @click="type=nav.type"
                    v-for="nav in navs"
                    :key="nav.id"
                    >{{nav.title}}</div>
                </div>
                <div class="iconfont icon-sousuo"></div>
            </div>
        </section>
        <moviebox :type="type"></moviebox>
        <BacktoTop class="backtop"></BacktoTop>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import Moviebox from "./Moviebox"
import BacktoTop from "./BacktoTop"
export default {
    data(){
        return {
            type:"in_hots",
            navs:[
                {id:1,title:"正在热映",type:"in_hots"},
                {id:2,title:"即将上映",type:"in_newhots"}
            ]
        }
    },
    components:{
      Tabbar,Moviebox,BacktoTop
    },
        //组件内的路由守卫
    beforeRouteLeave(to,from,next){
        this.scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
        next();
    },
    activated(){
        window.scrollTo(0,this.scrollTop)
    },
    deactivated(){
       this.loading=true;//关闭无限滚动
    }

    /* //修改列表页的meta值，false时再次进入页面会重新请求数据。
    beforeRouteLeave(to, from, next) {
        from.meta.keepAlive = false;
        next();
    } */
}
</script>

<style lang="scss">
    .backtop{
        position: fixed;
        right: 10px;
        bottom: 60px;
        z-index: 33;
    }
    #movie{
        position: relative;
    }
    .topbar{
        position: fixed;
        width: 100%;
        top: 50px;
        z-index: 11;
        background: #ffffff;
    }
    .topbar-bg {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 44px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        .iconfont{
            font-size: 20px;
            margin-right: 15px;
            color: #e54847;
        }
    }
    .city-entry {
        padding-left: 15px;
        font-size: 15px;
        color: #666;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .switch-hot {
        display: -webkit-box;
        display: flex;
        height: 44px;
        line-height: 44px;
        position: relative;
    }
    .switch-hot .hot-item {
        font-size: 15px;
        color: #666;
        width: 80px;
        width: 21.33333vw;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
    }
    .switch-hot .active{
        color: #e54847;
        border-bottom: 3px solid #e54847;
    }
    /* .switch-hot::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -1px;
        width: 80px;
        width: 21.33333vw;
        height: 2px;
        background-color: #ef4238;
        -webkit-transition: left .2s;
        transition: left .2s;
    } */
</style>
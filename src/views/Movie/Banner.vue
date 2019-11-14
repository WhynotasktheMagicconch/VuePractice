<template>
    <div class="banner">
        <div class="swiper-container">
             <p class="title">近期最受期待</p>
            <div class="swiper-wrapper"
                >
                <div class="swiper-slide"
                     v-for="ban in banner"
                    :key="ban.id"
                >
                    <div class="movieimg">
                        <img :src="getImg(ban.img) " alt="">
                        <span class="wish-bg"></span>
                        <span class="wish"><span class="wish-num">{{ban.wish}}</span>人想看</span>
                    </div>
                    
                    <h5 class="name line-ellipsis">{{ban.nm}}</h5>
                    <p class="date">{{ban.rt}}</p>
                </div>
                
            </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
    </div>
</template> 

<script>
import axios from "axios"
import Swiper from "swiper"
export default {
    data(){
        return {
            banner:[]
        }
    },
    methods:{
        getImg(url){
        url = url.replace("w.h","128.180")
        return(url)
      }
    },
    created(){
        this.$http.get("/api//my/newhot",{
            params:{
                limit:10
            }
        }).then(res=>{
            this.banner = res.data.data.hots_list
            this.$nextTick(()=>{
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    pagination: {
                       /*  el: '.swiperpagination-', */
                        clickable: true,
                    },
                    });
            })
        })
    }
}
</script>

<style lang="scss" socped>
     /* html, body {
      position: relative;
      height: 100%;
    } */
    .banner{
        padding: 15px;
    }
    body {
      background: #ffffff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-wrapper{
        display: flex;
    }
    .swiper-slide {
        text-align: center;
        width: 85px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .movieimg{
        width: 85px;
        height: 115px;
        position: relative;
        margin-bottom: 6px;
    }
    .wish-bg {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000);
        background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
    }
    .wish {
        position: absolute;
        left: 4px;
        bottom: 2px;
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
        text-align: center;
    }
    .wish-num {
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
    }
     .name {
        margin: 0;
        font-size: 13px;
        color: #222;
        margin-bottom: 3px;
    }
    .line-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .date {
        margin: 0;
        font-size: 12px;
        color: #999;
    }
</style>
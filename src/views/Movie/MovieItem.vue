<template>
    <div class="item">
        <div class="main-block">
          <div class="avatar" sort-flag="">
            
              <div class="default-img-bg">
                <img v-lazy="getImg(movie.img)" onerror="this.style.visibility='hidden'">		
              </div>
          </div> 
      <div class="mb-outline-b content-wrapper">

          <div class="column content">
              <div class="box-flex movie-title">
                <div class="title line-ellipsis ">{{movie.nm}}</div>
              </div>
              <div class="detail column">
                    <div class="score line-ellipsis"> 
                      <span class="score-suffix">观众评 </span>
                      <span class="grade">{{movie.sc}}</span>
                    </div>
                  <div class="actor line-ellipsis">主演: {{movie.star}}</div>
                  <div class="show-info line-ellipsis">{{movie.showInfo}}</div>
              </div>
          </div>
          <div class="button-block">
              <div class="btn normal">
                <span class="fix" data-bid="dp_wx_home_movie_btn">购票</span>
              </div>
          </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    props:{
      movie:Object
    },
    methods:{
      getImg(url){
        url = url.replace("w.h","128.180")
        return(url)
      }
    }
}
</script>

<style lang="scss" scoped>
    .item {
      padding: 10px;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    .main-block {
      position: relative;
      width: 100%;
    }
    .item .avatar {
      width: 64px;
      height: 90px;
      position: relative;
      margin-top: 12px;
      float: left;
    }
    .default-img-bg {
      background-color: #e1e1e1;
      background-size: 100% 100%;
    }
    .item .avatar img {
      background-color: transparent;
      height: 90px;
    }
    .item .content-wrapper {
      padding: 12px 14px 12px 0;
      margin-left: 74px;
      height: 90px;
      max-height: 90px;
      position: relative;
    }
    .item .content {
      padding-right: 5px;
      margin-right: 48px;
      overflow: hidden;
    }
    .item .movie-title {
      max-height: 24px;
      margin-bottom: 7px;
      line-height: 24px;
      overflow: hidden;
    }
    .item .name, .item .title {
      font-size: 17px;
      color: #333;
      font-weight: 700;
      padding-right: 5px;
      flex-shrink: 1;
    }
    .item .detail {
      box-sizing: border-box;
      line-height: 1;
      overflow: hidden;
    }
      .item .detail .actor, .item .detail .score, .item .detail .show-date, .item .detail .show-info {
      font-size: 13px;
      color: #666;
    }
    .item .detail .score .grade {
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
    }
    .item .detail > div + div {
      margin-top: 6px;
      line-height: 15px;
    }
    .line-ellipsis {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .item .button-block {
      font-size: 12px;
      position: absolute;
      right: 14px;
      top: 0;
      bottom: 0;
      height: 27px;
      margin: auto;
    }
    .item .button-block .btn {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
    .item .button-block .btn {
      line-height: 28px;
      text-align: center;
      color: #fff;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
</style>
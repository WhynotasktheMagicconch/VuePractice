<template>
    <div class="moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <Banner v-if="this.type==anorther"></Banner>
        
        <div v-if="this.type==anorther">
            <MovieItem2
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
            ></MovieItem2> 
        </div>
        <div v-else>
            <MovieItem
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
            ></MovieItem>
        </div>
    </div>
    
</template>

<script>
import MovieItem from "./MovieItem"
import Banner from "./Banner"
import MovieItem2 from "./MovieItem2"
import { Indicator,Toast  } from 'mint-ui';
export default {
    props:["type"],
    data(){
        return {
          movies:[],
          limit:6,
          page:1,
          loading:false, //默认开启
          hasMore:true,//是否有更多数据
          anorther:"in_newhots",
}
      },
    watch:{
        type(val){
            this.movies=[];//数组清空
            this.page=1;
            this.hasMore = true;//切换的时候始终有数据
            this.getMovies();
        }
    },
    methods:{
       loadMore(){
           if(!this.hasMore){
               this.loading=true;//关闭无限滚动
               return false;
           }
          this.getMovies();
       },
       getMovies(){
            Indicator.open(); //loading
            let {limit,page}= this;
            this.loading=true;//关闭无限滚动
           this.$http.get("/api/my/"+this.type,{
            params:{
                limit,
                page
            }
            }).then(res=>{
            this.movies = this.movies.concat(res.data.data.hots_list) 
            this.loading=false //当这一页数据请求完了之后打开无限滚动
                if(this.limit * this.page >= res.data.data.total){
                    Toast({
                        message: '没有更多数据了',
                        position: 'bottom',
                        duration: 1000
                    });
                    this.hasMore = false //没有更多数据
                }
            this.page++
            Indicator.close();
            })
       }
    },
    components:{
        MovieItem,Banner,MovieItem2
    },
    activated(){
        this.loading=false;//开启无限滚动
    },
    deactivated(){
       this.loading=true;//关闭无限滚动
    }
}
</script>

<style lang="scss">
    .moviebox{
        margin-top: 100px;
        margin-bottom: 70px;
    }
</style>
<template>
  <div class="tabbar">
      <item
        v-for="nav in navs"
        :key="nav.id"
        :txt="nav.title"
        :mark="nav.mark"
        :sel="selected"
      >
        <span slot="ico" :class="['iconfont',nav.ico]"></span> 
      </item>
  </div>
</template>

<script>
import Item from "./Item"
export default {
    components:{
        Item
    },
    data(){
        return{
            selected:this.$route.name,
            navs:[
                {id:1,mark:"movie",title:"电影",ico:"icon-dianying"},
                {id:2,mark:"cinema",title:"影院",ico:"icon-yingyuan"},
                {id:3,mark:"mine",title:"我的",ico:"icon-wode2"}
            ]
            
        }
    },
    methods:{
        changeSelected(selected){
            this.selected = selected
        }
    }

}
</script>

<style lang="scss">
    @import "@/stylesheets/_mixins.scss";
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        background: #ffffff;
        justify-content: space-around;
    }
</style>
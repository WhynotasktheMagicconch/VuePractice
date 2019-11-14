<template>
    <div class="item" @click="clickItem">
          <span :class="flag?'active':''"><slot name="ico"></slot></span>
        <span :class="flag?'active':''">{{txt}}</span>   
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel",],
    computed:{
        flag(){
            if(this.mark == this.sel){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        clickItem(){
            this.$emit("changeSelected",this.mark)
            this.$router.push("/"+this.mark)
        }
    },

}
</script>

<style lang="scss">
    .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont{
            font-size: 25px;
        }
    }
    .active{
        color: red;
    }
</style>
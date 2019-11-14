<template>
    <div class="navbar">
        <h1 class="nav-header">{{title}}</h1>
    </div>
</template>

<script>
import router from "@/router"
export default {
    data(){
        return{
            title:"猫眼电影"
        }
    },
    watch:{
        "$route"(to,from){
            this.title=to.name
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        width: 100%;
        height: 50.5px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        display: -webkit-box;
        display: -ms-flexbox;
        position: fixed;
        top: 0;
        z-index:999;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    }
    .navbar .h1.nav-header, .navbar h1.nav-header {
        width: 100%;
        display: block;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
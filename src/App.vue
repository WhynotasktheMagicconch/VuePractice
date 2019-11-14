<template>
  <div id="app">
    <Header></Header>
    <keep-alive> 
        <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
   
</template>
<script>
import Header from "@/components/Header"
export default {
  components:{
    Header
  }
}
</script>


<style lang="scss">

</style>
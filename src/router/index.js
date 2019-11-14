import Vue from 'vue'
import VueRouter from 'vue-router'
import mine from "./mine"
import movie from "./movie"
import cinema from "./cinema"

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        mine,movie,cinema,
        {path:"/",redirect:"/movie"}
    ]
})

export default router

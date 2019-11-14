export default{
    name:"movie",
    path:"/movie",
    component:()=>import("@/views/Movie"),
    meta:{
        pageTitle:'猫眼电影',
        keepAlive: true
    }
}
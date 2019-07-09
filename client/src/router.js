import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: "index"
    },

    {
      path:'/index',
      name:'Index',
      component:() => import('@/views/Index'),
      meta: {title:'首页'},
      redirect :'/home',
      children:[
      {
        path:'/home',
        name:'home',
        component: () => import('@/views/Home/Home'),
        meta:{title:'首页'},
      },
      
    ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/Login")
    },
    {
      path: "*",
      name: "Nofind",
      component: () => import("@/views/404")
    }
  ]
})

//路由守卫
// router.beforeEach((to,from,next) => {
//   const isLogin = localStorage.eleToken ? true :false
//   if(to.path === '/login' || to.path === '/register'){
//     next()
//   }else{
//     isLogin ? next():next('/login')
//   }
// })
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes'
import {Toast} from 'vant'
import store from '../store'
import {LOGINAUTO} from '../store/mutation_types'
Vue.use(VueRouter)

//处理一下编程式路由的一个bug
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}


let router = new VueRouter({
  routes,
  linkActiveClass:"active"
})
router.beforeEach(async (to,from,next)=>{
  await store.dispatch(LOGINAUTO)
  if(to.path !== '/Login'){
    if(store.state.user._id){
      next()
    }else{
      Toast.fail({
        message:"请先登录",
        duration:2000,
        onClose(){
            next("/Login")
        }
      })
    }
  }else{
    next()
  }
})

export default router
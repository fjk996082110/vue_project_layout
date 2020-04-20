import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESS,GETCATEGORY,GETSHOPS,GETUSER,DELUSER,LOGINAUTO} from './mutation_types'
import http from '../http/index'
import {Toast} from 'vant'
import router from '../router/index.js'
import local from '../utils/local'

export default {
  //请求商家信息
  async [GETSELLER](store){
    const {code,data} = await http.shop.getSeller()
    if(code===0){
      store.commit(GETSELLER,data)
    }
  },
  //请求商品信息
  async [GETGOODS](store){
    const {code,data} = await http.shop.getGoods()
    if(code===0){
      store.commit(GETGOODS,data)
    }
  },
  //请求评论信息
  async [GETRATINGS](store){
    const {code,data} = await http.shop.getRatings()
    if(code===0){
      store.commit(GETRATINGS,data)
    }
  },
  //请求位置信息
  async [GETADDRESS](store){
    const {code,data} = await http.wrap.getPosition()
    if(code===0){
      store.commit(GETADDRESS,data)
    }
  },
  //请求商品分类列表
  async [GETCATEGORY](store){
    const {code,data} = await http.wrap.getCategory()
    if(code===0){
      store.commit(GETCATEGORY,data)
    }
  },
  //请求店铺列表
  async [GETSHOPS](store){
    const {code,data} = await http.wrap.getShops()
    if(code===0){
      store.commit(GETSHOPS,data)
    }
  },
  //请求登录
  async [GETUSER](store,{name,pwd,captcha,phone,code,loginType,getCaptcha}){
    let result = ""
    if(loginType==='password'){
      result = await http.login.loginByPwd({
        name,
        pwd,
        captcha
      })
    }else if(loginType === 'message'){
      result = await http.login.loginBySms({
        phone,
        code
      })
    }
    if(result.code===0){
      getCaptcha()
      store.commit(GETUSER,result.data)
      local.set("ele-token",result.data.token)
      router.replace('/Profile')
    }else if(result.code===1){
      getCaptcha()
      Toast.fail({
        message:result.msg,
        duration:2000
      })
    }
  },
  //删除store中的user
  async [DELUSER](store){
    await store.commit(DELUSER)
    local.remove("ele-token")
  },
  //自动登录
  async [LOGINAUTO](store){
    try {
      const result = await http.login.autoLogin();
      if(result.code === 0){
          //拥有token 而且token没有过期
          store.commit(LOGINAUTO,result.data)
      }else if(result.code === 1){
          //没有token
          Toast.fail({
              message:"请先登录",
              duration:2000,
              onClose(){
                  router.replace("/Login")
              }
          })
      }
    } catch (error) {
      Toast.fail({
          message:error.msg,
          duration:2000,
          onClose(){
              router.replace("/Login")
          }
      })
    }
  },
}
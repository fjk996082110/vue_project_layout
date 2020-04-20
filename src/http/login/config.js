import local from '../../utils/local'
export default {
  name:'login',
  api:{
    getCode:{
      url:'/sendcode',
      method:'get',
      corsUrl:'/4000'
    },
    loginByPwd:{
      url:'/login_pwd',
      method:'post',
      corsUrl:'/4000'
    },
    loginBySms:{
      url:'/login_sms',
      method:'post',
      corsUrl:'/4000'
    },
    autoLogin:{
      url:"/auto_login",
      method:"get",
      corsUrl:"/4000",
      token:()=>{
          return local.get("ele-token")
      }
    }
  }
}
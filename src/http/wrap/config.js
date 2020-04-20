import local from '../../utils/local'
export default {
  name:'wrap',
  api:{
    getPosition:{
      url:'/position/40.10038,116.36867',
      method:'get',
      corsUrl:'/4000'
    },
    getCategory:{
      url:'/index_category',
      method:'get',
      corsUrl:'/4000',
      token:()=>{
        return local.get("ele-token")
      }
    },
    getShops:{
      url:'/shops',
      method:'get',
      corsUrl:'/4000',
      params:{
        latitude:40.10038,
        longitude:116.36867
      },
      token:()=>{
        return local.get("ele-token")
      }
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
  }
}
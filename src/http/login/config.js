export default {
  name:'login',
  api:{
    getCode:{
      url:'/sendcode',
      method:'get',
      corsUrl:'/4000'
    },
  }
}
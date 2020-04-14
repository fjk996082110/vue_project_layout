export default {
  name:'shop',
  api:{
    getSeller:{
      url:'/api/seller',
      method:'get'
    },
    getGoods:{
      url:'/api/goods',
      method:'get'
    },
    getRatings:{
      url:'/api/ratings',
      method:'get'
    }
  }
}
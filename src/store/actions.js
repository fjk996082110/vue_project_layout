import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESS,GETCATEGORY,GETSHOPS} from './mutation_types'
import http from '../http/index'
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
}
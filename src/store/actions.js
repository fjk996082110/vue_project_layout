import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESS} from './mutation_types'
import http from '../http/index'
export default {
  async [GETSELLER](store){
    const {code,data} = await http.shop.getSeller()
    if(code===0){
      store.commit(GETSELLER,data)
    }
  },
  async [GETGOODS](store){
    const {code,data} = await http.shop.getGoods()
    if(code===0){
      store.commit(GETGOODS,data)
    }
  },
  async [GETRATINGS](store){
    const {code,data} = await http.shop.getRatings()
    if(code===0){
      store.commit(GETRATINGS,data)
    }
  },
  async [GETADDRESS](store){
    const {code,data} = await http.wrap.getPosition()
    if(code===0){
      store.commit(GETADDRESS,data)
    }
  }
}
import {GETSELLER,GETGOODS,GETRATINGS} from './mutation_types'
import http from '../http/index'
export default {
  async [GETSELLER](store){
    const {code,data} = await http.shop.getSeller()
    if(code===200){
      store.commit(GETSELLER,data)
    }
  },
  async [GETGOODS](store){
    const {code,data} = await http.shop.getGoods()
    if(code===200){
      store.commit(GETGOODS,data)
    }
  },
  async [GETRATINGS](store){
    const {code,data} = await http.shop.getRatings()
    if(code===200){
      store.commit(GETRATINGS,data)
    }
  }
}
import {GETSELLER,GETGOODS,GETRATINGS,GETADDRESS,GETCATEGORY,GETSHOPS} from './mutation_types'
export default {
    [GETSELLER](state,seller){
      state.seller=seller
    },
    [GETGOODS](state,goods){
      state.goods=goods
    },
    [GETRATINGS](state,ratings){
      state.ratings=ratings
    },
    [GETADDRESS](state,address){
      state.addressObj=address
    },
    [GETCATEGORY](state,category){
      state.categoryArr=category
    },
    [GETSHOPS](state,shops){
      state.shops=shops
    },
}
import goods from '../pages/ele-goods/goods.vue'
import ratings from '../pages/ele-ratings/ratings.vue'
import seller from '../pages/ele-seller/seller.vue'
export default [
  {path:'/goods', component: goods},
  {path:'/ratings', component: ratings},
  {path:'/seller', component: seller},
  {path:'/', component: goods},
]
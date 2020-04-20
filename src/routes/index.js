/* import goods from '../pages/ele-goods/goods.vue'
import ratings from '../pages/ele-ratings/ratings.vue'
import seller from '../pages/ele-seller/seller.vue'
import Shop from '../pages/ele-shop/ele-shop.vue'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Detail from '../pages/Detail/Detail.vue' */

//路由懒加载
const goods =() => import(/*webpackChunkName:"goods"*/'../pages/ele-goods/goods.vue')  
const ratings =() => import(/*webpackChunkName:"ratings"*/'../pages/ele-ratings/ratings.vue')  
const seller =() => import(/*webpackChunkName:"seller"*/'../pages/ele-seller/seller.vue')  
const Shop =() => import(/*webpackChunkName:"Shop"*/'../pages/ele-shop/ele-shop.vue')  
const Msite =() => import(/*webpackChunkName:"Msite"*/'../pages/Msite/Msite.vue')  
const Order =() => import(/*webpackChunkName:"Order"*/'../pages/Order/Order.vue')  
const Profile =() => import(/*webpackChunkName:"Profile"*/'../pages/Profile/Profile.vue')  
const Search =() => import(/*webpackChunkName:"Search"*/'../pages/Search/Search.vue')  
const Login =() => import(/*webpackChunkName:"Login"*/'../pages/Login/Login.vue')  
const Detail =() => import(/*webpackChunkName:"Detail"*/'../pages/Detail/Detail.vue')  
export default [
  {path:'/Msite', component: Msite, meta:{showFooter:true}},
  {path:'/Order', component: Order, meta:{showFooter:true}},
  {path:'/Profile', component: Profile, meta:{showFooter:true}},
  {path:'/Search', component: Search, meta:{showFooter:true}},
  {path:'/Login', component: Login, meta:{showFooter:false}},
  {path:'/Detail', component: Detail, meta:{showFooter:false}},
  {
    path:'/Shop/:id', 
    component: Shop, 
    meta:{showFooter:false},
    props:true,
    children:[
      {path:'goods',component:goods},
      {path:'ratings',component:ratings},
      {path:'seller',component:seller},
      {path:'',redirect:'goods'}
    ]
  },
  
  {path:'/', redirect: '/Msite'},
]
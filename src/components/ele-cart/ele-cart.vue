<template>
  <div>
    <div class="cart">
        <div  class="left" style="color: white" @click="showMask=true">
            <div class="icon">
                <div class="logo" :class="{active:totalPrice>0}">
                    <i class="layout-shopping_cart"></i>
                </div>
                <span class="qipao" v-show="totalCount>0">{{totalCount}}</span>
            </div>
            <div class="totalPrice" :class="{active:totalPrice>0}">
                <span>¥{{totalPrice}}</span>
            </div>
            <div class="deliveryPrice">
                <span>另需配送费¥{{seller.deliveryPrice}}元</span>
            </div>
        </div>
        <div class="right" :class="{active:totalPrice >= seller.minPrice}">
            <span>{{rightText}}</span>
        </div>
    </div>
    <div class="list" v-show="showMask">
      <div class="header">
          <span class="cartText">购物车</span>
          <span class="clear" @click="clear">清空</span>
      </div>
      <div class="content" ref="contentList">
          <ul>
              <li class="item" v-for="(selectItem,index) in selectedFoods" :key="index">
                  <span class="left"> {{selectItem.name}} </span>
                  <div class="right">
                      <span class="price">{{selectItem.price*selectItem.buyCount}}</span>
                      <ele-contorl class="contorl" :food="selectItem"></ele-contorl>
                  </div>
              </li>
          </ul>
      </div>
  </div>
  <div class="mask" v-show="showMask" @click="showMask=false"></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BScorll from 'better-scroll'
import contorl from '../ele-contorl/ele-contorl.vue'
export default {
  name:"ele-cart",
  components:{
    "ele-contorl":contorl
  },
  props:{
    selectedFoods:Array,
  },
  data() {
    return {
      showMask:false,
    }
  },
  methods: {
    clear(){
      this.$emit("clear")
      this.showMask=false
    }
  },
  mounted(){
    this.$nextTick(()=>{
      new BScorll(this.$refs.contentList)
    })
  },
  computed: {
    ...mapState(["seller"]),
    totalCount(){
      return this.selectedFoods.reduce((adder,item)=>{
        return adder += item.buyCount
      },0)
    },
    totalPrice(){
      return this.selectedFoods.reduce((adder,item)=>{
        return adder += item.price*item.buyCount
      },0) 
    },
    rightText(){
      if(this.totalPrice===0){
        return `￥${this.seller.minPrice}起送`
      }else if(this.totalPrice<this.seller.minPrice){
        return `还差￥${this.seller.minPrice-this.totalPrice}起送`
      }else{
        return `去结算`
      }
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
     @import "../../common/stylus/minxin.styl"
    .cart
        flex 0 0 0;
        position fixed
        z-index 3
        bottom 0
        left 0
        height 46px
        width 100%
        background #141d27
        display flex
        .left
            flex 1
            height 100%
            display flex
            .icon
                position relative
                bottom 15px
                width 56px
                height 56px
                border-radius 50%
                background #141d27
                margin-left 12px
                margin-right 12px
                display flex
                justify-content center
                align-items center
                .logo
                    display flex
                    justify-content center
                    align-items center
                    width 44px
                    height 44px
                    border-radius 50%
                    background rgba(255,255,255,0.4)
                    &.active
                        background rgba(0,160,220,1)
                        i
                            color white
                    i
                        color rgba(255,255,255,0.4)
                .qipao
                    position absolute
                    right 0
                    top 5px
                    width 24px
                    height 16px
                    line-height 16px
                    border-radius 6px
                    background red
                    font-size 9px
                    font-weight 700
                    text-align center
            .totalPrice
                display flex
                justify-content center
                align-items center
                margin-right 12px
                font-size 16px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                &.active
                    color white
            .deliveryPrice
                display flex
                justify-content center
                align-items center
                font-size 14px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                padding-left 12px
                border-left 2px solid rgba(255,255,255,0.1)
        .right
            flex 0 0 105px
            height 100%
            background rgba(255,255,255,0.4)
            display flex
            justify-content center
            align-items center
            &.active
                background green
                span
                    color white
            span
                color rgba(255,255,255,0.6)
    .list
        max-height 255px
        position fixed
        z-index 2
        left 0
        bottom 45px
        width 100%
        background #f3f5f1
        padding-bottom 20px
        .header
            one-px(rgba(7,17,27,.1))
            height 40px
            background #f3f5f7
            display flex
            justify-content space-between
            align-items center
            .cartText
                margin-left 18px ;
                color rgba(7,17,27,1);
                font-weight 800
                font-size 14px
            .clear
                margin-right 18px
                color rgba(0,160,220,1);
                font-weight 800
                font-size 14px

        .content
            max-height 195px
            overflow hidden
            .item
                one-px(rgba(7,17,27,.1))
                display flex
                height 48px
                align-items center
                justify-content space-between
                .left
                    padding-left 18px
                .right
                    display flex
                    align-items center
                    padding-right  22px
                    .price
                        margin-right 12px
                        color rgba(240,20,20,1)
                        font-size 10px
                        font-weight 700
.mask
    position fixed
    z-index 1
    left 0
    right 0
    top 0
    bottom 0
    background rgba(7,17,27,.6)
    backdrop-filter blur(5px)
</style>

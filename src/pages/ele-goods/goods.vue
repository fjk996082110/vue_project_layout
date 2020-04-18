<template>
  <div class="goods">
    <div class="typeWrap" ref="typeWrap">
      <ul class="typeList" ref="typeList">
        <li class="type" v-for="(item,index) in goods" :key="index" 
        :class="{active:currentIndex===index}" @click="chooseType(index)">
          <ele-icon class="icon" v-show="item.type" size="3" :type="item.type"></ele-icon>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="goodWrap" ref="goodWrap">
      <ul class="goodList" ref="goodList">
        <li class="good" v-for="(item,index) in goods" :key="index">
          <h2 class="goodName">{{item.name}}</h2>
          <ul class="foodList">
            <li class="food" v-for="(food,index) in item.foods" :key="index">
              <ele-food :food="food"></ele-food>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ele-cart :selectedFoods="selectedFoods" @clear="clear"></ele-cart>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETGOODS} from '../../store/mutation_types'
import icon from '../../components/ele-icon/ele-icon.vue'
import food from '../../components/ele-food/ele-food.vue'
import cart from '../../components/ele-cart/ele-cart.vue'
export default {
  name:"ele-goods",
  data() {
    return {
      topsArr:[],
      scrollY:0
    }
  },
  components:{
    "ele-icon":icon,
    "ele-food":food,
    "ele-cart":cart
  },
  computed: {
    // 一个测试的注释
    ...mapState(["goods"]),
    currentIndex(){
      return this.changeCurrent()
    },
    selectedFoods(){
      let selectedFoods = [];
      this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
              if(food.buyCount > 0){
                  selectedFoods.push(food)
              }
          })
      })
      return selectedFoods;
    }
  },
  methods: {
    ...mapActions([GETGOODS]),
    initTops(){
      if(this.$refs.goodList){
        this.$nextTick(()=>{
          let goodList = this.$refs.goodList
          let goods = goodList.children
          let top = 0
          let topArr = [top]
          Array.from(goods).forEach((good)=>{
            top += good.offsetHeight
            topArr.push(top)
          })
          this.topsArr = topArr
        })
      }
    },
    initScrollY(){
      //初始化滑屏
      if(this.$refs.typeWrap&&this.$refs.goodWrap){
        this.$nextTick(()=>{
          this.typeWrapBS = new BScroll(this.$refs.typeWrap)
          this.goodWrapBS = new BScroll(this.$refs.goodWrap,{probeType:3})
          this.goodWrapBS.on('scroll',({x,y})=>{
            this.scrollX = Math.abs(x)
            this.scrollY = Math.abs(y)
          })
        })
      }
    },
    chooseType(index){
      let scrollY = this.topsArr[index]
      this.goodWrapBS.scrollTo(0,-scrollY,300)
    },
    add(food){
      if(!food.buyCount){
        this.$set(food,"buyCount",1)
      }else{
        food.buyCount++
      }
    },
    remove(food){
      if(food.buyCount>0){
        food.buyCount--
      }
    },
    clear(){
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.buyCount > 0){
            food.buyCount = 0
          }
        })
      })
    },
    changeCurrent(){
       //根据topsArr和scroll来确定左侧列表该选中谁
      let {topsArr,scrollY} = this
      let index = topsArr.findIndex((top,index)=>{
        return scrollY >= top && scrollY < topsArr[index+1]
      })
      if(this.oldIndex !== index){
        this.oldIndex = index
        let targetLi = this.$refs.typeList && this.$refs.typeList.children[index]
        this.typeWrapBS && this.typeWrapBS.scrollToElement(targetLi,300)
      }
      return index
    }
  },
  async mounted(){
    await this[GETGOODS]()
    this.initTops()
    this.initScrollY()
    this.$bus.$off("add")
    this.$bus.$off("remove")
    this.$bus.$on("add",(food)=>{
      this.add(food)
    })
    this.$bus.$on("remove",(food)=>{
      this.remove(food)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
.goods
  position absolute
  left 0
  right 0
  bottom 46px
  top 174px
  display flex
  .typeWrap
    flex 0 0 80px
    overflow hidden
    .typeList
      .type
        center()
        one-px(rgba(7,17,27,.1))
        background #f3f5f7
        font-size 12px
        line-height 14px
        height 55px
        font-weight 200
        padding 0 12px
        .icon
          margin-right 2px
        &.active
          background #ffffff
        &:after
          width 56px
          left 0
          right 0
          margin auto
        &:last-child
          border-none()
  .goodWrap
    flex 1
    overflow hidden
    .goodList
      .good
        .goodName
          height 26px
          line-height 26px
          font-size 12px
          font-weight 800
          background #f3f5f7
          border-left 3px solid #d9dde1
          padding-left 14px
          color rgba(147,153,159,1)
        .foodList
          .food
            padding 18px
            one-px(rgba(7,17,27,.1))
            position relative
            &:after
              width 80%
              left 0
              right 0
              margin auto
            &:last-child
              border-none()
</style>
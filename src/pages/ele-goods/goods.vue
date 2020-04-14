<template>
  <div class="goods">
    <div class="typeWrap" ref="typeWrap">
      <ul class="typeList">
        <li class="type" v-for="(item,index) in goods" :key="index" :class="{active:currentIndex===index}">
          <ele-icon class="icon" v-show="item.type" size="3" :type="item.type"></ele-icon>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="goodWrap" ref="goodWrap">
      <ul class="goodList">
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
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETGOODS} from '../../store/mutation_types'
import icon from '../../components/ele-icon/ele-icon.vue'
import food from '../../components/ele-food/ele-food.vue'
export default {
  name:"goods",
  data() {
    return {
      currentIndex:0
    }
  },
  components:{
    "ele-icon":icon,
    "ele-food":food
  },
  computed: {
    ...mapState(["goods"])
  },
  methods: {
    ...mapActions([GETGOODS])
  },
  mounted(){
    this[GETGOODS]()
    new BScroll(this.$refs.typeWrap)
    new BScroll(this.$refs.goodWrap)
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
.goods
  position absolute
  left 0
  right 0
  bottom 50px
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
        color rgba(240,20,20,1)
        line-height 14px
        height 55px
        font-weight 200
        padding 0 12px
        .icon
          margin-right 2px
        &.active
          background #fff
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
            &:after
              width 80%
              left 0
              right 0
              margin auto
            &:last-child
              border-none()
</style>
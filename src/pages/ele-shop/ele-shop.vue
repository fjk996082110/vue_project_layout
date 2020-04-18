<template>
  <div class="shop">
    <ele-header></ele-header>
    <div class="nav">
      <div class="item">
        <router-link :to="`/shop/${id}/goods`">商品</router-link>
      </div>
      <div class="item">
        <router-link :to="`/shop/${id}/ratings`">评价</router-link>
      </div>
      <div class="item">
        <router-link :to="`/shop/${id}/seller`">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '../../components/ele-header/ele-header.vue'
import {mapActions} from 'vuex'
import {GETSELLER} from '../../store/mutation_types'
export default {
  name: 'App',
  data() {
    return {
      id:this.id
    }
  },
  porps:{
    id:String
  },
  components:{
    "ele-header":header
  },
  methods: {
    ...mapActions([GETSELLER])
  },
  mounted(){
    this[GETSELLER]()
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
  .shop
    position relative
    width 100%
    height 100%
    overflow hidden
    .nav
      one-px(rgba(7,17,27,.1))
      height 40px
      display flex
      & > .item
        flex 1
        a
          center()
          width 100%
          height 100%
          font-size 14px
          line-height 14px
          color rgba(77,85,93,1)
          &.active
            color rgba(240,20,20,1)
</style>



<template>
  <div class="header">
    <div class="headerTop">
      <div class="left">
        <img :src="seller.avatar" class="avatar">
      </div>
      <div class="right">
        <div class="title">
          <i class="brand"></i>
          <span>{{seller.name}}</span>
        </div>
        <div class="info">
          <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
        </div>
        <div class="support" v-if="seller.supports && seller.supports[0]">
          <ele-icon class="icon" size="1" :type="seller.supports[0].type"></ele-icon>
          <span type="text">{{seller.supports[0].content}}</span>
        </div>
      </div>
      <div class="btns" @click="showMask=true">
        <span>5个</span>
        <i class="layout-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="headerBottom" @click="showMask=true">
      <div class="content">
        <i class="icon"></i>
        <span class="text">{{seller.bulletin}}</span>
      </div>
      <i class="layout-keyboard_arrow_right arrow"></i>
    </div>
    <div class="bg">
      <img :src="seller.bgImg" class="avatar">
    </div>
    <transition name="mask">
      <div class="mask" v-if="showMask">
        <div class="mainWrap">
          <div class="main">
            <span class="title">{{seller.name}}</span>
            <div class="starsWrap">
              <ele-stars size="48" :scrore="seller.score"></ele-stars>
            </div>
            <ele-line class="line">
              <span class="text">优惠信息</span>
            </ele-line>
            <ele-list class="list" :supports="seller.supports"></ele-list>
            <ele-line class="line">
              <span class="text">商家公告</span>
            </ele-line>
            <p class="bulletin">
                {{seller.bulletin}}
            </p>
          </div>
        </div>
        <div class="footer" @click="showMask=false">
          <i class="layout-close"></i>
        </div>
    </div>
    </transition>
  </div>
</template>

<script>
import icon from '../ele-icon/ele-icon.vue'
import line from '../ele-line/ele-line.vue'
import list from '../ele-list/ele-list.vue'
import stars from '../ele-stars/ele-stars.vue'
import {mapState} from 'vuex'
export default {
  name:"ele-header",
  data() {
    return {
      showMask:false
    }
  },
  computed: {
    ...mapState(["seller"])
  },
  components:{
    "ele-icon":icon,
    "ele-line":line,
    "ele-list":list,
    "ele-stars":stars
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
@import "../../common/stylus/extend.styl"
@import "../../common/stylus/transition.styl"
.header
  background rgba(7,17,27,.5)
  & > .headerTop
    padding 24px 0 18px 24px
    position relative
    display flex 
    overflow hidden
    & > .left
      width 64px
      height 64px
      margin-right 16px
      .avatar
        width 64px
        height 64px
        border-radius 4px
    & > .right
      .title
        display flex
        align-items: center;
        font-size 16px
        color rgba(255,255,255,1)
        font-weight bold
        line-height 18px
        margin-top 2px
        margin-bottom 8px
        .brand
          bg-image(brand)
          display inline-block
          width 30px
          height 18px
          background-size 100%
          background-repeat no-repeat
          margin-right 6px
      .info
        font-size 12px
        color rgba(255,255,255,1)
        font-weigth 200
        line-height 12px
        margin-bottom 10px
      .support
        center()
        font-size 10px
        color rgba(255,255,255,1)
        font-weight 200
        line-height 12px
        margin-bottom 2px
        justify-content flex-start
        .icon
          margin-right 4px
        .text
          font-size 10px
    & > .btns
      center()
      position absolute
      right 3px
      bottom 14px
      background rgba(0,0,0,.2)
      font-size 10px
      color rgba(255,255,255,1)
      font-weight 200
      line-height 12px
      border-radius 14px
      height 24px
      width 40px
      span 
        margin-right 4px
  & > .headerBottom
    center()
    height 28px
    background rgba(7,17,27,.2)
    padding-left 12px
    padding-right 16px
    position relative
    .content
      width 100%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-size 10px
      color rgba(255,255,255,1)
      font-weight 200
      line-height 28px
      .icon
        bg-image(bulletin)
        width 22px
        height 12px
        background-repeat no-repeat
        background-size 100%
        display inline-block
        margin-right 4px
      .text
        position relative
        top -1px
    .arrow
      color rgba(255,255,255,1)
      margin-left 4px
  & > .bg
    z-index -1
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    filter blur(6px)
    height 134px
    img 
      width 100%
      height 100%
  & > .mask
    z-index 9
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    background rgba(7,17,27,.8)
    backdrop-filter blur(10px)
    overflow auto
    .mainWrap
      min-height 100%
      .main
        @extend .clearfix
        padding-bottom 96px
        padding-top 64px
        .title
          center()
          font-size 16px
          line-height 16px
          font-weight 700
          color rgba(255,255,255,1)
        .starsWrap
          height 24px
          margin 16px auto 28px
          width 80%
          text-align center  
        .line
          width 80%
          margin 0 auto
          .text
            margin -7px 12px
        .list
          width 80%
          margin 30px 45px
        .bulletin
          margin-top 24px
          font-size 12px
          font-weight 200
          color rgb(255,255,255)
          line-height 24px
          padding 0 48px 
    .footer
      margin-top -96px
      height 96px
      line-height 96px
      text-align center
      font-size 32px
      color rgba(255,255,255,.5)
</style>

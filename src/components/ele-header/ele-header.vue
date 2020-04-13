<template>
  <div class="header">
    <div class="headerTop">
      <div class="left">
        <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" class="avatar">
      </div>
      <div class="right">
        <div class="title">
          <i class="brand"></i>
          <span>嘉禾一品(温都水城店)</span>
        </div>
        <div class="info">
          <span>硅谷专送/38分钟送达</span>
        </div>
        <div class="support">
          <ele-icon class="icon" size="1" type="special"></ele-icon>
          <span type="text">在线支付满100，减99</span>
        </div>
      </div>
      <div class="btns">
        <span>5个</span>
        <i class="layout-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="headerBottom">
      <div class="content">
        <i class="icon"></i>
        <span class="text">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”</span>
      </div>
      <i class="layout-keyboard_arrow_right arrow"></i>
    </div>
    <div class="bg">
      <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" class="avatar">
    </div>
    <div class="mask">
      <div class="mainWrap">
        <div class="main">
          <span class="title">嘉禾一品(温都水城店)</span>
          <div class="starts"></div>
          <ele-line class="line">
            <span class="text">优惠信息</span>
          </ele-line>
          <ele-list class="list"></ele-list>
          <ele-line class="line">
            <span class="text">商家公告</span>
          </ele-line>
          <p class="bulletin">
              是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
              是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
          </p>
        </div>
      </div>
      <div class="footer">
        <i class="layout-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../ele-icon/ele-icon.vue'
import line from '../ele-line/ele-line.vue'
import list from '../ele-list/ele-list.vue'
export default {
  name:"ele-header",
  components:{
    "ele-icon":icon,
    "ele-line":line,
    "ele-list":list
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
@import "../../common/stylus/extend.styl"
.header
  background rgba(7,17,27,.5)
  & > .headerTop
    padding 24px 0 18px 24px
    position relative
    display flex 
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
        center()
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
    & > .btns
      center()
      position absolute
      right 12px
      bottom 16px
      background rgba(0,0,0,.2)
      font-size 10px
      color rgba(255,255,255,1)
      font-weight 200
      line-height 12px
      border-radius 14px
      height 24px
      width 48px
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
        .starts
          height 24px
          margin 16px auto 28px
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
      margin-top 96px
      height 96px
      line-height 96px
      text-align center
      font-size 32px
      color rgba(255,255,255,.5)
</style>

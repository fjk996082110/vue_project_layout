<template>
  <div class="foods">
    <div class="left">
      <img :src="food.icon" alt="">
    </div>
    <div class="right">
      <div class="title">{{food.name}}</div>
      <div class="description">{{food.description}}</div>
      <span class="ratings">
        <span class="sellInfo">月售{{food.sellCount}}份</span>
        <span class="commentInfo">好评率{{food.rating}}%</span>
      </span>
      <div class="prices">
        <span class="newPrice">
          <span>￥</span>
          <span>{{food.price}}</span>
        </span>
        <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ele-food",
  props:{
    food:Object
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
.foods
  display flex
  .left
    width 64px
    height 64px
    margin-right 10px
    img 
      width 100%
      height 100%
      background-repeat no-repeat
      background-size 100%
  .right
    font-size 10px
    color rgba(147,153,159,1)
    line-height 24px
    .title
      font-size 14px
      color rgba(7,17,27,1)
      line-height 14px
      font-weight 700
    .description
      margin 8px 0
    .ratings
      .sellInfo
        margin-right 12px
    .prices
      .newPrice
        color red
        margin-right 8px
        font-weight normal
        span:last-child
          font-size 14px
          font-weight 700
      .oldPrice
        text-decoration line-through
        font-weight 700
</style>
<template>
  <div class="stars" :class="`stars-${size}`">
    <div class="star" :style="{marginRight:`${mr}px`}" :class="item" v-for="(item,index) in scroreArr" :key="index"></div>
  </div>
</template>

<script>
export default {
  name:"ele-stars",
  props:{
    size:String,
    scrore:Number,
    mr:Number
  },
  computed: {
    scroreArr(){
      let arr=[]
      if(this.scrore===undefined)
        return ["off","off","off","off","off"]
      if(this.scrore<0)
        return ["off","off","off","off","off"]
      if(this.scrore>5)
        return ["on","on","on","on","on"]
      let stars = Math.floor(this.scrore * 2)/2;
      //满星的数量
      let fullStars = Math.floor(stars);
      //是否需要半星
      let needHalf =  (stars % 1) === 0 ? false:true;

      //构建评星数组
      for(let i=0;i<fullStars;i++){
          arr.push("on")
      }
      needHalf?arr.push("half"):"";
      while (arr.length < 5)
          arr.push("off")

      return arr;
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/minxin.styl"
.stars
    display inline-flex
    .star
        background-repeat no-repeat
        background-size 100%
    &.stars-24
        .star
            width 10px
            height 10px
            margin-right 6px
            &:last-child
                margin-right 0
            &.on
                bg-image(star24_on)
            &.half
                bg-image(star24_half)
            &.off
                bg-image(star24_off)
    &.stars-36
        .star
            width 15px
            height 15px
            margin-right 9px
            &:last-child
                margin-right 0
            &.on
                bg-image(star36_on)
            &.half
                bg-image(star36_half)
            &.off
                bg-image(star36_off)
    &.stars-48
        .star
            width 20px
            height 20px
            margin-right 12px
            &:last-child
                margin-right 0
            &.on
                bg-image(star48_on)
            &.half
                bg-image(star48_half)
            &.off
                bg-image(star48_off)
</style>
<template>
  <div class="stars" :class="`stars-${size}`">
    <div class="star" :class="item" v-for="(item,index) in scroreArr" :key="index"></div>
  </div>
</template>

<script>
export default {
  name:"ele-stars",
  props:{
    size:String,
    scrore:Number
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
      let allStar = Math.floor(this.scrore/0.5)
      console.log(allStar)
      let allNum = allStar/2
      for(let i=1;i<allNum;i++){
        arr.push("on")
      }
      let halfStar = this.scrore%1
      if(halfStar>0.5)
        arr.push("half")
      while(arr.length<5)
        arr.push("off")
      console.log(this.scrore,arr)
      return arr
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
<template>
  <div class="contorl">
       <i class="layout-remove_circle_outline remove" v-show="food.buyCount>0" @click="remove(food)"></i>
       <span v-show="food.buyCount">{{food.buyCount}}</span>
       <i class="layout-add_circle add" @click="add(food)"></i>
  </div>
</template>

<script>
export default {
  name:"ele-contorl",
  data() {
    return {
      showRemove:false
    }
  },
  props:{
    food:Object
  },
  methods: {
    add(food){
      this.$bus.$emit("add",food)
      this.showRemove=true
    },
    remove(food){
      this.$bus.$emit("remove",food)
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/minxin.styl"
    .contorl
        center()
        display inline-flex
        i
            display inline-block
            font-size 24px
            vertical-align middle
            color rgba(0,160,220,1)
            &.add
                position relative
                z-index: 1
            &.remove
                opacity 1
                transform translate3d(0,0,0) rotate(-720deg)
        span
            display inline-block
            width 24px
            text-align center
            font-size 10px
            vertical-align middle
            color rgba(147,153,159,1)
</style>



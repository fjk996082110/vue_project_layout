<template>
  <div class="lineWrap">
    <span class="line"></span>
    <slot>
      <span>default</span>
    </slot>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  name:"ele-line"
}
</script>

<style lang="stylus" scoped>
  .lineWrap
    display flex
    align-content center
    .line
      flex 1
      height 1px
      background rgba(255,255,255,1)
    span 
      font-size 14px
      font-weight 700
      color rgb(255,255,255)
      line-height 14px
</style>
<template>
  <div class="wrap">
    <i class="layout-close" style="font-size:30px" @click="$router.replace('/Profile')"></i>
    <div class="inner">
      用户ID:{{user._id}}
      <br/>
      用户名/电话:{{user.name?user.name:user.phone}}
    </div>
    <van-button type="warning" class="btn" @click="loginOut">退出</van-button>
  </div>
</template>

<script>
import {Button} from 'vant'
import {mapState,mapActions} from 'vuex'
import {DELUSER} from '../../store/mutation_types'
export default {
  name:"Detail",
  computed: {
    ...mapState(["user"])
  },
  components:{
    [Button.name]:Button
  },
  methods: {
    ...mapActions([DELUSER]),
    loginOut(){
      this[DELUSER]()
      this.$router.replace('/Profile')
    }
  },
}
</script>

<style lang="stylus" scoped>
.inner
  width 95%
  height 50px
  margin 50px auto
  color skyblue
  font-size 20px
  text-align 50px
  border 1px solid black
  position relative
  .btn
    position absolute
    left 0
    right 0
    top 150px
    bottom 0
    margin auto
</style>
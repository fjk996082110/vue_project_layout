<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
import {LOGINAUTO} from './store/mutation_types'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  methods: {
    ...mapActions([LOGINAUTO])
  },
  created(){
    this[LOGINAUTO]()
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    overflow hidden
</style>



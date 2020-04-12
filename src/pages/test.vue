<template>
  <div>
    {{test}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"test",
  computed: {
    ...mapState(["test"])
  },
  async mounted(){
    let result = await this.$http.seller.getSeller()
    console.log(result)
  }
}
</script>

<style>

</style>
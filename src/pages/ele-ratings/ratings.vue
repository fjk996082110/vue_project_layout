<template>
  <div class="ratings" ref="ratingContent">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <ele-star class="star" size="36" :scrore="seller.serviceScore" :mr="2"></ele-star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <ele-star class="star" size="36" :scrore="seller.foodScore" :mr="2"></ele-star>
            <span class="score">{{seller.foodScore}}</span></div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <ele-select :ratings="ratings" :recommendShow="recommendShow" :showOnlyText="showOnlyText"></ele-select>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <ele-star class="star" size="24" :scrore="rating.score" :mr="1"></ele-star>
                <span class="delivery" v-if="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span :class="rating.rateType===0?`layout-thumb_up`:`layout-thumb_down`"></span>
                <!-- 购买商品的显示 -->
                <div class="buyFrom" v-if="rating.recommend">
                  <div class="contentForm" v-for="(menu,index) in rating.recommend" :key="index">
                    <span>{{menu}}</span>
                  </div>
                </div>
              </div>
              <div class="time">{{rating.rateTime|dateString}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import {GETRATINGS} from '../../store/mutation_types'
import icon from '../../components/ele-icon/ele-icon.vue'
import star from '../../components/ele-stars/ele-stars.vue'
import select from '../../components/ele-select/ele-select.vue'
export default {
  name:"ele-ratings",
  data() {
    return {
      selectType:3,
      onlyText:false
    }
  },
  components:{
    "ele-star":star,
    "ele-select":select
  },
  computed: {
    ...mapState(["ratings","seller"]),
    filterRatings(){
      if(this.onlyText===false){
        return this.ratings.filter((rating)=>{
          return (this.selectType === 3 || rating.rateType === this.selectType)
        })
      }else{
        return this.ratings.filter((rating)=>{
          return (this.selectType === 3 || rating.rateType === this.selectType) && rating.text !== ""
        })
      }
    }
  },
  methods: {
    ...mapActions([GETRATINGS]),
    recommendShow(index=3){
      this.selectType = index
    },
    showOnlyText(){
      this.onlyText = true
    }
  },
  async mounted(){
    await this[GETRATINGS]()
    new BScroll(this.$refs.ratingContent)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl"

  .ratings
    position: absolute
    top: 175px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    background: #fff
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            margin: 0 12px
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
    .rating-wrapper
      padding: 0 18px
      overflow hidden
      .rating-item
        one-px(rgba(7, 17, 27, 0.1))
        display: flex
        padding: 18px 0 
        .avatar
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius: 50%
        .content
          position: relative
          flex: 1
          .name
            margin-bottom: 4px
            line-height: 12px
            font-size: 10px
            color: rgb(7, 17, 27)
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .star
              margin-right: 6px
            .delivery
              display: inline-block
              vertical-align: top
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
          .text
            margin-bottom: 8px
            line-height: 18px
            color: rgb(7, 17, 27)
            font-size: 12px
          .recommend
            line-height: 16px
            font-size: 0
            display flex
            .layout-thumb_up, .layout-thumb_down, .item
              display: inline-block
              margin: 0 8px 4px 0
              font-size: 9px
              color red
            .layout-thumb_up
              color: $yellow
            .layout-thumb_down
              color: rgb(147, 153, 159)
            .buyFrom
              width 100%
              .contentForm
                float left
                margin-top -2px
                margin-right 8px
                padding 0 12px
                width 50px
                height 16px
                background rgba(255,255,255,1)
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                border 1px solid rgba(7,17,27,.1)
                border-radius 2px
                span 
                  font-size 9px
            .item
              padding: 0 6px
              border: 1px solid rgba(7, 17, 27, 0.1)
              border-radius: 1px
              color: rgb(147, 153, 159)
              background: #fff
          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
</style>


<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">二八外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:showLogin===0}" @click="showLogin=0">短信登录</a>
          <a href="javascript:;" :class="{on:showLogin===1}" @click="showLogin=1">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:showLogin===0}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phoneNumber" name="phone" v-validate="`required|phone`" />
              <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
              <button :disabled="!phoneNumberIsRight" class="get_verification" 
               :class="{highLight:phoneNumberIsRight}" @click.prevent="getCode" ref="getCode">
                {{times>0?`已发送${times}s`:`获取验证码`}}
               </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="captcha">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:showLogin===1}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="用户名" v-model="username" name="name" v-validate="'required'" />
                <span style="color: red;" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </section>
              <section class="login_verification">
                <input :type="lookPassword ? 'tel' : 'password'" maxlength="8" placeholder="密码" v-model="password" ref="passwordInput"
                name="pwd" v-validate="'required'" />
                <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                <div class="switch_button" :class="{on:lookPassword}" @click="lookPassword=!lookPassword">
                  <div class="switch_circle" :style="{left:lookPassword?'24px':'-1px'}"></div>
                  <span class="switch_text"></span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" name="captcha" v-validate="{required: true,regex: /^[0-9a-zA-Z]{4}$/}" />
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" ref="imgCaptcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.replace('/Profile')">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
  export default {
    name:"login",
    data() {
      return {
        showLogin:1,  //显示手机号登陆或密码登陆  1密码登陆 0手机号登陆
        phoneNumber:"", //输入的手机号
        username:"",  //输入的用户名
        password:"",  //输入的密码
        captcha:"", //输入的图片验证码
        lookPassword:false, //是否显示密码
        phoneReg:/^1\d{10}/igm, //手机验证
        times:0 //验证码发送时间
      }
    },
    computed: {
      phoneNumberIsRight(){
        return this.phoneReg.test(this.phoneNumber)
      }
    },
    methods: {
      getCaptcha(){
        this.$refs.imgCaptcha.src='http://localhost:4000/captcha?time='+Date.now()
      },
      async getCode(){
        this.times = 12;
        this.$refs.getCode.disabled='disabled'
        this.timer = setInterval(()=>{
            if(this.times > 0)
                this.times--
            else
                clearInterval(this.timer)
        },1000)
        //发送请求
        const {code,msg} = await this.$http.login.getCode({
          phone:this.phoneNumber
        })
        if(code===0) Toast.success('短信发送成功！')
        if(code===1) Toast.fail('短信发送失败！',msg)
      },
      async login(){
        if(this.showLogin===1){
          const flag = await this.$validator.validateAll(["name","pwd","captcha"])
          if(!flag) return
          console.log('username')
        }else if(this.showLogin===0){
          const flag = await this.$validator.validateAll(["phone","code"])
          if(!flag) return
          console.log('message')
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
              .highLight
                color green
                font-weight 800
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>

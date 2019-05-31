<template>
  <div class="login">
    <div class="container">
      <div class="content">
        <h4>登录/注册</h4>
        <el-form :model="rueform" :rules="rules" ref="ruleForms" >
          <el-form-item  prop="phone" class="phone">
            <div class="input-wraper">
              <el-input class="phone-wrap" v-model="rueform.phone" clearable placeholder="请输入您的手机号"></el-input>
              <span class="area-code">+86</span>
              <div class="code-btn" @click="sendCodeTime" v-show="getCheckTime <= 0">发送验证码</div>
              <div class="code-btn btn-disable" v-show="getCheckTime > 0">{{getCheckTime}}s后重发</div>
            </div>
          </el-form-item>
          <el-form-item  prop="verify" class="verify">
            <div class="input-wraper">
              <el-input clearable class="text" placeholder="请输入您的验证码" v-model="rueform.verify"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <span @click="login" class="login-btn" >确定</span>
      </div>
    </div>
  </div>
</template>

<script>
  const md5 = require('js-md5');
  export default {
    name: 'login',
    data() {
      var checkPhone = (rule, value, callback) => {
        var reg = /^1[3-9]\d{9}$/; //验证规则
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          console.log(reg.test(value))
          if (reg.test(value)) {
            callback();
          } else {
            callback(new Error('请输入正确手机号'));
          }

        }
      }
      var checkVerify = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {

          callback();
        }
      }
      return {
        btn: false,
        rueform: {
          phone: "", // 手机号
          verify: "", // 验证码
        },
        rules: {
          phone: [
            {validator: checkPhone, trigger: 'blur'},
            {}
          ],
          verify: [
            {validator: checkVerify, trigger: 'blur'},
            { min: 1, max: 4, message: '验证码长度不对', trigger: 'blur' }
          ],

        },
        intervalCode: null,
        getCheckTime: 0, // 验证码时间
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      //从URL获取参数
      getQuery(name){
        let reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
        let r=window.location.search.substr(1).match(reg);
        if(r!=null){
          return unescape(r[2]);
        } else{
          return null
        }
      },
      //计算设备ID
      deviceId() {
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        let deviceId = s.join("");
        return deviceId;
      },
      //发送验证码
      sendCodeTime(){
        if(this.rueform.phone && /^[1][3,4,5,7,8][0-9]{9}$/.test(this.rueform.phone)){
          // 开始倒计时
          this.getCheckTime = 60;
          this.intervalCode = setInterval(() => {
            this.getCheckTime = this.getCheckTime - 1;
            if (this.getCheckTime <= 0) {
              window.clearInterval(this.intervalCode);
            }
          }, 1000);
          //请求后端接口获取验证码
          this.$axios({
            method: 'post',
            url: `${this.$baseURL}/v1/sms/code`,
            data: this.$querystring.stringify({
              phone: "+86" + this.rueform.phone, //手机号
              type: 3 //1-注册，2-修改密码, 3-登录
            })
          }).then(res => {
          }).catch(error => {
            console.log(error);
          })
        }
      },
      //登录
      login(){
        let loginFormData = {
          phone: "+86" + this.rueform.phone,//手机号
          code: this.rueform.verify,//短信验证码
          device_id: this.deviceId(), //设备ID
          platform: 1,//1-web,2-安卓,3-iOS,4-大数据 5-公众号
          type: 1,// 1-手机验证码登录 2-微信登录
        };
        this.$axios({
          method: 'POST',
          url: `${this.$baseURL}/v1/appraisal/sessions/phone`,
          data: this.$querystring.stringify(loginFormData)
        }).then(res => {
          sessionStorage.setItem("myLogin", JSON.stringify(res.data.data));
          this.saveRelationship()
        }).catch(error => {
        })
      },
      //保存人员关系
      saveRelationship(){
        let formData = {
          superior:{"mobile":"17510001001","name":"上级"},
          subordinate:{"mobile":this.rueform.phone,"name":"下级"}
        };
        let appId = "23001"
        let developkey  = "5ad47d9bcfd64bb1b572d4070c962ee8"
        let timestamp = (new Date()).getTime()
        let sign = md5("/sales/saveSalesRelationship"+ appId + developkey + timestamp)
        this.$axios({
          method: 'POST',
          url: `http://119.23.14.40:9200/sales/saveSalesRelationship?appId=${appId}&timestamp=${timestamp}&sign=${sign}`,
          data: formData
        }).then(res => {
          this.$router.push("/treasureQrCode")
        }).catch(error => {
        })
      }

    },
    watch: {},
    computed: {},
    components: {}
  }
</script>

<style lang="stylus">
  .login
    .container
      .content
        margin 75px 50px
        h4
          font-size 46px /*px*/
          color #333
          margin-bottom 100px
        .login-btn
          width 650px
          height 90px
          display inline-block
          line-height 90px
          text-align center
          background-color #950101
          font-size 36px /*px*/
          color #ffffff
          margin-top 120px
          outline none
        .el-form
          .phone
            .el-form-item__error
              top 80px
          .el-form-item
            height 100px
            .phone-wrap
              .el-input__inner
                padding 0 120px
              .el-input__suffix
                margin-right 240px
            .el-input
              .el-input__inner
                height 80px
                font-size 28px /*px*/
                border none
                border-bottom 1px solid #bfbfbf /*no*/
                border-radius unset
            .el-form-item__error
              font-size 28px /*px*/
              margin-top 10px
              z-index 10
            .area-code
              font-size 32px
              color #333333
              position: relative
              top: -60px
              padding-right 30px
              border-right 1px solid #bfbfbf /*no*/
            .code-btn
              width 200px
              height 70px
              background-color #950101
              line-height 70px
              text-align center
              font-size 24px
              color: #fff
              cursor pointer
              float right
              position relative
              top -84px
              right 10px
            .btn-disable
              background-color #bfbfbf

</style>

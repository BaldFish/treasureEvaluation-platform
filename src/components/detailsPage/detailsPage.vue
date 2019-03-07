<template>
  <div class="detailsPage">
    <div class="swiper_wrap">
      <swiper :options="swiperOption" class="awesome_swiper" ref="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index" v-if="slides.length">
          <img :src="slide.url" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="result_wrap">
      <div class="price_total clearfix">
        <div class="price fl">¥<span>1778800.00</span></div>
        <div class="total fr">累计鉴宝人数: 9999个</div>
      </div>
      <div class="title">
        <h3>清宣统官造铜胎鎏银画珐珐琅琅奖牌</h3>
      </div>
      <div class="result">
        <div class="img_true"><img src="@/common/images/true1.png" alt="真"></div>
        <div class="percentage_box">
          <span class="true">80%</span>
          <span class="false">20%</span>
          <my-progressBar :percentage="result.percentage"></my-progressBar>
        </div>
        <div class="img_false"><img src="@/common/images/false1.png" alt="假"></div>
      </div>
    </div>
    <div class="line20"></div>
    <div class="num">
      <span>数量：</span>
      <span>共2件</span>
    </div>
    <div class="line20"></div>
    <div class="intro_wrap">
      <h4 class="intro"><span></span>商品简介</h4>
      <ul class="content">
        <li class="name"><span>名称：</span><span>清乾隆早期铜胎掐丝珐琅花鸟纹尊</span></li>
        <li class="price_year"><span>价格：</span><span>17788000</span><span>年代：</span><span>清乾隆</span></li>
        <li class="size"><span>尺寸：</span><span>直径28cm、通高33cm、罐高20cm直径28cm、通高33cm、罐高20cm</span></li>
        <li class="description"><span>描述：</span><span>清乾隆早期铜胎掐丝珐琅花鸟纹尊全品，罐外铜活为清
			代法国所配，罐可转动。法国所配，罐可转动。</span></li>
      </ul>
    </div>
    <div class="line20"></div>
    <div class="message_wrap">
      <h4 class="message"><span></span>鉴宝留言</h4>
      <!--<div class="login">
        <p>您未 <span>登陆</span>，请先登录后查看留言；</p>
        <p>注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p>
      </div>-->
      <div class="underway">
        <ul>
          <li class="name"><span>名称：</span><span>清乾隆早期铜胎掐丝珐琅花鸟纹尊</span></li>
          <li class="price_year"><span>悬赏版通金额：</span><span>170000.00</span><span>年代：</span><span>清乾隆</span></li>
          <li class="time"><span>鉴宝结束时间：</span><span>2019-02-28 14:12:34</span></li>
          <li class="remark"><p>*注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p></li>
        </ul>
      </div>
      <!--<div class="waiting">
        <p>注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p>
      </div>-->
    </div>
    <div class="list_wrap">
      <div class="list">
        <div class="line10"></div>
        <div class="list_content">
          <ul>
            <li class="phone_identity">
              <span>186****1680</span>
              <span>古瓷器专家</span>
            </li>
            <li class="total">
              <p>累计鉴定2097次</p>
            </li>
            <li class="time_launch">
              <span>鉴宝时间：</span>
              <span>2019-02-28 13:12</span>
              <span>鉴定发起人：</span>
              <span>139****2412</span>
            </li>
            <li class="verdict">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
            </li>
          </ul>
          <div class="list_true"><img src="@/common/images/true2.png" alt="真"></div>
        </div>
      </div>
      <div class="list">
        <div class="line10"></div>
        <div class="list_content">
          <ul>
            <li class="phone_identity">
              <span>186****1680</span>
              <span>古瓷器专家</span>
            </li>
            <li class="total">
              <p>累计鉴定2097次</p>
            </li>
            <li class="time_launch">
              <span>鉴宝时间：</span>
              <span>2019-02-28 13:12</span>
              <span>鉴定发起人：</span>
              <span>139****2412</span>
            </li>
            <li class="verdict">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
            </li>
          </ul>
          <div class="list_false"><img src="@/common/images/false2.png" alt="真"></div>
        </div>
        
      </div>
    </div>
    <div class="dialog_contact">
      <el-dialog
        title="提示"
        :visible.sync="contactDialogVisible"
        width="76%"
        center>
        <h4>联系卖家</h4>
        <p>18787627373</p>
        <div class="btn">
          <span>取消</span>
          <a href="tel:18787627373"><span>呼叫</span></a>
        </div>
      </el-dialog>
    </div>
    <div class="dialog_launch">
      <el-dialog
        title="提示"
        :visible.sync="launchDialogVisible"
        width="76%"
        center>
        <h4>发起鉴宝</h4>
        <div class="select_time">
          <span class="til">鉴宝时间：</span>
          <label v-for="(item,index) of selectTime" :class="{'active': index===dayIndex,}"@click="tabChangeDay(index)">
            <a>{{item}}</a><input type="radio" :value="item" v-model="dayRadio">
          </label>
        </div>
        <div class="money_wrap">
          <span class="til">悬赏版通：</span>
          <input type="text" v-model="money">
        </div>
        <div class="line8"></div>
        <div class="send">
          <span>请输入手机号186****1680短信验证码</span>
          <span>发送</span>
        </div>
        <div class="currency clearfix">
          <span>板通</span>
          <span class="fr"></span>
        </div>
        <div class="code">
          <input type="text" v-model="code" placeholder="请输入短信验证码">
        </div>
        <div class="btn">
          <span>提交</span>
        </div>
      </el-dialog>
    </div>
    <div class="dialog_authenticate">
      <el-dialog
        title="提示"
        :visible.sync="authenticateDialogVisible"
        width="76%"
        center>
        <h4>鉴宝</h4>
        <div class="select_result">
          <span class="til">鉴宝结果：</span>
          <label v-for="(item,index) of selectResult" :class="{'active': index===resultIndex,}" @click="tabChangeResult(index)">
            <a>{{item}}</a><input type="radio" name="" :value="item" v-model="resultRadio">
          </label>
        </div>
        <div class="comment_wrap">
          <span class="til">评论：</span>
          <div class="comment">
            <textarea v-model="comment" minlength="10"  maxlength="500"></textarea>
            <span class="tips"><span>{{comment.length}}</span>/500(评价必须多于10个字)</span>
          </div>
        </div>
        <div class="btn">
          <span>提交</span>
        </div>
      </el-dialog>
    </div>
    <div class="footer_wrap">
      <span class="launch">发起鉴宝</span>
      <span class="contact">联系卖家</span>
    </div>
  </div>
</template>

<script>
  import myProgressBar from "../progressBar/progressBar"
  
  export default {
    name: "detailsPage",
    components: {myProgressBar},
    data() {
      return {
        slides: [
          {
            url: require('../../common/images/banner1.png')
          },
          {
            url: require('../../common/images/banner2.jpg')
          },
          {
            url: require('../../common/images/banner3.jpg')
          }
        ],
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            loop: true,
          },
          pagination: {
            el: '.swiper-pagination'
          },
        },
        result: {
          percentage: 80
        },
        contactDialogVisible: false,
        launchDialogVisible:false,
        authenticateDialogVisible:false,
        dayIndex:1,
        resultIndex:0,
        dayRadio:"14天",
        resultRadio:"真",
        selectTime:["7天","14天","1个月"],
        selectResult:["真","假"],
        money:"",
        code:"",
        comment:"",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjI5OTg5NTksInVzZXJfaWQiOiI1YTZiZTc0YTU1YWFmNTAwMDFhNWUyNTAiLCJkZXZpY2VfaWQiOiJbMjE4IDI0IDI4IDEyOCAxMTIgMTc0IDEwNSA1MyAxOTggMTg5IDExOCA1OSAyMCA2NyAxNjIgMjFdIn0.8rJXVnqIr7DDutYluGTdX6XfnxhWQNhPlUCg1jw5PHQ",
      }
    },
    created() {
    },
    beforeMount() {
      this. getCommentList()
    },
    mounted() {
    },
    watch: {
    },
    computed: {},
    methods: {
      //获取鉴宝评论列表
      getCommentList(){
        this.$axios({
          method:'GET',
          url:`${this.$baseURL}/v1/appraisal/evaluation?page=1&limit=10`,
          'X-Access-Token':`${this.token}`
        }).then(res=>{
          console.log(res.data)
        }).catch(error=>{
          console.log(error)
        })
      },
      //切换鉴宝天数
      tabChangeDay(index){
        this.dayIndex=index
      },
      //切换鉴宝真假结果
      tabChangeResult(index){
        this.resultIndex=index
      }
    },
  }
</script>

<style scoped lang="stylus">
  .detailsPage {
    width 750px
    margin 0 auto
    
    .result_wrap {
      padding 0 25px 40px
      
      .price_total {
        font-size 0
        padding-top 30px
        
        .price {
          color: #ac0101;
          font-size 24px; /*px*/
          font-weight bold
          
          span {
            display inline-block
            font-size 36px; /*px*/
            line-height 36px; /*px*/
            font-weight bold
          }
        }
        
        .total {
          color: #999999;
          font-size 24px; /*px*/
          line-height 36px; /*px*/
        }
      }
      
      .title {
        padding-top 44px
        
        h3 {
          font-size: 36px; /*px*/
          color: #333333;
          font-weight bold
        }
      }
      
      .result {
        font-size 0
        margin-top 48px
        text-align center
        
        .img_true {
          display inline-block
          vertical-align middle
          width 51px
          height 52px
          img{
            width 100%
            height 100%
          }
          
        }
        
        .percentage_box {
          display inline-block
          font-size 20px; /*px*/
          vertical-align middle
          position relative
          margin 0 20px;
          
          .true {
            position absolute
            left 5px
            bottom 26px
            font-size: 26px; /*px*/
            color: #333333;
            font-weight bold
          }
          
          .false {
            position absolute
            right 5px
            bottom 26px
            font-size: 26px; /*px*/
            color: #333333;
            font-weight bold
          }
        }
        
        .img_false {
          display inline-block
          vertical-align middle
          width 51px
          height 52px
          img{
            width 100%
            height 100%
          }
        }
      }
    }
    
    .line20 {
      width 100%
      height 20px
      background-color #f6f6f6
    }
    
    .num {
      width 750px
      height 128px
      padding 0 25px
      
      span {
        font-size: 34px; /*px*/
        line-height 128px
      }
      
      span:first-child {
        color: #333333;
        font-weight bold
      }
      
      span:last-child {
        color: #999999;
      }
    }
    
    .intro_wrap {
      padding 45px 25px 50px
      
      .intro {
        font-size: 32px; /*px*/
        color: #333333;
        font-weight bold
        
        span {
          display inline-block
          width 6px
          height 32px
          background-color: #950101;
          vertical-align top
          margin-right 16px
        }
      }
      
      .content {
        li {
          margin-top 30px
          font-size 0
          
          span {
            font-size 24px; /*px*/
            display inline-block
            vertical-align top
            line-height 30px
            font-weight bold
            color: #999999;
          }
          
          span:last-child {
            width 590px
            color: #333333;
          }
        }
        
        .price_year {
          span:nth-child(2) {
            width 250px
            color: #333333;
          }
          
          span:nth-child(4) {
            width 250px
            color: #333333;
          }
        }
      }
    }
    
    .message_wrap {
      padding 45px 25px 0
      
      .message {
        font-size: 32px; /*px*/
        color: #333333;
        font-weight bold
        
        span {
          display inline-block
          width 6px
          height 32px
          background-color: #950101;
          vertical-align top
          margin-right 16px
        }
      }
      
      .login {
        padding-bottom 30px
        
        p {
          width: 480px;
          margin 40px auto
          font-size: 28px; /*px*/
          line-height 36px
          color: #999999;
          text-align center
          
          span {
            font-size: 36px;
            color: #950101;
          }
        }
        
        p:last-child {
          font-size: 24px; /*px*/
          line-height 28px
        }
        
      }
      
      .underway {
        margin 30px auto
        width 100%
        height 100%
        background url("../../common/images/left.png") no-repeat left top,
        url("../../common/images/right.png") no-repeat right bottom
        padding 30px
        background-color #f6f6f6
        
        li {
          font-size 0
          margin-top 24px
          
          p {
            font-size: 24px; /*px*/
            line-height 30px
            color: #999999;
            width 640px
            margin 0 auto
            text-align center
            font-weight bold
          }
          
          span {
            display inline-block
            font-size 24px; /*px*/
            vertical-align top
            line-height 30px
            font-weight bold
            color: #999999;
          }
        }
        
        .name {
          margin-top 0
          
          span:last-child {
            width 500px
            color: #333333;
          }
        }
        
        .price_year {
          span:nth-child(2) {
            width 200px
            color: #333333;
          }
          
          span:nth-child(4) {
            width 155px
            color: #333333;
          }
        }
        
        .time {
          span:last-child {
            width 400px
            color: #333333;
          }
        }
      }
      
      .waiting {
        padding 60px 0
        
        p {
          width: 310px;
          margin 0 auto
          font-size: 24px; /*px*/
          line-height 28px
          color: #999999;
        }
      }
    }
    
    .list_wrap {
      .list {
        .line10 {
          width 740px
          height 9px
          margin 0 auto
          background-color #f6f6f6
        }
        
        .list_content {
          width 700px
          margin 0 auto
          padding-top 20px
          padding-bottom 20px
          position relative
          
          ul {
            li {
              margin-top 20px
              font-size: 0;
              color: #999999;
            }
            
            .phone_identity {
              span {
                font-size: 24px; /*px*/
                display inline-block
              }
              
              span:first-child {
                font-size: 28px; /*px*/
                font-weight bold
                color: #333333;
                margin-right 46px
              }
            }
            
            .total {
              font-size: 24px; /*px*/
            }
            
            .time_launch {
              font-size: 24px; /*px*/
              
              span:nth-child(2) {
                width 280px
              }
            }
            
            .verdict {
              p {
                font-size: 24px; /*px*/
                min-height 200px
              }
            }
          }
          .list_true {
            position absolute
            top 10px
            right 25px
            width 73px
            height 75px
            img{
              width 100%
              height 100%
            }
          }
  
          .list_false {
            position absolute
            top 20px
            right 25px
            width 73px
            height 75px
            img{
              width 100%
              height 100%
            }
          }
        }
      }
      
      .list:first-child {
        .line10 {
          display none
        }
        
        .list_content {
          padding-top 10px
          padding-bottom 20px
          
          ul {
            .phone_identity {
              margin-top 0
            }
          }
        }
        
        .true {
          position absolute
          top 10px
          right 25px
          width 75px
          height 75px
          background url("../../common/images/true2.png") no-repeat center
        }
        
        .false {
          position absolute
          top 10px
          right 25px
          width 75px
          height 75px
          background url("../../common/images/false2.png") no-repeat center
        }
      }
    }
    
    .footer_wrap {
      width 750px
      box-shadow: -3px -11px 46px 8px rgba(152, 152, 152, 0.2);
      margin 0 auto
      font-size 0
      span {
        display inline-block
        width 375px;
        text-align center
        line-height 101px;
      }
      
      .launch {
        font-size: 34px; /*px*/
        color #950101
      }
      
      .contact {
        font-size: 34px; /*px*/
        background-color #950101
        color #ffffff
      }
    }
  }
</style>
<style lang="stylus">
  .swiper_wrap {
    width 750px
    height 750px
    margin 0 auto
    box-shadow: inset -2px -8px 19px 0px rgba(8, 0, 2, 0.03);
    /*.swiper {
      .wc-slide {
        width 750px
        height 750px
        img {
          max-width 750px
          max-height 750px
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      
      .wc-pagination {
        bottom 16px
        .wc-dot {
          height: 14px;
          width: 14px;
          background-color: #950101;
          opacity: 0.3;
          margin: 0 9px;
          border-radius: 50%;
        }
        
        .wc-dot-active {
          opacity: 1;
          background: #5226f3;
        }
      }
    }*/
    
    .awesome_swiper {
      .swiper-wrapper {
        width 750px
        height 750px
        text-align center
        
        img {
          max-width 750px
          max-height 750px
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      
      .swiper-pagination-bullets {
        box-sizing: border-box;
        padding-right: 46px;
        bottom 30px
      }
      
      .swiper-pagination {
        text-align right
        line-height 24px
        
        .swiper-pagination-bullet {
          width 10px
          height 10px
          background-color: #950101;
          opacity: 0.3;
          margin 4px
        }
        
        .swiper-pagination-bullet-active {
          background-color: #ac0101;
          opacity: 1;
        }
      }
    }
  }
  
  .dialog_contact {
    .el-dialog {
      margin-top 35vh !important
      
      .el-dialog__header {
        display none
      }
      
      .el-dialog__body {
        padding 0
        height 334px
        padding-top 15px
        font-size 0
        h4 {
          width 466px
          height 61px
          margin 0 auto
          text-align center
          line-height 61px
          font-size: 36px;/*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
  
        }
        
        p {
          margin 65px auto
          text-align center
          font-size: 48px;/*px*/
          font-weight bold
          color: #333333;
        }
        .btn{
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          span {
            width 285px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px;/*px*/
            color: #950101;
          }
          a{
            span{
              background-color #950101
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .dialog_launch {
    .el-dialog {
      margin-top 28vh !important
    
      .el-dialog__header {
        display none
      }
    
      .el-dialog__body {
        padding 0
        padding-top 15px
        font-size 0
        h4 {
          width 466px
          height 61px
          margin 0 auto
          text-align center
          line-height 61px
          font-size: 36px;/*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        
        }
      
        .select_time{
          text-align center
          margin-top 28px
          margin-bottom 38px
          .til{
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px;/*px*/
            color: #333333;
            vertical-align top
          }
          label{
            font-size 0
            a{
              display inline-block
              background-color: #999999;
              font-size: 26px;/*px*/
              color: #ffffff;
              width 88px
              height 44px
              line-height 44px
              margin-right 10px
            }
          }
          .active{
            a{
              background-color #950101
            }
          }
        }
        .money_wrap{
          text-align center
          margin-top 28px
          margin-bottom 38px
          font-size 0
          .til{
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px;/*px*/
            color: #333333;
            vertical-align top
          }
          input{
            width 290px
            height 44px
            padding-left 20px
            font-size: 26px;/*px*/
            color: #999999;
            vertical-align top
            border: solid 3px #bfbfbf;
            background-color #ffffff
          }
        }
        .line8{
          width 100%
          height 8px
          background-color #eeeeee;
        }
        .send{
          margin-top 32px
          font-size 0
          text-align center
          span:first-child{
            display inline-block
            font-size 22px;/*px*/
          }
          span:last-child{
            display inline-block
            font-size 24px;/*px*/
            color: #ffffff;
            width 100px
            height 44px
            line-height 44px
            background-color #950101;
            margin-left 12px
          }
        }
        .currency{
          height 32px
          font-size 0
          padding-left 40px
          padding-right 40px
          margin-top 40px
          span{
            display inline-block
            font-size: 30px;/*px*/
            color: #333333;
            line-height 32px
          }
          span:last-child{
            width 17px
            height 32px
            background-image: url(../../common/images/jiantou.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
        }
        .code{
          text-align center
          input{
            padding-left 25px
            width 490px
            height 50px
            font-size 20px;/*px*/
            margin-top 24px
            margin-bottom 48px
            color #999999
            border: solid 1px #bfbfbf;
          }
        }
        .btn{
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          span {
            width 570px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px;/*px*/
            background-color #950101;
            color: #ffffff;
          }
        }
      }
    }
  }
  .dialog_authenticate {
    .el-dialog {
      margin-top 28vh !important
    
      .el-dialog__header {
        display none
      }
    
      .el-dialog__body {
        padding 0
        padding-top 15px
        font-size 0
        h4 {
          width 466px
          height 61px
          margin 0 auto
          text-align center
          line-height 61px
          font-size: 36px;/*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        
        }
      
        .select_result{
          text-align center
          margin-top 28px
          margin-bottom 38px
          .til{
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px;/*px*/
            color: #333333;
            vertical-align top
          }
          label{
            font-size 0
            a{
              display inline-block
              background-color: #999999;
              font-size: 26px;/*px*/
              color: #ffffff;
              width 167px
              height 59px
              line-height 59px
              margin-right 10px
            }
          }
          .active{
            a{
              background-color #950101
            }
          }
        }
        .comment_wrap{
          text-align center
          margin-top 28px
          margin-bottom 38px
          font-size 0
          
          .til{
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px;/*px*/
            color: #333333;
            vertical-align top
          }
          .comment{
            display inline-block
            width: 384px;
            height: 522px;
            border: solid 3px #bfbfbf;
            padding 15px
            background-color #ffffff
            position relative
            textarea{
              width 100%
              min-height 452px
              border none
              font-size: 26px;/*px*/
              color: #999999;
              vertical-align top
              background-color #ffffff
            }
            .tips{
              display inline-block
              position absolute
              bottom 15px
              right 15px
              font-size: 22px;/*px*/
              color: #999999;
            }
          }
        }
        .btn{
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          span {
            width 570px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px;/*px*/
            background-color #950101;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>

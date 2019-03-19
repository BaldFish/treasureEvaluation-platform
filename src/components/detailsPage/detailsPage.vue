<template>
  <div class="detailsPage">
    <div class="list_wrap">
      <div class="bscroll" ref="bscroll">
        <div class="bscroll_container">
          <div class="drop_down" v-if="dropDown">刷新中...</div>
          <div class="swiper_wrap">
            <swiper :options="swiperOption" class="awesome_swiper" ref="swiperOption">
              <swiper-slide v-for="(slide, index) in assetInfo.img" :key="index" v-if="assetInfo.img.length">
                <img :src="slide" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination" v-if="assetInfo.img.length>1"></div>
            </swiper>
          </div>
          <div class="result_wrap">
            <div class="price_total clearfix">
              <div class="price fl">¥<span>17000.00</span></div>
              <div class="total fr">累计鉴宝人数: {{assetInfo.people_count}}个</div>
            </div>
            <div class="title">
              <h3>{{assetInfo.name}}</h3>
            </div>
            <div class="result">
              <div class="img_true"><img src="@/common/images/true1.png" alt="真"></div>
              <div class="percentage_box">
                <span class="true">{{assetInfo.result}}%</span>
                <span class="false">{{100-assetInfo.result}}%</span>
                <my-progressBar :percentage="assetInfo.result"></my-progressBar>
              </div>
              <div class="img_false"><img src="@/common/images/false1.png" alt="假"></div>
            </div>
          </div>
          <div class="line20"></div>
          <div class="num">
            <span>数量：</span>
            <span>共{{assetInfo.count}}件</span>
          </div>
          <div class="line20"></div>
          <div class="intro_wrap">
            <h4 class="intro"><span></span>商品简介</h4>
            <ul class="content">
              <li class="name"><span>名称：</span><span>{{assetInfo.name}}</span></li>
              <li class="price_year"><span>价格：</span><span>17000.00</span><span>年代：</span><span>{{assetInfo.age}}</span></li>
              <li class="size"><span>尺寸：</span><span>直径28cm、通高33cm、罐高20cm直径28cm、通高33cm、罐高20cm</span></li>
              <li class="description"><span>描述：</span><span>{{assetInfo.desc}}</span></li>
            </ul>
          </div>
          <div class="line20"></div>
          <div class="message_wrap">
            <h4 class="message"><span></span>鉴宝留言</h4>
            <div class="login" v-if="!login">
              <p>您未
                <router-link to="/login">登陆</router-link>
                ，请先登录后查看留言；
              </p>
              <p>注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p>
            </div>
            <div class="underway" v-if="login&&assetInfo.appraisal_status!==0">
              <ul>
                <li class="name"><span>名称：</span><span>{{assetInfo.name}}</span></li>
                <li class="price_year"><span>悬赏版通金额：</span><span>{{assetInfo.price}}</span><span>年代：</span><span>{{assetInfo.age}}</span></li>
                <li class="time"><span>鉴宝结束时间：</span><span>{{assetInfo.end_time}}</span></li>
                <li class="remark"><p>*注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p></li>
              </ul>
            </div>
            <div class="waiting" v-if="login&&assetInfo.appraisal_status===0">
              <p>注：鉴宝评论只供表达个人看法，并不代表本网站同意其看法或者证实其描述</p>
            </div>
          </div>
          <div class="list" v-for="(item,index) of messageList" :key="index">
            <div class="line10"></div>
            <div class="list_content">
              <ul>
                <li class="phone_identity">
                  <span>{{item.appraiser_phone}}</span>
                  <span>{{item.auth_status}}</span>
                </li>
                <li class="total">
                  <p>累计鉴定{{item.appraisal_count}}次</p>
                </li>
                <li class="time_launch clearfix">
                  <span>鉴宝时间:</span>
                  <span>{{item.datetime}}</span>
                  <span class="fr">{{item.sponsor_phone}}</span>
                  <span class="fr">发起人:</span>
                </li>
                <li class="verdict">
                  <p>{{item.comments}}</p>
                </li>
              </ul>
              <div class="list_true" v-if="item.result===1"><img src="@/common/images/true2.png" alt="真"></div>
              <div class="list_false" v-if="item.result===2"><img src="@/common/images/false2.png" alt="假"></div>
            </div>
          </div>
          <div class="pull_up" v-if="pullUp">加载中...</div>
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
          <label v-for="(item,index) of selectTime" :class="{'active': index===dayIndex,}" @click="tabChangeDay(index)">
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
            <textarea v-model="comment" minlength="10" maxlength="500"></textarea>
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
  import BScroll from 'better-scroll'
  import myProgressBar from "../progressBar/progressBar"
  
  export default {
    name: "detailsPage",
    components: {myProgressBar},
    data() {
      return {
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
        contactDialogVisible: false,
        launchDialogVisible: false,
        authenticateDialogVisible: false,
        dropDown: false,
        pullUp: false,
        dayIndex: 1,
        resultIndex: 0,
        dayRadio: "14天",
        resultRadio: "真",
        selectTime: ["7天", "14天", "1个月"],
        selectResult: ["真", "假"],
        money: "",
        code: "",
        comment: "",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjI5OTg5NTksInVzZXJfaWQiOiI1YTZiZTc0YTU1YWFmNTAwMDFhNWUyNTAiLCJkZXZpY2VfaWQiOiJbMjE4IDI0IDI4IDEyOCAxMTIgMTc0IDEwNSA1MyAxOTggMTg5IDExOCA1OSAyMCA2NyAxNjIgMjFdIn0.8rJXVnqIr7DDutYluGTdX6XfnxhWQNhPlUCg1jw5PHQ",
        assetId: "5c774551185c871d94bc81e1",
        assetInfo: {
          img: [],
          result: 0,
        },
        login: true,
        page: 1,
        limit: 5,
        total: 1,
        messageList: [],
        pullUpTips:"加载中...",
      }
    },
    created() {
    },
    beforeMount() {
      this.getAssetDetails();
      this.getCommentList();
    },
    mounted() {
      this.scrollFn()
    },
    watch: {},
    computed: {},
    methods: {
      //获取资产详情描述信息
      getAssetDetails() {
        this.$axios({
          method: 'GET',
          url: `${this.$baseURL}/v1/appraisal/products/${this.assetId}`,
          headers: {
            'X-Access-Token': `${this.token}`
          }
        }).then(res => {
          res.data.data.end_time = this.$utils.formatDate(new Date(res.data.data.end_time), "yyyy-MM-dd hh:mm:ss");
          this.assetInfo = res.data.data;
        }).catch(error => {
          console.log(error)
        })
      },
      //获取鉴宝评论列表
      getCommentList() {
        this.$axios({
          method: 'GET',
          url: `${this.$baseURL}/v1/appraisal/evaluation?page=${this.page}&limit=${this.limit}`,
          headers: {
            'X-Access-Token': `${this.token}`
          }
        }).then(res => {
          this.dropDown = false;
          this.pullUp = false;
          console.log(res.data.data.valuation_info);
          if(res.data.data.valuation_info.length>0){
            let that = this;
            res.data.data.valuation_info.forEach(function (item) {
              item.datetime = that.$utils.formatDate(new Date(item.datetime), "yyyy-MM-dd hh:mm:ss");
            });
            this.total = res.data.data.valuation_count;
            this.messageList = this.messageList.concat(res.data.data.valuation_info);
            this.page=this.page+1
          }else{}
        }).catch(error => {
          console.log(error)
        })
      },
      //切换鉴宝天数
      tabChangeDay(index) {
        this.dayIndex = index
      },
      //切换鉴宝真假结果
      tabChangeResult(index) {
        this.resultIndex = index
      },
      scrollFn() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.bscroll, {
              click: false,
              scrollY: true,
              probeType: 3,
              refreshDelay: 20,
              bounce: {
                top: true,
                bottom: true,
                left: true,
                right: true
              }
            });
          } else {
            this.scroll.refresh();
          }
          let that = this;
          // 下拉刷新
          if (!this.pulldown) {
            this.scroll.on('pullingDown', (pos) => {
              if (this.scroll.y > 50) {
                this.dropDown = true;
                console.log(111111)
              }
            });
            this.scroll.on('touchEnd', (pos) => {
              if (this.scroll.y > 50) {
                this.dropDown = true;
                window.setTimeout(function () {
                  that.dropDown = false;
                  console.log(222222)
                }, 2000)
              }
            });
          }
          // 用于上拉加载
          if (!this.pullup) {
            this.scroll.on('scroll', (pos) => {
              if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                this.pullUp = true;
              }
            });
            this.scroll.on('scrollEnd', (pos) => { // 滚动到底部
              if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                that.getCommentList()
              }
            })
          }
        });
      },
    },
  }
</script>

<style scoped lang="stylus">
  .detailsPage {
    width 750px
    height 100vh
    display flex
    flex-direction: column;
    margin 0 auto
    padding-bottom 101px
    
    .list_wrap {
      display: flex;
      flex: 1;
      overflow hidden
      
      .bscroll {
        width: 100%;
        //max-height: 100%
        
        .bscroll_container {
          .drop_down {
            text-align center
            font-size: 30px; /*px*/
            line-height: 50px;
            color: #333333;
          }
          
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
                
                img {
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
                
                img {
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
                
                a {
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
                top 20px
                right 25px
                width 73px
                height 75px
                
                img {
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
                
                img {
                  width 100%
                  height 100%
                }
              }
            }
          }
          
          .pull_up {
            text-align center
            font-size: 30px; /*px*/
            line-height: 30px;
            color: #333333;
          }
        }
        
      }
      
    }
    
    .footer_wrap {
      width 750px
      box-shadow: -3px -11px 46px 8px rgba(152, 152, 152, 0.2);
      margin 0 auto
      font-size 0
      position fixed
      bottom 0
      background-color #ffffff
      
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
          font-size: 36px; /*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          
        }
        
        p {
          margin 65px auto
          text-align center
          font-size: 48px; /*px*/
          font-weight bold
          color: #333333;
        }
        
        .btn {
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          
          span {
            width 285px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px; /*px*/
            color: #950101;
          }
          
          a {
            span {
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
          font-size: 36px; /*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          
        }
        
        .select_time {
          text-align center
          margin-top 28px
          margin-bottom 38px
          
          .til {
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px; /*px*/
            color: #333333;
            vertical-align top
          }
          
          label {
            font-size 0
            
            a {
              display inline-block
              background-color: #999999;
              font-size: 26px; /*px*/
              color: #ffffff;
              width 88px
              height 44px
              line-height 44px
              margin-right 10px
            }
          }
          
          .active {
            a {
              background-color #950101
            }
          }
        }
        
        .money_wrap {
          text-align center
          margin-top 28px
          margin-bottom 38px
          font-size 0
          
          .til {
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px; /*px*/
            color: #333333;
            vertical-align top
          }
          
          input {
            width 290px
            height 44px
            padding-left 20px
            font-size: 26px; /*px*/
            color: #999999;
            vertical-align top
            border: solid 3px #bfbfbf;
            background-color #ffffff
          }
        }
        
        .line8 {
          width 100%
          height 8px
          background-color #eeeeee;
        }
        
        .send {
          margin-top 32px
          font-size 0
          text-align center
          
          span:first-child {
            display inline-block
            font-size 22px; /*px*/
          }
          
          span:last-child {
            display inline-block
            font-size 24px; /*px*/
            color: #ffffff;
            width 100px
            height 44px
            line-height 44px
            background-color #950101;
            margin-left 12px
          }
        }
        
        .currency {
          height 32px
          font-size 0
          padding-left 40px
          padding-right 40px
          margin-top 40px
          
          span {
            display inline-block
            font-size: 30px; /*px*/
            color: #333333;
            line-height 32px
          }
          
          span:last-child {
            width 17px
            height 32px
            background-image: url(../../common/images/jiantou.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
        }
        
        .code {
          text-align center
          
          input {
            padding-left 25px
            width 490px
            height 50px
            font-size 20px; /*px*/
            margin-top 24px
            margin-bottom 48px
            color #999999
            border: solid 1px #bfbfbf;
          }
        }
        
        .btn {
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          
          span {
            width 570px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px; /*px*/
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
          font-size: 36px; /*px*/
          color: #333333;
          background-image: url(../../common/images/border1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          
        }
        
        .select_result {
          text-align center
          margin-top 28px
          margin-bottom 38px
          
          .til {
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px; /*px*/
            color: #333333;
            vertical-align top
          }
          
          label {
            font-size 0
            
            a {
              display inline-block
              background-color: #999999;
              font-size: 26px; /*px*/
              color: #ffffff;
              width 167px
              height 59px
              line-height 59px
              margin-right 10px
            }
          }
          
          .active {
            a {
              background-color #950101
            }
          }
        }
        
        .comment_wrap {
          text-align center
          margin-top 28px
          margin-bottom 38px
          font-size 0
          
          .til {
            display inline-block
            height 44px
            line-height 44px
            font-size: 26px; /*px*/
            color: #333333;
            vertical-align top
          }
          
          .comment {
            display inline-block
            width: 384px;
            height: 522px;
            border: solid 3px #bfbfbf;
            padding 15px
            background-color #ffffff
            position relative
            
            textarea {
              width 100%
              min-height 452px
              border none
              font-size: 26px; /*px*/
              color: #999999;
              vertical-align top
              background-color #ffffff
            }
            
            .tips {
              display inline-block
              position absolute
              bottom 15px
              right 15px
              font-size: 22px; /*px*/
              color: #999999;
            }
          }
        }
        
        .btn {
          box-shadow: -4px -24px 46px 8px rgba(0, 0, 0, 0.09);
          
          span {
            width 570px
            height 80px
            line-height 80px
            text-align center
            display inline-block
            font-size: 36px; /*px*/
            background-color #950101;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>

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
      }
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .detailsPage {
    .result_wrap {
      padding 0 25px 40px
      .price_total {
        font-size 0
        padding-top 30px
        .price {
          color: #ac0101;
          font-size 24px;/*px*/
          font-weight bold
          span{
            display inline-block
            font-size 36px;/*px*/
            line-height 36px;/*px*/
            font-weight bold
          }
        }
        
        .total {
          color: #999999;
          font-size 24px;/*px*/
          line-height 36px;/*px*/
        }
      }
      
      .title {
        padding-top 44px
        h3{
          font-size: 36px;/*px*/
          color: #333333;
          font-weight bold
        }
      }
      
      .result {
        font-size 0
        margin-top 48px
        .img_true {
          display inline-block
          vertical-align middle
          font-size 0
        }
        
        .percentage_box {
          display inline-block
          font-size 20px; /*px*/
          vertical-align middle
          position relative
          margin 0 25px
          .true {
            position absolute
            left 5px
            bottom 26px
            font-size: 26px;/*px*/
            color: #333333;
            font-weight bold
          }
          
          .false {
            position absolute
            right 5px
            bottom 26px
            font-size: 26px;/*px*/
            color: #333333;
            font-weight bold
          }
        }
        
        .img_false {
          display inline-block
          vertical-align middle
          font-size 0
        }
      }
    }
    .line20{
      width 750px
      height 20px
      background-color #f6f6f6
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
</style>

<template>
    <div class="qr-code">
      <div class="info">
        <img src="./imgs/logo.png" alt="">
        <p>鉴宝轩，全球首款基于区块链技术，实现专家鉴宝留言的新型移动端应用。</p>
      </div>
      <div class="code">
        <img src="./imgs/code.jpg" alt="">
        <p>下载鉴宝轩APP进行更多操作</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'treasureQrCode',
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {},
    watch: {},
    computed: {},
    components: {},
  }
</script>

<style scoped lang="stylus">
  .qr-code
    .info
      width 690px
      height 650px
      background url("./imgs/kuang.png") no-repeat center
      background-size 100% 100%
      font-size 28px
      color #333333
      margin 20px 30px
      img
        display block
        margin 0 auto
        padding-top 90px
        width 240px
        height 300px
      p
        margin 64px
        line-height normal
    .code
      img
        display block
        margin 0 auto
        margin-top 90px
        width 240px
        height 240px
      p
        margin-top 40px
        line-height normal
        font-size 24px
        color #535353
        text-align center
</style>

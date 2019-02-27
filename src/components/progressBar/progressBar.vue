<template>
  <div class="progressBar">
    <div class="progress_bar_box">
      <div class="progress_bar" :style="progressBar"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "progressBar",
    components: {},
    props:{
      percentage:{
        type: Number,
        default: 0,
        required: true,
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    computed: {
      progressBar(){
        let style={};
        style.width=this.percentage + "%";
        return style
      }
    },
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .progressBar{
    .progress_bar_box{
      width 540px
      height 18px
      background-color: #d2d2d2;
      border-radius: 8px;
      .progress_bar{
        height: 18px;
        background-color #950101
        /*background-image: linear-gradient(270deg, #950101 0%, #950101 0%, #950101 0%, #950101 100%)
        linear-gradient(#950101, #950101);*/
        border-radius: 8px;
      }
    }
  }
</style>

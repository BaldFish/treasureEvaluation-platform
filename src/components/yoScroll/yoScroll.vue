<template>
  <div>
    <scroller style=""
              :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">
    </scroller>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        items: []
      }
    },
    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      refresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      },
      infinite(done) {
        if (this.bottom >= 20) {
          setTimeout(() => {
            done(true)
            this.infinite = undefined
          }, 1500)
          return;
        }
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 5; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 5;
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    },
  }
</script>

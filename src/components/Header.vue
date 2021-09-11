<template>
    <div class="header">
        <div class="banner">
            <img src="@/assets/image/header/banner.png" alt="橫幅式廣告">
            <div class="title" id="home" :class="{headerDisplay:headerDisplay}">
                    <h1>最專業最快速的電腦維修</h1>
                    <h6>給予顧客最好的服務品質</h6>
                    <h6>良心的價格</h6>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      headerDisplay: false
    }
  },
  mounted () {
    window.onload = () => {
      this.headerDisplay = true
    }
  }
}
</script>
<style lang="">

</style>

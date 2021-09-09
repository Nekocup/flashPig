<template>
    <div class="navigate">
        <img src="@/assets/image/nav/LOGO.png" alt="" width="90px" height="77px">
        <div class="menu">
        <img src="@/assets/image/nav/menu.svg" alt="" @click="menuDisplay">
        <ul :class="{menuOn:mobileToggle,menuOff:!mobileToggle}">
            <li><a href="#home">首頁</a></li>
            <li><a href="#service">提供服務</a></li>
            <li><a href="#boss">店長資訊</a></li>
            <li><a href="#store">實體店面</a></li>
            <li><a href="#contact">聯絡我們</a></li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'navigate',
  data () {
    return {

      mobileToggle: false
    }
  },
  methods: {
    menuDisplay () {
      this.mobileToggle = !this.mobileToggle
    }
  }
}
</script>
<style lang="">

</style>

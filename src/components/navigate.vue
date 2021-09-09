<template>
    <div class="navigate">
        <img src="@/assets/image/nav/LOGO.png" alt="" width="90px" height="77px">
        <div class="menu">
        <img src="@/assets/image/nav/menu.svg" alt="" @click="menuDisplay">
        <ul :class="{menuOn:mobileToggle,menuOff:!mobileToggle}">
            <li><a href="#">首頁</a></li>
            <li><a href="#service">提供服務</a></li>
            <li><a href="#boss">店長資訊</a></li>
            <li><a href="#store">實體店面</a></li>
            <li><a href="#contact">聯絡我們</a></li>
        </ul>
        </div>
    </div>
</template>
<script>
import smoothScroll from 'smooth-scroll'
export default {
  name: 'navigate',
  data () {
    return {
      mobileToggle: true
    }
  },
  methods: {
    menuDisplay () {
      this.mobileToggle = !this.mobileToggle
    }
  },
  mounted () {
    smoothScroll('a[href="#"]', {
      speed: 500
    })
    smoothScroll('a[href="#service"]', {
      speed: 500,
      offset: 120
    })
    smoothScroll('a[href="#boss"]', {
      speed: 500,
      offset: 120
    })
    smoothScroll('a[href="#store"]', {
      speed: 500,
      offset: 120
    })
    smoothScroll('a[href="#contact"]', {
      speed: 500,
      offset: 120
    })
  }
}
</script>
<style lang="">

</style>

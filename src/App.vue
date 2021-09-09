<template>
  <div id="app">
    <i id=home></i>
    <Header/>
    <Service/>
    <Nav/>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/navigate.vue'
import Header from '@/components/Header.vue'
import Service from '@/components/Service.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Service
  }
}
</script>

<style lang="scss">
@import "@/assets/css/all.scss";
* {
  margin:0;
  padding: 0;
}
</style>

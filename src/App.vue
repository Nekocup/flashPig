<template>
  <div id="app">
    <i id=home></i>
    <Header/>
    <Service/>
    <Nav/>
    <Store/>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/navigate.vue'
import Header from '@/components/Header.vue'
import Service from '@/components/Service.vue'
import Store from '@/components/Store.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Service,
    Store
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

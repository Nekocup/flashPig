<template>
  <div id="app">
    <Header></Header>
    <Nav/>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/navigate.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Header
  }
}
</script>

<style lang="scss">
@import "@/assets/css/all.scss";
</style>

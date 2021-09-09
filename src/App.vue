<template>
  <div id="app">
    <header></header>
    <Nav/>
    <footer></footer>
  </div>
</template>

<script>
import Nav from '@/components/navigate.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import "@/assets/css/all.scss";
</style>

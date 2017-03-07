<template>
  <div>
    <v-header></v-header>
    <router-view keep-alive class="container"></router-view>
    <footer-tabbar></footer-tabbar>
  </div>
</template>

<script>
  import footerTabbar from './components/footer-tabbar/footer-tabbar.vue'
  import vHeader from './components/header/header.vue'
  export default {
    components:{
      footerTabbar:footerTabbar,
      vHeader:vHeader
    }
  }

</script>

<style lang="less">
.container{
  position: absolute;
  top:50px;bottom: 50px;
  overflow: hidden;
  width: 100%;
}
</style>
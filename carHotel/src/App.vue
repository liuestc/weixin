<template>
  <div id="app">
  
<!--     <p class='testRouter'>
      <router-link to="/myOrder">Login</router-link>
      <router-link to="/">Index</router-link>
    </p> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>

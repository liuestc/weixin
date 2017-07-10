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
@font-face {
  font-family: 'iconfont';  /* project id 322753 */
  src: url('//at.alicdn.com/t/font_d7ofxc0ghqia4i.eot');
  src: url('//at.alicdn.com/t/font_d7ofxc0ghqia4i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_d7ofxc0ghqia4i.woff') format('woff'),
  url('//at.alicdn.com/t/font_d7ofxc0ghqia4i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_d7ofxc0ghqia4i.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #fbf9fe;
}
a{
	color:inherit;
	display: block;
}
</style>

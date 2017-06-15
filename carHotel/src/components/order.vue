<template>
  <div id="" class='order-wrapper'>
      <div class="order-img">
        <img src="http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff" alt="">
      </div>

      <div class="detailed-equipment">
        <!-- <p class="detailed-title">酒店设施</p> -->
        <div class="detailed-list">
          <ul>
              <li>
                      <i class="icon iconfont">&#xe894;</i>
                        <span class="name">wifi</span>
                    </li>
                
                    <li>
                      <i class="icon iconfont">&#xe888;</i>
                        <span class="name">地图</span>
                    </li>
                
                    <li>
                      <i class="icon iconfont">&#xe887;</i>
                        <span class="name"> 接送火车</span>
                    </li>
                
                    <li>
                      <i class="icon iconfont">&#xe888;</i>
                        <span class="name"> 酒店2</span>
                        <!-- <span class="code">&amp;#xe888;</span> -->
                    </li>
                
                    <li>
                      <i class="icon iconfont">&#xe894;</i>
                        <span class="name">wifi</span>
                        <!-- <div class="code">&amp;#xe894;</div> -->
                    </li>          
          </ul>
        </div>
      </div>

      <ul class="order-list">
        <li>
          <span>浴室</span>
          <span>100℃热水，巴拉巴拉巴拉巴拉安保</span>
        </li>
        <li>
          <span>浴室</span>
          <span>100℃热水，巴拉巴拉巴拉巴拉安保</span>
        </li>
        <li>
          <span>浴室</span>
          <span>100℃热水，巴拉巴拉巴拉巴拉安保</span>
        </li>
        <li>
          <span>浴室</span>
          <span>100℃热水，巴拉巴拉巴拉巴拉安保</span>
        </li>
      </ul>

      <div class="order-btn">
        <div class="">$333</div>
        <div><router-link to='/confirm'>预订房间</router-link></div>
      </div>
  </div>


</template>

<script>
export default {
  // name: 'app'
}
</script>

<style lang="less">

.order-wrapper{
  position:relative;
  height:100vh;
}

.order-img>img{
  width:100%;
  height:25vh;
}

.order-list{
  padding:20px 32px;
  background: #fff;
}

.order-list > li{
  padding:10px;
}
.order-list>li>span:first-child{
  color:#ccc;
  width: 60px;
  display:inline-block;
}
.order-list>li>span:nth-child(2){
  font-size: 14px;
}

.order-btn{
  position: fixed;
  bottom:0;
  width:100%;
  font-size:0;
}

.order-btn>div{
  display: inline-block;
  width:50%;
  padding:10px 0;
  text-align: center;
  background: #000;
  color:#fff;
  font-size:18px;
}
.order-btn>div:first-child{
  background: rgb(254,215,106);
}
</style>

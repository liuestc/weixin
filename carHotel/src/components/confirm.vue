<template>
  <div>
   <div class="confirm-hotel">
     <p class="confirm-name">四川省成都市九眼桥xx酒店</p>
     <p class="confirm-type">大床房</p>
     <p class="confirm-time"><span>入住</span> 2017-08-07 <span>离店</span> 2017-09-07</p>
     <p><span>房间数</span> 1</p>
     <p><span>入住人</span> 张三</p>
     <p><span>身份证号</span>512424198798789087</p>
   </div>

   <div class="confirm-btn">支付</div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="less">
.confirm-hotel p{
  padding:10px;
  padding-left:20px;
  border-bottom:1px solid #ccc;
  background: #fff;
}
.confirm-time >span:nth-child(2){
  margin-left:10px
}
p>span{
  color:#ccc;
  width:80px;
  display: inline-block;
}

// cconfirm-btn{.}
.confirm-btn{
  width:88%;
  padding:10px;
  margin:0 auto;
  color:#fff;
  background: #000;
  text-align: center;
  margin-top: 40px;
  border-radius: 10px;
}
</style>

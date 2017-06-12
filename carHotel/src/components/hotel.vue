<template>
  <div>
  	<div class="info">
  		<div class="info-img">
  			<img src="http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff" alt="">
  		</div>
  		<div class="info-address">{{hotelInfo.address}} <span class='info-map'>地图 ></span></div>
  		<div class="info-support" >
  			<ul class="icon_lists clear">
            
                <li>
                <i class="icon iconfont">&#xe894;</i>
                    <div class="name">wifi</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe888;</i>
                    <div class="name">地图</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe887;</i>
                    <div class="name"> 接送火车</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe888;</i>
                    <div class="name"> 酒店2</div>
                    <!-- <div class="code">&amp;#xe888;</div> -->
                </li>
            
                <li>
                <i class="icon iconfont">&#xe894;</i>
                    <div class="name">wifi</div>
                    <!-- <div class="code">&amp;#xe894;</div> -->
                </li>
            
        </ul>
  		</div>
		<List></List>
  	</div>
  </div>
</template>

<script>
// import { Panel, Group, Radio } from 'vux'
import List from './list.vue'
export default {
  components:{
  	List
	},
  mounted(){
  	// console.log($route.params.id)
  	console.log(this.$route.params.id)
  	// Cannot read property '$route' of undefined
  	//我想在这里得到参数
  },
  data(){
  	return {
  		hotelInfo:{
  			img:'',
  			address:"四川省成都市天府新区罗森堡3栋404号",
  			support:['wifi',"park",'空调','西瓜'],
  			roomType:[
  				{
  					type:'双人床',
  					desc:['双早','28m','可住两人','双床']
  				},
  				{
  					type:'双人床',
  					desc:['双早','28m','可住两人','双床']
  				},
  				{
  					type:'双人床',
  					desc:['双早','28m','可住两人','双床']
  				}
  			],
  			price:399
  		}
  	}
  },
  computed:{
  	support(){
  		return	this.hotelInfo.support.map(function(item,index){
  			return '<span class="support-name">'+item+'</span>'
  		}).join("")
  	}
  }
}
</script>

<style>
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


.icon_lists .icon {
    font-size: 30px;
    line-height: 60px;
    margin: 10px 0;
    color: #333;
    -webkit-transition: font-size 0.25s ease-out 0s;
    -moz-transition: font-size 0.25s ease-out 0s;
    transition: font-size 0.25s ease-out 0s;
}

.info-img>img{
	width:100%;
	height:25vh;
}
.info-address{
	background: #fff;
	padding:2px;
	padding-left:20px;
	font-size:14px;
}

.support-name{
	/*padding:4px 20px;*/
	width:80px;
	text-align: center;
	padding:4px;
	display: inline-block;
}
.icon_lists{
	background: #fff;
	margin:8px 0;
	text-align: center;
}
.icon_lists>li{
	display: inline-block;
	padding:0 10px;
	text-align: center;
}
</style>
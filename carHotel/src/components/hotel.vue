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
        	<router-link class="info-detailed" to='/hotelDetail'>详情</router-link>
  		</div>


		<div class='info-bed' >
			<!-- <> -->
				<div>
					<i class='icon iconfont'>&#xe888;</i>
				</div>
				<div class="info-desc">
					<p class="info-type">标准间 <span class="info-price">￥666起</span></p>
					<div class="info-more">
						<span>双早</span>
						<span>双床</span>
						<span>含早餐</span>
						<span>可住两人</span>
					</div>
				</div>
				<div class="info-sell">
					
					<div class="info-order-btn">
						<router-link to='/orderRoom'>预定</router-link>
						<!-- <div></div> -->
					</div>
				</div>
			<!-- </router-link>	 -->
		</div>



		<div class='info-bed'>
			<div>
				<i class='icon iconfont'>&#xe888;</i>
			</div>
			<div class="info-desc">
				<p class="info-type">标准间 <span class="info-price">￥666起</span></p>
				<div class="info-more">
					<span>双早</span>
					<span>双床</span>
					<span>含早餐</span>
					<span>可住两人</span>
				</div>
			</div>
			<div class="info-sell">
				
				<div class="info-order-btn">
					<div>预定</div>
					<!-- <div></div> -->
				</div>
			</div>
		</div>



		<div class='info-bed'>
			<div>
				<i class='icon iconfont'>&#xe888;</i>
			</div>
			<div class="info-desc">
				<p class="info-type">标准间 <span class="info-price">￥666起</span></p>
				<div class="info-more">
					<span>双早</span>
					<span>双床</span>
					<span>含早餐</span>
					<span>可住两人</span>
				</div>
			</div>
			<div class="info-sell">
				
				<div class="info-order-btn">
					<div>预定</div>
					<!-- <div></div> -->
				</div>
			</div>
		</div>





		<!-- <List></List> -->
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

.icon_lists .icon {
    font-size: 20px;
    line-height: 40px;
    margin: 10px 0;
    color: #333;
    -webkit-transition: font-size 0.25s ease-out 0s;
    -moz-transition: font-size 0.25s ease-out 0s;
    transition: font-size 0.25s ease-out 0s;
}


.info-support{
	background: #fff;
	position: relative;
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
	/*text-align: center;*/
	padding:0 10px;
}

.icon_lists{
	display: inline-block;
}
.icon_lists>li{
	display: inline-block;
	padding:0 10px;
	text-align: center;
}

.info-detailed{
	position: absolute;
	right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color:rgb(45,190,60);
}
.info-bed{
	margin-top:10px;
	background: #fff;
	/*padding:10px 0;*/
	padding: 10px 0 22px 0;
}
.info-bed>div{
	display: inline-block;
	vertical-align: middle;
	    margin-left: 4px;

}

.info-bed i{
	font-size: 48px;
    /* line-height: 60px; */
    padding: 10px 5px;
}
.info-type{
	font-size:18px;
	padding:4px;
}

.info-more>span{
	font-size:12px;
	color:#ccc;
	display: inline-block;
	padding:2px 4px;
}
.info-price{
	font-size:16px;
	color:red;
	float:right;
}

.info-sell{
	padding-left:20px;
}
.info-order-btn{
	background-color:rgb(253,178,92);
	color:#fff;
	padding: 2px 12px;
    border-radius: 4px;
    position: relative;
}
.info-order-btn::after{
    content: "\5728\7EBF\4ED8";
    position: absolute;
    bottom: -19px;
    font-size: 12px;
    color: #ccc;
    text-align: center;
    border: 2px solid rgb(253,178,92);
    width: 92%;
    left: 0;
    border-radius: 4px;
}
</style>
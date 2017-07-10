<template>
  <div>
    <ul>
    	<li class="hotel-list" v-for='item in list'>
	    	<router-link :to="{name:'hotel',params:{id:item.id}}">
	    		<div class="hotel-img">
	    			<img :src='item.src' alt="">
	    		</div>
	    		<div class='hotel-info'>
	    			<div class="hotel-name">{{item.title}}</div>
	    			<div class="hotel-about">
	    				<span class='hotel-rate'>{{item.rate}}</span>| <span class='hotel-count'>{{item.rateCount}}条点评</span>
	    				<!-- <span ></span>	 -->
	    			</div>
	    			<div class="promotion">
	    				
	    			</div>
	    			<div class="hotel-distance">距离您{{item.distance}}</div>
	    			<div class="hotel-price">
	    				￥{{item.price}}起
	    			</div>
	    		</div>
	    	</router-link>
    	</li>

    </ul>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'
export default {
  components: {
    Panel,
    Group,
    Radio
  },
  data () {
    return {
      type: '1',
      list: [{
      	id:1,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        rateCount:213,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        price:500,
        distance:"2.1公里",
        icon:['促','满减','可反'],
        url: '/component/cell'
      }, {
      	id:2,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        rateCount:213,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        price:500,
        distance:"2.1公里",
        icon:['促','满减','可反'],
        url: '/component/cell'
      },
		{
		id:3,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        rateCount:213,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        price:500,
        distance:"2.1公里",
        icon:['促','满减','可反'],
        url: '/component/cell'
      }, {
      	id:4,
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        rateCount:213,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        price:500,
        distance:"2.1公里",
        icon:['促','满减','可反'],
        url: '/component/cell'
      }
      ],
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      }
    }
  },
  mounted(){
  	// console.log($route)
  }
}
</script>

<style>
	.hotel-list{
		border-bottom: 1px solid #ccc; 
		color:#000;
	}
	.hotel-list>a{
		color:#000;
	}
	.hotel-img,.hotel-info{
		display: inline-block;
	}
	.hotel-info{
		vertical-align:top;
		padding-left:10px;
		position: relative;
		width: 64%;
	}
	.hotel-img{

	}
	.hotel-img>img{
		width:100px;
		height:100px;
		vertical-align: bottom;
	}
	.hotel-name{
		padding:4px 0;
		font-size: 18px
	}
	.hotel-rate,.hotel-count{
		display: inline-block;
		padding-right:10px;
		font-size:14px; 
	}
	.hotel-distance{
		padding-top:8px;
	}
	.hotel-rate{
		color:rgb(254,160,66);
	}
	.hotel-count{
		color:#ccc;
	}
	.hotel-price{
		position: absolute;
		right:5px;
		top:40px;
		color:red;
		font-size:20px;
	}
	.hotel-distance{
		font-size:14px;
	}
</style>
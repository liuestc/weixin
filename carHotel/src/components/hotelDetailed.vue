<template>
  <div >
	<div class="detailed-equipment">
		<p class="detailed-title">酒店设施</p>
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
	<div class="detailed-address">
		<p class="detailed-title">酒店地址 <span>去地图查看</span></p>
		<p class='detailed-desc'>四川省成都市天府新奇xx信息技术谢园34路809</p>
	</div>

	<div class="detailed-more">
		<div class="detailed-title">
			<div class='detailed-info-wrapper'>
				<p class="">酒店介绍</p>
				<div class="detailed-time">
					<span>装修时间:&nbsp;&nbsp;2016-09-06</span> 
					<!-- <span></span> -->
					<span>营业时间:&nbsp;&nbsp;2016-08-09</span>
					<!-- <span></span> -->
				</div>
			</div>

			<div class="phone">
				<i class="icon iconfont">&#xe894;</i>
			</div>
		</div>
		<div class="detailed-word">
			描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
		</div>
	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
// @import '~vux/src/styles/reset.less';

.detailed-equipment, .detailed-address,.detailed-more{
	background: #fff;
	margin-bottom: 10px;
}
.detailed-list{
	// background: #fff;
	padding:12px
}

p.detailed-title{
    padding: 12px 0px;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    margin: 0 24px
}
div.detailed-title{
	padding: 12px 0px;
    // border-bottom: 1px solid #ccc;
    font-size: 18px;
    margin: 0 24px
}

.detailed-time>span{
	padding:2px 6px;
	display:inline-block;
	font-size:12px;
}

.detailed-list>ul>li{
    display: inline-block;
    padding: 10px 0px;
    /* text-align: center; */
    width: 30%;
    white-space: nowrap;
}

.detailed-list .icon.iconfont{
	font-size:16px;
}

li>.name{
	font-size: 14px;
	padding-top:10px;
}

.detailed-desc{
	padding:10px 24px
}

.detailed-title>span{
	color:rgb(45,190,60);
	float: right;
    font-size: 14px;
    /* vertical-align: 24px; */
    padding-top: 6px;
    padding-right: 20px;
}

.detailed .phone{
	float: right;
    /* top: 10px; */
    padding: -10px;
    margin-top: -40px;
}
.detailed-time{
	margin-left:-4px;
}
.detailed-word{
	padding:12px 0;
	margin:0 24px;
	border-top:1px solid #ccc;
}

.detailed-info-wrapper{
	 width: 78%;
    display: inline-block;
    vertical-align: middle;
    border-right: 1px solid #ccc;
}
.phone{
	display: inline-block;
}
</style>

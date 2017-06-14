<template>
  <div class='app-wrapper' v-bind:class='{activemask:mask}'>
  

      <flexbox class='hotel-title'>
        <flexbox-item class='page-title' > 汽车驿站</flexbox-item>
        <flexbox-item class='page-title'  @click='showRightPopup'><i  @click='showRightPopup' class="iconfont">&#xe6e2;</i><span @click='showRightPopup'>我的</span></flexbox-item>        
      </flexbox>


    <div class="swiper-wrapper">
      <!-- <group-title>自动轮播</group-title> -->
      <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>


    <div class="form-wrapper">

      <flexbox class='flex-init'>
        <flexbox-item :span="3">
          <div class="flex-title">
            目的地
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="">
            <x-input title="" name="username" placeholder="四川成都市武侯"></x-input>
          </div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="">></div>
        </flexbox-item>
      </flexbox>

      <flexbox>
        <flexbox-item class='date-title' :span='1/5'>入住</flexbox-item>
        <flexbox-item class='date-title' :span='1/5'>离店</flexbox-item>        
      </flexbox>

      <flexbox class='flex-init' >

        <flexbox-item>
            <flexbox >
              <flexbox-item class='date-picker'>
                <div v-on:click='checkDate($event)'>    
                  <datepicker class='picker' v-model="dateRange" :range="rangeType" v-on:click='checkDate'></datepicker>
                </div>
              </flexbox-item>
            </flexbox>

        </flexbox-item>
        <flexbox-item :span="1/5">
          <div class="">共{{subtractTime}}晚</div>
        </flexbox-item>
      </flexbox>

      <group gutter='0'>
        <div>
          <x-input title="" @on-focus='showLeftPopup'   name='eee'  placeholder="位置/关键字/品牌/酒店"></x-input>
        </div>
      </group>


        <group @click='showPopup' gutter='0'>
           <x-input title="" v-model='price' @on-focus='showPopup' name='eee'  placeholder="星级/价格"></x-input>
        </group>
    </div>


    <div v-transfer-dom>
      <popup v-model="show2" height="200px" >
        <div class='price-range'>价格（区间）</div>
          <checker
          v-model="demo5"
          default-item-class="demo5-item"
          selected-item-class="demo5-item-selected"
          >
            <checker-item class='price-item' @on-item-click="onItemClick" v-for="i in [1, 2, 3,4,5]" :key="i" :value="'￥'+i*100+'~'+'￥'+(i+1)*100">￥{{i*100}}-￥{{(i+1)*100}}</checker-item>
          </checker>
      </popup>
    </div>


    <div v-transfer-dom>
      <popup v-model="show8" position="left" width="80%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        
          <flexbox class='popup-left' v-on:chooseProblem='saveResult'>

            <flexbox-item :span='4' >
              <ul class='lev1-ul'>
                <li class='left-lev1' :class='{active:item.active}' @click='checkLev(index)' v-for='(item ,index) in problemList'>{{item.name}}
                </li>
              </ul>
            </flexbox-item>

            <flexbox-item @click='chooseProblem(secondItem)'>
              <ul class='right-lev2' >
                <li class='lev1-problem'   v-for='item in problemList'>{{item.name}}
                  <ul class='lev2-ul' :class='{activeul:item.active}'>
                    <li class='lev2-problem' @click='chooseProblem(secondItem)' v-for='secondItem in item.detail'>{{secondItem.name}}</li>
                  </ul>
                </li>
              </ul>
            </flexbox-item>
          
          </flexbox>
        </div>
      </popup>
    </div>



    <div v-transfer-dom class='right-info'>
      <popup v-model="showInfo" position="right" width="50%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="showInfo = false"></span>

          <div class="phone-info">
            <p>123456789</p>
            <div>退出</div>
          </div>

          <div class="info-list">
            <ul>
              <li><i></i><span>订单管理</span></li>
              <li><i></i><span>我的信息</span></li>
            </ul>
          </div>
            
        </div>
      </popup>
    </div>
<!--     <group>
      <Test v-on:test='father'></Test>
    </group> -->
    <router-link to="/myOrder">
      <x-button type="primary" @click.native='searchHotel'>查询</x-button>
    </router-link>


  </div>
</template>

<script>

// import 'http//at.alicdn.com/t/font_1473319176_4914331.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Group,XInput,Icon,CellBox,Cell,Swiper, GroupTitle, SwiperItem, XButton, Divider,Flexbox,FlexboxItem,TransferDom, Popup,  XSwitch, Scroller, Toast, XAddress, Tab,TabItem,Checker,CheckerItem} from 'vux'
import axios from 'axios'
import List from './list.vue'
import datepicker from 'vue-date'

// import 'http//at.alicdn.com/t/font_wgw0022ibpmpwrk9.css'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  title: `(可点击)${item.title}`
}))
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
const only2List = baseList.slice(0, 2)
export default {
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Group,
    Icon,
    CellBox,
    Cell,
    XInput,
    Flexbox,
    FlexboxItem,
    Popup,
    XSwitch,
    Scroller,
    Toast,
    XAddress,
    XButton,
    CheckerItem,
    Checker,
    List,
    Tab,
    TabItem,
    datepicker
  },
  created () {
    console.log(11111)
    var that=this;
    console.log(that.problemList)
    axios.get('http://localhost:8080/api/test')
      .then( function(response) {
        console.log(response)
        // console.log(response.data.data.problem);
        // Vue.set(problemList.problem,"active",true)
        that.problemList=response.data.data.problem;

        that.problemList.forEach(function(item,index){
          Vue.set(item,"active",false)
        })

        console.log(that.problemList)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    resetScroller () {
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    log (str) {
      console.log(str)
    },
    showPopup(){
      // alert(1)
      this.show2=true;
    },
    showLeftPopup(){
      this.show8=true
    },
    showRightPopup(){
      console.log('dddx');
      this.showInfo=true
    },
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.show2 = false,
        this.demo5=value,
        this.price=value  
      }
    },
    checkLev(i){
      // console.log(index)
      this.problemList.map(function(item,index){
        i==index?item.active=true:item.active=false
      })
    },
    chooseProblem(item){
      console.log("son")
      this.$emit('chooseProblem')
    },

    saveResult(){
      console.log("Saved")
    },

    father(){
      console.log("father")
    },
    searchHotel(){
      // window.location
      window.localStorage.setItem("range",this.dateRange)
      window.localStorage.setItem("subtract",this.subtractTime)
    },
    tabToggle(index){
      console.log(index)
    },
    checkDate(eve){
      console.log("datepickere")
      // console.log(eve.target.parentNode.parentNode.lastChild.style.display);
      let panelActive=eve.target.parentNode.parentNode.lastChild;
      console.log("display",panelActive.style.display)
      console.log("class",panelActive.className)

      console.log("panelActive",eve.target.parentNode.parentNode.lastChild)
      console.log("-----")

      if(panelActive.className=='date-panel' && panelActive.style.display=='none'){
        this.mask=true
      }
      else{
        this.mask=false
      }
      // if( panelActive.className=!'message'&& !panelActive.style){
      //  this.mask=false
      // }
      // else{

      //  this.mask=true
      // }

    }
},
  data () {
    return {
        demo03_list: demoList,
        show2: false,
        demo5: 1,
        price:0,
        show8: false,
        showInfo:false,
        problemList:"",
        testDate:'2016-09-08',
        dateRange:(function(){
        //默认显示今天明天
          Date.prototype.Format = function (fmt) { //author: meizz 
              var o = {
                  "M+": this.getMonth() + 1, //月份 
                  "d+": this.getDate(), //日 
                  "h+": this.getHours(), //小时 
                  "m+": this.getMinutes(), //分 
                  "s+": this.getSeconds(), //秒 
                  "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                  "S": this.getMilliseconds() //毫秒 
              };
              if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
              for (var k in o)
              if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
              return fmt;
          }
          var startTime = new Date().Format("yyyy-MM-dd");
          var endTime = new Date(Date.now()+24*60*60*1000).Format("yyyy-MM-dd");

          console.log("startTime",startTime)
          return [startTime,endTime]
        })(),

        rangeType:true,
        mask:false
        //subtractTime:1
    }
  },
  computed:{
    subtractTime (){
      let startTime=this.dateRange[0].split("-").join("/");
      let endTime=this.dateRange[1].split("-").join("/")
      let time=(new Date(endTime)-new Date(startTime))/(1000*60*60*24)
      return time
    }
  }

}
</script>

<style >
/*@import '~vux/src/styles/reset.less';*/

@font-face {
  font-family: 'iconfont';  /* project id 322753 */
  src: url('//at.alicdn.com/t/font_wgw0022ibpmpwrk9.eot');
  src: url('//at.alicdn.com/t/font_wgw0022ibpmpwrk9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_wgw0022ibpmpwrk9.woff') format('woff'),
  url('//at.alicdn.com/t/font_wgw0022ibpmpwrk9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_wgw0022ibpmpwrk9.svg#iconfont') format('svg');
}


.iconfont{
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
    padding: 8px 6px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin:0 10px;

}


.app-wrapper{
  height:100vh;
}

.activemask{
  background: rgba(0,0,0,.5);
  /*color:red;*/
}

ul,li{
  list-style: none;
}
.group-init{
  margin-top:0;
}
.vux-flexbox-item.date-picker{
  width:100%;
  margin-left:0 !important;
}
.flex-init{
  background:#fff;
  border-bottom:1px solid #eee;
}
.flex-title{
  padding-left:.6em;
}


/* popup */

.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
.price-item{
  text-align: center;
  padding:4px 10px;
  margin-left:20px;
  margin-top:10px;

}

.demo5-item {
  /*width: 100px;*/
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  /*margin-right: 6px;*/
  color:#333;
}
.demo5-item-selected {
  /*background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
  background-color:#009966;
  border-color: #009966;
  color:#fff;
}

.price-range{
  padding-left: 8px;
  padding-top: 10px;
}

.position-horizontal-demo span.vux-close{
    transform: translateX(0%) translateY(0%) scale(1.2);
    top: 10px;
    left: 90%;
    right: 0;
}

.left-lev1{
  padding: 10px;
  text-align: center;
  border-bottom:1px solid #999;
  border-right:1px solid #999;
}

.popup-left .vux-flex-row {
    box-direction: row;
    box-orient: horizontal;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    height: 100%;
    align-items: initial;
}

.lev1-ul{
  height:100%;
}

.lev2-ul{
  transition: all ease .5s;
}

.lev2-problem{
  padding:6px;
  /*margin:2px;*/
  border-bottom:1px solid #ccc;
}


.active{
  background:#ccc;
}

.activeul{
  /*border:1px solid green;*/
  background: #ccc;
}


button.weui-btn.weui-btn_primary {
    width: 88%;
    margin-top: 30px;
}

.vux-slider > .vux-swiper{
  z-index:-1;
}


.input-wrapper{
  border:0 !important;
}

/*.date-picker>div.input-wrapper{
   border:0 !important;
}
.input{
  height:auto !important;
}*/
.form-wrapper{
    /* border: 0; */
    width: 88%;
    /* text-align: center; */
    margin: -10px auto;
    z-index: 22;
    /* border-radius: 10%; */
    padding: 10px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
    background: #fff;
}

.vux-slider > .vux-swiper{
  z-index:-1;
}

.date-title{
  padding:0 10px;
}

.hotel-title{
  padding:10px 0;
  /*margin: 10px;*/
}

.page-title:first-child{
  text-align: right;
  padding-right:40px;
}

.vux-popup-dialog.vux-popup-right.vux-popup-show {
    background: rgb(38,38,50);
    color:rgb(212,212,212);
}

.phone-info{
  width:100%;
  height:120px;
  background: rgb(52,51,69);
  text-align: center;
}
.phone-info >p{
  padding:30px 0 10px 0;
}

.phone-info>div{
  border:1px solid #fff;
  border-radius:4px;
  padding:2px 10px;
  display: inline-block;
}


.info-list{
text-align:center;
padding-top:40px;
}
.info-list li{
  padding:4px ;
}

.input-wrapper+div.date-panel{
    position: absolute;
    z-index: 5000;
    border: 1px solid #eee;
    width: 88vw;
    /* padding: 5px 10px 10px; */
    box-sizing: border-box;
    background-color: #fff;
    /* -webkit-transform: translateY(4px); */
    /* transform: translateY(4px); */
    left: -10px;

}

.vux-flexbox-item.date-title{
  font-size:12px;
  color:#ccc;
  padding-top:6px;
}
</style>



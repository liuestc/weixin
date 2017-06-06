<template>
  <div>
    <div class="">
      <!-- <group-title>自动轮播</group-title> -->
      <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>


    <flexbox class='flex-init'>
      <flexbox-item :span="2">
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


    <flexbox class='flex-init'>
      <flexbox-item :span="1/5">
        <div class="flex-title">
          日期
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="">
          <flexbox direction="column">
            <flexbox-item class='date-picker'>
              <div>    
                <datepicker v-model="dateRange" :range="rangeType"></datepicker>
                <!-- <x-input title="" name="ww" placeholder="5月25日"></x-input> -->
              </div>
            </flexbox-item>
<!--             <flexbox-item class='date-picker'>
              <div>                   
                <x-input title="" name="we" placeholder="5月25日"></x-input>
              </div>
            </flexbox-item> -->
          </flexbox>
        </div>
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

    <group>
      <Test v-on:test='father'></Test>
    </group>
    <x-button type="primary">查询</x-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Group,XInput,Icon,CellBox,Cell,Swiper, GroupTitle, SwiperItem, XButton, Divider,Flexbox,FlexboxItem,TransferDom, Popup,  XSwitch, Scroller, Toast, XAddress,    Checker,CheckerItem} from 'vux'
import axios from 'axios'
import Test from './test.vue'
import datepicker from 'vue-date'
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
    Test,
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
    }
},
  data () {
    return {
      demo03_list: demoList,
       show2: false,
        demo5: 1,
        price:0,
        show8: false,
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

        rangeType:true
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

<style scoped >
/*@import '~vux/src/styles/reset.less';*/
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

  padding:4px;
  margin-left:6px;
  margin-top:10px;

}

.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
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

/*.date-picker>div.input-wrapper{
   border:0 !important;
}
.input{
  height:auto !important;
}*/
.input-wrapper[_v-6c618eea]{
  border:0;
}
</style>



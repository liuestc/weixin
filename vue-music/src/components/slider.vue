<template>
  <Scroll class='container'  :data='singers' ref='listview'>
    <!-- {{test}} -->
    <ul class='list-singers' >
      <li v-for='group in singers' ref="listGroup">
        <h1 class="singer_title">{{group.title}}</h1>
        <ul>
          <li v-for='item in group.item'>
            <img :src="item.avatar" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class='slider' @touchstart='onShortcut'>
      <ul>
        <li v-for='(item, index)  in shortcutList'  :data-index="index" class='character'>{{item}}</li>
      </ul>
    </div>
  </Scroll>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
import Singer from '../base/singer.js'
import BScroll from 'better-scroll'
import Scroll from '../base/scroll.vue'
export default {
  name: 'slider',
  data () {
    return {
      msg: '',
      test:"hahhah",
      singers:[]

    }
  },
  components:{
    Scroll
  },
  created(){

    this.getData()
    // console.log("create",this.singers)

  },
  mounted(){
    console.log("挂载",this.$refs.container)
    // let scroll=new BScroll(this.$refs.container)
  },
  computed:{
    shortcutList(){
      return this.singers.map((group)=>{
        return group.title.substr(0,1)
      })
    }
  },
  methods:{
    getData(){

      let query={
        channel:"singer",
        page:"list",
        key:"all_all_all",
        pagesize:100,
        pagenum:1,
        g_tk:5381,
        jsonpCallback:"GetSingerListCallback",
        loginUin:0,
        hostUin:0,
        format:"json",
        inCharset:"utf8",
        outCharset:"utf-8",
        notice:0,
        platform:"yqq",
        needNewCode:0
      }
      axios.get("api/getSingerList",{
        params:query
      }).then(res=>{
        // console.log(res.data)
        // res.data.replace(/GetSingerListCallback/g,"")
        let singer=res.data.replace(/GetSingerListCallback\(/,"").replace(/\)$/,"")
        this.singers=JSON.parse(singer)
        console.log("this.singer",this.singers)
        // console.log("normalizeSinger",this.normalizeSingers(this.singers))
        this.normalizeSingers()
      })
      // jsonp("api/getSingerList",GetSingerListCallback(err,res))
    },
    normalizeSingers(){
      let map={
        hot:{
          title:"热门",
          item:[]
        }
      }

      this.singers.data.list.forEach((item,index)=>{
        if(index<10){
          map.hot.item.push(new Singer({
            id:item.Fsinger_mid,
            name:item.Fsinger_name
          }))
        }

        const key = item.Findex
        if(!map[key]){
          map[key]={
            title:key,
            item:[]
          }

        }


          map[key].item.push(new Singer({
            id:item.Fsinger_mid,
            name:item.Fsinger_name
          })) 

      })

         console.log(map)
        //处理map
         let hot=[]
         let ret=[]
         for(let key in map){
          let val=map[key]
          if(val.title.match(/[a-zA-Z]/)){
            ret.push(val)
          }
          else if(val.title=="热门"){
            hot.push(val)
          }

         }

         ret.sort((a,b)=>{
          return a.title.charCodeAt(0)-b.title.charCodeAt(0)
         })

         console.log(hot.concat(ret))
         this.singers=hot.concat(ret)

      // return map

    },
    onShortcut(e){
      // console.log(e.target.getAttribute("data-index"))
      let anchorIndex=e.target.getAttribute("data-index")
      console.log(this.$refs.listGroup[anchorIndex])
      this.$refs.listview.scrollTo(0,100)
      this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex],0)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
}
.slider{
    position: absolute;
    right: 0;
    top: 0;
    background: #ddd;
    /*text-align: center;*/

}
ul,li{
  list-style: none;
}
img{
  width:60px;
}
.singer_title{
  font-size:18px;
  background: #ccc;
}
.character{
  padding:2px;
}

.list-singers{
  height:100vh;
  background:rgba(33,55,99,.3);
  overflow: scroll;
  ;
}
</style>

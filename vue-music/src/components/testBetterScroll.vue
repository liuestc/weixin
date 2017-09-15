<template>
<div class="scroll-list-wrap">
	<div class='list-wrapper'>
		<div ref='wrapper' class='div-wrapper'>
			<ul class='list-content'>
				<li>1111</li>
				<li>222</li>
				<li>333</li>
				<li>444</li>
				<li>555</li>
				<li>6666</li>
				<li>7777</li>
				<li>88888</li>
				<li>99999</li>
				<li>00000</li>
				<li>1111</li>
				<li>222</li>
				<li>333</li>
				<li>444</li>
				<li>555</li>
				<li>6666</li>
				<li>7777</li>
				<li>88888</li>
				<li>99999</li>
				<li>00000</li>
				<li>1111</li>
				<li>222</li>
			</ul>
		</div>
	</div>


</div>
</template>

<script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import BScroll from 'better-scroll'
export default {
  name: 'test',
  data () {
    return {
      msg: '',
      test:"hahhah",
      singers:[]

    }
  },
  components:{
    // Scroll
  },
  created(){
  },
  mounted(){
	setTimeout(()=>{
	    console.log("挂载",this.$refs.wrapper)
	    let wrapper=this.$refs.wrapper
	    let scroll = new BScroll(wrapper)
	},30)
  },
  computed:{
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-list-wrap{
	height:400px;
	position: relative;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .3rem;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    overflow: hidden;
}

.list-wrapper{
	position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
}

.div-wrapper{
	position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /*overflow: hidden;*/
    background: #fff;
}

.list-content{
	position: relative;
    z-index: 10;
    background: #fff;
}
.list-content>li{
	height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5;
}
</style>

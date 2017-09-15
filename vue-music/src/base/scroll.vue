<template>
	<div ref='wrapper'>
		<slot></slot>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'

	export default {
		props:{
			probeType:{
				type:Number,
				default:1
			},
			click:{
				type:Boolean,
				default:true
			},
			data:{
				type:Array,
				default:null
			},

		},
		mounted(){
			setTimeout(()=>{
				this._initScroll()
			},20)
		},
		methods:{
			_initScroll(){
				if(!this.$refs.wrapper){
					return
				}
				this.scroll=new Bscroll(this.$refs.wrapper,{
					probeType:this.probetype,
					click:this.click
				}) 
			},
			enable(){
				this.scroll&& this.scroll.enable()
			},
			disable(){
				this.scroll&&this.scroll.disable()
			},
			refresh(){
				this.scroll&&this.scroll.refresh()
			},
			scrollTo(){
				console.log("thisScroll",this.scroll)
				this.scroll&&this.scroll.scrollTo(0,30)
				console.log("test")
			},
			scrollToElement(){
				this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
			}

		},
		watch:{
			data(){
				setTimeout(()=>{
					this.refresh()
				},20)
			}
		}

	}
</script>
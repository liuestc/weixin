<template>
	<div @click='test'>Test</div>
</template>
<script>
	export default{
		methods:{
			test(){
				console.log("哈哈");
				this.$emit('test')
			}
		}
	}
</script>
<style>
	
</style>
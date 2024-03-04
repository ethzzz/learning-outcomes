<template>
	<view>
		<navigator url="/pages/demo1/demo1" open-type="navigate">跳转</navigator>
		<navigator url="/pages/demo1/demo1" open-type="reLaunch">重启</navigator>
		<navigator url="/pages/demo1/demo1" open-type="redirect">重定向</navigator>
	</view>
</template>

<script setup>
	// import { onReady, onLoad, onHide, onBackPress, onShow, onUnload, onPageScroll } from '@dcloudio/uni-app'
	
	
	// 页面加载
	onLoad((options)=>{
		console.log(options);
		console.log("page is load");
	})
	
	// 页面显示
	onShow(()=>{
		console.log("page is show");
	})
	
	// 页面准备
	onReady(()=>{
		console.log("page is ready");
	})
	// 页面隐藏
	onHide(()=>{
		console.log("page is hide");
	})
		
	// 页面卸载
	onUnload(()=>{
		console.log("page is unload");
	})
	
	// 监听页面滚动
	onPageScroll((e)=>{
		console.log(e.scrollTop);
	})
</script>

<style lang="scss" scoped>

</style>

<template>
	<view>
		<view class="header">我是头部</view>
		<view class="main">
			<slot name="default"></slot>
			<slot name="slot1"></slot>
			<slot name="slot2"></slot>
		</view>
		<view class="footer">我是尾部</view>
	</view>
</template>

<script>
	export default {
		name:"UserInfo",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
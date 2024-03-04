<template>
	<view>
		<UserInfo>
			<template #default>
				<view>我是default</view>
			</template>
			<template #slot1>
				<view>我是slot1</view>
			</template>
			<template #slot2>
				<view>我是slot2</view>
			</template>
		</UserInfo>
	</view>
</template>

<script setup>
	import UserInfo from "/components/UserInfo/UserInfo.vue"

</script>

<style lang="scss" scoped>

</style>

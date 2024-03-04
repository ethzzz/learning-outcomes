<template>
	<view>
		<input type="text" v-model="firstName">
		<input type="text" v-model="lastName">
		<text>总名:{{ firstName + '' + lastName}}</text>
	</view>
</template>

<script setup>
	import { ref, watch } from "vue"
	const firstName = ref("")
	const lastName = ref("")
	
		
	watch([firstName,lastName],([newFirstName,newLastName])=>{
		console.log(newFirstName,newLastName);
	})
	
	
</script>

<style lang="scss" scoped>

</style>

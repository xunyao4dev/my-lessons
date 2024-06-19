<template>
	<view class="container">
		<uni-calendar :selected="selected" :start-date="'2019-03-02'" :end-date="'2029-05-20'" />
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue'

	import {
		onLoad
	} from '@dcloudio/uni-app'

	const selected = reactive([{
			date: '2024-06-30',
			info: 'Red dot'
		}]);

	onLoad(() => {
		// 设置测试数据
		selected.push({
			date: '2024-06-01',
			info: 'Red dot'
		})
	})
</script>

<style>

</style>
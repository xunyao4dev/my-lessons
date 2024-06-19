# time-range-picker

*引入插件后可以直接使用，无需import*

使用示例
```
<template>
	<view class="container">
		<time-range-picker v-model="newLesson.time" @complete="handleTimeSelection" />
	</view>
</template>

<script setup>
	import { ref } from 'vue'

	const time = ref()

	const handleTimeSelection = (time) => {
		time = time;
	}

</script>
<style scoped>
	
</style>
```
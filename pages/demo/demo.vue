<template>
	<view class="content">
		<editable-select :title="'语文'" :palceholder="'请选择老师'" :options="options" :selected="selectedOption" @update:selected="updateSelected" @update:options="updateOptions" :saveOptions="saveOptions" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const options = ref( [] )
	const selectedOption = ref( '' )
	const updateSelected = ( value ) => {
		selectedOption.value = value
	};
	const updateOptions = ( newOptions ) => {
		options.value = newOptions
	};
	const saveOptions = () => {
		console.log( options )
	}

</script>

<style scoped>
	.content {
		padding: 20px;
	}

</style>

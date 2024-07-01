<template>
	<view>
		<uni-forms ref="form">
			<uni-forms-item label="Name" name="name">
				<input v-model="formData.name" placeholder="Enter your name" />
			</uni-forms-item>

			<uni-forms-item label="Details" name="details">
				<test-union v-model:details="formData.details"></test-union>
			</uni-forms-item>

			<button type="primary" @click="submitForm">Submit</button>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onReady
	} from '@dcloudio/uni-app'
	const form = ref();
	const formData = ref( {
		name: '',
		details: {
			age: 25,
			address: '123 Main St'
		}
	} );
	const rules = ref( {
		details: {
			rules: [ {
					required: true
				},
				{
					validateFunction: ( rule, value, data, callback ) => {
						if ( !value || !value.age || !value.address ) {
							callback( 'Details are required' );
						} else {
							callback();
						}
					}
				}
			]
		}
	} );
	onReady( () => {
		form.value.setRules( rules )
	} );
	const submitForm = () => {
		form.value.validate().then( res => {
			console.log( '表单数据信息：', formData.value );
		} ).catch( err => {
			console.log( '表单错误信息：', err );
		} );
	};

</script>

<template>
	<view class="container">
		<uni-forms ref="form" :rules="rules" :model="feedback">
			<uni-forms-item name="content">
				<uni-easyinput type="textarea" v-model="feedback.content" placeholder="请填写您的建议和反馈"></uni-easyinput>
			</uni-forms-item>
			<view class="input">
				<uni-easyinput v-model="feedback.contact" placeholder="您的联系方式（选填）"></uni-easyinput>
			</view>
			<button @click="submit" class="submit-btn">提交</button>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		request
	} from '../../utils/request'
	const rules = reactive( {
		content: {
			rules: [ {
				required: true,
				errorMessage: '反馈内容不能为空'
			} ]
		}
	} )
	const feedback = reactive( {
		content: '',
		contact: ''
	} )
	const form = ref()
	const submit = async () => {
		if ( form.value ) {
			const valid = await form.value.validate()
			if ( valid ) {
				request( {
					url: `${process.env.baseUrl}/feedbacks`,
					method: 'POST',
					data: feedback,
					success: () => {
						Object.assign( feedback, {
							content: '',
							contact: ''
						} )
						uni.showToast( {
							title: '提交成功',
							icon: 'success'
						} )
					}
				} )
			}
		}
	}

</script>

<style scoped>
	.container {
		padding: 20px;
		height: 100vh;
		background-color: #fff;
	}

	.container .input {
		margin-bottom: 20px;
	}

	.submit-btn {
		width: 100%;
		margin-top: 20px;
		background-color: #007AFF;
		/* Change color as needed */
		color: #fff;
		border: none;
		padding: 10px;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

</style>

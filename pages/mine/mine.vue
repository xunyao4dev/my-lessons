<template>
	<view class="container">
		<!-- 个人信息部分 -->
		<view class="header">
			<image class="avatar" src="https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132" mode="aspectFill"></image>
			<view class="info">
				<text class="nickname">{{ nickname }}</text>
			</view>
		</view>

		<!-- 信息展示部分 -->
		<view class="info-sections">
			<view class="info-item">
				<text class="info-value">{{ studentCount }}</text>
				<text class="info-label">学生数量</text>
			</view>
			<view class="info-item">
				<text class="info-value">{{lessonCount}}</text>
				<text class="info-label">已上课程</text>
			</view>
		</view>

		<!-- 功能列表部分 -->
		<uni-list class="actions">
			<uni-list-item title="意见建议" clickable @click="suggestions" showArrow :showExtraIcon="true" :extraIcon="{color: '#4cd964',size: '22',type: 'help'}"></uni-list-item>
			<uni-list-item title="关于" clickable @click="about" showArrow :showExtraIcon="true" :extraIcon="{color: '#4cd964',size: '22',type: 'link'}"></uni-list-item>
		</uni-list>

		<!-- 退出登录按钮 -->
		<view class="logout-section">
			<button class="logout-button" @click="logout">退出登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		request
	} from '../../utils/request'
	const nickname = ref()
	const avatar = ref()
	const studentCount = ref( 0 )
	const lessonCount = ref( 0 )
	
	const about = () => {
		uni.navigateTo({
			url: '/pages/about/about'
		})
	}
	const suggestions = () => {
		uni.navigateTo({
			url: '/pages/suggestion/suggestion'
		})
	}
	const logout = () => {
		uni.showToast( {
			title: '退出登录成功',
			icon: 'success'
		} )
		uni.clearStorageSync()
		uni.reLaunch( {
			url: '/pages/login/login'
		} )
	}
	onLoad( () => {
		request( {
			url: `${process.env.baseUrl}/users/mine`,
			method: 'GET',
			success: ( res ) => {
				const {
					data
				} = res.data
				nickname.value = data.nickname
				avatar.value = data.avatar
				studentCount.value = data.studentCount
				lessonCount.value = data.lessonCount
			},
			fail: ( err ) => {
				uni.showToast( {
					title: '网络异常',
					icon: 'error'
				} )
			}
		} )
	} )

</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f5f5f5;
	}

	.header {
		display: flex;
		align-items: center;
		padding: 40rpx;
		background-color: #fff;
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
	}

	.avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin-right: 30rpx;
	}

	.info {
		flex: 1;
	}

	.nickname {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
	}

	.info-sections {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 20rpx;
		padding: 0 40rpx;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 60px;
		padding: 20rpx;
		background-color: #fff;
		border-radius: 8rpx;
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
		width: 50%;
	}

	.info-label {
		font-size: 26rpx;
		color: #888;
	}

	.info-value {
		font-size: 48rpx;
		font-weight: bold;
		color: #007aff;
	}

	.actions {
		margin-top: 20rpx;
		padding: 0 40rpx;
		background-color: #fff;
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
	}

	.logout-section {
		margin-top: auto;
		padding: 40rpx;
	}

	.logout-button {
		width: 100%;
		padding: 20rpx 0;
		font-size: 32rpx;
		text-align: center;
		background-color: #ff3b30;
		color: #fff;
		border: none;
		border-radius: 8rpx;
	}

</style>

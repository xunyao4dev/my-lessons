<template>
	<view class="container">
		<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
		<text class="title">亚琴学务</text>
		<text class="slogan">您的教育管理助手</text>
		<button open-type="getUserInfo" @getuserinfo="onGetUserInfo" class="login-button">
			<uni-icons type="weixin" size="24" color="#ffffff"></uni-icons>
			<text class="button-text">微信用户一键登录</text>
		</button>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	const onGetUserInfo = async ( e ) => {
		if ( e.detail.errMsg === "getUserInfo:ok" ) {
			// 用户允许授权获取用户信息
			const {
				encryptedData,
				iv
			} = e.detail
			try {
				uni.showToast( {
					title: '登录中...'
				} )
				const loginRes = await uni.login( {
					provider: 'weixin'
				} )
				const {
					code
				} = loginRes
				if ( code ) {
					// 向后台发送 code 和 userInfo
					uni.request( {
						url: `${process.env.baseUrl}/wechat/login`,
						method: 'POST',
						data: {
							code,
							encryptedData,
							iv
						},
						success: ( res ) => {
							const {
								data
							} = res.data
							uni.setStorageSync( 'token', data.token )
							uni.showToast( {
								title: '登录成功',
								success: () => {
									uni.switchTab( {
										url: '/pages/index/index'
									} )
								}
							} )
						}
					} )
				}
			} catch ( error ) {
				uni.showToast( {
					title: '微信登录失败，请稍后重试'
				} )
			} finally {
				uni.hideToast()
			}
		} else {
			uni.showToast( {
				title: '用户拒绝'
			} )
		}
	}
	onLoad( () => {
		// 设置状态栏颜色为透明
		uni.setNavigationBarColor( {
			frontColor: '#ffffff', // 状态栏字体颜色
			backgroundColor: '#00000000' // 状态栏背景色透明
		} )
	} )

</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #fefefe;
	}

	.logo {
		width: 100px;
		height: 100px;
		margin-bottom: 20px;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.slogan {
		font-size: 16px;
		color: #666;
		margin-bottom: 30px;
	}

	.login-button {
		width: 250px;
		height: 45px;
		background-color: #1aad19;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}

	.button-text {
		margin-left: 10px;
		font-size: 18px;
	}

</style>

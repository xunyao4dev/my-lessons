<script>
	export default {
		onLaunch: function () {
			const token = uni.getStorageSync( 'token' )
			if ( token ) {
				uni.reLaunch( {
					url: 'pages/index/index'
				} )
			} else {
				uni.reLaunch( {
					url: '/pages/login/login'
				} )
			}
		},
		onShow: function () {
			console.log( 'App Show' )
		},
		onHide: function () {
			console.log( 'App Hide' )
		}
	}

</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/static/iconfont.css';

	/* #ifndef APP-NVUE */
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */

</style>

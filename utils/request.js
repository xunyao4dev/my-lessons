
const redirectToLogin = () => {
  uni.clearStorageSync();
  uni.reLaunch({
    url: '/pages/login/login'
  })
}

const request = (options) => {
	const token = uni.getStorageSync('token')
	if (!token) {
	  redirectToLogin()
	  return
	}
	uni.showToast({
		title: '请求中...',
		icon: 'loading'
	})
	// 添加请求头
	options.header = options.header || {}
	options.header['Authorization'] = 'Bearer ' + token
	// 包装 success 和 fail 回调函数
  const originalSuccess = options.success
  const originalFail = options.fail

  options.success = (res) => {
    uni.hideToast()

    if (res.statusCode === 401) {
      redirectToLogin()
    } else {
      originalSuccess && originalSuccess(res)
    }
  }

  options.fail = (err) => {
    uni.hideToast()
    originalFail && originalFail(err)
  }

  // 发送请求
  uni.request(options)
}

export { request }

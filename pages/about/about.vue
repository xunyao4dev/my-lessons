<template>
	<view class="about-page">
		<view class="header">
			<image class="logo" src="@/static/logo.png" mode="widthFix"></image>
			<text class="app-name">亚琴学务小程序</text>
		</view>
		<view class="content">
			<view class="section">
				<text class="title">关于我们</text>
				<text class="description">
					学生管理小程序，旨在为K12教育领域的销售人员提供一个便捷高效的学生管理工具。我们深知教育工作者在繁忙的日程中需要一款得力的助手来管理学生信息，跟进学习进度，并保持与家长的有效沟通。学生管理小程序将帮助教育工作者轻松完成这些任务，让教育管理变得更加简单、智能。
				</text>
			</view>
			<view class="section">
				<text class="title">版本信息</text>
				<text class="description">
					当前版本：Beta版。作为一个不断完善的产品，我们始终致力于倾听用户反馈，持续优化和提升功能。我们的目标是为用户提供最佳的使用体验，确保每一位教育工作者都能从中受益。
				</text>
			</view>
			<view class="section">
				<text class="title">我们的愿景</text>
				<text class="description">
					教育是立国之本，学生是国家的未来。学生管理小程序不仅仅是一个工具，更是我们对教育事业的一份承诺。我们希望通过这款小程序，帮助教育工作者更好地管理学生，让每一位学生都能得到应有的关注和支持，最终实现“学有所成”的目标。
				</text>
			</view>
			<view class="section">
				<text class="title">隐私政策</text>
				<text class="description">
					学生管理小程序严格遵守隐私政策，并保护用户的个人信息安全。我们不会未经用户授权向任何第三方透露用户信息，所有信息仅用于提升小程序的功能和服务质量。我们承诺采取一切合理的技术措施来保护用户的数据安全。
				</text>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style scoped>
	.about-page {
		padding: 20px;
		background-color: #fff;
		height: 100vh;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
	}

	.logo {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.app-name {
		font-size: 24px;
		font-weight: bold;
		color: #333;
	}

	.content {
		padding: 20px;
		background-color: #f9f9f9;
		border-radius: 10px;
	}

	.section {
		margin-bottom: 20px;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
		color: #555;
		margin-bottom: 10px;
	}

	.description {
		font-size: 16px;
		color: #666;
		line-height: 1.5;
	}

</style>

<template>
	<view class="container">
		<uni-search-bar radius="5" bg-color="#fff" placeholder="搜索学生" clearButton="auto" @confirm="search" />
		<uni-list class="student-list" :border="false">
			<view v-for="student in students" :key="student.id" class="student-item"
				@tap="navigateToStudent(student.id)">
				<view class="left-column">
					<view class="header">
						<uni-icons custom-prefix="iconfont" :type="student.gender === 0 ? 'icon-male' : 'icon-female'"
							class="gender-icon"></uni-icons>
						<text class="name">{{student.name}}</text>
						<text class="student-grade">{{ formatGrade(student.grade) }}</text>
					</view>
					<view class="subjects">
						<uni-tag :inverted="true" v-for="subject in student.subjects" :key="subject"
							:text="formatSubject(subject)" type="warning" size="mini"
							custom-style="margin-right: 4px;" />
					</view>
				</view>
				<view class="right-column">
					<view class="enrollment-time">{{student.createTime}}</view>
					<view class="remaining-hours">剩余课时:<uni-badge text-color="#fff" :text="student.remainHours" />
					</view>
				</view>
			</view>
		</uni-list>
		<uni-fab :content="fabContent" horizontal="right" direction="vertical" @trigger="trigger" />
	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'

	import {
		subjectOptions,
		gradeOptions
	} from '../../utils/constant'

	import {
		formatGrade,
		formatSubject
	} from '../../utils/utils'

	const students = reactive([])
	const fabContent = reactive([{
		iconPath: '/static/add-student.png',
		selectedIconPath: '/static/add-student.png',
		text: '添加学生'
	}])

	const navigateToStudent = (id) => {
		uni.navigateTo({
			url: `/pages/student-info/student-info?studentId=${id}`,
			animationType: 'pop-in',
			animationDuration: 200
		})
	}

	const trigger = (e) => {
		if (e.index === 0) {
			uni.navigateTo({
				url: "/pages/add-student/add-student"
			})
		}
	}

	const search = (content) => {
		console.log(content)
	}


	onShow(() => {
		uni.request({
			url: 'http://localhost:8992/students',
			method: 'GET',
			success: (res) => {
				students.splice(0, students.length)
				students.push(...res.data.data)
			}
		})
	})
</script>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		/* 让页面容器高度占据整个视口高度 */
	}

	.student-list {
		display: flex;
		flex-direction: column;
		gap: 0;
		/* 初始化gap以确保兼容性 */
		padding: 0;
		/* 移除任何可能存在的默认填充 */
		flex: 1;
		/* 让uni-list自适应填充剩余空间 */
	}

	.student-list::before,
	.student-list::after {
		content: "";
		flex-basis: 3px;
		background-color: #f0f0f0;
	}

	.student-item:last-child {
		margin-bottom: 0;
	}

	.student-item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px;
		border-radius: 5px;
		border: 1px solid #ddd;
		margin-bottom: 3px;
	}

	.left-column {
		flex-basis: 70%;
	}

	.right-column {
		flex-basis: 30%;
	}

	.header {
		display: flex;
		align-items: center;
	}

	.gender-icon {
		margin-right: 5px;
	}

	.name {
		font-size: 16px;
		font-weight: 500;
		color: #333;
	}

	.student-grade {
		color: #aaa;
		margin-left: 3px;
		font-size: 12px;
		margin-top: 5px;
	}

	.subjects {
		margin-top: 5px;
		flex-wrap: wrap;
	}

	.right-column {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.enrollment-time,
	.remaining-hours {
		font-size: 12px;
		color: #888;
		margin-bottom: 4px;
	}
</style>
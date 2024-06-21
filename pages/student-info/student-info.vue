<template>
	<view class="page-container">
		<view class="student-card">
			<view class="info-section">
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-ming"></uni-icons>
					<text class="label">姓名</text>
					<text class="value">{{ student.name }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-gender"></uni-icons>
					<text class="label">性别</text>
					<text class="value">{{ genderText }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-nianji"></uni-icons>
					<text class="label">年级</text>
					<text class="value">{{ formatGrade(student.grade) }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-keshi"></uni-icons>
					<text class="label">课时</text>
					<text class="value">{{ student.remainHours }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-kemu"></uni-icons>
					<text class="label">科目</text>
					<text class="value">{{ subjectsText }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-shouji"></uni-icons>
					<text class="label">手机</text>
					<text class="value clickable" @click="makeCall(student.phone)">
						{{ student.phone }}
					</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-beizhu"></uni-icons>
					<text class="label">备注</text>
					<text class="value">{{ student.remark }}</text>
				</view>
			</view>
			<view class="button-group">
				<button class="edit-button" @click="editInfo(student.id)">
					<uni-icons custom-prefix="iconfont" type="icon-bianji"></uni-icons> 编辑
				</button>
				<button class="lesson-button" @click="lessonInfo">
					<uni-icons custom-prefix="iconfont" type="icon-paikebiao"></uni-icons> 上课
				</button>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		ref,
		computed,
		reactive
	} from 'vue'

	import {
		onLoad
	} from '@dcloudio/uni-app'

	import {
		useStudentStore
	} from '@/store/student'

	import {
		useLessonStore
	} from '../../store/lesson'
	
	import { request } from '../../utils/request'

	const student = useStudentStore()
	const lesson = useLessonStore()

	import {
		subjectOptions,
		genderOptions,
		gradeOptions
	} from '../../utils/constant'

	import {
		formatGrade
	} from '../../utils/utils'

	const makeCall = (phone) => {
		uni.makePhoneCall({
			phoneNumber: phone,
			fail: (err) => {
				console.error(err)
			}
		})
	}

	const genderText = computed(() => genderOptions.find(i => i.value === student.gender)?.text)

	const subjectsText = computed(() => {
		return student.subjects
			.map(subject => subjectOptions.find(i => subject === i.value)?.text)
			.join(', ')
	})

	const editInfo = (studentId) => {
		uni.navigateTo({
			url: `/pages/add-student/add-student?studentId=${studentId}`
		})
	}

	const lessonInfo = () => {
		lesson.setStudentId(student.id)
		uni.navigateTo({
			url: '/pages/lesson/lesson'
		})
	}

	onLoad((params) => {
		request({
			url: `${process.env.baseUrl}/students/${params.studentId}`,
			method: 'GET',
			success: (res) => {
				student.setStudent(res.data.data)
			}
		})
	})
</script>
<style scoped>
	.container {
		padding: 20px;
		background-color: #fff;
		height: 100vh;
	}

	.student-card {
		height: 100vh;
		background-color: #fff;
	}

	.info-item {
		display: flex;
		align-items: center;
		padding: 12px 16px;
		border-bottom: 1px solid #e0e0e0;
		color: #888;
	}

	.info-item:last-child {
		border-bottom: none;
	}

	.label {
		margin-left: 3px;
		width: 100px;
		color: #555;
	}

	.value {
		flex: 1;
		word-break: break-word;
		color: #888;
	}

	.button-group {
		display: flex;
		justify-content: center;
		/* 中心对齐 */
		margin-top: 20px;
	}

	.edit-button,
	.lesson-button {
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #fff;
		gap: 5px;
	}

	.edit-button {
		background-color: #d55a5e;
	}

	.lesson-button {
		background-color: #58e1fa;
	}

	.clickable {
		color: #007bff;
	}
</style>
<template>
	<view class="container">
		<bruce-calendar ref="calRef" :selected="selected" @change="change" @monthSwitch="monthSwitch" :insert="true"
			:lunar="true" :start-date="'2000-1-1'" :end-date="'2099-12-31'" />
		<uni-swipe-action>
			<uni-swipe-action-item v-for="lesson in lessons" :key="lesson.id" :right-options="swipeOptions"
				@click="swipeClick(lesson)" :disabled="lesson.status === 2">
				<view class="course-info">
					<image v-if="lesson.status === 2" src="@/static/cancelled.png" class="cancelled-stamp"></image>
					<view class="course-content">
						<view class="course-header">
							<text class="course-title">{{ formatSubject(lesson.subject) }}</text>
							<text class="course-time">{{ lesson.time }}</text>
						</view>
						<view class="course-details">
							<view class="course-detail-item">
								<uni-icons type="home" size="16" color="#7f8c8d"></uni-icons>
								<text class="label">教室:</text>
								<text class="value">{{ lesson.classroom }}</text>
							</view>
							<view class="course-detail-item">
								<uni-icons custom-prefix="iconfont" type="icon-teacher" color="#7f8c8d"></uni-icons>
								<text class="label">老师:</text>
								<text class="value">{{ lesson.teacher }}</text>
							</view>
						</view>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-fab horizontal="right" @fabClick="openDialog"></uni-fab>

		<uni-popup ref="popup" type="center">
			<view class="dialog">
				<view class="dialog-header">添加课程</view>
				<uni-notice-bar show-icon background-color="#eee" color="#888" :text="'将为【' + student.name + '】添加课程'" />
				<view class="dialog-body">
					<uni-forms ref="form" :rules="rules" :model="newLesson">
						<uni-forms-item label="科目" label-width="70" required name="subject">
							<uni-data-select v-model="newLesson.subject" :localdata="subjectOptions"
								placeholder="请选择科目"></uni-data-select>
						</uni-forms-item>
						<uni-forms-item label="教师" label-width="70" required name="teacher">
							<uni-easyinput v-model="newLesson.teacher" placeholder="请输入教师" />
						</uni-forms-item>
						<uni-forms-item label="教室" label-width="70" required name="classroom">
							<uni-easyinput v-model="newLesson.classroom" placeholder="请输入教室" />
						</uni-forms-item>
						<uni-forms-item label="日期" label-width="70" required name="date">
							<uni-datetime-picker v-model="newLesson.date" :start="formatDate(new Date())" type="date"
								placeholder="请选择日期" />
						</uni-forms-item>
						<uni-forms-item label="时间" label-width="70" required name="time">
							<time-range-picker v-model="newLesson.time" @complete="handleTimeSelection" />
						</uni-forms-item>
					</uni-forms>
				</view>
				<view class="dialog-footer">
					<button class="cancel-button" @click="closeDialog">取消</button>
					<button class="confirm-button" @click="addLesson">确定</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onBeforeMount
	} from 'vue'
	import {
		useLessonStore
	} from '../../store/lesson'
	import {
		useStudentStore
	} from '../../store/student'
	import {
		subjectOptions
	} from '../../utils/constant'
	import {
		formatSubject
	} from '../../utils/utils'
	
	import { request } from '../../utils/request'

	const calRef = ref()
	const form = ref()
	const lesson = useLessonStore()
	const student = useStudentStore()
	const selected = ref([])
	const lessons = ref([])

	const swipeOptions = reactive([{
		text: '取消',
		style: {
			backgroundColor: '#F56C6C'
		}
	}])

	const swipeClick = (lesson) => {
		uni.showModal({
			title: '确认取消？',
			success: (res) => {
				if (res.confirm) {
					lesson.status = 2
					updateLesson(lesson, '取消成功')
				}
			}
		})
	}

	const newLesson = reactive({})

	const rules = reactive({
		subject: {
			rules: [{
				required: true,
				errorMessage: '科目不能为空'
			}]
		},
		teacher: {
			rules: [{
				required: true,
				errorMessage: '教师不能为空'
			}]
		},
		classroom: {
			rules: [{
				required: true,
				errorMessage: '教室不能为空'
			}]
		},
		date: {
			rules: [{
				required: true,
				errorMessage: '日期不能为空'
			}]
		},
		time: {
			rules: [{
				required: true,
				errorMessage: '时间不能为空'
			}]
		}
	})

	const popup = ref()

	const openDialog = () => {
		popup.value.open()
	}

	const closeDialog = () => {
		popup.value.close()
	}

	const addLesson = async () => {
		if (form.value) {
			const valid = await form.value.validate()
			if (valid) {
				request({
					url: `${process.env.baseUrl}/students/${student.id}/lessons`,
					method: 'POST',
					data: newLesson,
					success: () => {
						uni.showToast({
							title: '添加成功',
							icon: 'success'
						})
						setTimeout(() => {
							closeDialog()
							calRef.value.init(newLesson.date)
							calRef.value.change()
						}, 1500)
					}
				})
			}
		}
	}

	const change = (params) => {
		const {
			year,
			month,
			date
		} = params
		loadData(`${year}-${String(month).padStart(2, '0')}`, `${year}-${String(month).padStart(2, '0')}-${date}`)
	}

	const monthSwitch = (params) => {
		const {
			year,
			month
		} = params
		loadData(`${year}-${String(month).padStart(2, '0')}`)
	}

	const handleTimeSelection = (time) => {
		newLesson.time = time
	}

	const formatDate = (date) => {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}

	const formatMonth = (date) => {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		return `${year}-${month}`
	}

	const updateLesson = (lesson, title) => {
		request({
			url: `${process.env.baseUrl}/lessons/${lesson.id}`,
			method: 'POST',
			data: lesson,
			success: () => {
				uni.showToast({
					title: title
				})
			}
		})
	}

	const loadData = (month, date) => {
		request({
			url: `${process.env.baseUrl}/students/${lesson.studentId}/lessons?month=${month}&date=${date}`,
			method: 'GET',
			success: (res) => {
				const {
					dailySchedules,
					currentSchedules
				} = res.data.data
				selected.value = dailySchedules.map(s => ({
					date: s,
					color: 'red',
					icon: 'flag-filled'
				}))
				lessons.value = currentSchedules.map(l => ({
					id: l.lessonId,
					status: l.status,
					subject: l.subject,
					classroom: l.classroom,
					teacher: l.teacher,
					time: `${l.startTime}-${l.endTime}`
				}))
			}
		})
	}

	onBeforeMount(() => {
		const date = new Date()
		loadData(formatMonth(date), formatDate(date))
	})
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.course-info {
		background-color: #ffffff;
		border-bottom: 1px solid #f0f0f0;
	}

	.cancelled-stamp {
		position: absolute;
		top: 40px;
		right: 10px;
		/* transform: rotate(45deg); */
		z-index: 1;
		height: 30px;
		width: 60px;
	}

	.course-content {
		padding: 10px;
	}

	.course-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}

	.course-title {
		font-weight: 600;
		font-size: 16px;
		color: #2c3e50;
	}

	.course-time {
		color: #95a5a6;
		font-size: 12px;
	}

	.course-details {
		display: flex;
		flex-direction: column;
		gap: 5px;
		font-size: 14px;
	}

	.course-detail-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.label {
		color: #7f8c8d;
	}

	.value {
		color: #2c3e50;
	}

	.dialog {
		padding: 20px;
		background-color: white;
		border-radius: 10px;
		margin: auto;
	}

	.uni-popup__wrapper {
		width: 90%;
	}

	.dialog-header {
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		margin-top: 10px;
	}

	.dialog-body {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.dialog-footer {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}

	.confirm-button {
		background-color: #007aff;
	}

	.cancel-button {
		background-color: #eee;
	}

	.confirm-button,
	.cancel-button {
		color: white;
		border-radius: 5px;
		flex: 1;
		margin: 0 10px;
		width: 30%;
	}
</style>
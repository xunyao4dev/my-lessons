<template>
	<view class="page-container">
		<view class="student-card">
			<view class="info-section">
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-ming" class="info-icon"></uni-icons>
					<text class="label">姓名</text>
					<text class="value">{{ student.name }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-gender" class="info-icon"></uni-icons>
					<text class="label">性别</text>
					<text class="value">{{ genderText }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-nianji" class="info-icon"></uni-icons>
					<text class="label">年级</text>
					<text class="value">{{ formatGrade(student.grade) }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-keshi" class="info-icon"></uni-icons>
					<text class="label">课时</text>
					<view class="value">
						<view v-if="student.remainHours.hours1v1">1v1: {{student.remainHours.hours1v1}}课时</view>
						<view v-if="student.remainHours.hours1v3">1v3: {{student.remainHours.hours1v3}}课时</view>
					</view>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-kemu" class="info-icon"></uni-icons>
					<text class="label">科目</text>
					<text class="value">{{ subjectsText }}</text>
				</view>
				<view class="info-item clickable" @click="makeCall(student.phone)">
					<uni-icons custom-prefix="iconfont" type="icon-shouji" class="info-icon"></uni-icons>
					<text class="label">手机</text>
					<text class="value">{{ student.phone }}</text>
				</view>
				<view class="info-item">
					<uni-icons custom-prefix="iconfont" type="icon-beizhu" class="info-icon"></uni-icons>
					<text class="label">备注</text>
					<text class="value">{{ student.remark }}</text>
				</view>
			</view>
			<view class="button-group">
				<button type="default" @click="editInfo(student.id)" size="mini" class="custom-button">
					<view class="button-content">
						<uni-icons custom-prefix="iconfont" type="icon-bianji" class="button-icon"></uni-icons>
						<text class="button-text">编辑</text>
					</view>
				</button>
				<button type="primary" @click="lessonInfo" size="mini" class="custom-button">
					<view class="button-content">
						<uni-icons custom-prefix="iconfont" type="icon-paikebiao" class="button-icon"></uni-icons>
						<text class="button-text">上课</text>
					</view>
				</button>
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		useStudentStore
	} from '@/store/student';
	import {
		request
	} from '../../utils/request';
	import {
		subjectOptions,
		genderOptions
	} from '../../utils/constant';
	import {
		formatGrade
	} from '../../utils/utils';
	const student = useStudentStore();
	const makeCall = ( phone ) => {
		uni.makePhoneCall( {
			phoneNumber: phone,
			fail: ( err ) => {
				console.error( err );
			}
		} );
	};
	const genderText = computed( () => genderOptions.find( i => i.value === student.gender )?.text );
	const subjectsText = computed( () => {
		return student.subjects.map( subject => subjectOptions.find( i => subject === i.value )?.text ).join( ', ' );
	} );
	const editInfo = ( studentId ) => {
		uni.navigateTo( {
			url: `/pages/add-student/add-student?studentId=${studentId}`
		} );
	};
	const lessonInfo = () => {
		uni.navigateTo( {
			url: '/pages/lesson/lesson'
		} );
	};
	onLoad( ( params ) => {
		request( {
			url: `${process.env.baseUrl}/students/${params.studentId}`,
			method: 'GET',
			success: ( res ) => {
				student.setStudent( res.data.data )
			}
		} );
	} );

</script>
<style scoped>
	.page-container {
		padding: 20px 0;
		background-color: #fff;
		height: 100vh;
	}

	.student-card {
		height: 100vh;
		background-color: #fff;
	}

	.info-section {
		margin-bottom: 20px;
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

	.info-icon {
		font-size: 18px;
		margin-right: 10px;
	}

	.label {
		width: 60px;
		color: #555;
	}

	.value {
		flex: 1;
		word-break: break-word;
	}

	.clickable {
		color: #007bff;
		cursor: pointer;
	}

	.button-group {
		display: flex;
		justify-content: center;
		gap: 10px;
	}

	.custom-button {
		display: flex;
		align-items: center;
	}

	.button-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button-icon {
		font-size: 18px;
		margin-right: 5px;
	}

	.button-text {
		font-size: 14px;
	}

</style>

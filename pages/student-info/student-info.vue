<template>
	<view class="page-container">
		<view class="student-card">
			<view class="info-section">
				<view class="info-item" v-for="(info, index) in infoList" :key="index" :class="[{ 'clickable': info.clickable }]" @click="info.clickable ? info.clickAction() : null">
					<uni-icons custom-prefix="iconfont" :type="info.iconType" class="info-icon"></uni-icons>
					<text class="label">{{ info.label }}</text>
					<text class="value">{{ info.value }}</text>
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
		useLessonStore
	} from '../../store/lesson';
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
	const lesson = useLessonStore();
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
	const infoList = computed( () => [ {
			iconType: 'icon-ming',
			label: '姓名',
			value: student.name
		},
		{
			iconType: 'icon-gender',
			label: '性别',
			value: genderText.value
		},
		{
			iconType: 'icon-nianji',
			label: '年级',
			value: formatGrade( student.grade )
		},
		{
			iconType: 'icon-keshi',
			label: '课时',
			value: student.remainHours
		},
		{
			iconType: 'icon-kemu',
			label: '科目',
			value: subjectsText.value
		},
		{
			iconType: 'icon-shouji',
			label: '手机',
			value: student.phone,
			clickable: true,
			clickAction: () => makeCall( student.phone )
		},
		{
			iconType: 'icon-beizhu',
			label: '备注',
			value: student.remark
		}
	] );
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

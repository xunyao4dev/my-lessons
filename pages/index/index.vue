<template>
	<view class="page-container">
		<z-paging ref="paging" v-model="students" @query="query" class="container" :paging-style="{'background-color': '#fafafa'}" :refresher-end-bounce-enabled="false" empty-view-text="您还没有学生哦~快去添加吧!">
			<uni-search-bar v-model="searchQuery" @confirm="onSearch" @input="onInput" :placeholder="'请输入学生姓名'" />
			<view v-for="(student, index) in filteredStudents" :key="index" class="student-item" @tap="navigateToStudent(student.id)">
				<view class="left-column">
					<view class="header">
						<uni-icons custom-prefix="iconfont" :type="student.gender === 0 ? 'icon-male' : 'icon-female'" class="gender-icon"></uni-icons>
						<text class="name">{{ student.name }}</text>
						<text class="student-grade">{{ formatGrade(student.grade) }}</text>
					</view>
					<view class="subjects">
						<uni-tag :inverted="true" v-for="subject in student.subjects" :key="subject" :text="formatSubjectAbbr(subject)" type="warning" size="mini" custom-style="margin-right: 4px; font-weight: bold;" />
					</view>
				</view>
				<view class="right-column">
					<view class="enrollment-time">{{ student.createTime }}</view>
					<view class="remaining-hours">
						剩余课时:<uni-badge text-color="#fff" :text="student.remainHours" />
					</view>
				</view>
			</view>
			<uni-fab ref="fab" :content="fabContent" horizontal="right" direction="vertical" @trigger="trigger" />
		</z-paging>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		formatGrade,
		formatSubjectAbbr
	} from '../../utils/utils';
	import {
		request
	} from '../../utils/request';
	const students = ref( [] );
	const filteredStudents = ref( [] );
	const searchQuery = ref( '' );
	const fab = ref();
	const paging = ref();
	const fabContent = ref( [ {
		text: '添加学生',
		icon: 'icon-add-student',
		selectedIcon: 'icon-add-student',
	},{
		text: '测试',
		icon: 'icon-add-student',
		selectedIcon: 'icon-add-student',
	}, ] );
	const query = () => {
		request( {
			url: `${process.env.baseUrl}/students`,
			method: 'GET',
			success: ( res ) => {
				students.value = res.data.data;
				filteredStudents.value = students.value;
				paging.value.complete( res.data.data );
			},
			fail: ( err ) => {
				uni.showToast( {
					title: '网络异常',
					icon: 'error',
				} );
				paging.value.complete( false );
			},
		} );
	};
	const onSearch = () => {
		filterStudents();
	};
	const onInput = ( value ) => {
		searchQuery.value = value;
		filterStudents();
	};
	const filterStudents = () => {
		if ( searchQuery.value ) {
			filteredStudents.value = students.value.filter( ( student ) =>
				student.name.includes( searchQuery.value )
			);
		} else {
			filteredStudents.value = students.value;
		}
	};
	const navigateToStudent = ( id ) => {
		uni.navigateTo( {
			url: `/pages/student-info/student-info?studentId=${id}`,
			animationType: 'pop-in',
			animationDuration: 200,
		} );
	};
	const trigger = ( e ) => {
		if ( e.index === 0 ) {
			uni.navigateTo( {
				url: '/pages/add-student/add-student',
			} );
		} else {
			uni.navigateTo( {
				url: '/pages/demo/demo',
			} );
		}
		fab.value.close();
	};
	onShow( () => {
		if ( paging.value ) {
			paging.value.reload();
		}
	} );

</script>

<style scoped>
	.page-container {
		padding: 10px;
		background-color: #fafafa;
		height: 100vh;
	}

	.student-item {
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px;
		border-bottom: 1px solid #ddd;
	}

	.student-item:first-child {
		border-top: 1px solid #ddd;
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
		color: #888;
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

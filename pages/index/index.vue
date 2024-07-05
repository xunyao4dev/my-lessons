<template>
	<view class="page-container">
		<z-paging ref="paging" v-model="students" @query="query" class="container" :paging-style="pagingStyle" empty-view-text="您还没有学生哦~快去添加吧!">
			<view v-for="(student, index) in students" :key="student.id" class="student-item" @tap="navigateToStudent(student.id)">
				<view class="student-card">
					<view class="header">
						<view class="left">
							<uni-icons custom-prefix="iconfont" :type="student.gender === 0 ? 'icon-male' : 'icon-female'" class="gender-icon"></uni-icons>
							<text class="name">{{ student.name }}</text>
							<text class="student-grade">{{ formatGrade(student.grade) }}</text>
						</view>
						<view class="right">
							<text class="create-time">{{ student.createTime }}</text>
						</view>
					</view>
					<view class="body">
						<view class="subjects">
							<uni-tag :inverted="true" v-for="subject in student.subjects" :key="subject" :text="formatSubjectAbbr(subject)" type="warning" size="mini" custom-style="margin-right: 4px; font-weight: bold;" />
						</view>
						<view class="time-remaining">
							<uni-badge v-if="student.remainHours.hours1v1" :text="student.remainHours.hours1v1" type="success" absolute="rightTop">
								<view class="box"><text class="box-text">1v1</text></view>
							</uni-badge>
							<uni-badge v-if="student.remainHours.hours1v3" :text="student.remainHours.hours1v3" type="success" absolute="rightTop">
								<view class="box"><text class="box-text">1v3</text></view>
							</uni-badge>
						</view>
					</view>
				</view>
			</view>
			<view class="list-footer"></view>
			<uni-fab ref="fab" :content="fabContent" horizontal="right" direction="vertical" @trigger="trigger" />
		</z-paging>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';
	import {
		formatGrade,
		formatSubjectAbbr
	} from '../../utils/utils';
	import {
		request
	} from '../../utils/request';
	const students = ref( [] );
	const fab = ref();
	const paging = ref();
	const fabContent = ref( [ {
		text: '添加学生',
		icon: 'icon-add-student',
		selectedIcon: 'icon-add-student',
	}, {
		text: '测试',
		icon: 'icon-add-student',
		selectedIcon: 'icon-add-student',
	} ] );
	const pagingStyle = ref( {
		'background-color': '#fafafa'
	} )
	const query = ( pageNo, pageSize ) => {
		request( {
			url: `${process.env.baseUrl}/students?pageNo=${pageNo}&pageSize=${pageSize}`,
			method: 'GET',
			success: ( res ) => {
				const {
					list,
					hasNextPage
				} = res.data.data;
				paging.value.completeByNoMore( list, !hasNextPage );
			},
			fail: () => {
				paging.value.complete( false );
			},
		} );
	}
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
			uni.navigateTo({
				url: '/pages/demo/demo'
			})
		}
		fab.value.close();
	};
	onShow( () => {
		if ( paging.value ) {
			paging.value.clear();
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

	.uni-search-bar {
		margin-bottom: 10px;
	}

	.student-item {
		margin-bottom: 10px;
	}

	.student-card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		padding: 12px;
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
	}

	.left {
		display: flex;
	}

	.gender-icon {
		margin-right: 5px;
	}

	.name {
		font-size: 18px;
		font-weight: 600;
		color: #333;
	}

	.student-grade {
		color: #888;
		margin-left: 8px;
		font-size: 14px;
	}

	.right {
		font-size: 14px;
		color: #888;
		display: flex;
		align-items: flex-end;
	}

	.body {
		display: flex;
		justify-content: space-between;
	}

	.subjects {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 8px;
	}

	.time-remaining {
		display: flex;
		gap: 10px;
		flex-direction: row;
		align-items: center;
		margin-bottom: 4px;
	}

	.uni-badge {
		margin-left: 4px;
	}

	.box {
		width: 20px;
		height: 20px;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #e19a5f;
		color: #fff;
		font-weight: bold;
		font-size: 10px;
	}

	.list-footer {
		height: 45px;
	}

	.box-text {
		text-align: center;
		color: #fff;
	}

</style>

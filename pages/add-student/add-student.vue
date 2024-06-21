<template>
	<view class="container">
		<uni-forms ref="form" :rules="rules" :model="student">
			<uni-forms-item label="姓名" label-width="70" required name="name">
				<uni-easyinput v-model="student.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="性别" label-width="70" required name="gender">
				<uni-data-checkbox mode="tag" v-model="student.gender" :localdata="genderOptions"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item label="课时" label-width="70" required name="remainHours">
				<uni-easyinput type="number" v-model="student.remainHours" placeholder="请输入课时" />
			</uni-forms-item>
			<uni-forms-item label="年级" label-width="70" required name="grade">
				<uni-data-select v-model="student.grade" :localdata="gradeOptions" placeholder="请选择年级"></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="科目" label-width="70" required name="subjects">
				<uni-data-checkbox mode="tag" multiple v-model="student.subjects" :localdata="subjectOptions"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item label="手机" label-width="70" required name="phone">
				<uni-easyinput v-model="student.phone" placeholder="请输入联系方式" />
			</uni-forms-item>
			<uni-forms-item label="备注" label-width="70" name="remark">
				<uni-easyinput type="textarea" v-model="student.remark" placeholder="请输入备注信息" />
			</uni-forms-item>
			<button class="button" type="primary" plain @click="submit">保存</button>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRaw
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useStudentStore
	} from '../../store/student'
	const studentStore = useStudentStore()
	const student = reactive( {} )
	import {
		subjectOptions,
		genderOptions,
		gradeOptions
	} from '../../utils/constant'
	import {
		request
	} from '../../utils/request'
	const form = ref()
	const rules = reactive( {
		name: {
			rules: [ {
				required: true,
				errorMessage: '姓名不能为空'
			} ]
		},
		gender: {
			rules: [ {
				required: true,
				errorMessage: '性别不能为空'
			} ]
		},
		remainHours: {
			rules: [ {
					required: true,
					errorMessage: '课时不能为空'
				},
				{
					format: 'number',
					errorMessage: '课时只能输入数字'
				}
			]
		},
		subjects: {
			rules: [ {
				required: true,
				errorMessage: '科目不能为空'
			} ]
		},
		phone: {
			rules: [ {
				required: true,
				errorMessage: '手机号不能为空'
			} ]
		}
	} )
	const submit = async () => {
		if ( form.value ) {
			const valid = await form.value.validate()
			if ( valid ) {
				request( {
					url: `${process.env.baseUrl}/students`,
					method: 'POST',
					data: student,
					success: () => {
						uni.showToast( {
							title: student.id ? '修改成功' : '添加成功',
							icon: 'success'
						} )
						setTimeout( () => {
							studentStore.setStudent( student )
							uni.navigateBack()
						}, 1500 )
					}
				} )
			}
		}
	}
	onLoad( ( params ) => {
		if ( !params.studentId ) {
			// 编辑
			studentStore.reset()
		}
		Object.assign( student, toRaw( studentStore.$state ) );
	} )

</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
		padding: 20px;
	}

</style>

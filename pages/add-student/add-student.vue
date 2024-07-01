<template>
	<view class="container">
		<uni-forms ref="form" :model="student" label-position="right">
			<uni-forms-item label="姓名" required name="name">
				<uni-easyinput v-model="student.name" placeholder="请输入姓名" trim />
			</uni-forms-item>
			<uni-forms-item label="性别" required name="gender">
				<uni-data-checkbox mode="tag" v-model="student.gender" :localdata="genderOptions"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item label="课时" required name="remainHours">
				<view class="input-container">
					<uni-easyinput type="number" v-model.lazy="student.remainHours.hour1v1" placeholder="1v1课时" trim @input="validateNumber($event, 'remainHours1v1')">
						<template #right>
							<view class="unit">1v1</view>
						</template>
					</uni-easyinput>
					<uni-easyinput type="number" v-model.lazy="student.remainHours.hour1v3" placeholder="1v3课时" trim @input="validateNumber($event, 'remainHours1v3')">
						<template #right>
							<view class="unit">1v3</view>
						</template>
					</uni-easyinput>
				</view>
			</uni-forms-item>
			<uni-forms-item label="年级" required name="grade">
				<uni-data-select v-model="student.grade" :localdata="gradeOptions" placeholder="请选择年级"></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="科目" required name="subjects">
				<uni-data-checkbox mode="tag" multiple v-model="student.subjects" :localdata="subjectOptions"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item label="手机" required name="phone">
				<uni-easyinput type="number" v-model.lazy="student.phone" placeholder="请输入联系方式" trim @input="validateNumber($event, 'phone')" />
			</uni-forms-item>
			<uni-forms-item label="备注" name="remark">
				<uni-easyinput type="textarea" :style="{'box-sizing': 'border-box'}" v-model="student.remark" placeholder="请输入备注信息" trim />
			</uni-forms-item>
			<button class="button" type="primary" plain @click="submit">保存</button>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRaw,
		nextTick
	} from 'vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		useStudentStore
	} from '../../store/student'
	const studentStore = useStudentStore()
	const student = reactive( {
		name: '',
		gender: '',
		remainHours: {
			hour1v1: '',
			hour1v3: ''
		},
		grade: '',
		subjects: [],
		phone: '',
		remark: ''
	} )
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
				minLength: 2,
				maxLength: 6,
				errorMessage: '名字长度在{minLength}到{maxLength}之间'
			}, {
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
				validateFunction: function ( rule, value, data, callback ) {
					console.log(data)
					return true
				}
			} ]
		},
		grade: {
			rules: [ {
				required: true,
				errorMessage: '年级不能为空'
			} ]
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
			}, {
				pattern: /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,
				errorMessage: '请输入有效的手机号'
			} ]
		}
	} )
	const validateNumber = ( e, field ) => {
		const number = e.replace( /\D/g, '' )
		nextTick( () => {
			student[ field ] = number
		} )
	}
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
	onReady( () => {
		form.value.setRules( rules )
	} )
	onLoad( ( params ) => {
		if ( !params.studentId ) {
			// 编辑
			studentStore.reset()
		}
		Object.assign( student, toRaw( studentStore.$state ) );
	} )

</script>

<style scoped>
	.container {
		font-size: 14px;
		line-height: 24px;
		padding: 20px;
		background-color: #fff;
		height: 100vh;
	}

	.uni-forms-item__label {
		width: 50px !important;
	}

	::v-deep.uni-data-checklist .checklist-group .checklist-box.is--tag {
		background-color: #fff;
	}

	.input-container {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.unit {
		display: block;
		padding: 0 10px;
		color: #777;
		font-weight: bold;
		font-size: 14px;
		height: 35px;
		line-height: 35px;
		background-color: #e6e6e6;
	}

</style>

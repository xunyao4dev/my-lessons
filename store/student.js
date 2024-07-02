import {
	defineStore
} from 'pinia'

export const useStudentStore = defineStore('student', {
	state: () => {
		return {
			id: undefined,
			name: undefined,
			gender: undefined,
			grade: undefined,
			remainHours: {
				hours1v1: '',
				hours1v3: ''
			},
			subjects: [],
			phone: undefined,
			remark: undefined
		}
	},
	actions: {
		setStudent(student) {
			Object.assign(this, student)
		},
		deductHours(type) {
			if (type === 1) {
				this.remainHours.hours1v1 -= 1;
			} else {
				this.remainHours.hours1v3 -= 1;
			}
		},
		reset() {
			this.setStudent({
				id: undefined,
				name: undefined,
				gender: undefined,
				grade: undefined,
				remainHours: undefined,
				subjects: [],
				phone: undefined,
				remark: undefined
			})
		}
	}
})
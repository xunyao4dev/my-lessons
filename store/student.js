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
			remainHours: undefined,
			subjects: [],
			phone: undefined,
			remark: undefined
		}
	},
	actions: {
		setStudent(student) {
			Object.assign(this, student)
		},
		deductHours() {
			this.remainHours = this.remainHours - 1
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
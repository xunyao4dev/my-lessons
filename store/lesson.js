import {
	defineStore
} from 'pinia'

export const useLessonStore = defineStore('lesson', {
	state: () => {
		return {
			studentId: undefined,
			id: undefined
		}
	},
	actions: {
		setStudentId(studentId) {
			this.studentId = studentId
		}
	}
})
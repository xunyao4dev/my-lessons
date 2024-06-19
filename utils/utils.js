import {
	gradeOptions,
	subjectOptions,
	genderOptions
} from "./constant"

export function formatGender(gender) {
	return genderOptions.find(g => g.value === gender)?.text
}

export function formatGrade(grade) {
	return gradeOptions.find(g => grade === g.value)?.text
}

export function formatSubject(subject) {
	return subjectOptions.find(s => s.value === subject)?.abbr
}
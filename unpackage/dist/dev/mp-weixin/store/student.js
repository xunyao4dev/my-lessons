"use strict";
const common_vendor = require("../common/vendor.js");
const useStudentStore = common_vendor.defineStore("student", {
  state: () => {
    return {
      id: void 0,
      name: void 0,
      gender: void 0,
      grade: void 0,
      remainHours: {
        hours1v1: "",
        hours1v3: ""
      },
      subjects: [],
      phone: void 0,
      remark: void 0
    };
  },
  actions: {
    setStudent(student) {
      Object.assign(this, student);
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
        id: void 0,
        name: void 0,
        gender: void 0,
        grade: void 0,
        remainHours: void 0,
        subjects: [],
        phone: void 0,
        remark: void 0
      });
    }
  }
});
exports.useStudentStore = useStudentStore;

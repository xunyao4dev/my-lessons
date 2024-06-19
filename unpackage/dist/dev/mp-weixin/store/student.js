"use strict";
const common_vendor = require("../common/vendor.js");
const useStudentStore = common_vendor.defineStore("student", {
  state: () => {
    return {
      id: void 0,
      name: void 0,
      gender: void 0,
      grade: void 0,
      remainHours: void 0,
      subjects: [],
      phone: void 0,
      remark: void 0
    };
  },
  actions: {
    setStudent(student) {
      Object.assign(this, student);
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

"use strict";
const common_vendor = require("../common/vendor.js");
const useLessonStore = common_vendor.defineStore("lesson", {
  state: () => {
    return {
      studentId: void 0,
      id: void 0
    };
  },
  actions: {
    setStudentId(studentId) {
      this.studentId = studentId;
    }
  }
});
exports.useLessonStore = useLessonStore;

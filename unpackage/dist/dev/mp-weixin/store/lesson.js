"use strict";
const common_vendor = require("../common/vendor.js");
const useLessonStore = common_vendor.defineStore("lesson", {
  state: () => {
    return {
      id: void 0
    };
  },
  actions: {}
});
exports.useLessonStore = useLessonStore;

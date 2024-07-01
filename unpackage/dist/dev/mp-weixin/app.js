"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/index/index.js";
  "./pages/mine/mine.js";
  "./pages/add-student/add-student.js";
  "./pages/student-info/student-info.js";
  "./pages/lesson/lesson.js";
  "./pages/suggestion/suggestion.js";
  "./pages/about/about.js";
}
const _sfc_main = {
  onLaunch: function() {
    const token = common_vendor.index.getStorageSync("token");
    if (token) {
      common_vendor.index.reLaunch({
        url: "pages/index/index"
      });
    } else {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.createPinia());
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

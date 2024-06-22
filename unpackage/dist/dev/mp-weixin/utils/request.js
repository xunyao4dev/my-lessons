"use strict";
const common_vendor = require("../common/vendor.js");
const redirectToLogin = () => {
  common_vendor.index.clearStorageSync();
  common_vendor.index.reLaunch({
    url: "/pages/login/login"
  });
};
const request = (options) => {
  const token = common_vendor.index.getStorageSync("token");
  if (!token) {
    redirectToLogin();
    return;
  }
  common_vendor.index.showToast({
    title: "请求中...",
    icon: "loading",
    duration: 6e3
  });
  options.timeout = 6e3;
  options.header = options.header || {};
  options.header["Authorization"] = "Bearer " + token;
  const originalSuccess = options.success;
  const originalFail = options.fail;
  options.success = (res) => {
    common_vendor.index.hideToast();
    if (res.statusCode === 401) {
      redirectToLogin();
    } else {
      originalSuccess && originalSuccess(res);
    }
  };
  options.fail = (err) => {
    common_vendor.index.hideToast();
    originalFail && originalFail(err);
  };
  common_vendor.index.request(options);
};
exports.request = request;

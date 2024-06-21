"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://192.168.1.4:8992" };
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const nickname = common_vendor.ref();
    const avatar = common_vendor.ref();
    const studentCount = common_vendor.ref(0);
    const lessonCount = common_vendor.ref(0);
    const bindPhone = () => {
      common_vendor.index.showToast({
        icon: "error",
        title: "暂不支持"
      });
    };
    const about = () => {
      common_vendor.index.showToast({
        icon: "error",
        title: "暂不支持"
      });
    };
    const suggestions = () => {
      common_vendor.index.showToast({
        icon: "error",
        title: "暂不支持"
      });
    };
    const logout = () => {
      common_vendor.index.showToast({
        title: "退出登录成功",
        icon: "success"
      });
      common_vendor.index.clearStorageSync();
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    };
    common_vendor.onLoad(() => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/users/mine`,
        method: "GET",
        success: (res) => {
          const { data } = res.data;
          nickname.value = data.nickname;
          avatar.value = data.avatar;
          studentCount.value = data.studentCount;
          lessonCount.value = data.lessonCount;
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(nickname.value),
        b: common_vendor.t(studentCount.value),
        c: common_vendor.t(lessonCount.value),
        d: common_vendor.o(bindPhone),
        e: common_vendor.p({
          title: "绑定手机",
          clickable: true,
          showArrow: true,
          showExtraIcon: true,
          extraIcon: {
            color: "#4cd964",
            size: "22",
            type: "phone"
          }
        }),
        f: common_vendor.o(suggestions),
        g: common_vendor.p({
          title: "意见建议",
          clickable: true,
          showArrow: true,
          showExtraIcon: true,
          extraIcon: {
            color: "#4cd964",
            size: "22",
            type: "help"
          }
        }),
        h: common_vendor.o(about),
        i: common_vendor.p({
          title: "关于",
          clickable: true,
          showArrow: true,
          showExtraIcon: true,
          extraIcon: {
            color: "#4cd964",
            size: "22",
            type: "link"
          }
        }),
        j: common_vendor.o(logout)
      };
    };
  }
};
wx.createPage(_sfc_main);

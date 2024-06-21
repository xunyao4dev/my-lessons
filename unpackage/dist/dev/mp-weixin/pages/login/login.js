"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
var define_process_env_default = { baseUrl: "http://192.168.1.4:8992" };
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const onGetUserInfo = async (e) => {
      if (e.detail.errMsg === "getUserInfo:ok") {
        const {
          encryptedData,
          iv
        } = e.detail;
        try {
          common_vendor.index.showToast({
            title: "登录中..."
          });
          const loginRes = await common_vendor.index.login({
            provider: "weixin"
          });
          const {
            code
          } = loginRes;
          if (code) {
            common_vendor.index.request({
              url: `${define_process_env_default.baseUrl}/wechat/login`,
              method: "POST",
              data: {
                code,
                encryptedData,
                iv
              },
              success: (res) => {
                const { data } = res.data;
                common_vendor.index.setStorageSync("token", data.token);
                common_vendor.index.showToast({
                  title: "登录成功",
                  success: () => {
                    common_vendor.index.switchTab({
                      url: "/pages/index/index"
                    });
                  }
                });
              }
            });
          }
        } catch (error) {
          common_vendor.index.showToast({
            title: "微信登录失败，请稍后重试"
          });
        } finally {
          common_vendor.index.hideToast();
        }
      } else {
        common_vendor.index.showToast({
          title: "用户拒绝"
        });
      }
    };
    common_vendor.onLoad(() => {
      common_vendor.index.setNavigationBarColor({
        frontColor: "#ffffff",
        // 状态栏字体颜色
        backgroundColor: "#00000000"
        // 状态栏背景色透明
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "weixin",
          size: "24",
          color: "#ffffff"
        }),
        c: common_vendor.o(onGetUserInfo)
      };
    };
  }
};
wx.createPage(_sfc_main);

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  _easycom_uni_calendar2();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  _easycom_uni_calendar();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const selected = common_vendor.reactive([{
      date: "2024-06-30",
      info: "Red dot"
    }]);
    common_vendor.onLoad(() => {
      selected.push({
        date: "2024-06-01",
        info: "Red dot"
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          selected,
          ["start-date"]: "2019-03-02",
          ["end-date"]: "2029-05-20"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

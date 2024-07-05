"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_editable_select2 = common_vendor.resolveComponent("editable-select");
  _easycom_editable_select2();
}
const _easycom_editable_select = () => "../../uni_modules/editable-select/components/editable-select/editable-select.js";
if (!Math) {
  _easycom_editable_select();
}
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const options = common_vendor.ref([]);
    const selectedOption = common_vendor.ref("");
    const updateSelected = (value) => {
      selectedOption.value = value;
    };
    const updateOptions = (newOptions) => {
      options.value = newOptions;
    };
    const saveOptions = () => {
      console.log(options);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(updateSelected),
        b: common_vendor.o(updateOptions),
        c: common_vendor.p({
          title: "语文",
          palceholder: "请选择老师",
          options: options.value,
          selected: selectedOption.value,
          saveOptions
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d10efb47"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_form2 + _easycom_uv_button2)();
}
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../uni_modules/uv-form/components/uv-form/uv-form.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_form + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      mobile: ""
    });
    const rules = common_vendor.ref({
      mobile: [{
        // 自定义验证函数，见上说明，注意这里面的逻辑不能出现语法报错，否则可能导致不验证
        validator: (rule, value, callback) => {
          return true;
        },
        message: "电话号码格式错误",
        trigger: ["blur"]
      }]
    });
    const submit = () => {
      formRef.value.validate().then((res) => {
        common_vendor.index.showToast({
          icon: "success",
          title: "校验通过"
        });
      }).catch((errors) => {
        common_vendor.index.showToast({
          icon: "error",
          title: "校验失败"
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          model: formData.value.mobile,
          placeholder: "请输入电话"
        }),
        b: common_vendor.p({
          label: "电话",
          prop: "mobile"
        }),
        c: common_vendor.sr(formRef, "662d2c3a-0", {
          "k": "formRef"
        }),
        d: common_vendor.p({
          rules: rules.value,
          model: formData.value
        }),
        e: common_vendor.o(submit)
      };
    };
  }
};
wx.createPage(_sfc_main);

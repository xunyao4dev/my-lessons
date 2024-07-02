"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_test_union2 = common_vendor.resolveComponent("test-union");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_test_union2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_test_union = () => "../../uni_modules/test-union/components/test-union/test-union.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_test_union + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const form = common_vendor.ref();
    const formData = common_vendor.ref({
      remainHours: {
        hours1v1: "",
        hours1v3: ""
      }
    });
    const rules = common_vendor.ref({
      remainHours: {
        rules: [
          {
            required: true
          },
          {
            validateFunction: function(rule, value, data, callback) {
              if (!value.hours1v1 && !value.hours1v3) {
                callback("必填提示信息2");
              }
              return true;
            }
          }
        ]
      }
    });
    common_vendor.onReady(() => {
      form.value.setRules(rules.value);
    });
    const submitForm = () => {
      form.value.validate().then((res) => {
        console.log("表单数据信息：", formData.value);
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => formData.value.remainHours = $event),
        b: common_vendor.p({
          remainHours: formData.value.remainHours
        }),
        c: common_vendor.p({
          label: "Details",
          name: "remainHours"
        }),
        d: common_vendor.o(submitForm),
        e: common_vendor.sr(form, "662d2c3a-0", {
          "k": "form"
        }),
        f: common_vendor.p({
          modelValue: formData.value,
          rules: rules.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

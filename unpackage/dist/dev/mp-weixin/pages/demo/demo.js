"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_test_union2 = common_vendor.resolveComponent("test-union");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_test_union2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_test_union = () => "../../uni_modules/test-union/components/test-union/test-union.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_test_union + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const form = common_vendor.ref();
    const formData = common_vendor.ref({
      name: "",
      details: {
        age: 25,
        address: "123 Main St"
      }
    });
    const rules = common_vendor.ref({
      details: {
        rules: [
          {
            required: true
          },
          {
            validateFunction: (rule, value, data, callback) => {
              if (!value || !value.age || !value.address) {
                callback("Details are required");
              } else {
                callback();
              }
            }
          }
        ]
      }
    });
    common_vendor.onReady(() => {
      form.value.setRules(rules);
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
        a: formData.value.name,
        b: common_vendor.o(($event) => formData.value.name = $event.detail.value),
        c: common_vendor.p({
          label: "Name",
          name: "name"
        }),
        d: common_vendor.o(($event) => formData.value.details = $event),
        e: common_vendor.p({
          details: formData.value.details
        }),
        f: common_vendor.p({
          label: "Details",
          name: "details"
        }),
        g: common_vendor.o(submitForm),
        h: common_vendor.sr(form, "662d2c3a-0", {
          "k": "form"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

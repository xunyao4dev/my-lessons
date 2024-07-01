"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://localhost:8992" };
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "suggestion",
  setup(__props) {
    const rules = common_vendor.reactive({
      content: {
        rules: [{
          required: true,
          errorMessage: "反馈内容不能为空"
        }]
      }
    });
    const feedback = common_vendor.reactive({
      content: "",
      contact: ""
    });
    const form = common_vendor.ref();
    const submit = async () => {
      if (form.value) {
        const valid = await form.value.validate();
        if (valid) {
          utils_request.request({
            url: `${define_process_env_default.baseUrl}/feedbacks`,
            method: "POST",
            data: feedback,
            success: () => {
              Object.assign(feedback, {
                content: "",
                contact: ""
              });
              common_vendor.index.showToast({
                title: "提交成功",
                icon: "success"
              });
            }
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => feedback.content = $event),
        b: common_vendor.p({
          type: "textarea",
          placeholder: "请填写您的建议和反馈",
          modelValue: feedback.content
        }),
        c: common_vendor.p({
          name: "content"
        }),
        d: common_vendor.o(($event) => feedback.contact = $event),
        e: common_vendor.p({
          placeholder: "您的联系方式（选填）",
          modelValue: feedback.contact
        }),
        f: common_vendor.o(submit),
        g: common_vendor.sr(form, "ab9b9b5a-0", {
          "k": "form"
        }),
        h: common_vendor.p({
          rules,
          model: feedback
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ab9b9b5a"]]);
wx.createPage(MiniProgramPage);

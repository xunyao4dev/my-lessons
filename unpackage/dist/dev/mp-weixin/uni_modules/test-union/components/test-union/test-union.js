"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    remainHours: {
      type: Object,
      required: true
    }
  },
  setup(props, {
    emit
  }) {
    const localHours = common_vendor.reactive({
      ...props.remainHours
    });
    const validateInput = (value, field) => {
      common_vendor.nextTick$1(() => {
        value = value.replace(/\D/g, "");
        localHours[field] = value;
        emit("update:remainHours", {
          ...localHours
        });
      });
    };
    common_vendor.watch(() => props.remainHours, (newVal) => {
      Object.assign(localHours, newVal);
    });
    return {
      validateInput,
      localHours
    };
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $setup.validateInput($event, "hours1v1")),
    b: common_vendor.o(($event) => $setup.localHours.hours1v1 = $event),
    c: common_vendor.p({
      type: "text",
      placeholder: "1v1课时",
      trim: true,
      modelValue: $setup.localHours.hours1v1
    }),
    d: common_vendor.o(($event) => $setup.validateInput($event, "hours1v3")),
    e: common_vendor.o(($event) => $setup.localHours.hours1v3 = $event),
    f: common_vendor.p({
      type: "text",
      placeholder: "1v3课时",
      trim: true,
      modelValue: $setup.localHours.hours1v3
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-49bc324d"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const { details } = common_vendor.toRefs(props);
    const localData = common_vendor.ref({ ...details.value });
    common_vendor.watch(details, (newVal) => {
      localData.value = { ...newVal };
    });
    const updateParent = () => {
      emit("update:details", localData.value);
    };
    return {
      localData,
      updateParent
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $setup.localData.age = $event.detail.value, (...args) => $setup.updateParent && $setup.updateParent(...args)]),
    b: $setup.localData.age,
    c: common_vendor.o([($event) => $setup.localData.address = $event.detail.value, (...args) => $setup.updateParent && $setup.updateParent(...args)]),
    d: $setup.localData.address
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);

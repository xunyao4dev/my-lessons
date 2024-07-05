"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "editable-select",
  props: {
    options: Array,
    selected: String,
    placeholder: String,
    title: String,
    saveOptions: Function
  },
  emits: ["update:selected", "update:options"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const show = common_vendor.ref(false);
    const selectedOption = common_vendor.ref(props.selected || "");
    const customOption = common_vendor.ref("");
    const editIndex = common_vendor.ref(-1);
    const updating = common_vendor.ref(false);
    const currentItem = common_vendor.ref();
    const editedItems = common_vendor.reactive(Array.from({
      length: props.options.length
    }, () => ""));
    const showPicker = () => {
      show.value = true;
    };
    const closePicker = () => {
      show.value = false;
      customOption.value = "";
      editIndex.value = -1;
      editedItems.forEach((_, index) => {
        editedItems[index] = "";
      });
    };
    const confirmSelection = () => {
      emit("update:selected", selectedOption.value);
      if (updating.value) {
        props.saveOptions();
      }
      updating.value = false;
      closePicker();
    };
    const editItem = (index) => {
      editIndex.value = index;
      editedItems[index] = props.options[index];
      updating.value = true;
    };
    const saveItem = (index) => {
      if (editedItems[index].trim()) {
        const updatedOptions = [...props.options];
        updatedOptions[index] = editedItems[index];
        emit("update:options", updatedOptions);
      }
      editIndex.value = -1;
    };
    const addCustomOption = () => {
      if (customOption.value.trim()) {
        if (props.options.includes(customOption.value)) {
          common_vendor.index.showToast({
            title: "选项不能重复",
            icon: "error"
          });
          return;
        }
        const updatedOptions = [...props.options, customOption.value];
        emit("update:options", updatedOptions);
        updating.value = true;
      }
      customOption.value = "";
      currentItem.value = "item" + (props.options.length - 1);
    };
    const selectItem = (item, index) => {
      selectedOption.value = item === selectedOption.value ? "" : item;
      currentItem.value = "item" + index;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.selected
      }, !__props.selected ? {
        b: common_vendor.t(__props.placeholder)
      } : {
        c: __props.selected
      }, {
        d: common_vendor.o(showPicker),
        e: show.value
      }, show.value ? common_vendor.e({
        f: common_vendor.o(closePicker),
        g: common_vendor.t(__props.title || ""),
        h: common_vendor.o(confirmSelection),
        i: common_vendor.f(__props.options, (item, index, i0) => {
          return common_vendor.e({
            a: editIndex.value !== index
          }, editIndex.value !== index ? common_vendor.e({
            b: common_vendor.t(item),
            c: item === selectedOption.value
          }, item === selectedOption.value ? {} : {}, {
            d: "8ee3c4bc-0-" + i0,
            e: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: "icon-bianji"
            }),
            f: common_vendor.o(($event) => editItem(index), index),
            g: "item" + index,
            h: common_vendor.o(($event) => selectItem(item, index), index)
          }) : {
            i: editedItems[index],
            j: common_vendor.o(($event) => editedItems[index] = $event.detail.value, index),
            k: "8ee3c4bc-1-" + i0,
            l: common_vendor.p({
              type: "checkmarkempty",
              color: "green"
            }),
            m: common_vendor.o(($event) => saveItem(index), index)
          }, {
            n: index,
            o: common_vendor.n({
              "editing-item": editIndex.value === index
            })
          });
        }),
        j: __props.options.length === 0
      }, __props.options.length === 0 ? {} : {}, {
        k: currentItem.value,
        l: customOption.value,
        m: common_vendor.o(($event) => customOption.value = $event.detail.value),
        n: common_vendor.p({
          type: "checkmarkempty",
          color: "#fff"
        }),
        o: common_vendor.o(addCustomOption)
      }) : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ee3c4bc"]]);
wx.createComponent(Component);

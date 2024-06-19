"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "TimeRangePicker",
  props: {
    datetimeVal: {
      type: String,
      default: "00:00-00:00"
    }
  },
  emits: ["complete"],
  data() {
    return {
      hours: Array.from({
        length: 24
      }, (_, i) => (i < 10 ? "0" : "") + i),
      minutes: Array.from({
        length: 6
      }, (_, i) => (i * 10 < 10 ? "0" : "") + i * 10),
      formattedStartTime: "00:00",
      formattedEndTime: "00:00",
      pickerIndexLeft: [0, 0],
      pickerIndexRight: [0, 0],
      popup: null
    };
  },
  watch: {
    datetimeVal: {
      immediate: true,
      handler(newVal) {
        const [start, end] = newVal.split("-");
        this.formattedStartTime = start;
        this.formattedEndTime = end;
      }
    }
  },
  methods: {
    updateTime(type, e) {
      const val = e.detail.value;
      const selectedTime = `${this.hours[val[0]]}:${this.minutes[val[1]]}`;
      if (type === "start") {
        this.formattedStartTime = selectedTime;
      } else {
        this.formattedEndTime = selectedTime;
      }
    },
    show() {
      const getIndex = (time) => {
        const [hour, minute] = time.split(":");
        return [this.hours.indexOf(hour), this.minutes.indexOf(minute)];
      };
      this.pickerIndexLeft = getIndex(this.formattedStartTime);
      this.pickerIndexRight = getIndex(this.formattedEndTime);
      this.popup.open();
    },
    close() {
      this.popup.close();
    },
    complete() {
      this.$emit("complete", `${this.formattedStartTime}-${this.formattedEndTime}`);
      this.popup.close();
    }
  },
  mounted() {
    this.popup = this.$refs.popup;
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.formattedStartTime,
    b: common_vendor.o((...args) => $options.show && $options.show(...args)),
    c: $data.formattedEndTime,
    d: common_vendor.o((...args) => $options.show && $options.show(...args)),
    e: common_vendor.o((...args) => $options.close && $options.close(...args)),
    f: common_vendor.t($data.formattedStartTime + " - " + $data.formattedEndTime),
    g: common_vendor.o((...args) => $options.complete && $options.complete(...args)),
    h: common_vendor.f($data.hours, (hour, index, i0) => {
      return {
        a: common_vendor.t(hour),
        b: index
      };
    }),
    i: common_vendor.f($data.minutes, (minute, index, i0) => {
      return {
        a: common_vendor.t(minute),
        b: index
      };
    }),
    j: common_vendor.o(($event) => $options.updateTime("start", $event)),
    k: $data.pickerIndexLeft,
    l: common_vendor.f($data.hours, (hour, index, i0) => {
      return {
        a: common_vendor.t(hour),
        b: index
      };
    }),
    m: common_vendor.f($data.minutes, (minute, index, i0) => {
      return {
        a: common_vendor.t(minute),
        b: index
      };
    }),
    n: common_vendor.o(($event) => $options.updateTime("end", $event)),
    o: $data.pickerIndexRight,
    p: common_vendor.sr("popup", "a98699ac-0"),
    q: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a98699ac"]]);
wx.createComponent(Component);

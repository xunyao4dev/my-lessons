"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_bruceCalendar_components_bruceCalendar_i18n_index = require("./i18n/index.js");
const {
  t
} = common_vendor.initVueI18n(uni_modules_bruceCalendar_components_bruceCalendar_i18n_index.i18nMessages);
const _sfc_main = {
  emits: ["change"],
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    todayText() {
      return t("uni-calender.today");
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.selected && $props.weeks.extraInfo
  }, $props.selected && $props.weeks.extraInfo ? {
    b: common_vendor.p({
      color: $props.weeks.extraInfo.color || "#fa3534",
      type: $props.weeks.extraInfo.icon,
      size: "15"
    })
  } : {}, {
    c: common_vendor.t($props.weeks.date),
    d: $props.weeks.isDay ? 1 : "",
    e: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    f: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    g: $props.weeks.beforeMultiple ? 1 : "",
    h: $props.weeks.multiple ? 1 : "",
    i: $props.weeks.afterMultiple ? 1 : "",
    j: $props.weeks.disable ? 1 : "",
    k: !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay
  }, !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? {
    l: common_vendor.t($options.todayText),
    m: $props.weeks.isDay ? 1 : "",
    n: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    o: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    p: $props.weeks.beforeMultiple ? 1 : "",
    q: $props.weeks.multiple ? 1 : "",
    r: $props.weeks.afterMultiple ? 1 : ""
  } : {}, {
    s: $props.lunar && !$props.weeks.extraInfo
  }, $props.lunar && !$props.weeks.extraInfo ? {
    t: common_vendor.t($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "初一" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn),
    v: $props.weeks.isDay ? 1 : "",
    w: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    x: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    y: $props.weeks.beforeMultiple ? 1 : "",
    z: $props.weeks.multiple ? 1 : "",
    A: $props.weeks.afterMultiple ? 1 : "",
    B: $props.weeks.disable ? 1 : ""
  } : {}, {
    C: $props.weeks.extraInfo && $props.weeks.extraInfo.info
  }, $props.weeks.extraInfo && $props.weeks.extraInfo.info ? {
    D: common_vendor.t($props.weeks.extraInfo.info),
    E: $props.weeks.extraInfo.color || "#fa3534",
    F: $props.weeks.extraInfo.info ? 1 : "",
    G: $props.weeks.isDay ? 1 : "",
    H: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    I: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    J: $props.weeks.beforeMultiple ? 1 : "",
    K: $props.weeks.multiple ? 1 : "",
    L: $props.weeks.afterMultiple ? 1 : "",
    M: $props.weeks.disable ? 1 : ""
  } : {}, {
    N: $props.weeks.disable ? 1 : "",
    O: $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay ? 1 : "",
    P: $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay ? 1 : "",
    Q: $props.weeks.beforeMultiple ? 1 : "",
    R: $props.weeks.multiple ? 1 : "",
    S: $props.weeks.afterMultiple ? 1 : "",
    T: common_vendor.o(($event) => $options.choiceDate($props.weeks))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-09ba89b5"]]);
wx.createComponent(Component);

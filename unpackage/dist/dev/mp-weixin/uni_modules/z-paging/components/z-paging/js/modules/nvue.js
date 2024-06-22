"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const nvueModule = {
  props: {},
  data() {
    return {
      nRefresherLoading: false,
      nListIsDragging: false,
      nShowBottom: true,
      nFixFreezing: false,
      nShowRefresherReveal: false,
      nLoadingMoreFixedHeight: false,
      nShowRefresherRevealHeight: 0,
      nOldShowRefresherRevealHeight: -1,
      nRefresherWidth: common_vendor.index.upx2px(750),
      nF2Opacity: 0
    };
  },
  computed: {},
  mounted() {
  },
  methods: {}
};
exports.nvueModule = nvueModule;

"use strict";
const uni_modules_zPaging_components_zPaging_js_zPagingMain = require("./js/z-paging-main.js");
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("_handleListTouchstart", "_handleRefresherTouchstart", "_handleTouchDirectionChange", "_handleScrollViewBounce", "_handleWxsPullingDown", "_handleRefresherTouchmove", "_handleRefresherTouchend", "_handlePropUpdate", "_handleWxsPullingDownStatusChange");
};
const block1 = {};
if (!Array) {
  const _component_z_paging_refresh = common_vendor.resolveComponent("z-paging-refresh");
  const _component_z_paging_load_more = common_vendor.resolveComponent("z-paging-load-more");
  const _easycom_z_paging_empty_view2 = common_vendor.resolveComponent("z-paging-empty-view");
  (_component_z_paging_refresh + _component_z_paging_load_more + _easycom_z_paging_empty_view2)();
}
const _easycom_z_paging_empty_view = () => "../z-paging-empty-view/z-paging-empty-view.js";
if (!Math) {
  _easycom_z_paging_empty_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.cssSafeAreaInsetBottom === -1
  }, _ctx.cssSafeAreaInsetBottom === -1 ? {} : {}, {
    b: _ctx.showF2 && _ctx.showRefresherF2
  }, _ctx.showF2 && _ctx.showRefresherF2 ? {
    c: common_vendor.o(() => {
    }),
    d: common_vendor.s({
      "transform": _ctx.f2Transform,
      "transition": `transform .2s linear`,
      "height": _ctx.superContentHeight + "px",
      "z-index": _ctx.f2ZIndex
    })
  } : {}, {
    e: !_ctx.usePageScroll && _ctx.zSlots.top
  }, !_ctx.usePageScroll && _ctx.zSlots.top ? {} : _ctx.usePageScroll && _ctx.zSlots.top ? {
    g: common_vendor.o(() => {
    }),
    h: common_vendor.s({
      "top": `${_ctx.windowTop}px`,
      "z-index": _ctx.topZIndex
    })
  } : {}, {
    f: _ctx.usePageScroll && _ctx.zSlots.top,
    i: _ctx.zSlots.left
  }, _ctx.zSlots.left ? {
    j: _ctx.finalIsOldWebView ? 1 : ""
  } : {}, {
    k: _ctx.finalRefresherFixedBacHeight > 0
  }, _ctx.finalRefresherFixedBacHeight > 0 ? {
    l: common_vendor.s({
      "background": _ctx.refresherFixedBackground,
      "height": `${_ctx.finalRefresherFixedBacHeight}px`
    })
  } : {}, {
    m: _ctx.showRefresher
  }, _ctx.showRefresher ? common_vendor.e({
    n: _ctx.useRefresherStatusBarPlaceholder
  }, _ctx.useRefresherStatusBarPlaceholder ? {
    o: common_vendor.s({
      "height": `${_ctx.statusBarHeight}px`
    })
  } : {}, {
    p: !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2)
  }, !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2) ? {
    q: common_vendor.r("refresher", {
      refresherStatus: _ctx.refresherStatus
    })
  } : {}, {
    r: _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete
  }, _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete ? {} : _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2 ? {} : !_ctx.showCustomRefresher ? {
    v: common_vendor.sr("refresh", "1aa372d7-0"),
    w: common_vendor.s({
      "height": `${_ctx.finalRefresherThreshold - _ctx.finalRefresherThresholdPlaceholder}px`
    }),
    x: common_vendor.p({
      status: _ctx.refresherStatus,
      defaultThemeStyle: _ctx.finalRefresherThemeStyle,
      defaultText: _ctx.finalRefresherDefaultText,
      pullingText: _ctx.finalRefresherPullingText,
      refreshingText: _ctx.finalRefresherRefreshingText,
      completeText: _ctx.finalRefresherCompleteText,
      goF2Text: _ctx.finalRefresherGoF2Text,
      defaultImg: _ctx.refresherDefaultImg,
      pullingImg: _ctx.refresherPullingImg,
      refreshingImg: _ctx.refresherRefreshingImg,
      completeImg: _ctx.refresherCompleteImg,
      refreshingAnimated: _ctx.refresherRefreshingAnimated,
      showUpdateTime: _ctx.showRefresherUpdateTime,
      updateTimeKey: _ctx.refresherUpdateTimeKey,
      updateTimeTextMap: _ctx.finalRefresherUpdateTimeTextMap,
      imgStyle: _ctx.refresherImgStyle,
      titleStyle: _ctx.refresherTitleStyle,
      updateTimeStyle: _ctx.refresherUpdateTimeStyle,
      unit: _ctx.unit
    })
  } : {}, {
    s: _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2,
    t: !_ctx.showCustomRefresher,
    y: common_vendor.s({
      "height": `${_ctx.finalRefresherThreshold}px`,
      "background": _ctx.refresherBackground
    }),
    z: common_vendor.s({
      "margin-top": `-${_ctx.finalRefresherThreshold + _ctx.refresherThresholdUpdateTag}px`,
      "background": _ctx.refresherBackground,
      "opacity": _ctx.isTouchmoving ? 1 : 0
    })
  }) : {}, {
    A: _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed
  }, _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed ? {} : {}, {
    B: _ctx.finalUseInnerList
  }, _ctx.finalUseInnerList ? common_vendor.e({
    C: _ctx.finalUseVirtualList
  }, _ctx.finalUseVirtualList ? {
    D: common_vendor.f(_ctx.virtualList, (item, index, i0) => {
      return common_vendor.e(_ctx.useCompatibilityMode ? {} : {
        a: "cell-" + i0,
        b: common_vendor.r("cell", {
          item,
          index: _ctx.virtualTopRangeIndex + index
        }, i0)
      }, {
        c: `zp-id-${item[_ctx.virtualCellIndexKey]}`,
        d: item["zp_unique_index"],
        e: common_vendor.o(($event) => _ctx._innerCellClick(item, _ctx.virtualTopRangeIndex + index), item["zp_unique_index"])
      });
    }),
    E: _ctx.useCompatibilityMode,
    F: common_vendor.s(_ctx.innerCellStyle)
  } : {
    G: common_vendor.f(_ctx.realTotalData, (item, index, i0) => {
      return {
        a: "cell-" + i0,
        b: common_vendor.r("cell", {
          item,
          index
        }, i0),
        c: index,
        d: common_vendor.o(($event) => _ctx._innerCellClick(item, index), index)
      };
    })
  }, {
    H: common_vendor.s(_ctx.innerListStyle)
  }) : {}, {
    I: _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore
  }, _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore ? common_vendor.e({
    J: _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore
  }, _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore ? {} : common_vendor.e({
    K: _ctx.zSlots.chatLoading
  }, _ctx.zSlots.chatLoading ? {
    L: common_vendor.r("chatLoading", {
      loadingMoreStatus: _ctx.loadingStatus
    })
  } : {
    M: common_vendor.o(($event) => _ctx._onLoadingMore("click")),
    N: common_vendor.p({
      zConfig: _ctx.zLoadMoreConfig
    })
  }), {
    O: common_vendor.s(_ctx.chatRecordRotateStyle)
  }) : {}, {
    P: _ctx.useVirtualList
  }, _ctx.useVirtualList ? {
    Q: common_vendor.s({
      height: _ctx.virtualPlaceholderBottomHeight + "px"
    })
  } : {}, {
    R: _ctx.showLoadingMoreDefault
  }, _ctx.showLoadingMoreDefault ? {} : _ctx.showLoadingMoreLoading ? {} : _ctx.showLoadingMoreNoMore ? {} : _ctx.showLoadingMoreFail ? {} : _ctx.showLoadingMoreCustom ? {
    W: common_vendor.o(($event) => _ctx._onLoadingMore("click")),
    X: common_vendor.p({
      zConfig: _ctx.zLoadMoreConfig
    })
  } : {}, {
    S: _ctx.showLoadingMoreLoading,
    T: _ctx.showLoadingMoreNoMore,
    U: _ctx.showLoadingMoreFail,
    V: _ctx.showLoadingMoreCustom,
    Y: _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode
  }, _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode ? {
    Z: common_vendor.s({
      height: _ctx.safeAreaBottom + "px"
    })
  } : {}, {
    aa: common_vendor.s({
      transform: _ctx.virtualPlaceholderTopHeight > 0 ? `translateY(${_ctx.virtualPlaceholderTopHeight}px)` : "none"
    }),
    ab: common_vendor.s(_ctx.finalPagingContentStyle),
    ac: _ctx.showEmpty
  }, _ctx.showEmpty ? common_vendor.e({
    ad: _ctx.zSlots.empty
  }, _ctx.zSlots.empty ? {
    ae: common_vendor.r("empty", {
      isLoadFailed: _ctx.isLoadFailed
    })
  } : {
    af: common_vendor.o(_ctx._emptyViewReload),
    ag: common_vendor.o(_ctx._emptyViewClick),
    ah: common_vendor.p({
      emptyViewImg: _ctx.finalEmptyViewImg,
      emptyViewText: _ctx.finalEmptyViewText,
      showEmptyViewReload: _ctx.finalShowEmptyViewReload,
      emptyViewReloadText: _ctx.finalEmptyViewReloadText,
      isLoadFailed: _ctx.isLoadFailed,
      emptyViewStyle: _ctx.emptyViewStyle,
      emptyViewTitleStyle: _ctx.emptyViewTitleStyle,
      emptyViewImgStyle: _ctx.emptyViewImgStyle,
      emptyViewReloadStyle: _ctx.emptyViewReloadStyle,
      emptyViewZIndex: _ctx.emptyViewZIndex,
      emptyViewFixed: _ctx.emptyViewFixed,
      unit: _ctx.unit
    })
  }, {
    ai: _ctx.emptyViewCenter ? 1 : "",
    aj: common_vendor.s(_ctx.emptyViewSuperStyle),
    ak: common_vendor.s(_ctx.chatRecordRotateStyle)
  }) : {}, {
    al: common_vendor.s({
      justifyContent: _ctx.useChatRecordMode ? "flex-end" : "flex-start"
    }),
    am: common_vendor.s(_ctx.scrollViewInStyle),
    an: common_vendor.s({
      "transform": _ctx.finalRefresherTransform,
      "transition": _ctx.refresherTransition
    }),
    ao: _ctx.wxsPropType,
    ap: _ctx.finalRefresherThreshold,
    aq: _ctx.refresherF2Enabled,
    ar: _ctx.finalRefresherF2Threshold,
    as: _ctx.isIos,
    at: _ctx.loading || _ctx.isRefresherInComplete,
    av: _ctx.useChatRecordMode,
    aw: _ctx.refresherEnabled,
    ax: _ctx.useCustomRefresher,
    ay: _ctx.wxsPageScrollTop,
    az: _ctx.wxsScrollTop,
    aA: _ctx.refresherMaxAngle,
    aB: _ctx.refresherNoTransform,
    aC: _ctx.refresherAngleEnableChangeContinued,
    aD: _ctx.usePageScroll,
    aE: _ctx.watchTouchDirectionChange,
    aF: _ctx.isTouchmoving,
    aG: _ctx.finalRefresherOutRate,
    aH: _ctx.finalRefresherPullRate,
    aI: _ctx.hasTouchmove,
    aJ: !_ctx.usePageScroll ? 1 : "",
    aK: !_ctx.showScrollbar ? 1 : "",
    aL: common_vendor.s(_ctx.chatRecordRotateStyle),
    aM: _ctx.scrollTop,
    aN: _ctx.scrollX,
    aO: _ctx.finalScrollable,
    aP: _ctx.finalEnableBackToTop,
    aQ: _ctx.showScrollbar,
    aR: _ctx.finalScrollWithAnimation,
    aS: _ctx.scrollIntoView,
    aT: _ctx.finalLowerThreshold,
    aU: _ctx.finalRefresherEnabled && !_ctx.useCustomRefresher,
    aV: _ctx.finalRefresherThreshold,
    aW: _ctx.finalRefresherDefaultStyle,
    aX: _ctx.refresherBackground,
    aY: _ctx.finalRefresherTriggered,
    aZ: common_vendor.o((...args) => _ctx._scroll && _ctx._scroll(...args)),
    ba: common_vendor.o((...args) => _ctx._onScrollToLower && _ctx._onScrollToLower(...args)),
    bb: common_vendor.o((...args) => _ctx._onScrollToUpper && _ctx._onScrollToUpper(...args)),
    bc: common_vendor.o((...args) => _ctx._onRestore && _ctx._onRestore(...args)),
    bd: common_vendor.o(($event) => _ctx._onRefresh(true)),
    be: _ctx.finalIsOldWebView ? 1 : "",
    bf: common_vendor.s(_ctx.scrollViewContainerStyle),
    bg: _ctx.zSlots.right
  }, _ctx.zSlots.right ? {
    bh: _ctx.finalIsOldWebView ? 1 : ""
  } : {}, {
    bi: !_ctx.usePageScroll ? 1 : "",
    bj: common_vendor.s(_ctx.finalScrollViewStyle),
    bk: !_ctx.usePageScroll && _ctx.zSlots.bottom
  }, !_ctx.usePageScroll && _ctx.zSlots.bottom ? {} : _ctx.usePageScroll && _ctx.zSlots.bottom ? {
    bm: common_vendor.o(() => {
    }),
    bn: common_vendor.s({
      "bottom": `${_ctx.windowBottom}px`
    })
  } : {}, {
    bl: _ctx.usePageScroll && _ctx.zSlots.bottom,
    bo: _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat
  }, _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat ? {
    bp: common_vendor.s({
      height: _ctx.chatRecordModeSafeAreaBottom + "px"
    }),
    bq: common_vendor.s({
      height: _ctx.keyboardHeight + "px"
    })
  } : {}, {
    br: _ctx.bottomBgColor,
    bs: _ctx.showBackToTopClass
  }, _ctx.showBackToTopClass ? common_vendor.e({
    bt: _ctx.zSlots.backToTop
  }, _ctx.zSlots.backToTop ? {} : {
    bv: _ctx.backToTopImg.length ? _ctx.backToTopImg : _ctx.base64BackToTop
  }, {
    bw: common_vendor.n(_ctx.finalBackToTopClass),
    bx: common_vendor.s(_ctx.finalBackToTopStyle),
    by: common_vendor.o((...args) => _ctx._backToTopClick && _ctx._backToTopClick(...args))
  }) : {}, {
    bz: _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed
  }, _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed ? {} : {}, {
    bA: !_ctx.usePageScroll ? 1 : "",
    bB: !_ctx.usePageScroll && _ctx.fixed ? 1 : "",
    bC: _ctx.usePageScroll ? 1 : "",
    bD: _ctx.renderPropScrollTop < 1 ? 1 : "",
    bE: _ctx.useChatRecordMode ? 1 : "",
    bF: common_vendor.s(_ctx.finalPagingStyle)
  });
}
if (typeof block0 === "function")
  block0(uni_modules_zPaging_components_zPaging_js_zPagingMain._sfc_main);
if (typeof block1 === "function")
  block1(uni_modules_zPaging_components_zPaging_js_zPagingMain._sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(uni_modules_zPaging_components_zPaging_js_zPagingMain._sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1aa372d7"]]);
wx.createComponent(Component);

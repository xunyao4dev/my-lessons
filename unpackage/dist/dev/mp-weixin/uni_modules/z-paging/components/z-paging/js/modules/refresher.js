"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_zPaging_components_zPaging_js_zPagingUtils = require("../z-paging-utils.js");
const uni_modules_zPaging_components_zPaging_js_zPagingConstant = require("../z-paging-constant.js");
const uni_modules_zPaging_components_zPaging_js_zPagingEnum = require("../z-paging-enum.js");
const refresherModule = {
  props: {
    // 下拉刷新的主题样式，支持black，white，默认black
    refresherThemeStyle: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherThemeStyle", "")
    },
    // 自定义下拉刷新中左侧图标的样式
    refresherImgStyle: {
      type: Object,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherImgStyle", {})
    },
    // 自定义下拉刷新中右侧状态描述文字的样式
    refresherTitleStyle: {
      type: Object,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherTitleStyle", {})
    },
    // 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
    refresherUpdateTimeStyle: {
      type: Object,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherUpdateTimeStyle", {})
    },
    // 在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否
    watchRefresherTouchmove: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("watchRefresherTouchmove", false)
    },
    // 底部加载更多的主题样式，支持black，white，默认black
    loadingMoreThemeStyle: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("loadingMoreThemeStyle", "")
    },
    // 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否
    refresherOnly: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherOnly", false)
    },
    // 自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效
    refresherDefaultDuration: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherDefaultDuration", 100)
    },
    // 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0
    refresherCompleteDelay: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherCompleteDelay", 0)
    },
    // 自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效
    refresherCompleteDuration: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherCompleteDuration", 300)
    },
    // 自定义下拉刷新中是否允许列表滚动，默认为是
    refresherRefreshingScrollable: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherRefreshingScrollable", true)
    },
    // 自定义下拉刷新结束状态下是否允许列表滚动，默认为否
    refresherCompleteScrollable: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherCompleteScrollable", false)
    },
    // 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新
    useCustomRefresher: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("useCustomRefresher", true)
    },
    // 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题
    refresherFps: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherFps", 40)
    },
    // 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发
    refresherMaxAngle: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherMaxAngle", 40)
    },
    // 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否
    refresherAngleEnableChangeContinued: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherAngleEnableChangeContinued", false)
    },
    // 自定义下拉刷新默认状态下的文字
    refresherDefaultText: {
      type: [String, Object],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherDefaultText", null)
    },
    // 自定义下拉刷新松手立即刷新状态下的文字
    refresherPullingText: {
      type: [String, Object],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherPullingText", null)
    },
    // 自定义下拉刷新刷新中状态下的文字
    refresherRefreshingText: {
      type: [String, Object],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherRefreshingText", null)
    },
    // 自定义下拉刷新刷新结束状态下的文字
    refresherCompleteText: {
      type: [String, Object],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherCompleteText", null)
    },
    // 自定义继续下拉进入二楼文字
    refresherGoF2Text: {
      type: [String, Object],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherGoF2Text", null)
    },
    // 自定义下拉刷新默认状态下的图片
    refresherDefaultImg: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherDefaultImg", null)
    },
    // 自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致
    refresherPullingImg: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherPullingImg", null)
    },
    // 自定义下拉刷新刷新中状态下的图片
    refresherRefreshingImg: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherRefreshingImg", null)
    },
    // 自定义下拉刷新刷新结束状态下的图片
    refresherCompleteImg: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherCompleteImg", null)
    },
    // 自定义下拉刷新刷新中状态下是否展示旋转动画
    refresherRefreshingAnimated: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherRefreshingAnimated", true)
    },
    // 是否开启自定义下拉刷新刷新结束回弹效果，默认为是
    refresherEndBounceEnabled: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherEndBounceEnabled", true)
    },
    // 是否开启自定义下拉刷新，默认为是
    refresherEnabled: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherEnabled", true)
    },
    // 设置自定义下拉刷新阈值，默认为80rpx
    refresherThreshold: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherThreshold", "80rpx")
    },
    // 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black
    refresherDefaultStyle: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherDefaultStyle", "black")
    },
    // 设置自定义下拉刷新区域背景
    refresherBackground: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherBackground", "transparent")
    },
    // 设置固定的自定义下拉刷新区域背景
    refresherFixedBackground: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherFixedBackground", "transparent")
    },
    // 设置固定的自定义下拉刷新区域高度，默认为0
    refresherFixedBacHeight: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherFixedBacHeight", 0)
    },
    // 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)
    refresherOutRate: {
      type: Number,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherOutRate", 0.65)
    },
    // 是否开启下拉进入二楼功能，默认为否
    refresherF2Enabled: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherF2Enabled", false)
    },
    // 下拉进入二楼阈值，默认为200rpx
    refresherF2Threshold: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherF2Threshold", "200rpx")
    },
    // 下拉进入二楼动画时间，单位为毫秒，默认为200毫秒
    refresherF2Duration: {
      type: [Number, String],
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherF2Duration", 200)
    },
    // 下拉进入二楼状态松手后是否弹出二楼，默认为是
    showRefresherF2: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("showRefresherF2", true)
    },
    // 设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)
    refresherPullRate: {
      type: Number,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherPullRate", 0.75)
    },
    // 是否显示最后更新时间，默认为否
    showRefresherUpdateTime: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("showRefresherUpdateTime", false)
    },
    // 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
    refresherUpdateTimeKey: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherUpdateTimeKey", "default")
    },
    // 下拉刷新时下拉到“松手立即刷新”或“松手进入二楼”状态时是否使手机短振动，默认为否（h5无效）
    refresherVibrate: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherVibrate", false)
    },
    // 下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发
    refresherNoTransform: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("refresherNoTransform", false)
    },
    // 是否开启下拉刷新状态栏占位，适用于隐藏导航栏时，下拉刷新需要避开状态栏高度的情况，默认为否
    useRefresherStatusBarPlaceholder: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("useRefresherStatusBarPlaceholder", false)
    }
  },
  data() {
    return {
      R: uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher,
      //下拉刷新状态
      refresherStatus: uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default,
      refresherTouchstartY: 0,
      lastRefresherTouchmove: null,
      refresherReachMaxAngle: true,
      refresherTransform: "translateY(0px)",
      refresherTransition: "",
      finalRefresherDefaultStyle: "black",
      refresherRevealStackCount: 0,
      refresherCompleteTimeout: null,
      refresherCompleteSubTimeout: null,
      refresherEndTimeout: null,
      isTouchmovingTimeout: null,
      refresherTriggered: false,
      isTouchmoving: false,
      isTouchEnded: false,
      isUserPullDown: false,
      privateRefresherEnabled: -1,
      privateShowRefresherWhenReload: false,
      customRefresherHeight: -1,
      showCustomRefresher: false,
      doRefreshAnimateAfter: false,
      isRefresherInComplete: false,
      showF2: false,
      f2Transform: "",
      pullDownTimeStamp: 0,
      moveDis: 0,
      oldMoveDis: 0,
      currentDis: 0,
      oldCurrentMoveDis: 0,
      oldRefresherTouchmoveY: 0,
      oldTouchDirection: "",
      oldEmitedTouchDirection: "",
      oldPullingDistance: -1,
      refresherThresholdUpdateTag: 0
    };
  },
  watch: {
    refresherDefaultStyle: {
      handler(newVal) {
        if (newVal.length) {
          this.finalRefresherDefaultStyle = newVal;
        }
      },
      immediate: true
    },
    refresherStatus(newVal) {
      newVal === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Loading && this._cleanRefresherEndTimeout();
      this.refresherVibrate && (newVal === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.ReleaseToRefresh || newVal === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.GoF2) && this._doVibrateShort();
      this.$emit("refresherStatusChange", newVal);
      this.$emit("update:refresherStatus", newVal);
    },
    // 监听当前下拉刷新启用/禁用状态
    refresherEnabled(newVal) {
      !newVal && this.endRefresh();
    }
  },
  computed: {
    pullDownDisTimeStamp() {
      return 1e3 / this.refresherFps;
    },
    refresherThresholdUnitConverted() {
      return uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.addUnit(this.refresherThreshold, this.unit);
    },
    finalRefresherEnabled() {
      if (this.useChatRecordMode)
        return false;
      if (this.privateRefresherEnabled === -1)
        return this.refresherEnabled;
      return this.privateRefresherEnabled === 1;
    },
    finalRefresherThreshold() {
      let refresherThreshold = this.refresherThresholdUnitConverted;
      let idDefault = false;
      if (refresherThreshold === uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.addUnit(80, this.unit)) {
        idDefault = true;
        if (this.showRefresherUpdateTime) {
          refresherThreshold = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.addUnit(120, this.unit);
        }
      }
      if (idDefault && this.customRefresherHeight > 0)
        return this.customRefresherHeight + this.finalRefresherThresholdPlaceholder;
      return uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.convertToPx(refresherThreshold) + this.finalRefresherThresholdPlaceholder;
    },
    finalRefresherF2Threshold() {
      return uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.convertToPx(uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.addUnit(this.refresherF2Threshold, this.unit));
    },
    finalRefresherThresholdPlaceholder() {
      return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
    },
    finalRefresherFixedBacHeight() {
      return uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.convertToPx(this.refresherFixedBacHeight);
    },
    finalRefresherThemeStyle() {
      return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
    },
    finalRefresherOutRate() {
      let rate = this.refresherOutRate;
      rate = Math.max(0, rate);
      rate = Math.min(1, rate);
      return rate;
    },
    finalRefresherPullRate() {
      let rate = this.refresherPullRate;
      rate = Math.max(0, rate);
      return rate;
    },
    finalRefresherTransform() {
      if (this.refresherNoTransform || this.refresherTransform === "translateY(0px)")
        return "none";
      return this.refresherTransform;
    },
    finalShowRefresherWhenReload() {
      return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
    },
    finalRefresherTriggered() {
      if (!(this.finalRefresherEnabled && !this.useCustomRefresher))
        return false;
      return this.refresherTriggered;
    },
    showRefresher() {
      const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
      this.active && this.customRefresherHeight === -1 && showRefresher && this.updateCustomRefresherHeight();
      return showRefresher;
    },
    hasTouchmove() {
      return this.watchRefresherTouchmove;
    }
  },
  methods: {
    // 终止下拉刷新状态
    endRefresh() {
      this.totalData = this.realTotalData;
      this._refresherEnd();
      this._endSystemLoadingAndRefresh();
      this._handleScrollViewBounce({ bounce: true });
      this.$nextTick(() => {
        this.refresherTriggered = false;
      });
    },
    // 手动更新自定义下拉刷新view高度
    updateCustomRefresherHeight() {
      uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
    },
    // 关闭二楼
    closeF2() {
      this._handleCloseF2();
    },
    // 自定义下拉刷新被触发
    _onRefresh(fromScrollView = false, isUserPullDown = true) {
      if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher))
        return;
      this.$emit("onRefresh");
      this.$emit("Refresh");
      if (this.loading || this.isRefresherInComplete)
        return;
      this.loadingType = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.LoadingType.Refresher;
      if (this.nShowRefresherReveal)
        return;
      this.isUserPullDown = isUserPullDown;
      this.isUserReload = !isUserPullDown;
      this._startLoading(true);
      this.refresherTriggered = true;
      if (this.reloadWhenRefresh && isUserPullDown) {
        this.useChatRecordMode ? this._onLoadingMore("click") : this._reload(false, false, isUserPullDown);
      }
    },
    // 自定义下拉刷新被复位
    _onRestore() {
      this.refresherTriggered = "restore";
      this.$emit("onRestore");
      this.$emit("Restore");
    },
    // 进一步处理touch开始结果
    _handleRefresherTouchstart(touch) {
      if (!this.loading && this.isTouchEnded) {
        this.isTouchmoving = false;
      }
      this.loadingType = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.LoadingType.Refresher;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.isTouchEnded = false;
      this.refresherTransition = "";
      this.refresherTouchstartY = touch.touchY;
      this.$emit("refresherTouchstart", this.refresherTouchstartY);
      this.lastRefresherTouchmove = touch;
      this._cleanRefresherCompleteTimeout();
      this._cleanRefresherEndTimeout();
    },
    // 非appvue或微信小程序或QQ小程序或h5平台，使用js控制下拉刷新
    // 进一步处理touch中结果
    _handleRefresherTouchmove(moveDis, touch) {
      this.refresherReachMaxAngle = true;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.isTouchmoving = true;
      this.isTouchEnded = false;
      if (moveDis >= this.finalRefresherThreshold) {
        this.refresherStatus = this.refresherF2Enabled && moveDis >= this.finalRefresherF2Threshold ? uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.GoF2 : uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.ReleaseToRefresh;
      } else {
        this.refresherStatus = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default;
      }
      this.moveDis = moveDis;
    },
    // 进一步处理touch结束结果
    _handleRefresherTouchend(moveDis) {
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this.refresherReachMaxAngle = true;
      this.isTouchEnded = true;
      const refresherThreshold = this.finalRefresherThreshold;
      if (moveDis >= refresherThreshold && (this.refresherStatus === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.ReleaseToRefresh || this.refresherStatus === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.GoF2)) {
        if (this.refresherStatus === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.GoF2) {
          this._handleGoF2();
          this._refresherEnd();
        } else {
          uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
            this._emitTouchmove({ pullingDistance: refresherThreshold, dy: this.moveDis - refresherThreshold });
          }, 0.1);
          this.moveDis = refresherThreshold;
          this.refresherStatus = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Loading;
          this._doRefresherLoad();
        }
      } else {
        this._refresherEnd();
        this.isTouchmovingTimeout = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
          this.isTouchmoving = false;
        }, this.refresherDefaultDuration);
      }
      this.scrollEnable = true;
      this.$emit("refresherTouchend", moveDis);
    },
    // 处理列表触摸开始事件
    _handleListTouchstart() {
      if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {
        common_vendor.index.hideKeyboard();
        this.$emit("hidedKeyboard");
      }
    },
    // 处理scroll-view bounce是否生效
    _handleScrollViewBounce({ bounce }) {
      if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {
        if (this.wxsScrollTop <= 5) {
          this.refresherTransition = "";
          this.scrollEnable = bounce;
        } else if (bounce) {
          this.scrollEnable = bounce;
        }
      }
    },
    // wxs正在下拉状态改变处理
    _handleWxsPullingDownStatusChange(onPullingDown) {
      this.wxsOnPullingDown = onPullingDown;
      if (onPullingDown && !this.useChatRecordMode) {
        this.renderPropScrollTop = 0;
      }
    },
    // wxs正在下拉处理
    _handleWxsPullingDown({ moveDis, diffDis }) {
      this._emitTouchmove({ pullingDistance: moveDis, dy: diffDis });
    },
    // wxs触摸方向改变
    _handleTouchDirectionChange({ direction }) {
      this.$emit("touchDirectionChange", direction);
    },
    // wxs通知更新其props
    _handlePropUpdate() {
      this.wxsPropType = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.getTime().toString();
    },
    // 下拉刷新结束
    _refresherEnd(shouldEndLoadingDelay = true, fromAddData = false, isUserPullDown = false, setLoading = true) {
      if (this.loadingType === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.LoadingType.Refresher) {
        const refresherCompleteDelay = fromAddData && (isUserPullDown || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0;
        const refresherStatus = refresherCompleteDelay > 0 ? uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Complete : uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default;
        if (this.finalShowRefresherWhenReload) {
          const stackCount = this.refresherRevealStackCount;
          this.refresherRevealStackCount--;
          if (stackCount > 1)
            return;
        }
        this._cleanRefresherEndTimeout();
        this.refresherEndTimeout = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
          this.refresherStatus = refresherStatus;
        }, this.refresherStatus !== uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default && refresherStatus === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default ? this.refresherCompleteDuration : 0);
        if (refresherCompleteDelay > 0) {
          this.isRefresherInComplete = true;
        }
        this._cleanRefresherCompleteTimeout();
        this.refresherCompleteTimeout = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
          let animateDuration = 1;
          const animateType = this.refresherEndBounceEnabled && fromAddData ? "cubic-bezier(0.19,1.64,0.42,0.72)" : "linear";
          if (fromAddData) {
            animateDuration = this.refresherEndBounceEnabled ? this.refresherCompleteDuration / 1e3 : this.refresherCompleteDuration / 3e3;
          }
          this.refresherTransition = `transform ${fromAddData ? animateDuration : this.refresherDefaultDuration / 1e3}s ${animateType}`;
          this.wxsPropType = this.refresherTransition + "end" + uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.getTime();
          this.moveDis = 0;
          if (refresherStatus === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Complete) {
            if (this.refresherCompleteSubTimeout) {
              clearTimeout(this.refresherCompleteSubTimeout);
              this.refresherCompleteSubTimeout = null;
            }
            this.refresherCompleteSubTimeout = uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
              this.$nextTick(() => {
                this.refresherStatus = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Default;
                this.isRefresherInComplete = false;
              });
            }, animateDuration * 800);
          }
          this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
        }, refresherCompleteDelay);
      }
      if (setLoading) {
        uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => this.loading = false, shouldEndLoadingDelay ? uni_modules_zPaging_components_zPaging_js_zPagingConstant.c.delayTime : 0);
        isUserPullDown && this._onRestore();
      }
    },
    // 处理进入二楼
    _handleGoF2() {
      if (this.showF2 || !this.refresherF2Enabled)
        return;
      this.$emit("refresherF2Change", "go");
      if (!this.showRefresherF2)
        return;
      this.f2Transform = `translateY(${-this.superContentHeight}px)`;
      this.showF2 = true;
      uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
        this.f2Transform = "translateY(0px)";
      }, 100, "f2ShowDelay");
    },
    // 处理退出二楼
    _handleCloseF2() {
      if (!this.showF2 || !this.refresherF2Enabled)
        return;
      this.$emit("refresherF2Change", "close");
      if (!this.showRefresherF2)
        return;
      this.f2Transform = `translateY(${-this.superContentHeight}px)`;
      uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
        this.showF2 = false;
        this.nF2Opacity = 0;
      }, this.refresherF2Duration, "f2CloseDelay");
    },
    // 模拟用户手动触发下拉刷新
    _doRefresherRefreshAnimate() {
      this._cleanRefresherCompleteTimeout();
      const doRefreshAnimateAfter = !this.doRefreshAnimateAfter && this.finalShowRefresherWhenReload && this.customRefresherHeight === -1 && this.refresherThreshold === uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.addUnit(80, this.unit);
      if (doRefreshAnimateAfter) {
        this.doRefreshAnimateAfter = true;
        return;
      }
      this.refresherRevealStackCount++;
      this.wxsPropType = "begin" + uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.getTime();
      this.moveDis = this.finalRefresherThreshold;
      this.refresherStatus = uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Loading;
      this.isTouchmoving = true;
      this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
      this._doRefresherLoad(false);
    },
    // 触发下拉刷新
    _doRefresherLoad(isUserPullDown = true) {
      this._onRefresh(false, isUserPullDown);
      this.loading = true;
    },
    // 更新自定义下拉刷新view高度
    _updateCustomRefresherHeight() {
      this._getNodeClientRect(".zp-custom-refresher-slot-view").then((res) => {
        this.customRefresherHeight = res ? res[0].height : 0;
        this.showCustomRefresher = this.customRefresherHeight > 0;
        if (this.doRefreshAnimateAfter) {
          this.doRefreshAnimateAfter = false;
          this._doRefresherRefreshAnimate();
        }
      });
    },
    // emit pullingDown事件
    _emitTouchmove(e) {
      e.viewHeight = this.finalRefresherThreshold;
      e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0;
      this.hasTouchmove && this.oldPullingDistance !== e.pullingDistance && this.$emit("refresherTouchmove", e);
      this.oldPullingDistance = e.pullingDistance;
    },
    // 清除refresherCompleteTimeout
    _cleanRefresherCompleteTimeout() {
      this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
    },
    // 清除refresherEndTimeout
    _cleanRefresherEndTimeout() {
      this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
    }
  }
};
exports.refresherModule = refresherModule;

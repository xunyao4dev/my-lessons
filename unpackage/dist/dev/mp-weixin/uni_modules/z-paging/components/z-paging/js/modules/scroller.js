"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_zPaging_components_zPaging_js_zPagingUtils = require("../z-paging-utils.js");
const uni_modules_zPaging_components_zPaging_js_zPagingEnum = require("../z-paging-enum.js");
const scrollerModule = {
  props: {
    // 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐
    usePageScroll: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("usePageScroll", false)
    },
    // 是否可以滚动，使用内置scroll-view和nvue时有效，默认为是
    scrollable: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollable", true)
    },
    // 控制是否出现滚动条，默认为是
    showScrollbar: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("showScrollbar", true)
    },
    // 是否允许横向滚动，默认为否
    scrollX: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollX", false)
    },
    // iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。
    scrollToTopBounceEnabled: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollToTopBounceEnabled", false)
    },
    // iOS设备上滚动到底部时是否允许回弹效果，默认为是。
    scrollToBottomBounceEnabled: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollToBottomBounceEnabled", true)
    },
    // 在设置滚动条位置时使用动画过渡，默认为否
    scrollWithAnimation: {
      type: Boolean,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollWithAnimation", false)
    },
    // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
    scrollIntoView: {
      type: String,
      default: uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.gc("scrollIntoView", "")
    }
  },
  data() {
    return {
      scrollTop: 0,
      oldScrollTop: 0,
      scrollViewStyle: {},
      scrollViewContainerStyle: {},
      scrollViewInStyle: {},
      pageScrollTop: -1,
      scrollEnable: true,
      privateScrollWithAnimation: -1,
      cacheScrollNodeHeight: -1,
      superContentHeight: 0
    };
  },
  watch: {
    oldScrollTop(newVal) {
      !this.usePageScroll && this._scrollTopChange(newVal, false);
    },
    pageScrollTop(newVal) {
      this.usePageScroll && this._scrollTopChange(newVal, true);
    },
    usePageScroll: {
      handler(newVal) {
        this.loaded && this.autoHeight && this._setAutoHeight(!newVal);
      },
      immediate: true
    },
    finalScrollTop(newVal) {
      this.renderPropScrollTop = newVal < 6 ? 0 : 10;
    }
  },
  computed: {
    finalScrollWithAnimation() {
      if (this.privateScrollWithAnimation !== -1) {
        return this.privateScrollWithAnimation === 1;
      }
      return this.scrollWithAnimation;
    },
    finalScrollViewStyle() {
      if (this.superContentZIndex != 1) {
        this.scrollViewStyle["z-index"] = this.superContentZIndex;
        this.scrollViewStyle["position"] = "relative";
      }
      return this.scrollViewStyle;
    },
    finalScrollTop() {
      return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
    },
    // 当前是否是旧版webview
    finalIsOldWebView() {
      return this.isOldWebView && !this.usePageScroll;
    },
    // 当前scroll-view/list-view是否允许滚动
    finalScrollable() {
      return this.scrollable && !this.usePageScroll && this.scrollEnable && (this.refresherCompleteScrollable ? true : this.refresherStatus !== uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Complete) && (this.refresherRefreshingScrollable ? true : this.refresherStatus !== uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.Refresher.Loading);
    }
  },
  methods: {
    // 滚动到顶部，animate为是否展示滚动动画，默认为是
    scrollToTop(animate, checkReverse = true) {
      if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
        this.scrollToBottom(animate, false);
        return;
      }
      this.$nextTick(() => {
        this._scrollToTop(animate, false);
      });
    },
    // 滚动到底部，animate为是否展示滚动动画，默认为是
    scrollToBottom(animate, checkReverse = true) {
      if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
        this.scrollToTop(animate, false);
        return;
      }
      this.$nextTick(() => {
        this._scrollToBottom(animate);
      });
    },
    // 滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewById(sel, offset, animate) {
      this._scrollIntoView(sel, offset, animate);
    },
    // 滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByNodeTop(nodeTop, offset, animate) {
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
      });
    },
    // 滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollToY(y, offset, animate) {
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this._scrollToY(y, offset, animate);
      });
    },
    // 滚动到指定view(nvue中和虚拟列表中有效)。index为需要滚动的view的index(第几个，从0开始)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByIndex(index, offset, animate) {
      if (index >= this.realTotalData.length) {
        uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.consoleErr("当前滚动的index超出已渲染列表长度，请先通过refreshToPage加载到对应index页并等待渲染成功后再调用此方法！");
        return;
      }
      this.$nextTick(() => {
        if (this.finalUseVirtualList) {
          const isCellFixed = this.cellHeightMode === uni_modules_zPaging_components_zPaging_js_zPagingEnum.Enum.CellHeightMode.Fixed;
          uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
            if (this.finalUseVirtualList) {
              const scrollTop = isCellFixed ? this.virtualCellHeight * index : this.virtualHeightCacheList[index].lastTotalHeight;
              this.scrollToY(scrollTop, offset, animate);
            }
          }, isCellFixed ? 0 : 100);
        }
      });
    },
    // 滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
    scrollIntoViewByView(view, offset, animate) {
      this._scrollIntoView(view, offset, animate);
    },
    // 当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新
    updatePageScrollTop(value) {
      this.pageScrollTop = value;
    },
    // 当使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法
    updatePageScrollTopHeight() {
      this._updatePageScrollTopOrBottomHeight("top");
    },
    // 当使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法
    updatePageScrollBottomHeight() {
      this._updatePageScrollTopOrBottomHeight("bottom");
    },
    // 更新slot="left"和slot="right"宽度，当slot="left"或slot="right"宽度动态改变时调用
    updateLeftAndRightWidth() {
      if (!this.finalIsOldWebView)
        return;
      this.$nextTick(() => this._updateLeftAndRightWidth(this.scrollViewContainerStyle, "zp-page"));
    },
    // 更新z-paging内置scroll-view的scrollTop
    updateScrollViewScrollTop(scrollTop, animate = true) {
      this._updatePrivateScrollWithAnimation(animate);
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this.scrollTop = scrollTop;
        this.oldScrollTop = this.scrollTop;
      });
    },
    // 当滚动到顶部时
    _onScrollToUpper() {
      this.$emit("scrolltoupper");
      this.$emit("scrollTopChange", 0);
      this.$nextTick(() => {
        this.oldScrollTop = 0;
      });
    },
    // 当滚动到底部时
    _onScrollToLower(e) {
      (!e.detail || !e.detail.direction || e.detail.direction === "bottom") && this._onLoadingMore(this.useChatRecordMode ? "click" : "toBottom");
    },
    // 滚动到顶部
    _scrollToTop(animate = true, isPrivate = true) {
      if (this.usePageScroll) {
        this.$nextTick(() => {
          common_vendor.index.pageScrollTo({
            scrollTop: 0,
            duration: animate ? 100 : 0
          });
        });
        return;
      }
      this._updatePrivateScrollWithAnimation(animate);
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this.scrollTop = 0;
        this.oldScrollTop = this.scrollTop;
      });
    },
    // 滚动到底部
    async _scrollToBottom(animate = true) {
      if (this.usePageScroll) {
        this.$nextTick(() => {
          common_vendor.index.pageScrollTo({
            scrollTop: Number.MAX_VALUE,
            duration: animate ? 100 : 0
          });
        });
        return;
      }
      try {
        this._updatePrivateScrollWithAnimation(animate);
        const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container");
        const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
        const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
        const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
        if (pagingContainerH > scrollViewH) {
          this.scrollTop = this.oldScrollTop;
          this.$nextTick(() => {
            this.scrollTop = pagingContainerH - scrollViewH + this.virtualPlaceholderTopHeight;
            this.oldScrollTop = this.scrollTop;
          });
        }
      } catch (e) {
      }
    },
    // 滚动到指定view
    _scrollIntoView(sel, offset = 0, animate = false, finishCallback) {
      try {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._getNodeClientRect("#" + sel.replace("#", ""), this.$parent).then((node) => {
            if (node) {
              let nodeTop = node[0].top;
              this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
              finishCallback && finishCallback();
            }
          });
        });
      } catch (e) {
      }
    },
    // 通过nodeTop滚动到指定view
    _scrollIntoViewByNodeTop(nodeTop, offset = 0, animate = false) {
      if (this.isChatRecordModeAndInversion) {
        this._getNodeClientRect(".zp-scroll-view").then((sNode) => {
          if (sNode) {
            this._scrollToY(sNode[0].height - nodeTop, offset, animate, true);
          }
        });
      } else {
        this._scrollToY(nodeTop, offset, animate, true);
      }
    },
    // 滚动到指定位置
    _scrollToY(y, offset = 0, animate = false, addScrollTop = false) {
      this._updatePrivateScrollWithAnimation(animate);
      uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
        if (this.usePageScroll) {
          if (addScrollTop && this.pageScrollTop !== -1) {
            y += this.pageScrollTop;
          }
          const scrollTop = y - offset;
          common_vendor.index.pageScrollTo({
            scrollTop,
            duration: animate ? 100 : 0
          });
        } else {
          if (addScrollTop) {
            y += this.oldScrollTop;
          }
          this.scrollTop = y - offset;
        }
      }, 10);
    },
    // scroll-view滚动中
    _scroll(e) {
      this.$emit("scroll", e);
      const scrollTop = e.detail.scrollTop;
      this.finalUseVirtualList && this._updateVirtualScroll(scrollTop, this.oldScrollTop - scrollTop);
      this.oldScrollTop = scrollTop;
      const scrollDiff = e.detail.scrollHeight - this.oldScrollTop;
      !this.isIos && this._checkScrolledToBottom(scrollDiff);
    },
    // 更新内置的scroll-view是否启用滚动动画
    _updatePrivateScrollWithAnimation(animate) {
      this.privateScrollWithAnimation = animate ? 1 : 0;
      uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => this.$nextTick(() => {
        this.privateScrollWithAnimation = -1;
      }), 100, "updateScrollWithAnimationDelay");
    },
    // 检测scrollView是否要铺满屏幕
    _doCheckScrollViewShouldFullHeight(totalData) {
      if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {
        this.$nextTick(() => {
          this._checkScrollViewShouldFullHeight((scrollViewNode, pagingContainerNode) => {
            this._preCheckShowNoMoreInside(totalData, scrollViewNode, pagingContainerNode);
          });
        });
      } else {
        this._preCheckShowNoMoreInside(totalData);
      }
    },
    // 检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)
    async _checkScrollViewShouldFullHeight(callback) {
      try {
        const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
        const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container-content");
        if (!scrollViewNode || !pagingContainerNode)
          return;
        const scrollViewHeight = pagingContainerNode[0].height;
        const scrollViewTop = scrollViewNode[0].top;
        if (this.isAddedData && scrollViewHeight + scrollViewTop <= this.windowHeight) {
          this._setAutoHeight(true, scrollViewNode);
          callback(scrollViewNode, pagingContainerNode);
        } else {
          this._setAutoHeight(false);
          callback(null, null);
        }
      } catch (e) {
        callback(null, null);
      }
    },
    // 更新缓存中z-paging整个内容容器高度
    async _updateCachedSuperContentHeight() {
      const superContentNode = await this._getNodeClientRect(".z-paging-content");
      if (superContentNode) {
        this.superContentHeight = superContentNode[0].height;
      }
    },
    // scrollTop改变时触发
    _scrollTopChange(newVal, isPageScrollTop) {
      this.$emit("scrollTopChange", newVal);
      this.$emit("update:scrollTop", newVal);
      this._checkShouldShowBackToTop(newVal);
      const scrollTop = newVal > 5 ? 6 : 0;
      if (isPageScrollTop && this.wxsPageScrollTop !== scrollTop) {
        this.wxsPageScrollTop = scrollTop;
      } else if (!isPageScrollTop && this.wxsScrollTop !== scrollTop) {
        this.wxsScrollTop = scrollTop;
        if (scrollTop > 6) {
          this.scrollEnable = true;
        }
      }
    },
    // 更新使用页面滚动时slot="top"或"bottom"插入view的高度
    _updatePageScrollTopOrBottomHeight(type) {
      if (!this.usePageScroll)
        return;
      this._doCheckScrollViewShouldFullHeight(this.realTotalData);
      const node = `.zp-page-${type}`;
      const marginText = `margin${type.slice(0, 1).toUpperCase() + type.slice(1)}`;
      let safeAreaInsetBottomAdd = this.safeAreaInsetBottom;
      this.$nextTick(() => {
        let delayTime = 0;
        uni_modules_zPaging_components_zPaging_js_zPagingUtils.u.delay(() => {
          this._getNodeClientRect(node).then((res) => {
            if (res) {
              let pageScrollNodeHeight = res[0].height;
              if (type === "bottom") {
                if (safeAreaInsetBottomAdd) {
                  pageScrollNodeHeight += this.safeAreaBottom;
                }
              } else {
                this.cacheTopHeight = pageScrollNodeHeight;
              }
              this.$set(this.scrollViewStyle, marginText, `${pageScrollNodeHeight}px`);
            } else if (safeAreaInsetBottomAdd) {
              this.$set(this.scrollViewStyle, marginText, `${this.safeAreaBottom}px`);
            }
          });
        }, delayTime);
      });
    }
  }
};
exports.scrollerModule = scrollerModule;

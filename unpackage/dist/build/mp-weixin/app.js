"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("./common/vendor.js");Math;const n={onLaunch:function(){console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"),console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};function e(){const e=o.createSSRApp(n);return e.use(o.createPinia()),{app:e}}e().app.mount("#app"),exports.createApp=e;

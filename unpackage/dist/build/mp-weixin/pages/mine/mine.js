"use strict";const e=require("../../common/vendor.js"),t=require("../../utils/request.js");var o="https://lesson-api.jc-talent.com";if(!Array){(e.resolveComponent("uni-list-item")+e.resolveComponent("uni-list"))()}Math||((()=>"../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js")+(()=>"../../uni_modules/uni-list/components/uni-list/uni-list.js"))();const s={__name:"mine",setup(s){const n=e.ref(),i=e.ref(),a=e.ref(0),l=e.ref(0),r=()=>{e.index.navigateTo({url:"/pages/about/about"})},u=()=>{e.index.navigateTo({url:"/pages/suggestion/suggestion"})},c=()=>{e.index.showToast({title:"退出登录成功",icon:"success"}),e.index.clearStorageSync(),e.index.reLaunch({url:"/pages/login/login"})};return e.onLoad((()=>{t.request({url:`${o}/users/mine`,method:"GET",success:e=>{const{data:t}=e.data;n.value=t.nickname,i.value=t.avatar,a.value=t.studentCount,l.value=t.lessonCount},fail:t=>{e.index.showToast({title:"网络异常",icon:"error"})}})})),(t,o)=>({a:e.t(n.value),b:e.t(a.value),c:e.t(l.value),d:e.o(u),e:e.p({title:"意见建议",clickable:!0,showArrow:!0,showExtraIcon:!0,extraIcon:{color:"#4cd964",size:"22",type:"help"}}),f:e.o(r),g:e.p({title:"关于",clickable:!0,showArrow:!0,showExtraIcon:!0,extraIcon:{color:"#4cd964",size:"22",type:"link"}}),h:e.o(c)})}};wx.createPage(s);

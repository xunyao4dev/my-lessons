"use strict";const e=require("../../common/vendor.js"),o=require("../../utils/request.js");var t="https://lesson-api.jc-talent.com";if(!Array){(e.resolveComponent("uni-list-item")+e.resolveComponent("uni-list"))()}Math||((()=>"../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js")+(()=>"../../uni_modules/uni-list/components/uni-list/uni-list.js"))();const s={__name:"mine",setup(s){const i=e.ref(),n=e.ref(),r=e.ref(0),l=e.ref(0),a=()=>{e.index.showToast({icon:"error",title:"暂不支持"})},c=()=>{e.index.showToast({icon:"error",title:"暂不支持"})},u=()=>{e.index.showToast({icon:"error",title:"暂不支持"})},d=()=>{e.index.showToast({title:"退出登录成功",icon:"success"}),e.index.clearStorageSync(),e.index.reLaunch({url:"/pages/login/login"})};return e.onLoad((()=>{o.request({url:`${t}/users/mine`,method:"GET",success:e=>{const{data:o}=e.data;i.value=o.nickname,n.value=o.avatar,r.value=o.studentCount,l.value=o.lessonCount},fail:o=>{e.index.showToast({title:"网络异常",icon:"error"})}})})),(o,t)=>({a:e.t(i.value),b:e.t(r.value),c:e.t(l.value),d:e.o(a),e:e.p({title:"绑定手机",clickable:!0,showArrow:!0,showExtraIcon:!0,extraIcon:{color:"#4cd964",size:"22",type:"phone"}}),f:e.o(u),g:e.p({title:"意见建议",clickable:!0,showArrow:!0,showExtraIcon:!0,extraIcon:{color:"#4cd964",size:"22",type:"help"}}),h:e.o(c),i:e.p({title:"关于",clickable:!0,showArrow:!0,showExtraIcon:!0,extraIcon:{color:"#4cd964",size:"22",type:"link"}}),j:e.o(d)})}};wx.createPage(s);

"use strict";const e=require("../../common/vendor.js"),n=require("../../utils/utils.js"),t=require("../../utils/request.js");var a="https://lesson-api.jc-talent.com";const o={setup(){const o=e.ref([]),r=e.ref([]),u=e.ref(""),i=e.ref(null),s=e.ref([{text:"添加学生",icon:"icon-add-student",selectedIcon:"icon-add-student"}]),d=()=>{u.value?r.value=o.value.filter((e=>e.name.includes(u.value))):r.value=o.value};return e.onShow((()=>{i.value&&i.value.reload()})),{students:o,filteredStudents:r,searchQuery:u,fabContent:s,paging:i,query:()=>{t.request({url:`${a}/students`,method:"GET",success:e=>{o.value=e.data.data,r.value=o.value,i.value.complete(e.data.data)},fail:n=>{e.index.showToast({title:"网络异常",icon:"error"}),i.value.complete(!1)}})},onSearch:()=>{d()},onInput:e=>{u.value=e,d()},navigateToStudent:n=>{e.index.navigateTo({url:`/pages/student-info/student-info?studentId=${n}`,animationType:"pop-in",animationDuration:200})},trigger:n=>{0===n.index&&e.index.navigateTo({url:"/pages/add-student/add-student"})},formatGrade:n.formatGrade,formatSubjectAbbr:n.formatSubjectAbbr}}};if(!Array){(e.resolveComponent("uni-search-bar")+e.resolveComponent("uni-icons")+e.resolveComponent("uni-tag")+e.resolveComponent("uni-badge")+e.resolveComponent("uni-fab")+e.resolveComponent("z-paging"))()}Math||((()=>"../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js")+(()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-tag/components/uni-tag/uni-tag.js")+(()=>"../../uni_modules/uni-badge/components/uni-badge/uni-badge.js")+(()=>"../../uni_modules/uni-fab/components/uni-fab/uni-fab.js")+(()=>"../../uni_modules/z-paging/components/z-paging/z-paging.js"))();const r=e._export_sfc(o,[["render",function(n,t,a,o,r,u){return{a:e.o(o.onSearch),b:e.o(o.onInput),c:e.o((e=>o.searchQuery=e)),d:e.p({placeholder:"请输入学生姓名",modelValue:o.searchQuery}),e:e.f(o.filteredStudents,((n,t,a)=>({a:"364b42d3-2-"+a+",364b42d3-0",b:e.p({"custom-prefix":"iconfont",type:0===n.gender?"icon-male":"icon-female"}),c:e.t(n.name),d:e.t(o.formatGrade(n.grade)),e:e.f(n.subjects,((n,t,r)=>({a:n,b:"364b42d3-3-"+a+"-"+r+",364b42d3-0",c:e.p({inverted:!0,text:o.formatSubjectAbbr(n),type:"warning",size:"mini","custom-style":"margin-right: 4px; font-weight: bold;"})}))),f:e.t(n.createTime),g:"364b42d3-4-"+a+",364b42d3-0",h:e.p({"text-color":"#fff",text:n.remainHours}),i:t,j:e.o((e=>o.navigateToStudent(n.id)),t)}))),f:e.o(o.trigger),g:e.p({content:o.fabContent,horizontal:"right",direction:"vertical"}),h:e.sr("paging","364b42d3-0"),i:e.o(o.query),j:e.o((e=>o.students=e)),k:e.p({"paging-style":{"background-color":"#fafafa"},"refresher-end-bounce-enabled":!1,"empty-view-text":"您还没有学生哦~快去添加吧!",modelValue:o.students})}}],["__scopeId","data-v-364b42d3"]]);wx.createPage(r);

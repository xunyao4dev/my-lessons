"use strict";const e=require("../../common/vendor.js"),t=require("../../utils/request.js");var n="https://lesson-api.jc-talent.com";if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const o={__name:"suggestion",setup(o){const s=e.reactive({content:{rules:[{required:!0,errorMessage:"反馈内容不能为空"}]}}),a=e.reactive({content:"",contact:""}),r=e.ref(),u=async()=>{if(r.value){await r.value.validate()&&t.request({url:`${n}/feedbacks`,method:"POST",data:a,success:()=>{Object.assign(a,{content:"",contact:""}),e.index.showToast({title:"提交成功",icon:"success"})}})}};return(t,n)=>({a:e.o((e=>a.content=e)),b:e.p({type:"textarea",placeholder:"请填写您的建议和反馈",modelValue:a.content}),c:e.p({name:"content"}),d:e.o((e=>a.contact=e)),e:e.p({placeholder:"您的联系方式（选填）",modelValue:a.contact}),f:e.o(u),g:e.sr(r,"9ebab52b-0",{k:"form"}),h:e.p({rules:s,model:a})})}},s=e._export_sfc(o,[["__scopeId","data-v-9ebab52b"]]);wx.createPage(s);
"use strict";const e=require("../../common/vendor.js"),r=require("../../store/student.js"),s=require("../../utils/constant.js"),o=require("../../utils/request.js");var n="https://lesson-api.jc-talent.com";if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-data-checkbox")+e.resolveComponent("course-hour-input")+e.resolveComponent("uni-data-select")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js")+(()=>"../../uni_modules/course-hour-input/components/course-hour-input/course-hour-input.js")+(()=>"../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const a={__name:"add-student",setup(a){const t=r.useStudentStore(),u=e.reactive({name:"",gender:"",remainHours:{hours1v1:"",hours1v3:""},grade:"",subjects:[],phone:"",remark:""}),i=e.ref(),l=e.reactive({name:{rules:[{minLength:2,maxLength:6,errorMessage:"名字长度在{minLength}到{maxLength}之间"},{required:!0,errorMessage:"姓名不能为空"}]},gender:{rules:[{required:!0,errorMessage:"性别不能为空"}]},remainHours:{rules:[{required:!0,errorMessage:"1v1和1v3最少输入一项"},{validateFunction:function(e,r,s,o){return r.hours1v1||r.hours1v3||o("1v1和1v3最少输入一项"),!0}}]},grade:{rules:[{required:!0,errorMessage:"年级不能为空"}]},subjects:{rules:[{required:!0,errorMessage:"科目不能为空"}]},phone:{rules:[{required:!0,errorMessage:"手机号不能为空"},{pattern:/^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,errorMessage:"请输入有效的手机号"}]}}),d=async()=>{if(i.value){await i.value.validate()&&o.request({url:`${n}/students`,method:"POST",data:u,success:()=>{e.index.showToast({title:u.id?"修改成功":"添加成功",icon:"success"}),setTimeout((()=>{t.setStudent(u),e.index.navigateBack()}),1500)}})}};return e.onReady((()=>{i.value.setRules(l)})),e.onLoad((r=>{r.studentId||t.reset(),Object.assign(u,e.toRaw(t.$state))})),(r,o)=>({a:e.o((e=>u.name=e)),b:e.p({placeholder:"请输入姓名",trim:!0,modelValue:u.name}),c:e.p({label:"姓名",required:!0,name:"name"}),d:e.o((e=>u.gender=e)),e:e.p({mode:"tag",localdata:e.unref(s.genderOptions),modelValue:u.gender}),f:e.p({label:"性别",required:!0,name:"gender"}),g:e.o((e=>u.remainHours=e)),h:e.p({remainHours:u.remainHours}),i:e.p({label:"课时",required:!0,name:"remainHours"}),j:e.o((e=>u.grade=e)),k:e.p({localdata:e.unref(s.gradeOptions),placeholder:"请选择年级",modelValue:u.grade}),l:e.p({label:"年级",required:!0,name:"grade"}),m:e.o((e=>u.subjects=e)),n:e.p({mode:"tag",multiple:!0,localdata:e.unref(s.subjectOptions),modelValue:u.subjects}),o:e.p({label:"科目",required:!0,name:"subjects"}),p:e.o((r=>((r,s)=>{const o=r.replace(/\D/g,"");e.nextTick$1((()=>{u[s]=o}))})(r,"phone"))),q:e.o(e.m((e=>u.phone=e),{lazy:!0},!0)),r:e.p({type:"number",placeholder:"请输入联系方式",trim:!0,modelValue:u.phone}),s:e.p({label:"手机",required:!0,name:"phone"}),t:e.o((e=>u.remark=e)),v:e.p({type:"textarea",placeholder:"请输入备注信息",trim:!0,modelValue:u.remark}),w:e.p({label:"备注",name:"remark"}),x:e.o(d),y:e.sr(i,"a9c976cb-0",{k:"form"}),z:e.p({model:u,"label-position":"right"})})}},t=e._export_sfc(a,[["__scopeId","data-v-a9c976cb"]]);wx.createPage(t);

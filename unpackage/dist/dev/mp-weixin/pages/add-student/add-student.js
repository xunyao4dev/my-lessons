"use strict";
const common_vendor = require("../../common/vendor.js");
const store_student = require("../../store/student.js");
const utils_constant = require("../../utils/constant.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://localhost:8992" };
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_course_hour_input2 = common_vendor.resolveComponent("course-hour-input");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_course_hour_input2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_course_hour_input = () => "../../uni_modules/course-hour-input/components/course-hour-input/course-hour-input.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_course_hour_input + _easycom_uni_data_select + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "add-student",
  setup(__props) {
    const studentStore = store_student.useStudentStore();
    const student = common_vendor.reactive({
      name: "",
      gender: "",
      remainHours: {
        hours1v1: "",
        hours1v3: ""
      },
      grade: "",
      subjects: [],
      phone: "",
      remark: ""
    });
    const form = common_vendor.ref();
    const rules = common_vendor.reactive({
      name: {
        rules: [{
          minLength: 2,
          maxLength: 6,
          errorMessage: "名字长度在{minLength}到{maxLength}之间"
        }, {
          required: true,
          errorMessage: "姓名不能为空"
        }]
      },
      gender: {
        rules: [{
          required: true,
          errorMessage: "性别不能为空"
        }]
      },
      remainHours: {
        rules: [{
          required: true,
          errorMessage: "1v1和1v3最少输入一项"
        }, {
          validateFunction: function(rule, value, data, callback) {
            if (!value.hours1v1 && !value.hours1v3) {
              callback("1v1和1v3最少输入一项");
            }
            return true;
          }
        }]
      },
      grade: {
        rules: [{
          required: true,
          errorMessage: "年级不能为空"
        }]
      },
      subjects: {
        rules: [{
          required: true,
          errorMessage: "科目不能为空"
        }]
      },
      phone: {
        rules: [{
          required: true,
          errorMessage: "手机号不能为空"
        }, {
          pattern: /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,
          errorMessage: "请输入有效的手机号"
        }]
      }
    });
    const validateNumber = (e, field) => {
      const number = e.replace(/\D/g, "");
      common_vendor.nextTick$1(() => {
        student[field] = number;
      });
    };
    const submit = async () => {
      if (form.value) {
        const valid = await form.value.validate();
        if (valid) {
          utils_request.request({
            url: `${define_process_env_default.baseUrl}/students`,
            method: "POST",
            data: student,
            success: () => {
              common_vendor.index.showToast({
                title: student.id ? "修改成功" : "添加成功",
                icon: "success"
              });
              setTimeout(() => {
                studentStore.setStudent(student);
                common_vendor.index.navigateBack();
              }, 1500);
            }
          });
        }
      }
    };
    common_vendor.onReady(() => {
      form.value.setRules(rules);
    });
    common_vendor.onLoad((params) => {
      if (!params.studentId) {
        studentStore.reset();
      }
      Object.assign(student, common_vendor.toRaw(studentStore.$state));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => student.name = $event),
        b: common_vendor.p({
          placeholder: "请输入姓名",
          trim: true,
          modelValue: student.name
        }),
        c: common_vendor.p({
          label: "姓名",
          required: true,
          name: "name"
        }),
        d: common_vendor.o(($event) => student.gender = $event),
        e: common_vendor.p({
          mode: "tag",
          localdata: common_vendor.unref(utils_constant.genderOptions),
          modelValue: student.gender
        }),
        f: common_vendor.p({
          label: "性别",
          required: true,
          name: "gender"
        }),
        g: common_vendor.o(($event) => student.remainHours = $event),
        h: common_vendor.p({
          remainHours: student.remainHours
        }),
        i: common_vendor.p({
          label: "课时",
          required: true,
          name: "remainHours"
        }),
        j: common_vendor.o(($event) => student.grade = $event),
        k: common_vendor.p({
          localdata: common_vendor.unref(utils_constant.gradeOptions),
          placeholder: "请选择年级",
          modelValue: student.grade
        }),
        l: common_vendor.p({
          label: "年级",
          required: true,
          name: "grade"
        }),
        m: common_vendor.o(($event) => student.subjects = $event),
        n: common_vendor.p({
          mode: "tag",
          multiple: true,
          localdata: common_vendor.unref(utils_constant.subjectOptions),
          modelValue: student.subjects
        }),
        o: common_vendor.p({
          label: "科目",
          required: true,
          name: "subjects"
        }),
        p: common_vendor.o(($event) => validateNumber($event, "phone")),
        q: common_vendor.o(common_vendor.m(($event) => student.phone = $event, {
          lazy: true
        }, true)),
        r: common_vendor.p({
          type: "number",
          placeholder: "请输入联系方式",
          trim: true,
          modelValue: student.phone
        }),
        s: common_vendor.p({
          label: "手机",
          required: true,
          name: "phone"
        }),
        t: common_vendor.o(($event) => student.remark = $event),
        v: common_vendor.p({
          type: "textarea",
          placeholder: "请输入备注信息",
          trim: true,
          modelValue: student.remark
        }),
        w: common_vendor.p({
          label: "备注",
          name: "remark"
        }),
        x: common_vendor.o(submit),
        y: common_vendor.sr(form, "a84615d2-0", {
          "k": "form"
        }),
        z: common_vendor.p({
          model: student,
          ["label-position"]: "right"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a84615d2"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const store_student = require("../../store/student.js");
const store_lesson = require("../../store/lesson.js");
const utils_request = require("../../utils/request.js");
const utils_constant = require("../../utils/constant.js");
const utils_utils = require("../../utils/utils.js");
var define_process_env_default = { baseUrl: "http://localhost:8992" };
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "student-info",
  setup(__props) {
    const student = store_student.useStudentStore();
    store_lesson.useLessonStore();
    const makeCall = (phone) => {
      common_vendor.index.makePhoneCall({
        phoneNumber: phone,
        fail: (err) => {
          console.error(err);
        }
      });
    };
    const genderText = common_vendor.computed(() => {
      var _a;
      return (_a = utils_constant.genderOptions.find((i) => i.value === student.gender)) == null ? void 0 : _a.text;
    });
    const subjectsText = common_vendor.computed(() => {
      return student.subjects.map((subject) => {
        var _a;
        return (_a = utils_constant.subjectOptions.find((i) => subject === i.value)) == null ? void 0 : _a.text;
      }).join(", ");
    });
    const infoList = common_vendor.computed(() => [
      {
        iconType: "icon-ming",
        label: "姓名",
        value: student.name
      },
      {
        iconType: "icon-gender",
        label: "性别",
        value: genderText.value
      },
      {
        iconType: "icon-nianji",
        label: "年级",
        value: utils_utils.formatGrade(student.grade)
      },
      {
        iconType: "icon-keshi",
        label: "课时",
        value: student.remainHours
      },
      {
        iconType: "icon-kemu",
        label: "科目",
        value: subjectsText.value
      },
      {
        iconType: "icon-shouji",
        label: "手机",
        value: student.phone,
        clickable: true,
        clickAction: () => makeCall(student.phone)
      },
      {
        iconType: "icon-beizhu",
        label: "备注",
        value: student.remark
      }
    ]);
    const editInfo = (studentId) => {
      common_vendor.index.navigateTo({
        url: `/pages/add-student/add-student?studentId=${studentId}`
      });
    };
    const lessonInfo = () => {
      common_vendor.index.navigateTo({
        url: "/pages/lesson/lesson"
      });
    };
    common_vendor.onLoad((params) => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/students/${params.studentId}`,
        method: "GET",
        success: (res) => {
          student.setStudent(res.data.data);
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(infoList.value, (info, index, i0) => {
          return {
            a: "495a661b-0-" + i0,
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: info.iconType
            }),
            c: common_vendor.t(info.label),
            d: common_vendor.t(info.value),
            e: index,
            f: common_vendor.n({
              "clickable": info.clickable
            }),
            g: common_vendor.o(($event) => info.clickable ? info.clickAction() : null, index)
          };
        }),
        b: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-bianji"
        }),
        c: common_vendor.o(($event) => editInfo(common_vendor.unref(student).id)),
        d: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-paikebiao"
        }),
        e: common_vendor.o(lessonInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-495a661b"]]);
wx.createPage(MiniProgramPage);

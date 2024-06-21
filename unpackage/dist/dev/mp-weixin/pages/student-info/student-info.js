"use strict";
const common_vendor = require("../../common/vendor.js");
const store_student = require("../../store/student.js");
const store_lesson = require("../../store/lesson.js");
const utils_constant = require("../../utils/constant.js");
const utils_utils = require("../../utils/utils.js");
var define_process_env_default = { baseUrl: "http://192.168.1.4:8992" };
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
    const lesson = store_lesson.useLessonStore();
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
    const editInfo = (studentId) => {
      common_vendor.index.navigateTo({
        url: `/pages/add-student/add-student?studentId=${studentId}`
      });
    };
    const lessonInfo = () => {
      lesson.setStudentId(student.id);
      common_vendor.index.navigateTo({
        url: "/pages/lesson/lesson"
      });
    };
    common_vendor.onLoad((params) => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      common_vendor.index.request({
        url: `${define_process_env_default.baseUrl}/students/${params.studentId}`,
        method: "GET",
        success: (res) => {
          student.setStudent(res.data.data);
        },
        complete: () => {
          common_vendor.index.hideLoading();
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-ming"
        }),
        b: common_vendor.t(common_vendor.unref(student).name),
        c: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-gender"
        }),
        d: common_vendor.t(genderText.value),
        e: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-nianji"
        }),
        f: common_vendor.t(common_vendor.unref(utils_utils.formatGrade)(common_vendor.unref(student).grade)),
        g: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-keshi"
        }),
        h: common_vendor.t(common_vendor.unref(student).remainHours),
        i: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-kemu"
        }),
        j: common_vendor.t(subjectsText.value),
        k: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-shouji"
        }),
        l: common_vendor.t(common_vendor.unref(student).phone),
        m: common_vendor.o(($event) => makeCall(common_vendor.unref(student).phone)),
        n: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-beizhu"
        }),
        o: common_vendor.t(common_vendor.unref(student).remark),
        p: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-bianji"
        }),
        q: common_vendor.o(($event) => editInfo(common_vendor.unref(student).id)),
        r: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-paikebiao"
        }),
        s: common_vendor.o(lessonInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-495a661b"]]);
wx.createPage(MiniProgramPage);

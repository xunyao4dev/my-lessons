"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_utils = require("../../utils/utils.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://localhost:8992" };
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_uni_icons2 + _easycom_uni_tag2 + _easycom_uni_badge2 + _easycom_uni_list2 + _easycom_uni_fab2 + _easycom_z_paging2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_tag + _easycom_uni_badge + _easycom_uni_list + _easycom_uni_fab + _easycom_z_paging)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const paging = common_vendor.ref();
    const students = common_vendor.reactive([]);
    const fabContent = common_vendor.reactive([{
      text: "添加学生",
      icon: "icon-add-student",
      selectedIcon: "icon-add-student"
    }]);
    const navigateToStudent = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/student-info/student-info?studentId=${id}`,
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const trigger = (e) => {
      if (e.index === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/add-student/add-student"
        });
      }
    };
    const onRefresh = () => {
      loadData(() => {
        paging.value.complete();
      });
    };
    const loadData = (completeFun) => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/students`,
        method: "GET",
        success: (res) => {
          students.splice(0, students.length);
          students.push(...res.data.data);
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络异常",
            icon: "error"
          });
        },
        complete: completeFun
      });
    };
    common_vendor.onShow(() => {
      loadData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(students, (student, k0, i0) => {
          return {
            a: "1cf27b2a-2-" + i0 + ",1cf27b2a-1",
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: student.gender === 0 ? "icon-male" : "icon-female"
            }),
            c: common_vendor.t(student.name),
            d: common_vendor.t(common_vendor.unref(utils_utils.formatGrade)(student.grade)),
            e: common_vendor.f(student.subjects, (subject, k1, i1) => {
              return {
                a: subject,
                b: "1cf27b2a-3-" + i0 + "-" + i1 + ",1cf27b2a-1",
                c: common_vendor.p({
                  inverted: true,
                  text: common_vendor.unref(utils_utils.formatSubjectAbbr)(subject),
                  type: "warning",
                  size: "mini",
                  ["custom-style"]: "margin-right: 4px; font-weight: bold;"
                })
              };
            }),
            f: common_vendor.t(student.createTime),
            g: "1cf27b2a-4-" + i0 + ",1cf27b2a-1",
            h: common_vendor.p({
              ["text-color"]: "#fff",
              text: student.remainHours
            }),
            i: student.id,
            j: common_vendor.o(($event) => navigateToStudent(student.id), student.id)
          };
        }),
        b: common_vendor.p({
          border: false
        }),
        c: common_vendor.o(trigger),
        d: common_vendor.p({
          content: fabContent,
          horizontal: "right",
          direction: "vertical"
        }),
        e: common_vendor.sr(paging, "1cf27b2a-0", {
          "k": "paging"
        }),
        f: common_vendor.o(onRefresh),
        g: common_vendor.p({
          ["refresher-only"]: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);

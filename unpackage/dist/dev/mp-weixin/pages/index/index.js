"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_utils = require("../../utils/utils.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2 + _easycom_uni_badge2 + _easycom_uni_list2 + _easycom_uni_fab2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag + _easycom_uni_badge + _easycom_uni_list + _easycom_uni_fab)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const students = common_vendor.reactive([]);
    const fabContent = common_vendor.reactive([{
      iconPath: "/static/add-student.png",
      selectedIconPath: "/static/add-student.png",
      text: "添加学生"
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
    const search = (content) => {
      console.log(content);
    };
    common_vendor.onShow(() => {
      common_vendor.index.request({
        url: "http://localhost:8992/students",
        method: "GET",
        success: (res) => {
          students.splice(0, students.length);
          students.push(...res.data.data);
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.p({
          radius: "5",
          ["bg-color"]: "#fff",
          placeholder: "搜索学生",
          clearButton: "auto"
        }),
        c: common_vendor.f(students, (student, k0, i0) => {
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
                  text: common_vendor.unref(utils_utils.formatSubject)(subject),
                  type: "warning",
                  size: "mini",
                  ["custom-style"]: "margin-right: 4px;"
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
        d: common_vendor.p({
          border: false
        }),
        e: common_vendor.o(trigger),
        f: common_vendor.p({
          content: fabContent,
          horizontal: "right",
          direction: "vertical"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);

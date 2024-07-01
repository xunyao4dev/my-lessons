"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_utils = require("../../utils/utils.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://localhost:8992" };
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2 + _easycom_uni_badge2 + _easycom_uni_fab2 + _easycom_z_paging2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag + _easycom_uni_badge + _easycom_uni_fab + _easycom_z_paging)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const students = common_vendor.ref([]);
    const filteredStudents = common_vendor.ref([]);
    const searchQuery = common_vendor.ref("");
    const fab = common_vendor.ref();
    const paging = common_vendor.ref();
    const fabContent = common_vendor.ref([{
      text: "添加学生",
      icon: "icon-add-student",
      selectedIcon: "icon-add-student"
    }, {
      text: "测试",
      icon: "icon-add-student",
      selectedIcon: "icon-add-student"
    }]);
    const query = () => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/students`,
        method: "GET",
        success: (res) => {
          students.value = res.data.data;
          filteredStudents.value = students.value;
          paging.value.complete(res.data.data);
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络异常",
            icon: "error"
          });
          paging.value.complete(false);
        }
      });
    };
    const onSearch = () => {
      filterStudents();
    };
    const onInput = (value) => {
      searchQuery.value = value;
      filterStudents();
    };
    const filterStudents = () => {
      if (searchQuery.value) {
        filteredStudents.value = students.value.filter(
          (student) => student.name.includes(searchQuery.value)
        );
      } else {
        filteredStudents.value = students.value;
      }
    };
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
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/demo/demo"
        });
      }
      fab.value.close();
    };
    common_vendor.onShow(() => {
      if (paging.value) {
        paging.value.reload();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onSearch),
        b: common_vendor.o(onInput),
        c: common_vendor.o(($event) => searchQuery.value = $event),
        d: common_vendor.p({
          placeholder: "请输入学生姓名",
          modelValue: searchQuery.value
        }),
        e: common_vendor.f(filteredStudents.value, (student, index, i0) => {
          return {
            a: "1cf27b2a-2-" + i0 + ",1cf27b2a-0",
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: student.gender === 0 ? "icon-male" : "icon-female"
            }),
            c: common_vendor.t(student.name),
            d: common_vendor.t(common_vendor.unref(utils_utils.formatGrade)(student.grade)),
            e: common_vendor.f(student.subjects, (subject, k1, i1) => {
              return {
                a: subject,
                b: "1cf27b2a-3-" + i0 + "-" + i1 + ",1cf27b2a-0",
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
            g: "1cf27b2a-4-" + i0 + ",1cf27b2a-0",
            h: common_vendor.p({
              ["text-color"]: "#fff",
              text: student.remainHours
            }),
            i: index,
            j: common_vendor.o(($event) => navigateToStudent(student.id), index)
          };
        }),
        f: common_vendor.sr(fab, "1cf27b2a-5,1cf27b2a-0", {
          "k": "fab"
        }),
        g: common_vendor.o(trigger),
        h: common_vendor.p({
          content: fabContent.value,
          horizontal: "right",
          direction: "vertical"
        }),
        i: common_vendor.sr(paging, "1cf27b2a-0", {
          "k": "paging"
        }),
        j: common_vendor.o(query),
        k: common_vendor.o(($event) => students.value = $event),
        l: common_vendor.p({
          ["paging-style"]: {
            "background-color": "#fafafa"
          },
          ["refresher-end-bounce-enabled"]: false,
          ["empty-view-text"]: "您还没有学生哦~快去添加吧!",
          modelValue: students.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);

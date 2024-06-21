"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_lesson = require("../../store/lesson.js");
const store_student = require("../../store/student.js");
const utils_constant = require("../../utils/constant.js");
const utils_utils = require("../../utils/utils.js");
const utils_request = require("../../utils/request.js");
var define_process_env_default = { baseUrl: "http://192.168.1.4:8992" };
if (!Array) {
  const _easycom_bruce_calendar2 = common_vendor.resolveComponent("bruce-calendar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_time_range_picker2 = common_vendor.resolveComponent("time-range-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_bruce_calendar2 + _easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_fab2 + _easycom_uni_notice_bar2 + _easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_datetime_picker2 + _easycom_time_range_picker2 + _easycom_uni_forms2 + _easycom_uni_popup2)();
}
const _easycom_bruce_calendar = () => "../../uni_modules/bruce-calendar/components/bruce-calendar/bruce-calendar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_time_range_picker = () => "../../uni_modules/time-range-picker/components/time-range-picker/time-range-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_bruce_calendar + _easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_fab + _easycom_uni_notice_bar + _easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_datetime_picker + _easycom_time_range_picker + _easycom_uni_forms + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "lesson",
  setup(__props) {
    const calRef = common_vendor.ref();
    const form = common_vendor.ref();
    const lesson = store_lesson.useLessonStore();
    const student = store_student.useStudentStore();
    const selected = common_vendor.ref([]);
    const lessons = common_vendor.ref([]);
    const swipeOptions = common_vendor.reactive([{
      text: "取消",
      style: {
        backgroundColor: "#F56C6C"
      }
    }]);
    const swipeClick = (lesson2) => {
      common_vendor.index.showModal({
        title: "确认取消？",
        success: (res) => {
          if (res.confirm) {
            lesson2.status = 2;
            updateLesson(lesson2, "取消成功");
          }
        }
      });
    };
    const newLesson = common_vendor.reactive({});
    const rules = common_vendor.reactive({
      subject: {
        rules: [{
          required: true,
          errorMessage: "科目不能为空"
        }]
      },
      teacher: {
        rules: [{
          required: true,
          errorMessage: "教师不能为空"
        }]
      },
      classroom: {
        rules: [{
          required: true,
          errorMessage: "教室不能为空"
        }]
      },
      date: {
        rules: [{
          required: true,
          errorMessage: "日期不能为空"
        }]
      },
      time: {
        rules: [{
          required: true,
          errorMessage: "时间不能为空"
        }]
      }
    });
    const popup = common_vendor.ref();
    const openDialog = () => {
      popup.value.open();
    };
    const closeDialog = () => {
      popup.value.close();
    };
    const addLesson = async () => {
      if (form.value) {
        const valid = await form.value.validate();
        if (valid) {
          utils_request.request({
            url: `${define_process_env_default.baseUrl}/students/${student.id}/lessons`,
            method: "POST",
            data: newLesson,
            success: () => {
              common_vendor.index.showToast({
                title: "添加成功",
                icon: "success"
              });
              setTimeout(() => {
                closeDialog();
                calRef.value.init(newLesson.date);
                calRef.value.change();
              }, 1500);
            }
          });
        }
      }
    };
    const change = (params) => {
      const {
        year,
        month,
        date
      } = params;
      loadData(`${year}-${String(month).padStart(2, "0")}`, `${year}-${String(month).padStart(2, "0")}-${date}`);
    };
    const monthSwitch = (params) => {
      const {
        year,
        month
      } = params;
      loadData(`${year}-${String(month).padStart(2, "0")}`);
    };
    const handleTimeSelection = (time) => {
      newLesson.time = time;
    };
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const formatMonth = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}-${month}`;
    };
    const updateLesson = (lesson2, title) => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/lessons/${lesson2.id}`,
        method: "POST",
        data: lesson2,
        success: () => {
          common_vendor.index.showToast({
            title
          });
        }
      });
    };
    const loadData = (month, date) => {
      utils_request.request({
        url: `${define_process_env_default.baseUrl}/students/${lesson.studentId}/lessons?month=${month}&date=${date}`,
        method: "GET",
        success: (res) => {
          const {
            dailySchedules,
            currentSchedules
          } = res.data.data;
          selected.value = dailySchedules.map((s) => ({
            date: s,
            color: "red",
            icon: "flag-filled"
          }));
          lessons.value = currentSchedules.map((l) => ({
            id: l.lessonId,
            status: l.status,
            subject: l.subject,
            classroom: l.classroom,
            teacher: l.teacher,
            time: `${l.startTime}-${l.endTime}`
          }));
        }
      });
    };
    common_vendor.onBeforeMount(() => {
      const date = /* @__PURE__ */ new Date();
      loadData(formatMonth(date), formatDate(date));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(calRef, "d2ae5ec9-0", {
          "k": "calRef"
        }),
        b: common_vendor.o(change),
        c: common_vendor.o(monthSwitch),
        d: common_vendor.p({
          selected: selected.value,
          insert: true,
          lunar: true,
          ["start-date"]: "2000-1-1",
          ["end-date"]: "2099-12-31"
        }),
        e: common_vendor.f(lessons.value, (lesson2, k0, i0) => {
          return common_vendor.e({
            a: lesson2.status === 2
          }, lesson2.status === 2 ? {
            b: common_assets._imports_0$1
          } : {}, {
            c: common_vendor.t(common_vendor.unref(utils_utils.formatSubject)(lesson2.subject)),
            d: common_vendor.t(lesson2.time),
            e: "d2ae5ec9-3-" + i0 + "," + ("d2ae5ec9-2-" + i0),
            f: common_vendor.t(lesson2.classroom),
            g: "d2ae5ec9-4-" + i0 + "," + ("d2ae5ec9-2-" + i0),
            h: common_vendor.t(lesson2.teacher),
            i: lesson2.id,
            j: common_vendor.o(($event) => swipeClick(lesson2), lesson2.id),
            k: "d2ae5ec9-2-" + i0 + ",d2ae5ec9-1",
            l: common_vendor.p({
              ["right-options"]: swipeOptions,
              disabled: lesson2.status === 2
            })
          });
        }),
        f: common_vendor.p({
          type: "home",
          size: "16",
          color: "#7f8c8d"
        }),
        g: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-teacher",
          color: "#7f8c8d"
        }),
        h: common_vendor.o(openDialog),
        i: common_vendor.p({
          horizontal: "right"
        }),
        j: common_vendor.p({
          ["show-icon"]: true,
          ["background-color"]: "#eee",
          color: "#888",
          text: "将为【" + common_vendor.unref(student).name + "】添加课程"
        }),
        k: common_vendor.o(($event) => newLesson.subject = $event),
        l: common_vendor.p({
          localdata: common_vendor.unref(utils_constant.subjectOptions),
          placeholder: "请选择科目",
          modelValue: newLesson.subject
        }),
        m: common_vendor.p({
          label: "科目",
          ["label-width"]: "70",
          required: true,
          name: "subject"
        }),
        n: common_vendor.o(($event) => newLesson.teacher = $event),
        o: common_vendor.p({
          placeholder: "请输入教师",
          modelValue: newLesson.teacher
        }),
        p: common_vendor.p({
          label: "教师",
          ["label-width"]: "70",
          required: true,
          name: "teacher"
        }),
        q: common_vendor.o(($event) => newLesson.classroom = $event),
        r: common_vendor.p({
          placeholder: "请输入教室",
          modelValue: newLesson.classroom
        }),
        s: common_vendor.p({
          label: "教室",
          ["label-width"]: "70",
          required: true,
          name: "classroom"
        }),
        t: common_vendor.o(($event) => newLesson.date = $event),
        v: common_vendor.p({
          start: formatDate(/* @__PURE__ */ new Date()),
          type: "date",
          placeholder: "请选择日期",
          modelValue: newLesson.date
        }),
        w: common_vendor.p({
          label: "日期",
          ["label-width"]: "70",
          required: true,
          name: "date"
        }),
        x: common_vendor.o(handleTimeSelection),
        y: common_vendor.o(($event) => newLesson.time = $event),
        z: common_vendor.p({
          modelValue: newLesson.time
        }),
        A: common_vendor.p({
          label: "时间",
          ["label-width"]: "70",
          required: true,
          name: "time"
        }),
        B: common_vendor.sr(form, "d2ae5ec9-8,d2ae5ec9-6", {
          "k": "form"
        }),
        C: common_vendor.p({
          rules,
          model: newLesson
        }),
        D: common_vendor.o(closeDialog),
        E: common_vendor.o(addLesson),
        F: common_vendor.sr(popup, "d2ae5ec9-6", {
          "k": "popup"
        }),
        G: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d2ae5ec9"]]);
wx.createPage(MiniProgramPage);

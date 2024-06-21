"use strict";
const utils_constant = require("./constant.js");
function formatGrade(grade) {
  var _a;
  return (_a = utils_constant.gradeOptions.find((g) => grade === g.value)) == null ? void 0 : _a.text;
}
function formatSubject(subject) {
  var _a;
  return (_a = utils_constant.subjectOptions.find((s) => s.value === subject)) == null ? void 0 : _a.text;
}
function formatSubjectAbbr(subject) {
  var _a;
  return (_a = utils_constant.subjectOptions.find((s) => s.value === subject)) == null ? void 0 : _a.abbr;
}
exports.formatGrade = formatGrade;
exports.formatSubject = formatSubject;
exports.formatSubjectAbbr = formatSubjectAbbr;

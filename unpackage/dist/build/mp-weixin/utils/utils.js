"use strict";const t=require("./constant.js");exports.formatGrade=function(r){var n;return null==(n=t.gradeOptions.find((t=>r===t.value)))?void 0:n.text},exports.formatSubject=function(r){var n;return null==(n=t.subjectOptions.find((t=>t.value===r)))?void 0:n.abbr};

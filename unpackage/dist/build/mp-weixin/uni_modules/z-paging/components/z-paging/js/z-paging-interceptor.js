"use strict";function t(){return getApp()}function n(n,e){try{setTimeout((function(){t().globalData[`zp_handle${n}Callback`]=e}),1)}catch(a){}}function e(n){return t().globalData[`zp_handle${n}Callback`]}const a={handleQuery:function(t){return n("Query",t),this},_handleQuery:function(t,n,a,u){const c=e("Query");return c?c(t,n,a,u):[t,n,a]},handleFetchParams:function(t){return n("FetchParams",t),this},_handleFetchParams:function(t,n){const a=e("FetchParams");return a?a(t,n||{}):{pageNo:t.pageNo,pageSize:t.pageSize,...n||{}}},handleFetchResult:function(t){return n("FetchResult",t),this},_handleFetchResult:function(t,n,a){const u=e("FetchResult");return u&&u(t,n,a),!!u},handleLanguage2Local:function(t){return n("Language2Local",t),this},_handleLanguage2Local:function(t,n){const a=e("Language2Local");return a?a(t,n):n}};exports.interceptor=a;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = ()=>{\n    const intercomScript = \"\\n      <script>\\n        window.intercomSettings = {\\n          api_base: \\\"https://api-iam.intercom.io\\\",\\n          app_id: \\\"uwwrolxb\\\",\\n          name: \\\"Padmaji Rao\\\", // Full name\\n          user_id: \\\"267\\\", // a UUID for your user\\n          email: \\\"pandu@gmail.com\\\", // the email for your user\\n          created_at: Date.now() // Signup date as a Unix timestamp\\n        };\\n      </script>\\n  \\n      <script>\\n        // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/uwwrolxb'\\n        (function(){var w=window;var ic=w.Intercom;if(typeof ic===\\\"function\\\"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/uwwrolxb';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();\\n      </script>\\n    \";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Final Testing 2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\satis\\\\Desktop\\\\TaskLabs\\\\intercom-v2\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: intercomScript\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\satis\\\\Desktop\\\\TaskLabs\\\\intercom-v2\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTztJQUNULE1BQU1DLGlCQUFrQjtJQWtCeEIscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUMseUJBQXlCO29CQUFFQyxRQUFRSjtnQkFBZTs7Ozs7Ozs7QUFHN0Q7S0F6QklEO0FBMkJKLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGludGVyY29tU2NyaXB0ID0gYFxyXG4gICAgICA8c2NyaXB0PlxyXG4gICAgICAgIHdpbmRvdy5pbnRlcmNvbVNldHRpbmdzID0ge1xyXG4gICAgICAgICAgYXBpX2Jhc2U6IFwiaHR0cHM6Ly9hcGktaWFtLmludGVyY29tLmlvXCIsXHJcbiAgICAgICAgICBhcHBfaWQ6IFwidXd3cm9seGJcIixcclxuICAgICAgICAgIG5hbWU6IFwiUGFkbWFqaSBSYW9cIiwgLy8gRnVsbCBuYW1lXHJcbiAgICAgICAgICB1c2VyX2lkOiBcIjI2N1wiLCAvLyBhIFVVSUQgZm9yIHlvdXIgdXNlclxyXG4gICAgICAgICAgZW1haWw6IFwicGFuZHVAZ21haWwuY29tXCIsIC8vIHRoZSBlbWFpbCBmb3IgeW91ciB1c2VyXHJcbiAgICAgICAgICBjcmVhdGVkX2F0OiBEYXRlLm5vdygpIC8vIFNpZ251cCBkYXRlIGFzIGEgVW5peCB0aW1lc3RhbXBcclxuICAgICAgICB9O1xyXG4gICAgICA8L3NjcmlwdD5cclxuICBcclxuICAgICAgPHNjcmlwdD5cclxuICAgICAgICAvLyBXZSBwcmUtZmlsbGVkIHlvdXIgYXBwIElEIGluIHRoZSB3aWRnZXQgVVJMOiAnaHR0cHM6Ly93aWRnZXQuaW50ZXJjb20uaW8vd2lkZ2V0L3V3d3JvbHhiJ1xyXG4gICAgICAgIChmdW5jdGlvbigpe3ZhciB3PXdpbmRvdzt2YXIgaWM9dy5JbnRlcmNvbTtpZih0eXBlb2YgaWM9PT1cImZ1bmN0aW9uXCIpe2ljKCdyZWF0dGFjaF9hY3RpdmF0b3InKTtpYygndXBkYXRlJyx3LmludGVyY29tU2V0dGluZ3MpO31lbHNle3ZhciBkPWRvY3VtZW50O3ZhciBpPWZ1bmN0aW9uKCl7aS5jKGFyZ3VtZW50cyk7fTtpLnE9W107aS5jPWZ1bmN0aW9uKGFyZ3Mpe2kucS5wdXNoKGFyZ3MpO307dy5JbnRlcmNvbT1pO3ZhciBsPWZ1bmN0aW9uKCl7dmFyIHM9ZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtzLnR5cGU9J3RleHQvamF2YXNjcmlwdCc7cy5hc3luYz10cnVlO3Muc3JjPSdodHRwczovL3dpZGdldC5pbnRlcmNvbS5pby93aWRnZXQvdXd3cm9seGInO3ZhciB4PWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO3gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocyx4KTt9O2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXtsKCk7fWVsc2UgaWYody5hdHRhY2hFdmVudCl7dy5hdHRhY2hFdmVudCgnb25sb2FkJyxsKTt9ZWxzZXt3LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLGwsZmFsc2UpO319fSkoKTtcclxuICAgICAgPC9zY3JpcHQ+XHJcbiAgICBgO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDE+RmluYWwgVGVzdGluZyAyPC9oMT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaW50ZXJjb21TY3JpcHQgfX0gLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuICAiXSwibmFtZXMiOlsiSG9tZSIsImludGVyY29tU2NyaXB0IiwiaDEiLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
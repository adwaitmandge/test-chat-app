"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./component/UserAvatar/UserBadgeItem.js":
/*!***********************************************!*\
  !*** ./component/UserAvatar/UserBadgeItem.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nconst UserBadgeItem = (param)=>{\n    let { user , handleFunction , admin  } = param;\n    console.log(\"inside badgeitem\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        className: \"px-2 py-1 rounded-lg text-[12] bg-purple-700 \",\n        px: 2,\n        py: 1,\n        borderRadius: \"lg\",\n        m: 1,\n        mb: 2,\n        variant: \"solid\",\n        fontSize: 12,\n        colorScheme: \"purple\",\n        cursor: \"pointer\",\n        onClick: handleFunction,\n        children: [\n            user.name,\n            admin === user._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \" (Admin)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\UserAvatar\\\\UserBadgeItem.js\",\n                lineNumber: 21,\n                columnNumber: 30\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {\n                pl: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\UserAvatar\\\\UserBadgeItem.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\UserAvatar\\\\UserBadgeItem.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = UserBadgeItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserBadgeItem);\nvar _c;\n$RefreshReg$(_c, \"UserBadgeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVXNlckF2YXRhci9Vc2VyQmFkZ2VJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBNkM7QUFDQTtBQUU3QyxNQUFNRyxnQkFBZ0IsU0FBcUM7UUFBcEMsRUFBRUMsS0FBSSxFQUFFQyxlQUFjLEVBQUVDLE1BQUssRUFBRTtJQUNwREMsUUFBUUMsR0FBRyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNQLGlEQUFHQTtRQUNKUSxXQUFVO1FBQ1JDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxjQUFhO1FBQ2JDLEdBQUc7UUFDSEMsSUFBSTtRQUNKQyxTQUFRO1FBQ1JDLFVBQVU7UUFDVkMsYUFBWTtRQUNaQyxRQUFPO1FBQ1BDLFNBQVNkOztZQUVSRCxLQUFLZ0IsSUFBSTtZQUNUZCxVQUFVRixLQUFLaUIsR0FBRyxrQkFBSSw4REFBQ0M7MEJBQUs7Ozs7OzswQkFDN0IsOERBQUN0Qix1REFBU0E7Z0JBQUN1QixJQUFJOzs7Ozs7Ozs7Ozs7QUFHckI7S0FyQk1wQjtBQXVCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVXNlckF2YXRhci9Vc2VyQmFkZ2VJdGVtLmpzP2UxYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQm94LEJhZGdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJCYWRnZUl0ZW0gPSAoeyB1c2VyLCBoYW5kbGVGdW5jdGlvbiwgYWRtaW4gfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW5zaWRlIGJhZGdlaXRlbVwiKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgcm91bmRlZC1sZyB0ZXh0LVsxMl0gYmctcHVycGxlLTcwMCBcIlxyXG4gICAgICBweD17Mn1cclxuICAgICAgcHk9ezF9XHJcbiAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcclxuICAgICAgbT17MX1cclxuICAgICAgbWI9ezJ9XHJcbiAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXHJcbiAgICAgIGZvbnRTaXplPXsxMn1cclxuICAgICAgY29sb3JTY2hlbWU9XCJwdXJwbGVcIlxyXG4gICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgb25DbGljaz17aGFuZGxlRnVuY3Rpb259XHJcbiAgICA+XHJcbiAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgIHthZG1pbiA9PT0gdXNlci5faWQgJiYgPHNwYW4+IChBZG1pbik8L3NwYW4+fVxyXG4gICAgICA8Q2xvc2VJY29uIHBsPXsxfSAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJCYWRnZUl0ZW07Il0sIm5hbWVzIjpbIkNsb3NlSWNvbiIsIkJveCIsIkJhZGdlIiwiVXNlckJhZGdlSXRlbSIsInVzZXIiLCJoYW5kbGVGdW5jdGlvbiIsImFkbWluIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInB4IiwicHkiLCJib3JkZXJSYWRpdXMiLCJtIiwibWIiLCJ2YXJpYW50IiwiZm9udFNpemUiLCJjb2xvclNjaGVtZSIsImN1cnNvciIsIm9uQ2xpY2siLCJuYW1lIiwiX2lkIiwic3BhbiIsInBsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/UserAvatar/UserBadgeItem.js\n"));

/***/ })

});
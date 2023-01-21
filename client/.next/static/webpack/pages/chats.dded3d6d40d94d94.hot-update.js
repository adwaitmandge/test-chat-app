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

/***/ "./component/SingleChat.js":
/*!*********************************!*\
  !*** ./component/SingleChat.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n/* harmony import */ var _miscellaneous_ProfileModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscellaneous/ProfileModal */ \"./component/miscellaneous/ProfileModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SingleChat = (param)=>{\n    let { UserContext , fetchAgain , setFetchAgain , AuthContext  } = param;\n    _s();\n    const user = localStorage.getItem(\"userInfo\");\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    //   setSelectedChat(JSON.parse(localStorage.getItem(\"selectedChat\")));\n    console.log(selectedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: selectedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                pb: 3,\n                px: 2,\n                w: \"100%\",\n                fontFamily: \"Work sans\",\n                d: \"flex\",\n                justifyContent: {\n                    base: \"space-between\"\n                },\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                        d: {\n                            base: \"flex\",\n                            md: \"none\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ArrowBackIcon, {}, void 0, false, void 0, void 0),\n                        onClick: ()=>setSelectedChat(\"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    !selectedChat.isGroupChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user, selectedChat.users),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_ProfileModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: selectedChat.chatName.toUpperCase()\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            className: \"flex justify-center items-center h-[100%]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                className: \"3xl pb-3 font-sans\",\n                children: \"Click on a user to start Chatting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SingleChat, \"hRlvWMJsDJKOJh0cFd6IZfqspBc=\");\n_c = SingleChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChat);\nvar _c;\n$RefreshReg$(_c, \"SingleChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU2luZ2xlQ2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDTTtBQUNkO0FBQ0o7QUFDVztBQUV4RCxNQUFNVSxhQUFhLFNBQTREO1FBQTNELEVBQUVDLFlBQVcsRUFBQ0MsV0FBVSxFQUFFQyxjQUFhLEVBQUVDLFlBQVcsRUFBRTs7SUFDeEUsTUFBTUMsT0FBT0MsYUFBYUMsT0FBTyxDQUFDO0lBQ2xDLE1BQU0sRUFBRUMsYUFBWSxFQUFFQyxnQkFBZSxFQUFFLEdBQUdmLGlEQUFVQSxDQUFDVTtJQUV2RCx1RUFBdUU7SUFDckVNLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDRTtrQkFDR0EsNkJBQ0M7c0JBQ0UsNEVBQUNqQixrREFBSUE7Z0JBQ0hxQixVQUFVO29CQUFFQyxNQUFNO29CQUFRQyxJQUFJO2dCQUFPO2dCQUNyQ0MsSUFBSTtnQkFDSkMsSUFBSTtnQkFDSkMsR0FBRTtnQkFDRkMsWUFBVztnQkFDWEMsR0FBRTtnQkFDRkMsZ0JBQWdCO29CQUFFUCxNQUFNO2dCQUFnQjtnQkFDeENRLFlBQVc7O2tDQUVYLDhEQUFDN0Isd0RBQVVBO3dCQUNUMkIsR0FBRzs0QkFBRU4sTUFBTTs0QkFBUUMsSUFBSTt3QkFBTzt3QkFDOUJRLG9CQUFNLDhEQUFDekIsMkRBQWFBO3dCQUNwQjBCLFNBQVMsSUFBTWQsZ0JBQWdCOzs7Ozs7b0JBRWhDLENBQUNELGFBQWFnQixXQUFXLGlCQUN4Qjs7NEJBQUcxQiw4REFBU0EsQ0FBQ08sTUFBTUcsYUFBYWlCLEtBQUs7MENBQ25DLDhEQUFDMUIsbUVBQVlBOzs7Ozs7cURBR2Y7a0NBQUdTLGFBQWFrQixRQUFRLENBQUNDLFdBQVc7cUNBQ3JDOzs7Ozs7OzBDQUlMLDhEQUFDckMsaURBQUdBO1lBQUNzQyxXQUFVO3NCQUNiLDRFQUFDckMsa0RBQUlBO2dCQUFDcUMsV0FBVTswQkFBcUI7Ozs7Ozs7Ozs7cUJBSXhDOztBQUdQO0dBM0NNNUI7S0FBQUE7QUE2Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NpbmdsZUNoYXQuanM/ZTBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEljb25CdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnJvd0JhY2tJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGdldFNlbmRlciBmcm9tIFwiLi4vY29uZmlnL0NoYXRMb2dpY3NcIjtcclxuaW1wb3J0IFByb2ZpbGVNb2RhbCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL1Byb2ZpbGVNb2RhbFwiO1xyXG5cclxuY29uc3QgU2luZ2xlQ2hhdCA9ICh7IFVzZXJDb250ZXh0LGZldGNoQWdhaW4sIHNldEZldGNoQWdhaW4sIEF1dGhDb250ZXh0IH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKTtcclxuICBjb25zdCB7IHNlbGVjdGVkQ2hhdCwgc2V0U2VsZWN0ZWRDaGF0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIFxyXG4vLyAgIHNldFNlbGVjdGVkQ2hhdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRDaGF0XCIpKSk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRDaGF0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlbGVjdGVkQ2hhdCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIyOHB4XCIsIG1kOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICBwYj17M31cclxuICAgICAgICAgICAgcHg9ezJ9XHJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIldvcmsgc2Fuc1wiXHJcbiAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZD17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgaWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDaGF0KFwiXCIpfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeyFzZWxlY3RlZENoYXQuaXNHcm91cENoYXQgPyAoXHJcbiAgICAgICAgICAgICAgPD57Z2V0U2VuZGVyKHVzZXIsIHNlbGVjdGVkQ2hhdC51c2Vycyl9XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZU1vZGFsICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e3NlbGVjdGVkQ2hhdC5jaGF0TmFtZS50b1VwcGVyQ2FzZSgpfTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwJV1cIj5cclxuICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIjN4bCBwYi0zIGZvbnQtc2Fuc1wiPlxyXG4gICAgICAgICAgICBDbGljayBvbiBhIHVzZXIgdG8gc3RhcnQgQ2hhdHRpbmdcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDaGF0O1xyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIkljb25CdXR0b24iLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFycm93QmFja0ljb24iLCJnZXRTZW5kZXIiLCJQcm9maWxlTW9kYWwiLCJTaW5nbGVDaGF0IiwiVXNlckNvbnRleHQiLCJmZXRjaEFnYWluIiwic2V0RmV0Y2hBZ2FpbiIsIkF1dGhDb250ZXh0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJjb25zb2xlIiwibG9nIiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJwYiIsInB4IiwidyIsImZvbnRGYW1pbHkiLCJkIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaWNvbiIsIm9uQ2xpY2siLCJpc0dyb3VwQ2hhdCIsInVzZXJzIiwiY2hhdE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/SingleChat.js\n"));

/***/ })

});
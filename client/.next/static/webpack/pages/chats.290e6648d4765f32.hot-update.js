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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SingleChat = (param)=>{\n    let { fetchAgain , setFetchAgain , AuthContext  } = param;\n    _s();\n    const user = localStorage.getItem(\"userInfo\");\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    setSelectedChat;\n    console.log(selectedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: selectedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                pb: 3,\n                px: 2,\n                w: \"100%\",\n                fontFamily: \"Work sans\",\n                d: \"flex\",\n                justifyContent: {\n                    base: \"space-between\"\n                },\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        d: {\n                            base: \"flex\",\n                            md: \"none\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowBackIcon, {}, void 0, false, void 0, void 0),\n                        onClick: ()=>setSelectedChat(\"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    !selectedChat.isGroupChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user, selectedChat.users)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: selectedChat.chatName.toUpperCase()\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            className: \"flex justify-center items-center h-[100%]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                className: \"3xl pb-3 font-sans\",\n                children: \"Click on a user to start Chatting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SingleChat, \"hRlvWMJsDJKOJh0cFd6IZfqspBc=\");\n_c = SingleChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChat);\nvar _c;\n$RefreshReg$(_c, \"SingleChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU2luZ2xlQ2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5RDtBQUNNO0FBQ2Q7QUFDSjtBQUU3QyxNQUFNUyxhQUFhLFNBQWdEO1FBQS9DLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxZQUFXLEVBQUU7O0lBQzVELE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztJQUNsQyxNQUFNLEVBQUVDLGFBQVksRUFBRUMsZ0JBQWUsRUFBRSxHQUFHYixpREFBVUEsQ0FBQ1E7SUFDckRLO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDRTtrQkFDR0EsNkJBQ0M7c0JBQ0UsNEVBQUNmLGtEQUFJQTtnQkFDSG1CLFVBQVU7b0JBQUVDLE1BQU07b0JBQVFDLElBQUk7Z0JBQU87Z0JBQ3JDQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxHQUFFO2dCQUNGQyxZQUFXO2dCQUNYQyxHQUFFO2dCQUNGQyxnQkFBZ0I7b0JBQUVQLE1BQU07Z0JBQWdCO2dCQUN4Q1EsWUFBVzs7a0NBRVgsOERBQUMzQix3REFBVUE7d0JBQ1R5QixHQUFHOzRCQUFFTixNQUFNOzRCQUFRQyxJQUFJO3dCQUFPO3dCQUM5QlEsb0JBQU0sOERBQUN2QiwyREFBYUE7d0JBQ3BCd0IsU0FBUyxJQUFNZCxnQkFBZ0I7Ozs7OztvQkFFaEMsQ0FBQ0QsYUFBYWdCLFdBQVcsaUJBQ3hCO2tDQUFHeEIsOERBQVNBLENBQUNLLE1BQU1HLGFBQWFpQixLQUFLO3NEQUVyQztrQ0FBR2pCLGFBQWFrQixRQUFRLENBQUNDLFdBQVc7cUNBQ3JDOzs7Ozs7OzBDQUlMLDhEQUFDbkMsaURBQUdBO1lBQUNvQyxXQUFVO3NCQUNiLDRFQUFDbkMsa0RBQUlBO2dCQUFDbUMsV0FBVTswQkFBcUI7Ozs7Ozs7Ozs7cUJBSXhDOztBQUdQO0dBeENNM0I7S0FBQUE7QUEwQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NpbmdsZUNoYXQuanM/ZTBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEljb25CdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnJvd0JhY2tJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGdldFNlbmRlciBmcm9tIFwiLi4vY29uZmlnL0NoYXRMb2dpY3NcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNoYXQgPSAoeyBmZXRjaEFnYWluLCBzZXRGZXRjaEFnYWluLCBBdXRoQ29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcbiAgY29uc3QgeyBzZWxlY3RlZENoYXQsIHNldFNlbGVjdGVkQ2hhdCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgc2V0U2VsZWN0ZWRDaGF0XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRDaGF0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlbGVjdGVkQ2hhdCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIyOHB4XCIsIG1kOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICBwYj17M31cclxuICAgICAgICAgICAgcHg9ezJ9XHJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIldvcmsgc2Fuc1wiXHJcbiAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZD17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgaWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDaGF0KFwiXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7IXNlbGVjdGVkQ2hhdC5pc0dyb3VwQ2hhdCA/IChcclxuICAgICAgICAgICAgICA8PntnZXRTZW5kZXIodXNlciwgc2VsZWN0ZWRDaGF0LnVzZXJzKX08Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PntzZWxlY3RlZENoYXQuY2hhdE5hbWUudG9VcHBlckNhc2UoKX08Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzEwMCVdXCI+XHJcbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCIzeGwgcGItMyBmb250LXNhbnNcIj5cclxuICAgICAgICAgICAgQ2xpY2sgb24gYSB1c2VyIHRvIHN0YXJ0IENoYXR0aW5nXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2hhdDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJvd0JhY2tJY29uIiwiZ2V0U2VuZGVyIiwiU2luZ2xlQ2hhdCIsImZldGNoQWdhaW4iLCJzZXRGZXRjaEFnYWluIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlbGVjdGVkQ2hhdCIsInNldFNlbGVjdGVkQ2hhdCIsImNvbnNvbGUiLCJsb2ciLCJmb250U2l6ZSIsImJhc2UiLCJtZCIsInBiIiwicHgiLCJ3IiwiZm9udEZhbWlseSIsImQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpY29uIiwib25DbGljayIsImlzR3JvdXBDaGF0IiwidXNlcnMiLCJjaGF0TmFtZSIsInRvVXBwZXJDYXNlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/SingleChat.js\n"));

/***/ })

});
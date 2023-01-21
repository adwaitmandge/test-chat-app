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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SingleChat = (param)=>{\n    let { fetchAgain , setFetchAgain , AuthContext  } = param;\n    _s();\n    const user = localStorage.getItem(\"userInfo\");\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    //   setSelectedChat(JSON.parse(localStorage.getItem(\"selectedChat\")));\n    console.log(selectedChat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: selectedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                pb: 3,\n                px: 2,\n                w: \"100%\",\n                fontFamily: \"Work sans\",\n                d: \"flex\",\n                justifyContent: {\n                    base: \"space-between\"\n                },\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        d: {\n                            base: \"flex\",\n                            md: \"none\"\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowBackIcon, {}, void 0, false, void 0, void 0),\n                        onClick: ()=>setSelectedChat(\"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    !selectedChat.isGroupChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectedChat.users, user)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: selectedChat.chatName.toUpperCase()\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            className: \"flex justify-center items-center h-[100%]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                className: \"3xl pb-3 font-sans\",\n                children: \"Click on a user to start Chatting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SingleChat, \"hRlvWMJsDJKOJh0cFd6IZfqspBc=\");\n_c = SingleChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChat);\nvar _c;\n$RefreshReg$(_c, \"SingleChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU2luZ2xlQ2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5RDtBQUNNO0FBQ2Q7QUFDSjtBQUU3QyxNQUFNUyxhQUFhLFNBQWdEO1FBQS9DLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxZQUFXLEVBQUU7O0lBQzVELE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztJQUNsQyxNQUFNLEVBQUVDLGFBQVksRUFBRUMsZ0JBQWUsRUFBRSxHQUFHYixpREFBVUEsQ0FBQ1E7SUFDdkQsdUVBQXVFO0lBQ3JFTSxRQUFRQyxHQUFHLENBQUNIO0lBQ1oscUJBQ0U7a0JBQ0dBLDZCQUNDO3NCQUNFLDRFQUFDZixrREFBSUE7Z0JBQ0htQixVQUFVO29CQUFFQyxNQUFNO29CQUFRQyxJQUFJO2dCQUFPO2dCQUNyQ0MsSUFBSTtnQkFDSkMsSUFBSTtnQkFDSkMsR0FBRTtnQkFDRkMsWUFBVztnQkFDWEMsR0FBRTtnQkFDRkMsZ0JBQWdCO29CQUFFUCxNQUFNO2dCQUFnQjtnQkFDeENRLFlBQVc7O2tDQUVYLDhEQUFDM0Isd0RBQVVBO3dCQUNUeUIsR0FBRzs0QkFBRU4sTUFBTTs0QkFBUUMsSUFBSTt3QkFBTzt3QkFDOUJRLG9CQUFNLDhEQUFDdkIsMkRBQWFBO3dCQUNwQndCLFNBQVMsSUFBTWQsZ0JBQWdCOzs7Ozs7b0JBRWhDLENBQUNELGFBQWFnQixXQUFXLGlCQUN4QjtrQ0FBR3hCLDhEQUFTQSxDQUFDUSxhQUFhaUIsS0FBSyxFQUFFcEI7c0RBRWpDO2tDQUFHRyxhQUFha0IsUUFBUSxDQUFDQyxXQUFXO3FDQUNyQzs7Ozs7OzswQ0FJTCw4REFBQ25DLGlEQUFHQTtZQUFDb0MsV0FBVTtzQkFDYiw0RUFBQ25DLGtEQUFJQTtnQkFBQ21DLFdBQVU7MEJBQXFCOzs7Ozs7Ozs7O3FCQUl4Qzs7QUFHUDtHQXhDTTNCO0tBQUFBO0FBMENOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9TaW5nbGVDaGF0LmpzP2UwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJyb3dCYWNrSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCBnZXRTZW5kZXIgZnJvbSBcIi4uL2NvbmZpZy9DaGF0TG9naWNzXCI7XHJcblxyXG5jb25zdCBTaW5nbGVDaGF0ID0gKHsgZmV0Y2hBZ2Fpbiwgc2V0RmV0Y2hBZ2FpbiwgQXV0aENvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbmZvXCIpO1xyXG4gIGNvbnN0IHsgc2VsZWN0ZWRDaGF0LCBzZXRTZWxlY3RlZENoYXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4vLyAgIHNldFNlbGVjdGVkQ2hhdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRDaGF0XCIpKSk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRDaGF0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlbGVjdGVkQ2hhdCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIyOHB4XCIsIG1kOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICBwYj17M31cclxuICAgICAgICAgICAgcHg9ezJ9XHJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIldvcmsgc2Fuc1wiXHJcbiAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZD17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgaWNvbj17PEFycm93QmFja0ljb24gLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDaGF0KFwiXCIpfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeyFzZWxlY3RlZENoYXQuaXNHcm91cENoYXQgPyAoXHJcbiAgICAgICAgICAgICAgPD57Z2V0U2VuZGVyKHNlbGVjdGVkQ2hhdC51c2VycywgdXNlcil9PC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD57c2VsZWN0ZWRDaGF0LmNoYXROYW1lLnRvVXBwZXJDYXNlKCl9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVsxMDAlXVwiPlxyXG4gICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiM3hsIHBiLTMgZm9udC1zYW5zXCI+XHJcbiAgICAgICAgICAgIENsaWNrIG9uIGEgdXNlciB0byBzdGFydCBDaGF0dGluZ1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJyb3dCYWNrSWNvbiIsImdldFNlbmRlciIsIlNpbmdsZUNoYXQiLCJmZXRjaEFnYWluIiwic2V0RmV0Y2hBZ2FpbiIsIkF1dGhDb250ZXh0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJjb25zb2xlIiwibG9nIiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJwYiIsInB4IiwidyIsImZvbnRGYW1pbHkiLCJkIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaWNvbiIsIm9uQ2xpY2siLCJpc0dyb3VwQ2hhdCIsInVzZXJzIiwiY2hhdE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/SingleChat.js\n"));

/***/ })

});
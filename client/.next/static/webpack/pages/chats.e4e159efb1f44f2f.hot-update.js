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

/***/ "./component/ChatBox.js":
/*!******************************!*\
  !*** ./component/ChatBox.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleChat */ \"./component/SingleChat.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = (param)=>{\n    let { AuthContext , fetchAgain , setFetchAgain  } = param;\n    _s();\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    // setSelectedChat(JSON.parse(localStorage.getItem(\"selectedChat\")));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        d: {\n            base: selectedChat ? \"flex\" : \"none\",\n            md: \"flex\"\n        },\n        alignItems: \"center\",\n        flexDir: \"column\",\n        p: 3,\n        bg: \"white\",\n        w: {\n            base: \"100%\",\n            md: \"68%\"\n        },\n        borderRadius: \"lg\",\n        borderWidth: \"1px\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleChat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            AuthContext: AuthContext,\n            fetchAgain: fetchAgain,\n            setFetchAgain: setFetchAgain\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\ChatBox.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\ChatBox.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"hRlvWMJsDJKOJh0cFd6IZfqspBc=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvQ2hhdEJveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXFEO0FBQ1U7QUFDekI7QUFFdEMsTUFBTVEsVUFBVSxTQUFnRDtRQUEvQyxFQUFFQyxZQUFXLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFOztJQUN6RCxNQUFNLEVBQUVDLGFBQVksRUFBRUMsZ0JBQWUsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0s7SUFFckQscUVBQXFFO0lBQ3JFLHFCQUNFLDhEQUFDVCxpREFBR0E7UUFDRmMsR0FBRztZQUFFQyxNQUFNSCxlQUFlLFNBQVMsTUFBTTtZQUFFSSxJQUFJO1FBQU87UUFDdERDLFlBQVc7UUFDWEMsU0FBUTtRQUNSQyxHQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRztZQUFFTixNQUFNO1lBQVFDLElBQUk7UUFBTTtRQUM3Qk0sY0FBYTtRQUNiQyxhQUFZO2tCQUVaLDRFQUFDaEIsbURBQVVBO1lBQ1RFLGFBQWFBO1lBQ2JDLFlBQVlBO1lBQ1pDLGVBQWVBOzs7Ozs7Ozs7OztBQUl2QjtHQXRCTUg7S0FBQUE7QUF1Qk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NoYXRCb3guanM/YjhmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW5nbGVDaGF0IGZyb20gXCIuL1NpbmdsZUNoYXRcIjtcclxuXHJcbmNvbnN0IENoYXRCb3ggPSAoeyBBdXRoQ29udGV4dCwgZmV0Y2hBZ2Fpbiwgc2V0RmV0Y2hBZ2FpbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZWxlY3RlZENoYXQsIHNldFNlbGVjdGVkQ2hhdCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIC8vIHNldFNlbGVjdGVkQ2hhdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRDaGF0XCIpKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgZD17eyBiYXNlOiBzZWxlY3RlZENoYXQgPyBcImZsZXhcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICBwPXszfVxyXG4gICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNjglXCIgfX1cclxuICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxyXG4gICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICA+XHJcbiAgICAgIDxTaW5nbGVDaGF0XHJcbiAgICAgICAgQXV0aENvbnRleHQ9e0F1dGhDb250ZXh0fVxyXG4gICAgICAgIGZldGNoQWdhaW49e2ZldGNoQWdhaW59XHJcbiAgICAgICAgc2V0RmV0Y2hBZ2Fpbj17c2V0RmV0Y2hBZ2Fpbn1cclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaW5nbGVDaGF0IiwiQ2hhdEJveCIsIkF1dGhDb250ZXh0IiwiZmV0Y2hBZ2FpbiIsInNldEZldGNoQWdhaW4iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJkIiwiYmFzZSIsIm1kIiwiYWxpZ25JdGVtcyIsImZsZXhEaXIiLCJwIiwiYmciLCJ3IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/ChatBox.js\n"));

/***/ })

});
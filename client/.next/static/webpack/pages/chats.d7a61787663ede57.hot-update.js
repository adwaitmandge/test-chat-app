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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst SingleChat = (param)=>{\n    let { fetchAgain , setFetchAgain , AuthContext  } = param;\n    _s();\n    const user = localStorage.getItem(\"userInfo\");\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: selectedChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            className: \"flex justify-center items-center h-[100%]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                className: \"3xl pb-3 font-sans\",\n                children: \"Click on a user to start Chatting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\SingleChat.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(SingleChat, \"hRlvWMJsDJKOJh0cFd6IZfqspBc=\");\n_c = SingleChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleChat);\nvar _c;\n$RefreshReg$(_c, \"SingleChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvU2luZ2xlQ2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBNkM7QUFDa0I7QUFDZDtBQUdqRCxNQUFNTyxhQUFhLFNBQWdEO1FBQS9DLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxZQUFXLEVBQUU7O0lBQzVELE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztJQUNsQyxNQUFNLEVBQUVDLGFBQVksRUFBRUMsZ0JBQWUsRUFBRSxHQUFHWixpREFBVUEsQ0FBQ087SUFDckQscUJBQ0U7a0JBQ0dJLDZCQUNDO3NCQUNBLDRFQUFDYixrREFBSUE7Ozs7OzBDQUdMLDhEQUFDRCxpREFBR0E7WUFBQ2dCLFdBQVU7c0JBQ2IsNEVBQUNmLGtEQUFJQTtnQkFBQ2UsV0FBVTswQkFBcUI7Ozs7Ozs7Ozs7cUJBSXhDOztBQUdQO0dBbEJNVDtLQUFBQTtBQW9CTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvU2luZ2xlQ2hhdC5qcz9lMGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFycm93QmFja0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuXHJcbmNvbnN0IFNpbmdsZUNoYXQgPSAoeyBmZXRjaEFnYWluLCBzZXRGZXRjaEFnYWluLCBBdXRoQ29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcbiAgY29uc3QgeyBzZWxlY3RlZENoYXQsIHNldFNlbGVjdGVkQ2hhdCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzZWxlY3RlZENoYXQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgPC9UZXh0PjwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwJV1cIj5cclxuICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIjN4bCBwYi0zIGZvbnQtc2Fuc1wiPlxyXG4gICAgICAgICAgICBDbGljayBvbiBhIHVzZXIgdG8gc3RhcnQgQ2hhdHRpbmdcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDaGF0O1xyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJyb3dCYWNrSWNvbiIsIlNpbmdsZUNoYXQiLCJmZXRjaEFnYWluIiwic2V0RmV0Y2hBZ2FpbiIsIkF1dGhDb250ZXh0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/SingleChat.js\n"));

/***/ })

});
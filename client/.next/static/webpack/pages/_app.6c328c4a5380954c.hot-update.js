"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context_ChatProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider.js */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [chats, setChats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedChat, setSelectedChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n            value: {\n                isAuthenticated,\n                setIsAuthenticated,\n                chats,\n                setChats,\n                selectedChat,\n                setSelectedChat\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                AuthContext: AuthContext\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"1ODPk1Qf4VxwsD8Zwb3XAa1c2CE=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNUO0FBQ3NCO0FBQ0g7QUFDbEQsTUFBTUksNEJBQWNKLDBEQUFtQjtBQUV4QixTQUFTTSxJQUFJLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUE7SUFDaEQscUJBQ0UsOERBQUNFLDREQUFjQTtrQkFDYiw0RUFBQ0MsWUFBWVcsUUFBUTtZQUNuQkMsT0FBTztnQkFDTFA7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztZQUNGO3NCQUVBLDRFQUFDUDtnQkFBVyxHQUFHQyxTQUFTO2dCQUFFSixhQUFhQTs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQyxDQUFDO0dBcEJ1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyLmpzXCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhdCwgc2V0U2VsZWN0ZWRDaGF0XSA9IHVzZVN0YXRlKCk7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICAgIHNldElzQXV0aGVudGljYXRlZCxcbiAgICAgICAgICBjaGF0cyxcbiAgICAgICAgICBzZXRDaGF0cyxcbiAgICAgICAgICBzZWxlY3RlZENoYXQsXG4gICAgICAgICAgc2V0U2VsZWN0ZWRDaGF0LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IEF1dGhDb250ZXh0PXtBdXRoQ29udGV4dH0gLz5cbiAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGV4dCIsIkNoYWtyYVByb3ZpZGVyIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0SXNBdXRoZW50aWNhdGVkIiwiY2hhdHMiLCJzZXRDaGF0cyIsInNlbGVjdGVkQ2hhdCIsInNldFNlbGVjdGVkQ2hhdCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});
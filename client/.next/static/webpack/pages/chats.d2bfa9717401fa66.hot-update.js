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

/***/ "./component/MyChats.js":
/*!******************************!*\
  !*** ./component/MyChats.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MyChats = ()=>{\n    _s();\n    const [selectedChat, setSelectedChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(localStorage.getItem(\"selectedChat\")));\n    const { chats , setChats  } = useContext(_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__.Chats);\n    const user = JSON.parse(localStorage.getItem(\"userInfo\"));\n    const token = localStorage.getItem(\"token\");\n    const [loggedUser, setLoggedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const fetchChats = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/chats\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"jwt-token\": token\n                }\n            });\n            const data = await res.json();\n            setChats(data);\n            console.log(\"Fetched all chats\", data);\n            localStorage.setItem(\"chats\", data);\n        } catch (err) {\n            console.error(err.message);\n            toast({\n                title: \"Error Occured!\",\n                description: \"Failed to Load the chats\",\n                status: \"error\",\n                duration: 5000,\n                isClosable: true,\n                position: \"bottom-left\"\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoggedUser(JSON.parse(localStorage.getItem(\"userInfo\")));\n        fetchChats();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        d: {\n            base: selectedChat ? \"none\" : \"flex\",\n            md: \"flex\"\n        },\n        className: \"flex flex-col p-3 bg-white\",\n        w: {\n            base: \"100%\",\n            md: \"31%\"\n        },\n        borderRadius: \"lg\",\n        borderWidth: \"1px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                pb: 3,\n                px: 3,\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                className: \"font-sans flex\",\n                d: \"flex\",\n                w: \"100%\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    \"My Chats\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        d: \"flex\",\n                        rightIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.AddIcon, {}, void 0, false, void 0, void 0),\n                        fontSize: {\n                            base: \"17px\",\n                            md: \"10px\",\n                            lg: \"17px\"\n                        },\n                        children: \"New Group Chat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                className: \"flex flex-col p-3 bg-[#f8f8f8] w-[100%] h-[100%] rounded-lg overflow-y-hidden\",\n                children: chats ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    children: chats.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            onClick: ()=>setSelectedChat(chat),\n                            cursor: \"pointer\",\n                            bg: selectedChat === chat ? \"#38B2AC\" : \"#E8E8E8\",\n                            color: selectedChat === chat ? \"white\" : \"black\",\n                            px: 3,\n                            py: 2,\n                            borderRadius: \"lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: !chat.isGroupChat ? (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(loggedUser, chat.users) : chat.chatName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, undefined)\n                        }, chat._id, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatLoading, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyChats, \"tXmBuPHrjsq0V+oSVQgoudFGLXc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = MyChats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyChats);\nvar _c;\n$RefreshReg$(_c, \"MyChats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rjs7Ozs7Ozs7Ozs7O0FBSVQ7R0EvRk0zRDs7UUFTVVgsc0RBQVFBOzs7S0FUbEJXO0FBaUdOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9NeUNoYXRzLmpzP2U1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHRyLHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgU3RhY2ssIEhTdGFjaywgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGdldFNlbmRlciBmcm9tIFwiLi4vY29uZmlnL0NoYXRMb2dpY3NcIjtcclxuaW1wb3J0IHsgQ2hhdHMgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IE15Q2hhdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2hhdCwgc2V0U2VsZWN0ZWRDaGF0XSA9IHVzZVN0YXRlKFxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkQ2hhdFwiKSlcclxuICApO1xyXG5cclxuICBjb25zdCB7IGNoYXRzLCBzZXRDaGF0cyB9ID0gdXNlQ29udGV4dChDaGF0cyk7XHJcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XHJcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIGNvbnN0IFtsb2dnZWRVc2VyLCBzZXRMb2dnZWRVc2VyXSA9IHVzZVN0YXRlKHVzZXIpO1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDaGF0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwiand0LXRva2VuXCI6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldENoYXRzKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYWxsIGNoYXRzXCIsIGRhdGEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXRzXCIsIGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0b2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3IgT2NjdXJlZCFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGYWlsZWQgdG8gTG9hZCB0aGUgY2hhdHNcIixcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSkpO1xyXG4gICAgZmV0Y2hDaGF0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgZD17eyBiYXNlOiBzZWxlY3RlZENoYXQgPyBcIm5vbmVcIiA6IFwiZmxleFwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgYmctd2hpdGVcIlxyXG4gICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCIzMSVcIiB9fVxyXG4gICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHBiPXszfVxyXG4gICAgICAgIHB4PXszfVxyXG4gICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMjhweFwiLCBtZDogXCIzMHB4XCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJmb250LXNhbnMgZmxleFwiXHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTXkgQ2hhdHNcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgICByaWdodEljb249ezxBZGRJY29uIC8+fVxyXG4gICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIxN3B4XCIsIG1kOiBcIjEwcHhcIiwgbGc6IFwiMTdweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTmV3IEdyb3VwIENoYXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgYmctWyNmOGY4ZjhdIHctWzEwMCVdIGgtWzEwMCVdIHJvdW5kZWQtbGcgb3ZlcmZsb3cteS1oaWRkZW5cIj5cclxuICAgICAgICB7Y2hhdHMgPyAoXHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENoYXQoY2hhdCl9XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIGJnPXtzZWxlY3RlZENoYXQgPT09IGNoYXQgPyBcIiMzOEIyQUNcIiA6IFwiI0U4RThFOFwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkQ2hhdCA9PT0gY2hhdCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn1cclxuICAgICAgICAgICAgICAgIHB4PXszfVxyXG4gICAgICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NoYXQuX2lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICB7IWNoYXQuaXNHcm91cENoYXRcclxuICAgICAgICAgICAgICAgICAgICA/IGdldFNlbmRlcihsb2dnZWRVc2VyLCBjaGF0LnVzZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY2hhdC5jaGF0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2hhdExvYWRpbmcgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNoYXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0ciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVG9hc3QiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHQiLCJBZGRJY29uIiwiU3RhY2siLCJIU3RhY2siLCJWU3RhY2siLCJnZXRTZW5kZXIiLCJDaGF0cyIsIk15Q2hhdHMiLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hhdHMiLCJzZXRDaGF0cyIsInVzZUNvbnRleHQiLCJ1c2VyIiwidG9rZW4iLCJsb2dnZWRVc2VyIiwic2V0TG9nZ2VkVXNlciIsInRvYXN0IiwiZmV0Y2hDaGF0cyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicG9zaXRpb24iLCJkIiwiYmFzZSIsIm1kIiwiY2xhc3NOYW1lIiwidyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwicGIiLCJweCIsImZvbnRTaXplIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicmlnaHRJY29uIiwibGciLCJtYXAiLCJjaGF0Iiwib25DbGljayIsImN1cnNvciIsImJnIiwiY29sb3IiLCJweSIsImlzR3JvdXBDaGF0IiwidXNlcnMiLCJjaGF0TmFtZSIsIl9pZCIsIkNoYXRMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/MyChats.js\n"));

/***/ })

});
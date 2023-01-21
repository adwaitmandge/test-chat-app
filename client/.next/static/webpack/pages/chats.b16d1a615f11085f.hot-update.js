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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _component_miscellaneous_GroupChatModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/miscellaneous/GroupChatModal */ \"./component/miscellaneous/GroupChatModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MyChats = (param)=>{\n    let { AuthContext , fetchAgain , setFetchAgain  } = param;\n    _s();\n    // const [selectedChat, setSelectedChat] = useState(\n    //   JSON.parse(localStorage.getItem(\"selectedChat\"))\n    // );\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const { chats , setChats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const user = JSON.parse(localStorage.getItem(\"userInfo\"));\n    const token = localStorage.getItem(\"token\");\n    const [loggedUser, setLoggedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const fetchChats = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/chats\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"jwt-token\": token\n                }\n            });\n            const data = await res.json();\n            setChats(data);\n            console.log(\"Fetched all chats\", data);\n            localStorage.setItem(\"chats\", data);\n        } catch (err) {\n            console.error(err.message);\n            toast({\n                title: \"Error Occured!\",\n                description: \"Failed to Load the chats\",\n                status: \"error\",\n                duration: 5000,\n                isClosable: true,\n                position: \"bottom-left\"\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoggedUser(JSON.parse(localStorage.getItem(\"userInfo\")));\n        fetchChats();\n    }, [\n        fetchAgain\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        d: {\n            base: selectedChat ? \"none\" : \"flex\",\n            md: \"flex\"\n        },\n        className: \"flex flex-col p-3 bg-white\",\n        w: {\n            base: \"100%\",\n            md: \"31%\"\n        },\n        borderRadius: \"lg\",\n        borderWidth: \"1px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                pb: 3,\n                px: 3,\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                className: \"font-sans flex\",\n                d: \"flex\",\n                w: \"100%\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    \"My Chats\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_miscellaneous_GroupChatModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        AuthContext: AuthContext,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            d: \"flex\",\n                            rightIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {}, void 0, false, void 0, void 0),\n                            fontSize: {\n                                base: \"17px\",\n                                md: \"10px\",\n                                lg: \"17px\"\n                            },\n                            children: \"New Group Chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"flex flex-col p-3 bg-[#f8f8f8] w-[100%] h-[100%] rounded-lg overflow-y-hidden\",\n                children: chats ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    children: chats.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            onClick: ()=>{\n                                setSelectedChat(chat);\n                                localStorage.setItem();\n                            },\n                            cursor: \"pointer\",\n                            bg: selectedChat === chat ? \"#38B2AC\" : \"#E8E8E8\",\n                            color: selectedChat === chat ? \"white\" : \"black\",\n                            px: 3,\n                            py: 2,\n                            borderRadius: \"lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: !chat.isGroupChat ? (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(loggedUser, chat.users) : chat.chatName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, undefined)\n                        }, chat._id, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatLoading, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyChats, \"oKZqRA2mf80bsylmU4uX+pRh+Hk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = MyChats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyChats);\nvar _c;\n$RefreshReg$(_c, \"MyChats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pELGtEQUFJQTswQ0FDRixDQUFDMkQsS0FBS00sV0FBVyxHQUNkNUQsOERBQVNBLENBQUNpQixZQUFZcUMsS0FBS08sS0FBSyxJQUNoQ1AsS0FBS1EsUUFBUTs7Ozs7OzJCQUxkUixLQUFLUyxHQUFHOzs7Ozs7Ozs7OENBV25CLDhEQUFDQzs7Ozs2QkFDRjs7Ozs7Ozs7Ozs7O0FBSVQ7R0FuR003RDs7UUFXVVosc0RBQVFBOzs7S0FYbEJZO0FBcUdOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9NeUNoYXRzLmpzP2U1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgU3RhY2ssIEhTdGFjaywgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGdldFNlbmRlciBmcm9tIFwiLi4vY29uZmlnL0NoYXRMb2dpY3NcIjtcclxuaW1wb3J0IHsgQ2hhdHMgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IEdyb3VwQ2hhdE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnQvbWlzY2VsbGFuZW91cy9Hcm91cENoYXRNb2RhbFwiO1xyXG5cclxuY29uc3QgTXlDaGF0cyA9ICh7IEF1dGhDb250ZXh0LCBmZXRjaEFnYWluLCBzZXRGZXRjaEFnYWluIH0pID0+IHtcclxuICAvLyBjb25zdCBbc2VsZWN0ZWRDaGF0LCBzZXRTZWxlY3RlZENoYXRdID0gdXNlU3RhdGUoXHJcbiAgLy8gICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRDaGF0XCIpKVxyXG4gIC8vICk7XHJcblxyXG4gIGNvbnN0IHsgc2VsZWN0ZWRDaGF0LCBzZXRTZWxlY3RlZENoYXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICBjb25zdCB7IGNoYXRzLCBzZXRDaGF0cyB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XHJcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIGNvbnN0IFtsb2dnZWRVc2VyLCBzZXRMb2dnZWRVc2VyXSA9IHVzZVN0YXRlKHVzZXIpO1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDaGF0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwiand0LXRva2VuXCI6IHRva2VuIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldENoYXRzKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgYWxsIGNoYXRzXCIsIGRhdGEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXRzXCIsIGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB0b2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3IgT2NjdXJlZCFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGYWlsZWQgdG8gTG9hZCB0aGUgY2hhdHNcIixcclxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSkpO1xyXG4gICAgZmV0Y2hDaGF0cygpO1xyXG4gIH0sIFtmZXRjaEFnYWluXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGQ9e3sgYmFzZTogc2VsZWN0ZWRDaGF0ID8gXCJub25lXCIgOiBcImZsZXhcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0zIGJnLXdoaXRlXCJcclxuICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiMzElXCIgfX1cclxuICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxyXG4gICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBwYj17M31cclxuICAgICAgICBweD17M31cclxuICAgICAgICBmb250U2l6ZT17eyBiYXNlOiBcIjI4cHhcIiwgbWQ6IFwiMzBweFwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZsZXhcIlxyXG4gICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIE15IENoYXRzXHJcbiAgICAgICAgPEdyb3VwQ2hhdE1vZGFsIEF1dGhDb250ZXh0PXtBdXRoQ29udGV4dH0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAgcmlnaHRJY29uPXs8QWRkSWNvbiAvPn1cclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIxN3B4XCIsIG1kOiBcIjEwcHhcIiwgbGc6IFwiMTdweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5ldyBHcm91cCBDaGF0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwQ2hhdE1vZGFsPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMyBiZy1bI2Y4ZjhmOF0gdy1bMTAwJV0gaC1bMTAwJV0gcm91bmRlZC1sZyBvdmVyZmxvdy15LWhpZGRlblwiPlxyXG4gICAgICAgIHtjaGF0cyA/IChcclxuICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAge2NoYXRzLm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTZWxlY3RlZENoYXQoY2hhdCk7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCl9fVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBiZz17c2VsZWN0ZWRDaGF0ID09PSBjaGF0ID8gXCIjMzhCMkFDXCIgOiBcIiNFOEU4RThcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZENoYXQgPT09IGNoYXQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9XHJcbiAgICAgICAgICAgICAgICBweD17M31cclxuICAgICAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtjaGF0Ll9pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgeyFjaGF0LmlzR3JvdXBDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBnZXRTZW5kZXIobG9nZ2VkVXNlciwgY2hhdC51c2VycylcclxuICAgICAgICAgICAgICAgICAgICA6IGNoYXQuY2hhdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENoYXRMb2FkaW5nIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDaGF0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVG9hc3QiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHQiLCJBZGRJY29uIiwiU3RhY2siLCJIU3RhY2siLCJWU3RhY2siLCJnZXRTZW5kZXIiLCJDaGF0cyIsIkdyb3VwQ2hhdE1vZGFsIiwiTXlDaGF0cyIsIkF1dGhDb250ZXh0IiwiZmV0Y2hBZ2FpbiIsInNldEZldGNoQWdhaW4iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJjaGF0cyIsInNldENoYXRzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImxvZ2dlZFVzZXIiLCJzZXRMb2dnZWRVc2VyIiwidG9hc3QiLCJmZXRjaENoYXRzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJwb3NpdGlvbiIsImQiLCJiYXNlIiwibWQiLCJjbGFzc05hbWUiLCJ3IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJwYiIsInB4IiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJyaWdodEljb24iLCJsZyIsIm1hcCIsImNoYXQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiYmciLCJjb2xvciIsInB5IiwiaXNHcm91cENoYXQiLCJ1c2VycyIsImNoYXROYW1lIiwiX2lkIiwiQ2hhdExvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/MyChats.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ChatLogics */ \"./config/ChatLogics.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _component_miscellaneous_GroupChatModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/miscellaneous/GroupChatModal */ \"./component/miscellaneous/GroupChatModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MyChats = (param)=>{\n    let { AuthContext , fetchAgain , setFetchAgain  } = param;\n    _s();\n    // const [selectedChat, setSelectedChat] = useState(\n    //   JSON.parse(localStorage.getItem(\"selectedChat\"))\n    // );\n    const { selectedChat , setSelectedChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const { chats , setChats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const user = JSON.parse(localStorage.getItem(\"userInfo\"));\n    const token = localStorage.getItem(\"token\");\n    const [loggedUser, setLoggedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const fetchChats = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:5000/chats\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"jwt-token\": token\n                }\n            });\n            const data = await res.json();\n            setChats(data);\n            console.log(\"Fetched all chats\", data);\n            localStorage.setItem(\"chats\", data);\n        } catch (err) {\n            console.error(err.message);\n            toast({\n                title: \"Error Occured!\",\n                description: \"Failed to Load the chats\",\n                status: \"error\",\n                duration: 5000,\n                isClosable: true,\n                position: \"bottom-left\"\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoggedUser(JSON.parse(localStorage.getItem(\"userInfo\")));\n        fetchChats();\n    }, [\n        fetchAgain\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        d: {\n            base: selectedChat ? \"none\" : \"flex\",\n            md: \"flex\"\n        },\n        className: \"flex flex-col p-3 bg-white\",\n        w: {\n            base: \"100%\",\n            md: \"31%\"\n        },\n        borderRadius: \"lg\",\n        borderWidth: \"1px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                pb: 3,\n                px: 3,\n                fontSize: {\n                    base: \"28px\",\n                    md: \"30px\"\n                },\n                className: \"font-sans flex\",\n                d: \"flex\",\n                w: \"100%\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    \"My Chats\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_miscellaneous_GroupChatModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        AuthContext: AuthContext,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            d: \"flex\",\n                            rightIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.AddIcon, {}, void 0, false, void 0, void 0),\n                            fontSize: {\n                                base: \"17px\",\n                                md: \"10px\",\n                                lg: \"17px\"\n                            },\n                            children: \"New Group Chat\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"flex flex-col p-3 bg-[#f8f8f8] w-[100%] h-[100%] rounded-lg overflow-y-hidden\",\n                children: chats ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    children: chats.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            onClick: ()=>{\n                                setSelectedChat(chat);\n                                localStorage.setItem(JSON.stringify(chat));\n                            },\n                            cursor: \"pointer\",\n                            bg: selectedChat === chat ? \"#38B2AC\" : \"#E8E8E8\",\n                            color: selectedChat === chat ? \"white\" : \"black\",\n                            px: 3,\n                            py: 2,\n                            borderRadius: \"lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: !chat.isGroupChat ? (0,_config_ChatLogics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(loggedUser, chat.users) : chat.chatName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, undefined)\n                        }, chat._id, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatLoading, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\MyChats.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyChats, \"oKZqRA2mf80bsylmU4uX+pRh+Hk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = MyChats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyChats);\nvar _c;\n$RefreshReg$(_c, \"MyChats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs0QkFDSmhCLGNBQWE7c0NBR2IsNEVBQUNqRCxrREFBSUE7MENBQ0YsQ0FBQzJELEtBQUtPLFdBQVcsR0FDZDdELDhEQUFTQSxDQUFDaUIsWUFBWXFDLEtBQUtRLEtBQUssSUFDaENSLEtBQUtTLFFBQVE7Ozs7OzsyQkFMZFQsS0FBS1UsR0FBRzs7Ozs7Ozs7OzhDQVduQiw4REFBQ0M7Ozs7NkJBQ0Y7Ozs7Ozs7Ozs7OztBQUlUO0dBbkdNOUQ7O1FBV1VaLHNEQUFRQTs7O0tBWGxCWTtBQXFHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTXlDaGF0cy5qcz9lNWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEJ1dHRvbkdyb3VwLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWRkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IFN0YWNrLCBIU3RhY2ssIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBnZXRTZW5kZXIgZnJvbSBcIi4uL2NvbmZpZy9DaGF0TG9naWNzXCI7XHJcbmltcG9ydCB7IENoYXRzIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCBHcm91cENoYXRNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50L21pc2NlbGxhbmVvdXMvR3JvdXBDaGF0TW9kYWxcIjtcclxuXHJcbmNvbnN0IE15Q2hhdHMgPSAoeyBBdXRoQ29udGV4dCwgZmV0Y2hBZ2Fpbiwgc2V0RmV0Y2hBZ2FpbiB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW3NlbGVjdGVkQ2hhdCwgc2V0U2VsZWN0ZWRDaGF0XSA9IHVzZVN0YXRlKFxyXG4gIC8vICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkQ2hhdFwiKSlcclxuICAvLyApO1xyXG5cclxuICBjb25zdCB7IHNlbGVjdGVkQ2hhdCwgc2V0U2VsZWN0ZWRDaGF0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgeyBjaGF0cywgc2V0Q2hhdHMgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIikpO1xyXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBjb25zdCBbbG9nZ2VkVXNlciwgc2V0TG9nZ2VkVXNlcl0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcblxyXG4gIGNvbnN0IGZldGNoQ2hhdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRzYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCBcImp3dC10b2tlblwiOiB0b2tlbiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRDaGF0cyhkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIGFsbCBjaGF0c1wiLCBkYXRhKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGF0c1wiLCBkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgdG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yIE9jY3VyZWQhXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmFpbGVkIHRvIExvYWQgdGhlIGNoYXRzXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkVXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIikpKTtcclxuICAgIGZldGNoQ2hhdHMoKTtcclxuICB9LCBbZmV0Y2hBZ2Fpbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkPXt7IGJhc2U6IHNlbGVjdGVkQ2hhdCA/IFwibm9uZVwiIDogXCJmbGV4XCIsIG1kOiBcImZsZXhcIiB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMyBiZy13aGl0ZVwiXHJcbiAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjMxJVwiIH19XHJcbiAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcclxuICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgcGI9ezN9XHJcbiAgICAgICAgcHg9ezN9XHJcbiAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIyOHB4XCIsIG1kOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2FucyBmbGV4XCJcclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICBNeSBDaGF0c1xyXG4gICAgICAgIDxHcm91cENoYXRNb2RhbCBBdXRoQ29udGV4dD17QXV0aENvbnRleHR9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgICAgIHJpZ2h0SWNvbj17PEFkZEljb24gLz59XHJcbiAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMTdweFwiLCBtZDogXCIxMHB4XCIsIGxnOiBcIjE3cHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXcgR3JvdXAgQ2hhdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cENoYXRNb2RhbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgYmctWyNmOGY4ZjhdIHctWzEwMCVdIGgtWzEwMCVdIHJvdW5kZWQtbGcgb3ZlcmZsb3cteS1oaWRkZW5cIj5cclxuICAgICAgICB7Y2hhdHMgPyAoXHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRDaGF0KGNoYXQpOyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShjaGF0KSl9fVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBiZz17c2VsZWN0ZWRDaGF0ID09PSBjaGF0ID8gXCIjMzhCMkFDXCIgOiBcIiNFOEU4RThcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZENoYXQgPT09IGNoYXQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9XHJcbiAgICAgICAgICAgICAgICBweD17M31cclxuICAgICAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtjaGF0Ll9pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgeyFjaGF0LmlzR3JvdXBDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBnZXRTZW5kZXIobG9nZ2VkVXNlciwgY2hhdC51c2VycylcclxuICAgICAgICAgICAgICAgICAgICA6IGNoYXQuY2hhdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENoYXRMb2FkaW5nIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDaGF0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVG9hc3QiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHQiLCJBZGRJY29uIiwiU3RhY2siLCJIU3RhY2siLCJWU3RhY2siLCJnZXRTZW5kZXIiLCJDaGF0cyIsIkdyb3VwQ2hhdE1vZGFsIiwiTXlDaGF0cyIsIkF1dGhDb250ZXh0IiwiZmV0Y2hBZ2FpbiIsInNldEZldGNoQWdhaW4iLCJzZWxlY3RlZENoYXQiLCJzZXRTZWxlY3RlZENoYXQiLCJjaGF0cyIsInNldENoYXRzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImxvZ2dlZFVzZXIiLCJzZXRMb2dnZWRVc2VyIiwidG9hc3QiLCJmZXRjaENoYXRzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJwb3NpdGlvbiIsImQiLCJiYXNlIiwibWQiLCJjbGFzc05hbWUiLCJ3IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJwYiIsInB4IiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJyaWdodEljb24iLCJsZyIsIm1hcCIsImNoYXQiLCJvbkNsaWNrIiwic3RyaW5naWZ5IiwiY3Vyc29yIiwiYmciLCJjb2xvciIsInB5IiwiaXNHcm91cENoYXQiLCJ1c2VycyIsImNoYXROYW1lIiwiX2lkIiwiQ2hhdExvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/MyChats.js\n"));

/***/ })

});
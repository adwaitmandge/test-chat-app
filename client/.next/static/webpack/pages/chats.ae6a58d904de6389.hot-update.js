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

/***/ "./component/miscellaneous/GroupChatModal.js":
/*!***************************************************!*\
  !*** ./component/miscellaneous/GroupChatModal.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst GroupChatModal = (param)=>{\n    let { children , AuthContext  } = param;\n    _s();\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();\n    const [groupChatName, setGroupChatName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedUsers, setSelectedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    const { chats , setChats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const user = localStorage.getItem(\"userInfo\");\n    const handleSearch = async (query)=>{\n        setSearch(query);\n        if (!query) {\n            return;\n        }\n        try {\n            const token = localStorage.getItem(\"token\");\n            setLoading(true);\n            console.log(\"About to fetch some users\");\n            const res = await fetch(\"http://localhost:5000/user?search=\".concat(query), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"jwt-token\": token\n                }\n            });\n            const data = await res.json();\n            console.log(data);\n            setLoading(false);\n            setSearchResult(data);\n        } catch (error) {\n            toast({\n                title: \"Error Occured!\",\n                description: \"Failed to Load the Search Results\",\n                status: \"error\",\n                duration: 5000,\n                isClosable: true,\n                position: \"bottom-left\"\n            });\n        }\n    };\n    const handleSubmit = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onOpen,\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                className: \"text-[35px] font-sans flex justify-center\",\n                                children: \"Create Group Chat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                placeholder: \"Chat Name\",\n                                                className: \"mb-3\",\n                                                onChange: (e)=>setGroupChatName(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                placeholder: \"Add Users\",\n                                                className: \"mb-1\",\n                                                onChange: (e)=>handleSearch(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Loading\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 36\n                                    }, undefined) : searchResult()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    colorScheme: \"blue\",\n                                    onClick: handleSubmit,\n                                    children: \"Create Chat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GroupChatModal, \"AZEd5hsCH/ulewsfWq1ZwYGoKsU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast\n    ];\n});\n_c = GroupChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupChatModal);\nvar _c;\n$RefreshReg$(_c, \"GroupChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbWlzY2VsbGFuZW91cy9Hcm91cENoYXRNb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBb0Q7QUFTMUI7QUFDZTtBQUNHO0FBQ0s7QUFDaUI7QUFNeEM7QUFDQTtBQUUxQixNQUFNc0IsaUJBQWlCLFNBQStCO1FBQTlCLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFOztJQUMvQyxNQUFNLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR2YsK0RBQWFBO0lBQ2pELE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHNUIsK0NBQVFBO0lBQ2xELE1BQU0sQ0FBQzZCLGVBQWVDLGlCQUFpQixHQUFHOUIsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUMrQixRQUFRQyxVQUFVLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNpQyxjQUFjQyxnQkFBZ0IsR0FBR2xDLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDbUMsU0FBU0MsV0FBVyxHQUFHcEMsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNcUMsUUFBUTNCLDBEQUFRQTtJQUV0QixNQUFNLEVBQUU0QixNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHdEMsaURBQVVBLENBQUNzQjtJQUN2QyxNQUFNaUIsT0FBT0MsYUFBYUMsT0FBTyxDQUFDO0lBRWxDLE1BQU1DLGVBQWUsT0FBT0MsUUFBVTtRQUNwQ1osVUFBVVk7UUFDVixJQUFJLENBQUNBLE9BQU87WUFDVjtRQUNGLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTUMsUUFBUUosYUFBYUMsT0FBTyxDQUFDO1lBQ25DTixXQUFXLElBQUk7WUFFZlUsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHFDQUEyQyxPQUFOTCxRQUFTO2dCQUNwRU0sUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCLGFBQWFOO2dCQUNmO1lBQ0Y7WUFFQSxNQUFNTyxPQUFPLE1BQU1KLElBQUlLLElBQUk7WUFDM0JQLFFBQVFDLEdBQUcsQ0FBQ0s7WUFDWmhCLFdBQVcsS0FBSztZQUNoQkYsZ0JBQWdCa0I7UUFDbEIsRUFBRSxPQUFPRSxPQUFPO1lBQ2RqQixNQUFNO2dCQUNKa0IsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsWUFBWSxJQUFJO2dCQUNoQkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLGVBQWUsSUFBTSxDQUFDO0lBRTVCLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUtDLFNBQVN0QzswQkFBU0g7Ozs7OzswQkFFeEIsOERBQUNwQixtREFBS0E7Z0JBQUNzQixRQUFRQTtnQkFBUUUsU0FBU0E7O2tDQUM5Qiw4REFBQ3ZCLDBEQUFZQTs7Ozs7a0NBQ2IsOERBQUNDLDBEQUFZQTs7MENBQ1gsOERBQUNDLHlEQUFXQTtnQ0FBQzJELFdBQVU7MENBQTRDOzs7Ozs7MENBR25FLDhEQUFDeEQsOERBQWdCQTs7Ozs7MENBQ2pCLDhEQUFDRCx1REFBU0E7Z0NBQUN5RCxXQUFVOztrREFDbkIsOERBQUNoRCx5REFBV0E7OzBEQUNWLDhEQUFDUCxtREFBS0E7Z0RBQ0p3RCxhQUFZO2dEQUNaRCxXQUFVO2dEQUNWRSxVQUFVLENBQUNDLElBQU12QyxpQkFBaUJ1QyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OzswREFFbEQsOERBQUM1RCxtREFBS0E7Z0RBQ0p3RCxhQUFZO2dEQUNaRCxXQUFVO2dEQUNWRSxVQUFVLENBQUNDLElBQU14QixhQUFhd0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7b0NBRWpDbEMsd0JBQVEsOERBQUNtQztrREFBSTs7Ozs7b0RBQ3hCckMsY0FDSDs7Ozs7OzswQ0FHSCw4REFBQzNCLHlEQUFXQTswQ0FDViw0RUFBQ08sb0RBQU1BO29DQUFDMEQsYUFBWTtvQ0FBT1IsU0FBU0Y7OENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUQ7R0F0Rk14Qzs7UUFDZ0NWLDJEQUFhQTtRQU1uQ0Qsc0RBQVFBOzs7S0FQbEJXO0FBd0ZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9taXNjZWxsYW5lb3VzL0dyb3VwQ2hhdE1vZGFsLmpzPzFiMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxPdmVybGF5LFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbEJvZHksXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBCdXR0b25Hcm91cCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgR3JvdXBDaGF0TW9kYWwgPSAoeyBjaGlsZHJlbiwgQXV0aENvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbZ3JvdXBDaGF0TmFtZSwgc2V0R3JvdXBDaGF0TmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFVzZXJzLCBzZXRTZWxlY3RlZFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdCwgc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICBjb25zdCB7IGNoYXRzLCBzZXRDaGF0cyB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKHF1ZXJ5KTtcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgdG8gZmV0Y2ggc29tZSB1c2Vyc1wiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyP3NlYXJjaD0ke3F1ZXJ5fWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcImp3dC10b2tlblwiOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFNlYXJjaFJlc3VsdChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0KHtcclxuICAgICAgICB0aXRsZTogXCJFcnJvciBPY2N1cmVkIVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhaWxlZCB0byBMb2FkIHRoZSBTZWFyY2ggUmVzdWx0c1wiLFxyXG4gICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwLFxyXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtvbk9wZW59PntjaGlsZHJlbn08L3NwYW4+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgPE1vZGFsSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtWzM1cHhdIGZvbnQtc2FucyBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBHcm91cCBDaGF0XHJcbiAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGF0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdyb3VwQ2hhdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPntsb2FkaW5nPzxkaXY+TG9hZGluZzwvZGl2PjooXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHQoKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIENoYXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwQ2hhdE1vZGFsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiSW5wdXQiLCJ1c2VUb2FzdCIsInVzZURpc2Nsb3N1cmUiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHQiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJGb3JtSGVscGVyVGV4dCIsImF4aW9zIiwiR3JvdXBDaGF0TW9kYWwiLCJjaGlsZHJlbiIsIkF1dGhDb250ZXh0IiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImdyb3VwQ2hhdE5hbWUiLCJzZXRHcm91cENoYXROYW1lIiwic2VsZWN0ZWRVc2VycyIsInNldFNlbGVjdGVkVXNlcnMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJzZXRTZWFyY2hSZXN1bHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvYXN0IiwiY2hhdHMiLCJzZXRDaGF0cyIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlU2VhcmNoIiwicXVlcnkiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImVycm9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInBvc2l0aW9uIiwiaGFuZGxlU3VibWl0Iiwic3BhbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/miscellaneous/GroupChatModal.js\n"));

/***/ })

});
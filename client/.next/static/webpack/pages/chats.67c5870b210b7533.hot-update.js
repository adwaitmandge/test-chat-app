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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _UserAvatar_UserListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserAvatar/UserListItem */ \"./component/UserAvatar/UserListItem.js\");\n/* harmony import */ var _UserAvatar_UserBadgeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserAvatar/UserBadgeItem */ \"./component/UserAvatar/UserBadgeItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst GroupChatModal = (param)=>{\n    let { children , AuthContext  } = param;\n    _s();\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)();\n    const [groupChatName, setGroupChatName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedUsers, setSelectedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const { chats , setChats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    const user = localStorage.getItem(\"userInfo\");\n    const handleSearch = async (query)=>{\n        setSearch(query);\n        if (!query) {\n            return;\n        }\n        try {\n            const token = localStorage.getItem(\"token\");\n            setLoading(true);\n            console.log(\"About to fetch some users\");\n            const res = await fetch(\"http://localhost:5000/user?search=\".concat(query), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"jwt-token\": token\n                }\n            });\n            const data = await res.json();\n            console.log(data);\n            setLoading(false);\n            setSearchResult(data);\n        } catch (error) {\n            toast({\n                title: \"Error Occured!\",\n                description: \"Failed to Load the Search Results\",\n                status: \"error\",\n                duration: 5000,\n                isClosable: true,\n                position: \"bottom-left\"\n            });\n        }\n    };\n    const handleSubmit = ()=>{};\n    const handleDelete = ()=>{};\n    const handleGroup = (userToAdd)=>{\n        if (selectedUsers.includes(userToAdd)) {\n            toast({\n                title: \"User already added\",\n                status: \"warning\",\n                duration: 5000,\n                isClosable: true,\n                position: \"top\"\n            });\n            return;\n        }\n        setSelectedUsers([\n            ...selectedUsers,\n            userToAdd\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onOpen,\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {\n                                className: \"text-[35px] font-sans flex justify-center\",\n                                children: \"Create Group Chat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {\n                                className: \"flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                placeholder: \"Chat Name\",\n                                                className: \"mb-3\",\n                                                onChange: (e)=>setGroupChatName(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                placeholder: \"Add Users\",\n                                                className: \"mb-1\",\n                                                onChange: (e)=>handleSearch(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    selectedUsers.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar_UserBadgeItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            user: u,\n                                            handleFunction: ()=>handleDelete(u)\n                                        }, u._id, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    loading ? // <ChatLoading />\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Loading...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, undefined) : searchResult === null || searchResult === void 0 ? void 0 : searchResult.slice(0, 4).map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar_UserListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            user: user,\n                                            handleFunction: ()=>handleGroup(user)\n                                        }, user._id, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                            lineNumber: 128,\n                                            columnNumber: 19\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    colorScheme: \"blue\",\n                                    onClick: handleSubmit,\n                                    children: \"Create Chat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\component\\\\miscellaneous\\\\GroupChatModal.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GroupChatModal, \"AZEd5hsCH/ulewsfWq1ZwYGoKsU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = GroupChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupChatModal);\nvar _c;\n$RefreshReg$(_c, \"GroupChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbWlzY2VsbGFuZW91cy9Hcm91cENoYXRNb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFvRDtBQVMxQjtBQUNlO0FBQ0c7QUFDSztBQUNpQjtBQU14QztBQUNBO0FBQzRCO0FBQ0U7QUFFeEQsTUFBTXdCLGlCQUFpQixTQUErQjtRQUE5QixFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRTs7SUFDL0MsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdqQiwrREFBYUE7SUFDakQsTUFBTSxDQUFDa0IsZUFBZUMsaUJBQWlCLEdBQUc5QiwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDK0IsZUFBZUMsaUJBQWlCLEdBQUdoQywrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ2lDLFFBQVFDLFVBQVUsR0FBR2xDLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ21DLGNBQWNDLGdCQUFnQixHQUFHcEMsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNxQyxTQUFTQyxXQUFXLEdBQUd0QywrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU11QyxRQUFRN0IsMERBQVFBO0lBRXRCLE1BQU0sRUFBRThCLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUd4QyxpREFBVUEsQ0FBQ3dCO0lBQ3ZDLE1BQU1pQixPQUFPQyxhQUFhQyxPQUFPLENBQUM7SUFFbEMsTUFBTUMsZUFBZSxPQUFPQyxRQUFVO1FBQ3BDWixVQUFVWTtRQUNWLElBQUksQ0FBQ0EsT0FBTztZQUNWO1FBQ0YsQ0FBQztRQUVELElBQUk7WUFDRixNQUFNQyxRQUFRSixhQUFhQyxPQUFPLENBQUM7WUFDbkNOLFdBQVcsSUFBSTtZQUVmVSxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNQyxNQUFNLE1BQU1DLE1BQU0scUNBQTJDLE9BQU5MLFFBQVM7Z0JBQ3BFTSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtvQkFDaEIsYUFBYU47Z0JBQ2Y7WUFDRjtZQUVBLE1BQU1PLE9BQU8sTUFBTUosSUFBSUssSUFBSTtZQUMzQlAsUUFBUUMsR0FBRyxDQUFDSztZQUNaaEIsV0FBVyxLQUFLO1lBQ2hCRixnQkFBZ0JrQjtRQUNsQixFQUFFLE9BQU9FLE9BQU87WUFDZGpCLE1BQU07Z0JBQ0prQixPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxRQUFRO2dCQUNSQyxVQUFVO2dCQUNWQyxZQUFZLElBQUk7Z0JBQ2hCQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBRUEsTUFBTUMsZUFBZSxJQUFNLENBQUM7SUFDNUIsTUFBTUMsZUFBZSxJQUFNLENBQUM7SUFFNUIsTUFBTUMsY0FBYyxDQUFDQyxZQUFjO1FBQ2pDLElBQUluQyxjQUFjb0MsUUFBUSxDQUFDRCxZQUFZO1lBQ3JDM0IsTUFBTTtnQkFDSmtCLE9BQU87Z0JBQ1BFLFFBQVE7Z0JBQ1JDLFVBQVU7Z0JBQ1ZDLFlBQVksSUFBSTtnQkFDaEJDLFVBQVU7WUFDWjtZQUNBO1FBQ0YsQ0FBQztRQUVEOUIsaUJBQWlCO2VBQUlEO1lBQWVtQztTQUFVO0lBQ2hEO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDRTtnQkFBS0MsU0FBUzFDOzBCQUFTSDs7Ozs7OzBCQUV4Qiw4REFBQ3RCLG1EQUFLQTtnQkFBQ3dCLFFBQVFBO2dCQUFRRSxTQUFTQTs7a0NBQzlCLDhEQUFDekIsMERBQVlBOzs7OztrQ0FDYiw4REFBQ0MsMERBQVlBOzswQ0FDWCw4REFBQ0MseURBQVdBO2dDQUFDaUUsV0FBVTswQ0FBNEM7Ozs7OzswQ0FHbkUsOERBQUM5RCw4REFBZ0JBOzs7OzswQ0FDakIsOERBQUNELHVEQUFTQTtnQ0FBQytELFdBQVU7O2tEQUNuQiw4REFBQ3RELHlEQUFXQTs7MERBQ1YsOERBQUNQLG1EQUFLQTtnREFDSjhELGFBQVk7Z0RBQ1pELFdBQVU7Z0RBQ1ZFLFVBQVUsQ0FBQ0MsSUFBTTNDLGlCQUFpQjJDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBEQUVsRCw4REFBQ2xFLG1EQUFLQTtnREFDSjhELGFBQVk7Z0RBQ1pELFdBQVU7Z0RBQ1ZFLFVBQVUsQ0FBQ0MsSUFBTTVCLGFBQWE0QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OztvQ0FHL0M1QyxjQUFjNkMsR0FBRyxDQUFDLENBQUNDLGtCQUNsQiw4REFBQ3ZELGlFQUFhQTs0Q0FFWm9CLE1BQU1tQzs0Q0FDTkMsZ0JBQWdCLElBQU1kLGFBQWFhOzJDQUY5QkEsRUFBRUUsR0FBRzs7Ozs7b0NBS2IxQyxVQUNDLGtCQUFrQjtrREFDbEIsOERBQUMyQztrREFBSTs7Ozs7b0RBRUw3Qyx5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQ0k4QyxLQUFLLENBQUMsR0FBRyxHQUNWTCxHQUFHLENBQUMsQ0FBQ2xDLHFCQUNKLDhEQUFDckIsZ0VBQVlBOzRDQUVYcUIsTUFBTUE7NENBQ05vQyxnQkFBZ0IsSUFBTWIsWUFBWXZCOzJDQUY3QkEsS0FBS3FDLEdBQUc7Ozs7c0RBSWY7Ozs7Ozs7MENBSVIsOERBQUN6RSx5REFBV0E7MENBQ1YsNEVBQUNPLG9EQUFNQTtvQ0FBQ3FFLGFBQVk7b0NBQU9iLFNBQVNOOzhDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlEO0dBekhNeEM7O1FBQ2dDWiwyREFBYUE7UUFNbkNELHNEQUFRQTs7O0tBUGxCYTtBQTJITiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbWlzY2VsbGFuZW91cy9Hcm91cENoYXRNb2RhbC5qcz8xYjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1MYWJlbCxcclxuICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFVzZXJMaXN0SXRlbSBmcm9tIFwiLi4vVXNlckF2YXRhci9Vc2VyTGlzdEl0ZW1cIjtcclxuaW1wb3J0IFVzZXJCYWRnZUl0ZW0gZnJvbSBcIi4uL1VzZXJBdmF0YXIvVXNlckJhZGdlSXRlbVwiO1xyXG5cclxuY29uc3QgR3JvdXBDaGF0TW9kYWwgPSAoeyBjaGlsZHJlbiwgQXV0aENvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbZ3JvdXBDaGF0TmFtZSwgc2V0R3JvdXBDaGF0TmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFVzZXJzLCBzZXRTZWxlY3RlZFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaFJlc3VsdCwgc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICBjb25zdCB7IGNoYXRzLCBzZXRDaGF0cyB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKHF1ZXJ5KTtcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgdG8gZmV0Y2ggc29tZSB1c2Vyc1wiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyP3NlYXJjaD0ke3F1ZXJ5fWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcImp3dC10b2tlblwiOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFNlYXJjaFJlc3VsdChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0KHtcclxuICAgICAgICB0aXRsZTogXCJFcnJvciBPY2N1cmVkIVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhaWxlZCB0byBMb2FkIHRoZSBTZWFyY2ggUmVzdWx0c1wiLFxyXG4gICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwLFxyXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge307XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdyb3VwID0gKHVzZXJUb0FkZCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkVXNlcnMuaW5jbHVkZXModXNlclRvQWRkKSkge1xyXG4gICAgICB0b2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IFwiVXNlciBhbHJlYWR5IGFkZGVkXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIndhcm5pbmdcIixcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkVXNlcnMoWy4uLnNlbGVjdGVkVXNlcnMsIHVzZXJUb0FkZF0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtvbk9wZW59PntjaGlsZHJlbn08L3NwYW4+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgPE1vZGFsSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtWzM1cHhdIGZvbnQtc2FucyBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBHcm91cCBDaGF0XHJcbiAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGF0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdyb3VwQ2hhdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRVc2Vycy5tYXAoKHUpID0+IChcclxuICAgICAgICAgICAgICA8VXNlckJhZGdlSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXt1Ll9pZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3V9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGdW5jdGlvbj17KCkgPT4gaGFuZGxlRGVsZXRlKHUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAvLyA8Q2hhdExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRcclxuICAgICAgICAgICAgICAgID8uc2xpY2UoMCwgNClcclxuICAgICAgICAgICAgICAgIC5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVGdW5jdGlvbj17KCkgPT4gaGFuZGxlR3JvdXAodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIENoYXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwQ2hhdE1vZGFsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiSW5wdXQiLCJ1c2VUb2FzdCIsInVzZURpc2Nsb3N1cmUiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlRleHQiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJGb3JtSGVscGVyVGV4dCIsImF4aW9zIiwiVXNlckxpc3RJdGVtIiwiVXNlckJhZGdlSXRlbSIsIkdyb3VwQ2hhdE1vZGFsIiwiY2hpbGRyZW4iLCJBdXRoQ29udGV4dCIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJncm91cENoYXROYW1lIiwic2V0R3JvdXBDaGF0TmFtZSIsInNlbGVjdGVkVXNlcnMiLCJzZXRTZWxlY3RlZFVzZXJzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoUmVzdWx0Iiwic2V0U2VhcmNoUmVzdWx0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2FzdCIsImNoYXRzIiwic2V0Q2hhdHMiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJlcnJvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJwb3NpdGlvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUdyb3VwIiwidXNlclRvQWRkIiwiaW5jbHVkZXMiLCJzcGFuIiwib25DbGljayIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ1IiwiaGFuZGxlRnVuY3Rpb24iLCJfaWQiLCJkaXYiLCJzbGljZSIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/miscellaneous/GroupChatModal.js\n"));

/***/ })

});
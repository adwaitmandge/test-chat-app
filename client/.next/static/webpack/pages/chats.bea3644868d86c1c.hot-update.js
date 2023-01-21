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

/***/ "./pages/chats/index.js":
/*!******************************!*\
  !*** ./pages/chats/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _component_miscellaneous_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/miscellaneous/SideDrawer */ \"./component/miscellaneous/SideDrawer.js\");\n/* harmony import */ var _component_ChatBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/ChatBox */ \"./component/ChatBox.js\");\n/* harmony import */ var _component_MyChats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/MyChats */ \"./component/MyChats.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst Index = (param)=>{\n    let { AuthContext  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const checkAuth = async ()=>{\n        console.log(\"Checking the presence of userInfo\");\n        const userInfo = JSON.parse(localStorage.getItem(\"userInfo\"));\n        if (!userInfo) {\n            router.push(\"/auth/login\");\n        }\n        setUser(userInfo);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkAuth();\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            role: \"status\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    className: \"mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600\",\n                    viewBox: \"0 0 100 101\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                            fill: \"currentFill\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"sr-only\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined);\n    }\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            setUser\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[100%] bg-blue-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_miscellaneous_SideDrawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    user: user,\n                    UserContext: UserContext,\n                    AuthContext: AuthContext\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    className: \"flex justify-between w-[100%] h-[91.5vh] p-[10px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MyChats__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            UserContext: UserContext\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ChatBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            UserContext: UserContext\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\OneDrive\\\\Desktop\\\\Kairos\\\\client\\\\pages\\\\chats\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"C1U3W1/GLXpNOs2elmI/sE+Rt18=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUErRDtBQUN2QjtBQUNPO0FBQ21CO0FBQ3BCO0FBQ0E7QUFFOUMsTUFBTVUsNEJBQWNWLDBEQUFtQjtBQUV2QyxNQUFNWSxRQUFRLFNBQXFCO1FBQXBCLEVBQUVDLFlBQVcsRUFBRTs7SUFDNUIsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJDLE1BQU1jLFlBQVksVUFBWTtRQUM1QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUMsV0FBV0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDakQsSUFBSSxDQUFDSixVQUFVO1lBQ2JOLE9BQU9XLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRFQsUUFBUUk7SUFDVjtJQUVBbEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZTtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0YsTUFBTTtRQUNULHFCQUNFLDhEQUFDVztZQUFJQyxNQUFLOzs4QkFDUiw4REFBQ0M7b0JBQ0NDLGVBQVk7b0JBQ1pDLFdBQVU7b0JBQ1ZDLFNBQVE7b0JBQ1JDLE1BQUs7b0JBQ0xDLE9BQU07O3NDQUVOLDhEQUFDQzs0QkFDQ0MsR0FBRTs0QkFDRkgsTUFBSzs7Ozs7O3NDQUVQLDhEQUFDRTs0QkFDQ0MsR0FBRTs0QkFDRkgsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUdULDhEQUFDSTtvQkFBS04sV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7O0lBR2hDLENBQUM7SUFDRFosUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNFLDhEQUFDTCxZQUFZMkIsUUFBUTtRQUFDQyxPQUFPO1lBQUV2QjtZQUFNQztRQUFRO2tCQUMzQyw0RUFBQ1U7WUFBSUksV0FBVTs7OEJBQ2IsOERBQUN2QiwyRUFBVUE7b0JBQUNRLE1BQU1BO29CQUFNTCxhQUFhQTtvQkFBYUcsYUFBYUE7Ozs7Ozs4QkFDL0QsOERBQUNSLGlEQUFHQTtvQkFBQ3lCLFdBQVU7O3NDQUNiLDhEQUFDckIsMERBQU9BOzRCQUFDQyxhQUFhQTs7Ozs7O3NDQUN0Qiw4REFBQ0YsMERBQU9BOzRCQUFDRSxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0FwRE1FOztRQUNXUixrREFBU0E7OztLQURwQlE7QUFzRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHMvaW5kZXguanM/Y2QyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50L21pc2NlbGxhbmVvdXMvU2lkZURyYXdlclwiO1xyXG5pbXBvcnQgQ2hhdEJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0NoYXRCb3hcIjtcclxuaW1wb3J0IE15Q2hhdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9NeUNoYXRzXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgQXV0aENvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHRoZSBwcmVzZW5jZSBvZiB1c2VySW5mb1wiKTtcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbmZvXCIpKTtcclxuICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcclxuICAgIH1cclxuICAgIHNldFVzZXIodXNlckluZm8pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja0F1dGgoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgdy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC1ibHVlLTYwMFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIlxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMDAgNTAuNTkwOEMxMDAgNzguMjA1MSA3Ny42MTQyIDEwMC41OTEgNTAgMTAwLjU5MUMyMi4zODU4IDEwMC41OTEgMCA3OC4yMDUxIDAgNTAuNTkwOEMwIDIyLjk3NjYgMjIuMzg1OCAwLjU5MDgyIDUwIDAuNTkwODJDNzcuNjE0MiAwLjU5MDgyIDEwMCAyMi45NzY2IDEwMCA1MC41OTA4Wk05LjA4MTQ0IDUwLjU5MDhDOS4wODE0NCA3My4xODk1IDI3LjQwMTMgOTEuNTA5NCA1MCA5MS41MDk0QzcyLjU5ODcgOTEuNTA5NCA5MC45MTg2IDczLjE4OTUgOTAuOTE4NiA1MC41OTA4QzkwLjkxODYgMjcuOTkyMSA3Mi41OTg3IDkuNjcyMjYgNTAgOS42NzIyNkMyNy40MDEzIDkuNjcyMjYgOS4wODE0NCAyNy45OTIxIDkuMDgxNDQgNTAuNTkwOFpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50RmlsbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7IFxyXG4gIH1cclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwJV0gYmctYmx1ZS00MDBcIj5cclxuICAgICAgICA8U2lkZURyYXdlciB1c2VyPXt1c2VyfSBVc2VyQ29udGV4dD17VXNlckNvbnRleHR9IEF1dGhDb250ZXh0PXtBdXRoQ29udGV4dH0gLz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctWzEwMCVdIGgtWzkxLjV2aF0gcC1bMTBweF1cIj5cclxuICAgICAgICAgIDxNeUNoYXRzIFVzZXJDb250ZXh0PXtVc2VyQ29udGV4dH0gLz5cclxuICAgICAgICAgIDxDaGF0Qm94IFVzZXJDb250ZXh0PXtVc2VyQ29udGV4dH0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQm94IiwiQnV0dG9uIiwiU2lkZURyYXdlciIsIkNoYXRCb3giLCJNeUNoYXRzIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiSW5kZXgiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwiY2hlY2tBdXRoIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJkaXYiLCJyb2xlIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJjbGFzc05hbWUiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJzcGFuIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chats/index.js\n"));

/***/ })

});
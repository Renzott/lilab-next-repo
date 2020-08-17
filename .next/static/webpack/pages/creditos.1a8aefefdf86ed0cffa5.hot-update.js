webpackHotUpdate_N_E("pages/creditos",{

/***/ "./services/ApiService.js":
/*!********************************!*\
  !*** ./services/ApiService.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util_https_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/https-base */ "./util/https-base.js");
 // SOLO DE DEMOSTRACION
// Cambiar la URL a la de python flask

var _builder = Object(_util_https_base__WEBPACK_IMPORTED_MODULE_0__["default"])("/", "https://lilab-backend-python.herokuapp.com/api"),
    https = _builder.https;

var getSentinel = function getSentinel(dni) {
  return https.get("/sentinel/" + dni);
};

var getSbs = function getSbs(dni) {
  return https.get("/sbs/" + dni);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getSentinel: getSentinel,
  getSbs: getSbs
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQXBpU2VydmljZS5qcyJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaHR0cHMiLCJnZXRTZW50aW5lbCIsImRuaSIsImdldCIsImdldFNicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7Q0FFSTtBQUNBOztlQUNjQSxnRUFBTyxDQUFDLEdBQUQsRUFBSyxnREFBTCxDO0lBQWpCQyxLLFlBQUFBLEs7O0FBRVIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3pCLFNBQU9GLEtBQUssQ0FBQ0csR0FBTixDQUFVLGVBQWFELEdBQXZCLENBQVA7QUFDSCxDQUZEOztBQUlBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNGLEdBQUQsRUFBUztBQUNwQixTQUFPRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFRRCxHQUFsQixDQUFQO0FBQ0gsQ0FGRDs7QUFJZTtBQUNYRCxhQUFXLEVBQVhBLFdBRFc7QUFFWEcsUUFBTSxFQUFOQTtBQUZXLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlZGl0b3MuMWE4YWVmZWZkZjg2ZWQwY2ZmYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJy4uL3V0aWwvaHR0cHMtYmFzZSdcblxuICAgIC8vIFNPTE8gREUgREVNT1NUUkFDSU9OXG4gICAgLy8gQ2FtYmlhciBsYSBVUkwgYSBsYSBkZSBweXRob24gZmxhc2tcbmNvbnN0IHsgaHR0cHMgfSA9IGJ1aWxkZXIoXCIvXCIsXCJodHRwczovL2xpbGFiLWJhY2tlbmQtcHl0aG9uLmhlcm9rdWFwcC5jb20vYXBpXCIpXG5cbmNvbnN0IGdldFNlbnRpbmVsID0gKGRuaSkgPT4ge1xuICAgIHJldHVybiBodHRwcy5nZXQoXCIvc2VudGluZWwvXCIrZG5pKVxufVxuXG5jb25zdCBnZXRTYnMgPSAoZG5pKSA9PiB7XG4gICAgcmV0dXJuIGh0dHBzLmdldChcIi9zYnMvXCIrZG5pKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0U2VudGluZWwsXG4gICAgZ2V0U2JzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
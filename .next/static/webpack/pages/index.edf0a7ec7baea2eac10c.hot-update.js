webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart/index.js");
/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ItemList */ "./components/ItemList/index.js");
/* harmony import */ var _js_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/constants */ "./js/constants.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(shoppingCart.length == 0 ? "0.00" : shoppingCart.map(function (e) {
    return e.price * e.ud;
  }).reduce(function (e, acc) {
    return e + acc;
  }).toFixed(2)),
      totalPrice = _useState2[0],
      setTotalPrice = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var totalItems = document.getElementById("cart-count");
    var priceCart = document.getElementById("totalPrice");
    document.title = "Amazon.fake";
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
    priceCart.innerHTML = "Total a pagar: ".concat(totalPrice, "\u20AC");
  });

  var setUnitItem = function setUnitItem(id, ud) {
    shoppingCart.filter(function (e) {
      return e.id == id;
    })[0].ud = ud;
    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2));
  };

  var deleteItem = function deleteItem(id) {
    var ITEM = _js_constants__WEBPACK_IMPORTED_MODULE_5__["default"].filter(function (e) {
      return e.id == id;
    })[0];
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
    setTotalPrice((totalPrice - shoppingCart.filter(function (e) {
      return e.id == id;
    }).map(function (e) {
      return e.price * e.ud;
    })).toFixed(2));
    ITEM.ud = 1;
    ITEM.intoCart = false;
  };

  var emptyCart = function emptyCart() {
    for (var i = shoppingCart.length; i > 1; Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), i++) {
      var element = array[i];
    }

    shoppingCart.forEach(function (e) {
      return deleteItem(e.id);
    });
  };

  var addItem = function addItem(item) {
    _js_constants__WEBPACK_IMPORTED_MODULE_5__["default"].filter(function (e) {
      return e.id == item.id;
    })[0].intoCart = true;
    shoppingCart.push(_js_constants__WEBPACK_IMPORTED_MODULE_5__["default"].filter(function (e) {
      return e.id == item.id;
    })[0]); //No sé la razón, pero si no hago este push el array no se actualiza a tiempo y el precio no cambia, porqué ocurre esto???

    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cart: shoppingCart,
    deleteItem: deleteItem,
    setUnitItem: setUnitItem,
    emptyCart: emptyCart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, _js_constants__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (e, i) {
    return __jsx(_components_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      db: _js_constants__WEBPACK_IMPORTED_MODULE_5__["default"],
      item: e,
      key: e.id,
      id: e.id,
      addItem: addItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 48
      }
    });
  }))));
};

_s(Index, "iOyqpBvlQeTUguq0oe6Oeggav1w=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJzaG9wcGluZ0NhcnQiLCJzZXRTaG9wcGluZ0NhcnQiLCJsZW5ndGgiLCJtYXAiLCJlIiwicHJpY2UiLCJ1ZCIsInJlZHVjZSIsImFjYyIsInRvRml4ZWQiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJpY2VDYXJ0IiwidGl0bGUiLCJpbm5lckhUTUwiLCJzdHlsZSIsImxlZnQiLCJzZXRVbml0SXRlbSIsImlkIiwiZmlsdGVyIiwiZGVsZXRlSXRlbSIsIklURU0iLCJJVEVNU19EQiIsImludG9DYXJ0IiwiZW1wdHlDYXJ0IiwiaSIsImVsZW1lbnQiLCJhcnJheSIsImZvckVhY2giLCJhZGRJdGVtIiwiaXRlbSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDVEMsWUFEUztBQUFBLE1BQ0lDLGVBREo7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFFQyxZQUFZLENBQUNFLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsTUFBM0IsR0FBb0NGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVFELENBQUMsQ0FBQ0UsRUFBZDtBQUFBLEdBQW5CLEVB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QVo7QUFBMEIsY0FBVSxFQUFFd0IsVUFBdEM7QUFBa0QsZUFBVyxFQUFFSCxXQUEvRDtBQUE0RSxhQUFTLEVBQUVPLFNBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUYscURBQVEsQ0FBQ3ZCLEdBQVQsQ0FBYyxVQUFDQyxDQUFELEVBQUd5QixDQUFIO0FBQUEsV0FBUyxNQUFDLDREQUFEO0FBQVUsUUFBRSxFQUFFSCxxREFBZDtBQUF3QixVQUFJLEVBQUV0QixDQUE5QjtBQUFpQyxTQUFHLEVBQUVBLENBQUMsQ0FBQ2tCLEVBQXhDO0FBQTRDLFFBQUUsRUFBRWxCLENBQUMsQ0FBQ2tCLEVBQWxEO0FBQXNELGFBQU8sRUFBRVcsT0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFUO0FBQUEsR0FBZCxDQUZSLENBREosQ0FMSixDQURKO0FBZ0JILENBNUREOztHQUFNbkMsSzs7S0FBQUEsSztBQThEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRmMGE3ZWM3YmFlYTJlYWMxMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtTGlzdCc7XHJcbmltcG9ydCBJVEVNU19EQiBmcm9tICcuLi9qcy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VDYXJ0ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSAgID0gXCJBbWF6b24uZmFrZVwiO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggKHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKS5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkpLnRvRml4ZWQoMikgKTtcclxuICAgICAgICBJVEVNLnVkICAgICAgID0gMTtcclxuICAgICAgICBJVEVNLmludG9DYXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1wdHlDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSA9IHNob3BwaW5nQ2FydC5sZW5ndGg7IGkgPiAxOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LmZvckVhY2goIGUgPT4gZGVsZXRlSXRlbShlLmlkKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0uaW50b0NhcnQgPSB0cnVlO1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKCBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0gKTsgLy9ObyBzw6kgbGEgcmF6w7NuLCBwZXJvIHNpIG5vIGhhZ28gZXN0ZSBwdXNoIGVsIGFycmF5IG5vIHNlIGFjdHVhbGl6YSBhIHRpZW1wbyB5IGVsIHByZWNpbyBubyBjYW1iaWEsIHBvcnF1w6kgb2N1cnJlIGVzdG8/Pz9cclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydCApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0IGNhcnQ9e3Nob3BwaW5nQ2FydH0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0gc2V0VW5pdEl0ZW09e3NldFVuaXRJdGVtfSBlbXB0eUNhcnQ9e2VtcHR5Q2FydH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXIgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIChlLGkpID0+IDxJdGVtTGlzdCBkYj17SVRFTVNfREJ9IGl0ZW09e2V9IGtleT17ZS5pZH0gaWQ9e2UuaWR9IGFkZEl0ZW09e2FkZEl0ZW19IC8+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=
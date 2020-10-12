webpackHotUpdate_N_E("pages/index",{

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
    for (var i = shoppingCart.length; i > 1; Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("i"), i--) {
      deleteItem(shoppingCart[i].id);
    }
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
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJ0aXRsZSIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsInNldFVuaXRJdGVtIiwiaWQiLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiSVRFTSIsIklURU1TX0RCIiwiaW50b0NhcnQiLCJlbXB0eUNhcnQiLCJpIiwiYWRkSXRlbSIsIml0ZW0iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLEVBQUQsQ0FEL0I7QUFBQSxNQUNUQyxZQURTO0FBQUEsTUFDSUMsZUFESjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUVDLFlBQVksQ0FBQ0UsTUFBYixJQUF1QixDQUF2QixHQUEyQixNQUEzQixHQUFvQ0YsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEtBQUYsR0FBUUQsQ0FBQyxDQUFDRSxFQUFkO0FBQUEsR0FBbkIsRUFBc0NDLE1BQXRDLENBQThDLFVBQUNILENBQUQsRUFBR0ksR0FBSDtBQUFBLFdBQVdKLENBQUMsR0FBQ0ksR0FBYjtBQUFBLEdBQTlDLEVBQWlFQyxPQUFqRSxDQUF5RSxDQUF6RSxDQUF0QyxDQUYzQjtBQUFBLE1BRVRDLFVBRlM7QUFBQSxNQUVFQyxh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QUFBQSxLQUVRRixxREFBUSxDQUFDdkIsR0FBVCxDQUFjLFVBQUNDLENBQUQsRUFBR3lCLENBQUg7QUFBQSxXQUFTLE1BQUMsNERBQUQ7QUFBVSxRQUFFLEVBQUVILHFEQUFkO0FBQXdCLFVBQUksRUFBRXRCLENBQTlCO0FBQWlDLFNBQUcsRUFBRUEsQ0FBQyxDQUFDa0IsRUFBeEM7QUFBNEMsUUFBRSxFQUFFbEIsQ0FBQyxDQUFDa0IsRUFBbEQ7QUFBc0QsYUFBTyxFQUFFUSxPQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBQSxHQUFkLENBRlIsQ0FESixDQUxKLENBREo7QUFnQkgsQ0F6REQ7O0dBQU1oQyxLOztLQUFBQSxLO0FBMkRTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNjEwZWMwYWNjY2U4NTliNmE4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtTGlzdCc7XHJcbmltcG9ydCBJVEVNU19EQiBmcm9tICcuLi9qcy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VDYXJ0ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSAgID0gXCJBbWF6b24uZmFrZVwiO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggKHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKS5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkpLnRvRml4ZWQoMikgKTtcclxuICAgICAgICBJVEVNLnVkICAgICAgID0gMTtcclxuICAgICAgICBJVEVNLmludG9DYXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1wdHlDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSA9IHNob3BwaW5nQ2FydC5sZW5ndGg7IGkgPiAxOyBpLS0pIFxyXG4gICAgICAgICAgICBkZWxldGVJdGVtKCBzaG9wcGluZ0NhcnRbaV0uaWQgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiB7XHJcbiAgICAgICAgSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdLmludG9DYXJ0ID0gdHJ1ZTtcclxuICAgICAgICBzaG9wcGluZ0NhcnQucHVzaCggSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdICk7IC8vTm8gc8OpIGxhIHJhesOzbiwgcGVybyBzaSBubyBoYWdvIGVzdGUgcHVzaCBlbCBhcnJheSBubyBzZSBhY3R1YWxpemEgYSB0aWVtcG8geSBlbCBwcmVjaW8gbm8gY2FtYmlhLCBwb3JxdcOpIG9jdXJyZSBlc3RvPz8/XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApLnRvRml4ZWQoMikgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydCBjYXJ0PXtzaG9wcGluZ0NhcnR9IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19IHNldFVuaXRJdGVtPXtzZXRVbml0SXRlbX0gZW1wdHlDYXJ0PXtlbXB0eUNhcnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCAoZSxpKSA9PiA8SXRlbUxpc3QgZGI9e0lURU1TX0RCfSBpdGVtPXtlfSBrZXk9e2UuaWR9IGlkPXtlLmlkfSBhZGRJdGVtPXthZGRJdGVtfSAvPiApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9
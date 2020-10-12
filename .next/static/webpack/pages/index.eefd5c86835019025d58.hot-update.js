webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart/index.js");
/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ItemList */ "./components/ItemList/index.js");
/* harmony import */ var _js_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/constants */ "./js/constants.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(shoppingCart.length == 0 ? "0.00" : shoppingCart.map(function (e) {
    return e.price * e.ud;
  }).reduce(function (e, acc) {
    return e + acc;
  }).toFixed(2)),
      totalPrice = _useState2[0],
      setTotalPrice = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
    var ITEM = _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function (e) {
      return e.id == id;
    })[0];
    ITEM.ud = 1;
    ITEM.intoCart = false;
    setTotalPrice(shoppingCart.length == 0 ? "0.00" : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2));
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
  };

  var addItem = function addItem(item) {
    _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function (e) {
      return e.id == item.id;
    })[0].intoCart = true;
    shoppingCart.push(_js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function (e) {
      return e.id == item.id;
    })[0]); //No sé la razón, pero si no hago este push el array no se actualiza a tiempo y el precio no cambia, porqué???

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
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: shoppingCart,
    deleteItem: deleteItem,
    setUnitItem: setUnitItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (e, i) {
    return __jsx(_components_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      db: _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"],
      item: e,
      key: e.id,
      id: e.id,
      addItem: addItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJ0aXRsZSIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsInNldFVuaXRJdGVtIiwiaWQiLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiSVRFTSIsIklURU1TX0RCIiwiaW50b0NhcnQiLCJhZGRJdGVtIiwiaXRlbSIsInB1c2giLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLEVBQUQsQ0FEL0I7QUFBQSxNQUNUQyxZQURTO0FBQUEsTUFDSUMsZUFESjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUVDLFlBQVksQ0FBQ0UsTUFBYixJQUF1QixDQUF2QixHQUEyQixNQUEzQixHQUFvQ0YsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEtBQUYsR0FBUUQsQ0FBQyxDQUFDRSxFQUFkO0FBQUEsR0FBbkIsRUFBc0NDLE1BQXRDLENBQThDLFVBQUNILENBQUQsRUFBR0ksR0FBSDtBQUFBLFdBQVdKLENBQUMsR0FBQ0ksR0FBYjtBQUFBLEdBQTlDLEVBQWlFQyxPQUFqRSxDQUF5RSxDQUF6RSxDQUF0QyxDQUYzQjtBQUFBLE1BRVRDLFVBRlM7QUFBQSxNQUVFQyxhQUZGOztBQUloQkMseURB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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBQSxHQUFkLENBRlIsQ0FESixDQUxKLENBREo7QUFnQkgsQ0FwREQ7O0dBQU05QixLOztLQUFBQSxLO0FBc0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWZkNWM4NjgzNTAxOTAyNWQ1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtTGlzdCc7XHJcbmltcG9ydCBJVEVNU19EQiBmcm9tICcuLi9qcy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VDYXJ0ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSAgID0gXCJBbWF6b24uZmFrZVwiO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gICAgPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIElURU0udWQgICAgICAgPSAxO1xyXG4gICAgICAgIElURU0uaW50b0NhcnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXS5pbnRvQ2FydCA9IHRydWU7XHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXSApOyAvL05vIHPDqSBsYSByYXrDs24sIHBlcm8gc2kgbm8gaGFnbyBlc3RlIHB1c2ggZWwgYXJyYXkgbm8gc2UgYWN0dWFsaXphIGEgdGllbXBvIHkgZWwgcHJlY2lvIG5vIGNhbWJpYSwgcG9ycXXDqT8/P1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnQgY2FydD17c2hvcHBpbmdDYXJ0fSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfSBzZXRVbml0SXRlbT17c2V0VW5pdEl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCAoZSxpKSA9PiA8SXRlbUxpc3QgZGI9e0lURU1TX0RCfSBpdGVtPXtlfSBrZXk9e2UuaWR9IGlkPXtlLmlkfSBhZGRJdGVtPXthZGRJdGVtfSAvPiApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9
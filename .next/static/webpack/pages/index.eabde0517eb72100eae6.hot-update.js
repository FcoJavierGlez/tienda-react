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
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
    setTotalPrice((totalPrice - shoppingCart.filter(function (e) {
      return e.id == id;
    }).map(function (e) {
      return e.price * e.ud;
    })).toFixed(2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJ0aXRsZSIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsInNldFVuaXRJdGVtIiwiaWQiLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiSVRFTSIsIklURU1TX0RCIiwiaW50b0NhcnQiLCJhZGRJdGVtIiwiaXRlbSIsInB1c2giLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLEVBQUQsQ0FEL0I7QUFBQSxNQUNUQyxZQURTO0FBQUEsTUFDSUMsZUFESjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUVDLFlBQVksQ0FBQ0UsTUFBYixJQUF1QixDQUF2QixHQUEyQixNQUEzQixHQUFvQ0YsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEtBQUYsR0FBUUQsQ0FBQyxDQUFDRSxFQUFkO0FBQUEsR0FBbkIsRUFBc0NDLE1BQXRDLENBQThDLFVBQUNILENBQUQsRUFBR0ksR0FBSDtBQUFBLFdBQVdKLENBQUMsR0FBQ0ksR0FBYjtBQUFBLEdBQTlDLEVBQWlFQyxPQUFqRSxDQUF5RSxDQUF6RSxDQUF0QyxDQUYzQjtBQUFBLE1BRVRDLFVBRlM7QUFBQSxNQUVFQyxhQUZGOztBQUloQkMseURB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QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFBLEdBQWQsQ0FGUixDQURKLENBTEosQ0FESjtBQWdCSCxDQXBERDs7R0FBTTlCLEs7O0tBQUFBLEs7QUFzRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhYmRlMDUxN2ViNzIxMDBlYWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuaW1wb3J0IElURU1TX0RCIGZyb20gJy4uL2pzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IFwiMC4wMFwiIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUNhcnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlICAgPSBcIkFtYXpvbi5mYWtlXCI7XHJcblxyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaWNlQ2FydC5pbm5lckhUTUwgPSBgVG90YWwgYSBwYWdhcjogJHt0b3RhbFByaWNlfeKCrGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgY29uc3QgSVRFTSAgICA9IElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF07XHJcbiAgICAgICAgSVRFTS51ZCAgICAgICA9IDE7XHJcbiAgICAgICAgSVRFTS5pbnRvQ2FydCA9IGZhbHNlO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggKHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKS5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkpLnRvRml4ZWQoMikgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiB7XHJcbiAgICAgICAgSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdLmludG9DYXJ0ID0gdHJ1ZTtcclxuICAgICAgICBzaG9wcGluZ0NhcnQucHVzaCggSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdICk7IC8vTm8gc8OpIGxhIHJhesOzbiwgcGVybyBzaSBubyBoYWdvIGVzdGUgcHVzaCBlbCBhcnJheSBubyBzZSBhY3R1YWxpemEgYSB0aWVtcG8geSBlbCBwcmVjaW8gbm8gY2FtYmlhLCBwb3JxdcOpPz8/XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApLnRvRml4ZWQoMikgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydCBjYXJ0PXtzaG9wcGluZ0NhcnR9IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19IHNldFVuaXRJdGVtPXtzZXRVbml0SXRlbX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXIgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIChlLGkpID0+IDxJdGVtTGlzdCBkYj17SVRFTVNfREJ9IGl0ZW09e2V9IGtleT17ZS5pZH0gaWQ9e2UuaWR9IGFkZEl0ZW09e2FkZEl0ZW19IC8+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=
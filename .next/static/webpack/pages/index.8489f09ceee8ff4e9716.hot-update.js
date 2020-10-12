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
    setTotalPrice((totalPrice - shoppingCart.filter(function (e) {
      return e.id == id;
    }).map(function (e) {
      return e.price * e.ud;
    })).toFixed(2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJ0aXRsZSIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsInNldFVuaXRJdGVtIiwiaWQiLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiSVRFTSIsIklURU1TX0RCIiwiaW50b0NhcnQiLCJhZGRJdGVtIiwiaXRlbSIsInB1c2giLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLEVBQUQsQ0FEL0I7QUFBQSxNQUNUQyxZQURTO0FBQUEsTUFDSUMsZUFESjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUVDLFlBQVksQ0FBQ0UsTUFBYixJQUF1QixDQUF2QixHQUEyQixNQUEzQixHQUFvQ0YsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEtBQUYsR0FBUUQsQ0FBQyxDQUFDRSxFQUFkO0FBQUEsR0FBbkIsRUFBc0NDLE1BQXRDLENBQThDLFVBQUNILENBQUQsRUFBR0ksR0FBSDtBQUFBLFdBQVdKLENBQUMsR0FBQ0ksR0FBYjtBQUFBLEdBQTlDLEVBQWlFQyxPQUFqRSxDQUF5RSxDQUF6RSxDQUF0QyxDQUYzQjtBQUFBLE1BRVRDLFVBRlM7QUFBQSxNQUVFQyxhQUZGOztBQUloQkMseURB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QUFBO0FBQUE7QUFBQSxNQUFUO0FBQUEsR0FBZCxDQUZSLENBREosQ0FMSixDQURKO0FBZ0JILENBcEREOztHQUFNOUIsSzs7S0FBQUEsSztBQXNEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQ4OWYwOWNlZWU4ZmY0ZTk3MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0JztcclxuaW1wb3J0IEl0ZW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbUxpc3QnO1xyXG5pbXBvcnQgSVRFTVNfREIgZnJvbSAnLi4vanMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCxzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gXCIwLjAwXCIgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApLnRvRml4ZWQoMikgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWNvdW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlQ2FydCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUHJpY2VcIik7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgICA9IFwiQW1hem9uLmZha2VcIjtcclxuXHJcbiAgICAgICAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBzaG9wcGluZ0NhcnQubGVuZ3RoO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuc3R5bGUubGVmdCA9IChzaG9wcGluZ0NhcnQubGVuZ3RoID4gOSA/IGAyMXB4YCA6IGAyNXB4YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpY2VDYXJ0LmlubmVySFRNTCA9IGBUb3RhbCBhIHBhZ2FyOiAke3RvdGFsUHJpY2V94oKsYDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVkKSA9PiB7XHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZDtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydCApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApLnRvRml4ZWQoMikgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVJdGVtID0gaWQgPT4geyBcclxuICAgICAgICBjb25zdCBJVEVNICAgID0gSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXTtcclxuICAgICAgICBJVEVNLnVkICAgICAgID0gMTtcclxuICAgICAgICBJVEVNLmludG9DYXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggKHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKS5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkpLnRvRml4ZWQoMikgKTtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCAhPT0gaWQgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0uaW50b0NhcnQgPSB0cnVlO1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKCBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0gKTsgLy9ObyBzw6kgbGEgcmF6w7NuLCBwZXJvIHNpIG5vIGhhZ28gZXN0ZSBwdXNoIGVsIGFycmF5IG5vIHNlIGFjdHVhbGl6YSBhIHRpZW1wbyB5IGVsIHByZWNpbyBubyBjYW1iaWEsIHBvcnF1w6k/Pz9cclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydCApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0IGNhcnQ9e3Nob3BwaW5nQ2FydH0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0gc2V0VW5pdEl0ZW09e3NldFVuaXRJdGVtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lciBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElURU1TX0RCLm1hcCggKGUsaSkgPT4gPEl0ZW1MaXN0IGRiPXtJVEVNU19EQn0gaXRlbT17ZX0ga2V5PXtlLmlkfSBpZD17ZS5pZH0gYWRkSXRlbT17YWRkSXRlbX0gLz4gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==
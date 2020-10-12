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
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: shoppingCart,
    deleteItem: deleteItem,
    setUnitItem: setUnitItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (e, i) {
    return __jsx(_components_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      db: _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"],
      item: e,
      key: i,
      addItem: addItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImxlZnQiLCJzZXRVbml0SXRlbSIsImlkIiwiZmlsdGVyIiwiZGVsZXRlSXRlbSIsIklURU0iLCJJVEVNU19EQiIsImludG9DYXJ0IiwiYWRkSXRlbSIsIml0ZW0iLCJwdXNoIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDVEMsWUFEUztBQUFBLE1BQ0lDLGVBREo7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFFQyxZQUFZLENBQUNFLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsTUFBM0IsR0FBb0NGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVFELENBQUMsQ0FBQ0UsRUFBZDtBQUFBLEdBQW5CLEVBQXNDQyxNQUF0QyxDQUE4QyxVQUFDSCxDQUFELEVBQUdJLEdBQUg7QUFBQSxXQUFXSixDQUFDLEdBQUNJLEdBQWI7QUFBQSxHQUE5QyxFQUFpRUMsT0FBakUsQ0FBeUUsQ0FBekUsQ0FBdEMsQ0FGM0I7QUFBQSxNQUVUQyxVQUZTO0FBQUEsTUFFRUMsYUFGRjs7QUFJaEJDLHlEQUFTLENBQUUs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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY1ZTExMmY0ZDhjZmZjNDRmMDNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuaW1wb3J0IElURU1TX0RCIGZyb20gJy4uL2pzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IFwiMC4wMFwiIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUNhcnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gICAgPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIElURU0udWQgICAgICAgPSAxO1xyXG4gICAgICAgIElURU0uaW50b0NhcnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCAodG90YWxQcmljZSAtIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApLm1hcCggZSA9PiBlLnByaWNlKmUudWQgKSkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXS5pbnRvQ2FydCA9IHRydWU7XHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXSApOyAvL05vIHPDqSBsYSByYXrDs24sIHBlcm8gc2kgbm8gaGFnbyBlc3RlIHB1c2ggZWwgYXJyYXkgbm8gc2UgYWN0dWFsaXphIGEgdGllbXBvIHkgZWwgcHJlY2lvIG5vIGNhbWJpYSwgcG9ycXXDqT8/P1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnQgY2FydD17c2hvcHBpbmdDYXJ0fSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfSBzZXRVbml0SXRlbT17c2V0VW5pdEl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCAoZSxpKSA9PiA8SXRlbUxpc3QgZGI9e0lURU1TX0RCfSBpdGVtPXtlfSBrZXk9e2l9IGFkZEl0ZW09e2FkZEl0ZW19IC8+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=
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
      key: e.name,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImxlZnQiLCJzZXRVbml0SXRlbSIsImlkIiwiZmlsdGVyIiwiZGVsZXRlSXRlbSIsIklURU0iLCJJVEVNU19EQiIsImludG9DYXJ0IiwiYWRkSXRlbSIsIml0ZW0iLCJwdXNoIiwiaSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDdUJDLHNEQUFRLENBQUMsRUFBRCxDQUQvQjtBQUFBLE1BQ1RDLFlBRFM7QUFBQSxNQUNJQyxlQURKOztBQUFBLG1CQUVtQkYsc0RBQVEsQ0FBRUMsWUFBWSxDQUFDRSxNQUFiLElBQXVCLENBQXZCLEdBQTJCLE1BQTNCLEdBQW9DRixZQUFZLENBQUNHLEdBQWIsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsS0FBRixHQUFRRCxDQUFDLENBQUNFLEVBQWQ7QUFBQSxHQUFuQixFQUFzQ0MsTUFBdEMsQ0FBOEMsVUFBQ0gsQ0FBRCxFQUFHSSxHQUFIO0FBQUEsV0FBV0osQ0FBQyxHQUFDSSxHQUFiO0FBQUEsR0FBOUMsRUFBaUVDLE9BQWpFLENBQXlFLENBQXpFLENBQXRDLENBRjNCO0FBQUEsTUFFVEMsVUFGUztBQUFBLE1BRUVDLGFBRkY7O0FBSWhCQyx5REFB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QUFBLEs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxODU0ZjUzNWEzOTgxMGZmYmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuaW1wb3J0IElURU1TX0RCIGZyb20gJy4uL2pzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IFwiMC4wMFwiIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUNhcnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gICAgPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIElURU0udWQgICAgICAgPSAxO1xyXG4gICAgICAgIElURU0uaW50b0NhcnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCAodG90YWxQcmljZSAtIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApLm1hcCggZSA9PiBlLnByaWNlKmUudWQgKSkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXS5pbnRvQ2FydCA9IHRydWU7XHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goIElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXSApOyAvL05vIHPDqSBsYSByYXrDs24sIHBlcm8gc2kgbm8gaGFnbyBlc3RlIHB1c2ggZWwgYXJyYXkgbm8gc2UgYWN0dWFsaXphIGEgdGllbXBvIHkgZWwgcHJlY2lvIG5vIGNhbWJpYSwgcG9ycXXDqT8/P1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnQgY2FydD17c2hvcHBpbmdDYXJ0fSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfSBzZXRVbml0SXRlbT17c2V0VW5pdEl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCAoZSxpKSA9PiA8SXRlbUxpc3QgZGI9e0lURU1TX0RCfSBpdGVtPXtlfSBrZXk9e2UubmFtZX0gYWRkSXRlbT17YWRkSXRlbX0gLz4gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==
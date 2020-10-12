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
      //deleteItem( shoppingCart[i].id );
      console.log(shoppingCart[i]);
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
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJwcmljZSIsInVkIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidXNlRWZmZWN0IiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmljZUNhcnQiLCJ0aXRsZSIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsInNldFVuaXRJdGVtIiwiaWQiLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiSVRFTSIsIklURU1TX0RCIiwiaW50b0NhcnQiLCJlbXB0eUNhcnQiLCJpIiwiY29uc29sZSIsImxvZyIsImFkZEl0ZW0iLCJpdGVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxFQUFELENBRC9CO0FBQUEsTUFDVEMsWUFEUztBQUFBLE1BQ0lDLGVBREo7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFFQyxZQUFZLENBQUNFLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsTUFBM0IsR0FBb0NGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVFELENBQUMsQ0FBQ0UsRUFBZDtBQUFBLEdBQW5CLEVBQXNDQyxNQUF0QyxDQUE4QyxVQUFDSCxDQUFELEVBQUdJLEdBQUg7QUFBQSxXQUFXSixDQUFDLEdBQUNJLEdBQWI7QUFBQSxHQUE5QyxFQUFpRUMsT0FBakUsQ0FBeUUsQ0FBekUsQ0FBdEMsQ0FGM0I7QUFBQSxNQUVUQyxV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QUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFGLHFEQUFRLENBQUN2QixHQUFULENBQWMsVUFBQ0MsQ0FBRCxFQUFHeUIsQ0FBSDtBQUFBLFdBQVMsTUFBQyw0REFBRDtBQUFVLFFBQUUsRUFBRUgscURBQWQ7QUFBd0IsVUFBSSxFQUFFdEIsQ0FBOUI7QUFBaUMsU0FBRyxFQUFFQSxDQUFDLENBQUNrQixFQUF4QztBQUE0QyxRQUFFLEVBQUVsQixDQUFDLENBQUNrQixFQUFsRDtBQUFzRCxhQUFPLEVBQUVVLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFBLEdBQWQsQ0FGUixDQURKLENBTEosQ0FESjtBQWdCSCxDQTFERDs7R0FBTWxDLEs7O0tBQUFBLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3MjFjZWRmYTc1NjRiY2M4NWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuaW1wb3J0IElURU1TX0RCIGZyb20gJy4uL2pzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IFwiMC4wMFwiIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUNhcnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlICAgPSBcIkFtYXpvbi5mYWtlXCI7XHJcblxyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaWNlQ2FydC5pbm5lckhUTUwgPSBgVG90YWwgYSBwYWdhcjogJHt0b3RhbFByaWNlfeKCrGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgY29uc3QgSVRFTSA9IElURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF07XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgIT09IGlkICkgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCAodG90YWxQcmljZSAtIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApLm1hcCggZSA9PiBlLnByaWNlKmUudWQgKSkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIElURU0udWQgICAgICAgPSAxO1xyXG4gICAgICAgIElURU0uaW50b0NhcnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbXB0eUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDsgaSA+IDE7IGktLSkgXHJcbiAgICAgICAgICAgIC8vZGVsZXRlSXRlbSggc2hvcHBpbmdDYXJ0W2ldLmlkICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzaG9wcGluZ0NhcnRbaV0gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiB7XHJcbiAgICAgICAgSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdLmludG9DYXJ0ID0gdHJ1ZTtcclxuICAgICAgICBzaG9wcGluZ0NhcnQucHVzaCggSVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaXRlbS5pZCApWzBdICk7IC8vTm8gc8OpIGxhIHJhesOzbiwgcGVybyBzaSBubyBoYWdvIGVzdGUgcHVzaCBlbCBhcnJheSBubyBzZSBhY3R1YWxpemEgYSB0aWVtcG8geSBlbCBwcmVjaW8gbm8gY2FtYmlhLCBwb3JxdcOpIG9jdXJyZSBlc3RvPz8/XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApLnRvRml4ZWQoMikgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydCBjYXJ0PXtzaG9wcGluZ0NhcnR9IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19IHNldFVuaXRJdGVtPXtzZXRVbml0SXRlbX0gZW1wdHlDYXJ0PXtlbXB0eUNhcnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCAoZSxpKSA9PiA8SXRlbUxpc3QgZGI9e0lURU1TX0RCfSBpdGVtPXtlfSBrZXk9e2UuaWR9IGlkPXtlLmlkfSBhZGRJdGVtPXthZGRJdGVtfSAvPiApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9
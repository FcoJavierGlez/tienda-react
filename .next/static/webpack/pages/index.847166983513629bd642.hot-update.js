webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemCart */ "./components/Cart/ItemCart/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Cart\\Cart.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc);

var CART = [{
  id: 1,
  name: "Paleta Ibérica de Bellota de 4,5 kg Covap",
  //Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap de 4,5 kg
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "jamon.png",
  price: 300,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}]; //const setUnitItem = (id,unit) => CART[ CART.indexOf( CART.filter( e => e.id == id )[0] ) ].ud = unit;

var Cart = function Cart(_ref) {
  _s();

  var onNewItem = _ref.onNewItem,
      cart = _ref.cart,
      changeUnit = _ref.changeUnit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(CART),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];
  /* const totalPrice = {
      price: shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2)
  }; */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(shoppingCart);
    console.log("filter");
    console.log(shoppingCart.filter(function (e) {
      return e.id == 1;
    })[0]);
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var addUnitItem = function addUnitItem(id, ud) {
    /* CART.filter( e => e.id == id )[0].ud = ud;
    setShoppingCart( [...CART] ); */
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id == id;
    })[0].ud = ud); //console.log(CART);
    //setShoppingCart( shoppingCart.filter( e => e.id == id )[0].ud = ud );

    /* setShoppingCart( CART.filter( e => e.id == id )[0].ud = ud ); */
    //shoppingCart.map( e => console.log(e) );
  };

  var deleteItem = function deleteItem(id) {
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
    CART = shoppingCart;
  };

  var addItem = function addItem(item) {
    setShoppingCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(shoppingCart), [item]));
  }; //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);


  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.map(function (e, i) {
    return __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: e,
      key: i,
      changeUnit: addUnitItem,
      deleteItem: deleteItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 48
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Total a pagar: ", shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
    return e.price * e.ud;
  }).reduce(function (e, acc) {
    return e + acc;
  }), "\u20AC")));
};

_s(Cart, "bk7K3yy2/BKgayT6QCwKgznKyYg=");

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJlIiwidG90YWxJdGVtcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJzdHlsZSIsImxlZnQiLCJhZGRVbml0SXRlbSIsImRlbGV0ZUl0ZW0iLCJhZGRJdGVtIiwiaXRlbSIsIm1hcCIsImkiLCJyZWR1Y2UiLCJhY2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFFQSxJQUFJQSxJQUFJLEdBQUcsQ0FDUDtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsMkNBRlY7QUFFdUQ7QUFDbkRDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFdBSlQ7QUFLSUMsT0FBSyxFQUFFLEdBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FETyxFQVNQO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBVE8sQ0FBWCxDLENBbUJBOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlDO0FBQUE7O0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVB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RGYsWUFBWSxDQUFDVyxNQUFiLElBQXVCLENBQXZCLEdBQTJCLENBQTNCLEdBQStCWCxZQUFZLENBQUNrQixHQUFiLENBQWtCLFVBQUFaLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNiLEtBQUYsR0FBUWEsQ0FBQyxDQUFDWixFQUFkO0FBQUEsR0FBbkIsRUFBc0MwQixNQUF0QyxDQUE4QyxVQUFDZCxDQUFELEVBQUdlLEdBQUg7QUFBQSxXQUFXZixDQUFDLEdBQUNlLEdBQWI7QUFBQSxHQUE5QyxDQUE1RixXQUZKLENBVEosQ0FESjtBQWdCSCxDQXJERDs7R0FBTTFCLEk7O0tBQUFBLEk7QUF1RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0NzE2Njk4MzUxMzYyOWJkNjQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCdcclxuXHJcbi8vY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG5cclxubGV0IENBUlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbl07XHJcblxyXG4vL2NvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVuaXQpID0+IENBUlRbIENBUlQuaW5kZXhPZiggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdICkgXS51ZCA9IHVuaXQ7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHtvbk5ld0l0ZW0sY2FydCxjaGFuZ2VVbml0fSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCxzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoQ0FSVCk7XHJcblxyXG4gICAgLyogY29uc3QgdG90YWxQcmljZSA9IHtcclxuICAgICAgICBwcmljZTogc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMilcclxuICAgIH07ICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hvcHBpbmdDYXJ0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlclwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gMSApWzBdKTtcclxuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWNvdW50XCIpO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkVW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICAvKiBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZDtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIFsuLi5DQVJUXSApOyAqL1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coQ0FSVCk7XHJcbiAgICAgICAgLy9zZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQgKTtcclxuICAgICAgICAvKiBzZXRTaG9wcGluZ0NhcnQoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7ICovXHJcbiAgICAgICAgLy9zaG9wcGluZ0NhcnQubWFwKCBlID0+IGNvbnNvbGUubG9nKGUpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgIT09IGlkICkgKTtcclxuICAgICAgICBDQVJUID0gc2hvcHBpbmdDYXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIFsuLi5zaG9wcGluZ0NhcnQsIGl0ZW1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnN0IHNldFByaWNlQ2FydCA9ICgpID0+IHRvdGFsUHJpY2UucHJpY2UgPSBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmFtZV9jYXJ0XCI+TWkgY2Fycml0bzxoci8+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0IHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5sZW5ndGggPT09IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JleVwiPkVsIGNhcnJpdG8gZXN0w6EgdmFjw61vPC9kaXY+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lm1hcCggKGUsaSkgPT4gPEl0ZW1DYXJ0IGl0ZW09e2V9IGtleT17aX0gY2hhbmdlVW5pdD17YWRkVW5pdEl0ZW19IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19Lz4gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj5Ub3RhbCBhIHBhZ2FyOiB7IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApIH3igqw8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
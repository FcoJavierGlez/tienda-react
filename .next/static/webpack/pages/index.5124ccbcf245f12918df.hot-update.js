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
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var addUnitItem = function addUnitItem(id, ud) {
    var _console, _console2;

    CART.filter(function (e) {
      return e.id == id;
    })[0].ud = ud;
    setShoppingCart(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(CART));
    CART = shoppingCart;
    console.log("CART");
    console.log(CART);

    (_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(CART));

    console.log("shoppingCart");
    console.log(shoppingCart);

    (_console2 = console).log.apply(_console2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(shoppingCart)); //console.log(CART);
    //setShoppingCart( shoppingCart.filter( e => e.id == id )[0].ud = ud );

    /* setShoppingCart( CART.filter( e => e.id == id )[0].ud = ud ); */
    //shoppingCart.map( e => console.log(e) );

  };

  var deleteItem = function deleteItem(id) {
    var _console3, _console4;

    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
    CART = shoppingCart;
    console.log("CART");
    console.log(CART);

    (_console3 = console).log.apply(_console3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(CART));

    console.log("shoppingCart");
    console.log(shoppingCart);

    (_console4 = console).log.apply(_console4, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(shoppingCart));
  }; //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);


  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 76,
        columnNumber: 48
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwic3R5bGUiLCJsZWZ0IiwiYWRkVW5pdEl0ZW0iLCJmaWx0ZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUl0ZW0iLCJtYXAiLCJpIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLENBQ1A7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRE8sRUFTUDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRPLENBQVgsQyxDQW1CQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxrQkFDSEMs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBQyxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE2RGYsWUFBWSxDQUFDTyxNQUFiLElBQXVCLENBQXZCLEdBQTJCLENBQTNCLEdBQStCUCxZQUFZLENBQUNnQixHQUFiLENBQWtCLFVBQUFKLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNuQixLQUFGLEdBQVFtQixDQUFDLENBQUNsQixFQUFkO0FBQUEsR0FBbkIsRUFBc0N3QixNQUF0QyxDQUE4QyxVQUFDTixDQUFELEVBQUdPLEdBQUg7QUFBQSxXQUFXUCxDQUFDLEdBQUNPLEdBQWI7QUFBQSxHQUE5QyxDQUE1RixXQUhKLENBVEosQ0FESjtBQWlCSCxDQTNERDs7R0FBTXhCLEk7O0tBQUFBLEk7QUE2RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxMjRjY2JjZjI0NWYxMjkxOGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCdcclxuXHJcbi8vY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG5cclxubGV0IENBUlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbl07XHJcblxyXG4vL2NvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVuaXQpID0+IENBUlRbIENBUlQuaW5kZXhPZiggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdICkgXS51ZCA9IHVuaXQ7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHtvbk5ld0l0ZW0sY2FydCxjaGFuZ2VVbml0fSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCxzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoQ0FSVCk7XHJcblxyXG4gICAgLyogY29uc3QgdG90YWxQcmljZSA9IHtcclxuICAgICAgICBwcmljZTogc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMilcclxuICAgIH07ICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZFVuaXRJdGVtID0gKGlkLHVkKSA9PiB7XHJcbiAgICAgICAgQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBbLi4uQ0FSVF0gKTtcclxuICAgICAgICBDQVJUID0gc2hvcHBpbmdDYXJ0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDQVJUYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQ0FSVCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uQ0FSVCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNob3BwaW5nQ2FydGApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uc2hvcHBpbmdDYXJ0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKENBUlQpO1xyXG4gICAgICAgIC8vc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7XHJcbiAgICAgICAgLyogc2V0U2hvcHBpbmdDYXJ0KCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApOyAqL1xyXG4gICAgICAgIC8vc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBjb25zb2xlLmxvZyhlKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgQ0FSVCA9IHNob3BwaW5nQ2FydDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ0FSVGApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENBUlQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLkNBUlQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzaG9wcGluZ0NhcnRgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLnNob3BwaW5nQ2FydCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zdCBzZXRQcmljZUNhcnQgPSAoKSA9PiB0b3RhbFByaWNlLnByaWNlID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hbWVfY2FydFwiPk1pIGNhcnJpdG88aHIvPjwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdCBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIj5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvZGl2PiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5tYXAoIChlLGkpID0+IDxJdGVtQ2FydCBpdGVtPXtlfSBrZXk9e2l9IGNoYW5nZVVuaXQ9e2FkZFVuaXRJdGVtfSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfS8+IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgdG90YWxQcmljZS5wcmljZSB94oKsPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+VG90YWwgYSBwYWdhcjogeyBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKSB94oKsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
    return e.price * e.ud;
  }).reduce(function (e, acc) {
    return e + acc;
  })),
      totalPrice = _useState2[0],
      setTotalPrice = _useState2[1];
  /* const totalPrice = {
      price: shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2)
  }; */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    /* console.log(shoppingCart);
    console.log("filter");
    console.log(shoppingCart.filter( e => e.id == 1 )[0].ud); */
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var setUnitItem = function setUnitItem(id, ud) {
    /* CART.filter( e => e.id == id )[0].ud = ud;
    setShoppingCart( [...CART] ); */
    shoppingCart.filter(function (e) {
      return e.id == id;
    })[0].ud = ud;
    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    })); //console.log(CART);
    //setShoppingCart( shoppingCart.filter( e => e.id == id )[0].ud = ud );

    /* setShoppingCart( CART.filter( e => e.id == id )[0].ud = ud ); */
    //shoppingCart.map( e => console.log(e) );
  };

  var deleteItem = function deleteItem(id) {
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    }));
    setTotalPrice(shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }));
  };

  var addItem = function addItem(item) {
    setShoppingCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(shoppingCart), [item]));
  }; //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);


  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.map(function (e, i) {
    return __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: e,
      key: i,
      changeUnit: setUnitItem,
      deleteItem: deleteItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 48
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Total a pagar: ", totalPrice, "\u20AC")));
};

_s(Cart, "t8N+ZCOuT0Xi2Qko13/b9EeAIho=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0Iiwic2V0VW5pdEl0ZW0iLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiYWRkSXRlbSIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLENBQ1A7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRE8sRUFTUDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRPLENBQVgsQyxDQW1CQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF4QyxDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRcEIsWUFBWSxDQUFDRSxNQUFiLEtBQXdCLENBQXhCLEdBQ0E7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEQSxHQUVBRixZQUFZLENBQUNHLEdBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFHaUIsQ0FBSDtBQUFBLFdBQVMsTUFBQyxpREFBRDtBQUFVLFVBQUksRUFBRWpCLENBQWhCO0FBQW1CLFNBQUcsRUFBRWlCLENBQXhCO0FBQTJCLGdCQUFVLEVBQUVMLFdBQXZDO0FBQW9ELGdCQUFVLEVBQUVFLFVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFBLEdBQWxCLENBSlIsQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBQyxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE2RFgsVUFBN0QsV0FGSixDQVRKLENBREo7QUFnQkgsQ0E1REQ7O0dBQU1aLEk7O0tBQUFBLEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjNDYxYTZiZmE1Mjk5ZjlkODJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCdcclxuXHJcbi8vY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG5cclxubGV0IENBUlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbl07XHJcblxyXG4vL2NvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVuaXQpID0+IENBUlRbIENBUlQuaW5kZXhPZiggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdICkgXS51ZCA9IHVuaXQ7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHtvbk5ld0l0ZW0sY2FydCxjaGFuZ2VVbml0fSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCxzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoQ0FSVCk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKSApO1xyXG5cclxuICAgIC8qIGNvbnN0IHRvdGFsUHJpY2UgPSB7XHJcbiAgICAgICAgcHJpY2U6IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpXHJcbiAgICB9OyAqL1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IDEgKVswXS51ZCk7ICovXHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVkKSA9PiB7XHJcbiAgICAgICAgLyogQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBbLi4uQ0FSVF0gKTsgKi9cclxuXHJcbiAgICAgICAgc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZDtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydCApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhDQVJUKTtcclxuICAgICAgICAvL3NldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApO1xyXG4gICAgICAgIC8qIHNldFNob3BwaW5nQ2FydCggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQgKTsgKi9cclxuICAgICAgICAvL3Nob3BwaW5nQ2FydC5tYXAoIGUgPT4gY29uc29sZS5sb2coZSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVJdGVtID0gaWQgPT4geyBcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCAhPT0gaWQgKSApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggWy4uLnNob3BwaW5nQ2FydCwgaXRlbV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc3Qgc2V0UHJpY2VDYXJ0ID0gKCkgPT4gdG90YWxQcmljZS5wcmljZSA9IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5NaSBjYXJyaXRvPGhyLz48L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3Qgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXtzZXRVbml0SXRlbX0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0vPiApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgdG90YWxQcmljZSB94oKsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=
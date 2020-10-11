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
    setTotalPrice(totalPrice - shoppingCart.filter(function (e) {
      return e.id == id;
    }).map(function (e) {
      return e.price * e.ud;
    }));
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0Iiwic2V0VW5pdEl0ZW0iLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiYWRkSXRlbSIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLENBQ1A7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRE8sRUFTUDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRPLENBQVgsQyxDQW1CQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVB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eEMsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUXBCLFlBQVksQ0FBQ0UsTUFBYixLQUF3QixDQUF4QixHQUNBO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREEsR0FFQUYsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBR2lCLENBQUg7QUFBQSxXQUFTLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVqQixDQUFoQjtBQUFtQixTQUFHLEVBQUVpQixDQUF4QjtBQUEyQixnQkFBVSxFQUFFTCxXQUF2QztBQUFvRCxnQkFBVSxFQUFFRSxVQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBQSxHQUFsQixDQUpSLENBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUMsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBNkRYLFVBQTdELFdBRkosQ0FUSixDQURKO0FBZ0JILENBNUREOztHQUFNWixJOztLQUFBQSxJO0FBOERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kM2E3ZjU4MTUwOTNjMmQwOGIxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnXHJcblxyXG4vL2NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKTtcclxuXHJcbmxldCBDQVJUID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsZXRhIEliw6lyaWNhIGRlIEJlbGxvdGEgZGUgNCw1IGtnIENvdmFwXCIsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJqYW1vbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGVjbGFkbyBMb2dpdGVjaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuLy9jb25zdCBzZXRVbml0SXRlbSA9IChpZCx1bml0KSA9PiBDQVJUWyBDQVJULmluZGV4T2YoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXSApIF0udWQgPSB1bml0O1xyXG5cclxuY29uc3QgQ2FydCA9ICh7b25OZXdJdGVtLGNhcnQsY2hhbmdlVW5pdH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKENBUlQpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgKTtcclxuXHJcbiAgICAvKiBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHByaWNlOiBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKVxyXG4gICAgfTsgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSAxIClbMF0udWQpOyAqL1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBzaG9wcGluZ0NhcnQubGVuZ3RoO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuc3R5bGUubGVmdCA9IChzaG9wcGluZ0NhcnQubGVuZ3RoID4gOSA/IGAyMXB4YCA6IGAyNXB4YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIC8qIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggWy4uLkNBUlRdICk7ICovXHJcblxyXG4gICAgICAgIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coQ0FSVCk7XHJcbiAgICAgICAgLy9zZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQgKTtcclxuICAgICAgICAvKiBzZXRTaG9wcGluZ0NhcnQoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7ICovXHJcbiAgICAgICAgLy9zaG9wcGluZ0NhcnQubWFwKCBlID0+IGNvbnNvbGUubG9nKGUpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggdG90YWxQcmljZSAtIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApLm1hcCggZSA9PiBlLnByaWNlKmUudWQgKSApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggWy4uLnNob3BwaW5nQ2FydCwgaXRlbV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc3Qgc2V0UHJpY2VDYXJ0ID0gKCkgPT4gdG90YWxQcmljZS5wcmljZSA9IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5NaSBjYXJyaXRvPGhyLz48L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3Qgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXtzZXRVbml0SXRlbX0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0vPiApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgdG90YWxQcmljZSB94oKsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=
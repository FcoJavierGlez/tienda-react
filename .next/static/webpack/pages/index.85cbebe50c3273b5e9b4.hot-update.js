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
    setTotalPrice(totalPrice - shoppingCart.map(function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0Iiwic2V0VW5pdEl0ZW0iLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwiYWRkSXRlbSIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLENBQ1A7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRE8sRUFTUDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRPLENBQVgsQyxDQW1CQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQ1gsSUFBRCxDQURMO0FBQUEsTUFDbkNZLFlBRG1DO0FBQUEsTUFDdEJDLGVBRHNCOztBQUFBLG1CQUVQRixzREFBUSxDQUFFQyxZQUFZLENBQUNFLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsQ0FBM0IsR0FBK0JGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDWCxLQUFGLEdBQVFXLENBQUMsQ0FBQ1YsRUFBZDtBQUFBLEdBQW5CLEVBQXNDVyxNQUF0QyxDQUE4QyxVQUFDRCxDQUFELEVBQUdFLEdBQUg7QUFBQSxXQUFXRixDQUFDLEdBQUNFLEdBQWI7QUFBQSxHQUE5QyxDQUFqQyxDQUZEO0FBQUEsTUFFbkNDLFVBRm1DO0FBQUEsTUFFeEJDLGFBRndCO0FBSTFDOzs7OztBQUlBQyx5REFBUyxDQUFFLFlBQU07QUFDYjs7O0FBR0EsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQUYsY0FBVSxDQUFDRyxTQUFYLEdBQXVCYixZQUFZLENBQUNFLE1BQXBDO0FBQ0FRLGNBQVUsQ0FBQ0ksS0FBWCxDQUFpQkMsSUFBakIsR0FBeUJmLFlBQVksQ0FBQ0UsTUFBYixHQUFzQixDQUF0QixrQkFBekI7QUFDSCxHQVBRLENBQVQ7O0FBU0EsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzNCLEVBQUQsRUFBSUssRUFBSixFQUFXO0FBQzNCOztBQUdBTSxnQkFBWSxDQUFDaUIsTUFBYixDQUFxQixVQUFBYixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDZixFQUFGLElBQVFBLEVBQVo7QUFBQSxLQUF0QixFQUF1QyxDQUF2QyxFQUEwQ0ssRUFBMUMsR0FBK0NBLEVBQS9DO0FBQ0FPLG1CQUFlLENBQUVELFlBQUYsQ0FBZjtBQUNBUSxpQkFBYSxDQUFFUixZQUFZLENBQUNFLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsQ0FBM0IsR0FBK0JGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDWCxLQUFGLEdBQVFXLENBQUMsQ0FBQ1YsRUFBZDtBQUFBLEtBQW5CLEVBQXNDVyxNQUF0QyxDQUE4QyxVQUFDRCxDQUFELEVBQUdFLEdBQUg7QUFBQSxhQUFXRixDQUFDLEdBQUNFLEdBQWI7QUFBQSxLQUE5QyxDQUFqQyxDQUFiLENBTjJCLENBVTNCO0FBQ0E7O0FBQ0E7QUFDQTtBQUNILEdBZEQ7O0FBZ0JBLE1BQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUE3QixFQUFFLEVBQUk7QUFDckJtQixpQkFBYSxDQUFFRCxVQUFVLEdBQUdQLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDWCxLQUFGLEdBQVFXLENBQUMsQ0FBQ1YsRUFBZDtBQUFBLEtBQW5CLENBQWYsQ0FBYjtBQUNBTyxtQkFBZSxDQUFFRCxZQUFZLENBQUNpQixNQUFiLENBQXFCLFVBQUFiLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNmLEVBQUYsS0FBU0EsRUFBYjtBQUFBLEtBQXRCLENBQUYsQ0FBZjtBQUNILEdBSEQ7O0FBS0EsTUFBTThCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLElBQUksRUFBSTtBQUNwQm5CLG1CQUFlLHdHQUFNRCxZQUFOLElBQW9Cb0IsSUFBcEIsR0FBZjtBQUNILEdBRkQsQ0F0QzBDLENBMEMxQzs7O0FBRUEsU0FDSTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyxXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXhDLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFwQixZQUFZLENBQUNFLE1BQWIsS0FBd0IsQ0FBeEIsR0FDQTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURBLEdBRUFGLFlBQVksQ0FBQ0csR0FBYixDQUFrQixVQUFDQyxDQUFELEVBQUdpQixDQUFIO0FBQUEsV0FBUyxNQUFDLGlEQUFEO0FBQVUsVUFBSSxFQUFFakIsQ0FBaEI7QUFBbUIsU0FBRyxFQUFFaUIsQ0FBeEI7QUFBMkIsZ0JBQVUsRUFBRUwsV0FBdkM7QUFBb0QsZ0JBQVUsRUFBRUUsVUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFUO0FBQUEsR0FBbEIsQ0FKUixDQUZKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsTUFBRSxFQUFDLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQTZEWCxVQUE3RCxXQUZKLENBVEosQ0FESjtBQWdCSCxDQTVERDs7R0FBTVosSTs7S0FBQUEsSTtBQThEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODVjYmViZTUwYzMyNzNiNWU5YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtQ2FydCBmcm9tICcuL0l0ZW1DYXJ0J1xyXG5cclxuLy9jYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYyk7XHJcblxyXG5sZXQgQ0FSVCA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlBhbGV0YSBJYsOpcmljYSBkZSBCZWxsb3RhIGRlIDQsNSBrZyBDb3ZhcFwiLCAvL1BhbGV0YSAxMDAgJSBJYsOpcmljYSBkZSBCZWxsb3RhIEFsdGEgRXhwcmVzaW9uIFBsYXRhIGRlIENvdmFwIGRlIDQsNSBrZ1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwiamFtb24ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDMwMCxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuXTtcclxuXHJcbi8vY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdW5pdCkgPT4gQ0FSVFsgQ0FSVC5pbmRleE9mKCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0gKSBdLnVkID0gdW5pdDtcclxuXHJcbmNvbnN0IENhcnQgPSAoe29uTmV3SXRlbSxjYXJ0LGNoYW5nZVVuaXR9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShDQVJUKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApICk7XHJcblxyXG4gICAgLyogY29uc3QgdG90YWxQcmljZSA9IHtcclxuICAgICAgICBwcmljZTogc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMilcclxuICAgIH07ICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgLyogY29uc29sZS5sb2coc2hvcHBpbmdDYXJ0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlclwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gMSApWzBdLnVkKTsgKi9cclxuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWNvdW50XCIpO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICAvKiBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZDtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIFsuLi5DQVJUXSApOyAqL1xyXG5cclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKENBUlQpO1xyXG4gICAgICAgIC8vc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7XHJcbiAgICAgICAgLyogc2V0U2hvcHBpbmdDYXJ0KCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApOyAqL1xyXG4gICAgICAgIC8vc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBjb25zb2xlLmxvZyhlKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApICk7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgIT09IGlkICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiB7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBbLi4uc2hvcHBpbmdDYXJ0LCBpdGVtXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zdCBzZXRQcmljZUNhcnQgPSAoKSA9PiB0b3RhbFByaWNlLnByaWNlID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hbWVfY2FydFwiPk1pIGNhcnJpdG88aHIvPjwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdCBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIj5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvZGl2PiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5tYXAoIChlLGkpID0+IDxJdGVtQ2FydCBpdGVtPXtlfSBrZXk9e2l9IGNoYW5nZVVuaXQ9e3NldFVuaXRJdGVtfSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfS8+IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+VG90YWwgYSBwYWdhcjogeyB0b3RhbFByaWNlIH3igqw8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
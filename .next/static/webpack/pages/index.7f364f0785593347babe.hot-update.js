webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCart */ "./components/Cart/ItemCart/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Cart\\Cart.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
  ud: 1
}, {
  id: 2,
  name: "Teclado Logitech",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 19.95,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CART),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];

  var totalPrice = {
    price: CART.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2)
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //console.log(shoppingCart);
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var addUnitItem = function addUnitItem(id, ud) {
    CART.filter(function (e) {
      return e.id == id;
    })[0].ud = ud;
    setShoppingCart(CART);
  };

  var setPriceCart = function setPriceCart() {
    return totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2);
  }; //const refreshPriceCart = cart => cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc);

  /* const [price,setPrice] = useState( cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc) );
    setPrice( cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc) ); */

  /* const [price,setPrice] = useState(0);
    setPrice( cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc) ); */


  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.map(function (e, i) {
    return __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: e,
      key: i,
      changeUnit: addUnitItem,
      onAddUnitItem: setPriceCart,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 48
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "Total a pagar: ", totalPrice.price, "\u20AC")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInRvdGFsUHJpY2UiLCJsZW5ndGgiLCJtYXAiLCJlIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0IiwiYWRkVW5pdEl0ZW0iLCJmaWx0ZXIiLCJzZXRQcmljZUNhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRFMsRUFTVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRTLEVBaUJUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBakJTLEVBeUJUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBekJTLEVBaUNUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBakNTLEVBeUNUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBekNTLEVBaURUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBakRTLEVBeURUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBekRTLEVBaUVUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBakVTLEVBeUVUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpC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QUFEO0FBQVUsVUFBSSxFQUFFZCxDQUFoQjtBQUFtQixTQUFHLEVBQUVjLENBQXhCO0FBQTJCLGdCQUFVLEVBQUVILFdBQXZDO0FBQW9ELG1CQUFhLEVBQUVFLFlBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFBLEdBQWxCLENBSlIsQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBQyxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE2RGhCLFVBQVUsQ0FBQ1QsS0FBeEUsV0FKSixDQVRKLENBREo7QUFrQkgsQ0E5Q0Q7O0dBQU1FLEk7O0tBQUFBLEk7QUFnRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmMzY0ZjA3ODU1OTMzNDdiYWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCdcclxuXHJcbi8vY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG5cclxuY29uc3QgQ0FSVCA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlBhbGV0YSBJYsOpcmljYSBkZSBCZWxsb3RhIGRlIDQsNSBrZyBDb3ZhcFwiLCAvL1BhbGV0YSAxMDAgJSBJYsOpcmljYSBkZSBCZWxsb3RhIEFsdGEgRXhwcmVzaW9uIFBsYXRhIGRlIENvdmFwIGRlIDQsNSBrZ1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwiamFtb24ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDMwMCxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuXTtcclxuXHJcbi8vY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdW5pdCkgPT4gQ0FSVFsgQ0FSVC5pbmRleE9mKCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0gKSBdLnVkID0gdW5pdDtcclxuXHJcbmNvbnN0IENhcnQgPSAoe29uTmV3SXRlbSxjYXJ0LGNoYW5nZVVuaXR9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShDQVJUKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHByaWNlOiBDQVJULmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMilcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBzaG9wcGluZ0NhcnQubGVuZ3RoO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuc3R5bGUubGVmdCA9IChzaG9wcGluZ0NhcnQubGVuZ3RoID4gOSA/IGAyMXB4YCA6IGAyNXB4YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhZGRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggQ0FSVCApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaWNlQ2FydCA9ICgpID0+IHRvdGFsUHJpY2UucHJpY2UgPSBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKTtcclxuICAgIC8vY29uc3QgcmVmcmVzaFByaWNlQ2FydCA9IGNhcnQgPT4gY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG4gICAgLyogY29uc3QgW3ByaWNlLHNldFByaWNlXSA9IHVzZVN0YXRlKCBjYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykgKTtcclxuXHJcbiAgICBzZXRQcmljZSggY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpICk7ICovXHJcbiAgICAvKiBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgc2V0UHJpY2UoIGNhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKSApOyAqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5NaSBjYXJyaXRvPGhyLz48L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3Qgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXthZGRVbml0SXRlbX0gb25BZGRVbml0SXRlbT17c2V0UHJpY2VDYXJ0fSAvPiApICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+VG90YWwgYSBwYWdhcjogeyBwcmljZSB94oKsPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlRvdGFsIGEgcGFnYXI6IHsgcmVmcmVzaFByaWNlQ2FydChjYXJ0KSB94oKsPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+VG90YWwgYSBwYWdhcjogeyB0b3RhbFByaWNlLnByaWNlIH3igqw8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
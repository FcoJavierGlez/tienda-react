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
}
/* {
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
},
{
    id: 2,
    name: "Teclado Logitech",
    description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
    img: "nd.png",
    price: 19.95,
    ud: 1
}, */
]; //const setUnitItem = (id,unit) => CART[ CART.indexOf( CART.filter( e => e.id == id )[0] ) ].ud = unit;

var Cart = function Cart(_ref) {
  _s();

  var onNewItem = _ref.onNewItem,
      cart = _ref.cart,
      changeUnit = _ref.changeUnit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CART),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];

  var totalPrice = {
    price: shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2)
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var addUnitItem = function addUnitItem(id, ud) {
    CART.filter(function (e) {
      return e.id == id;
    })[0].ud = ud; //console.log(CART);

    setShoppingCart([].concat(CART));
    console.log(shoppingCart); //setShoppingCart( [...CART] );
  };

  var deleteItem = function deleteItem(id) {
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    })); //console.log(shoppingCart.length);
    //console.log(shoppingCart);

    setPriceCart();
  };

  var setPriceCart = function setPriceCart() {
    return totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map(function (e) {
      return e.price * e.ud;
    }).reduce(function (e, acc) {
      return e + acc;
    }).toFixed(2);
  };

  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.map(function (e, i) {
    return __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: e,
      key: i,
      changeUnit: addUnitItem,
      onAddUnitItem: setPriceCart,
      deleteItem: deleteItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 48
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInRvdGFsUHJpY2UiLCJsZW5ndGgiLCJtYXAiLCJlIiwicmVkdWNlIiwiYWNjIiwidG9GaXhlZCIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0IiwiYWRkVW5pdEl0ZW0iLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlSXRlbSIsInNldFByaWNlQ2FydCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsMkNBRlY7QUFFdUQ7QUFDbkRDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFdBSlQ7QUFLSUMsT0FBSyxFQUFFLEdBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FEUyxFQVNUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQlMsQ0FBYixDLENBbUZBOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlDO0FBQUE7O0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREEsR0FFQUgsWUFBWSxDQUFDSSxHQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBR2lCLENBQUg7QUFBQSxXQUFTLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVqQixDQUFoQjtBQUFtQixTQUFHLEVBQUVpQixDQUF4QjtBQUEyQixnQkFBVSxFQUFFTixXQUF2QztBQUFvRCxtQkFBYSxFQUFFSyxZQUFuRTtBQUFpRixnQkFBVSxFQUFFRCxVQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBQSxHQUFsQixDQUpSLENBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUMsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBNkRsQixVQUFVLENBQUNULEtBQXhFLFdBRkosQ0FUSixDQURKO0FBZ0JILENBOUNEOztHQUFNRSxJOztLQUFBQSxJO0FBZ0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjRkOGJhZmFlNGRhZjI2ZWYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnXHJcblxyXG4vL2NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKTtcclxuXHJcbmNvbnN0IENBUlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICAvKiB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sICovXHJcbl07XHJcblxyXG4vL2NvbnN0IHNldFVuaXRJdGVtID0gKGlkLHVuaXQpID0+IENBUlRbIENBUlQuaW5kZXhPZiggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdICkgXS51ZCA9IHVuaXQ7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHtvbk5ld0l0ZW0sY2FydCxjaGFuZ2VVbml0fSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCxzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoQ0FSVCk7XHJcblxyXG4gICAgY29uc3QgdG90YWxQcmljZSA9IHtcclxuICAgICAgICBwcmljZTogc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMilcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZFVuaXRJdGVtID0gKGlkLHVkKSA9PiB7XHJcbiAgICAgICAgQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhDQVJUKTtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIFsuLi5DQVJUXSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgLy9zZXRTaG9wcGluZ0NhcnQoIFsuLi5DQVJUXSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQubGVuZ3RoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgc2V0UHJpY2VDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpY2VDYXJ0ID0gKCkgPT4gdG90YWxQcmljZS5wcmljZSA9IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5NaSBjYXJyaXRvPGhyLz48L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3Qgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXthZGRVbml0SXRlbX0gb25BZGRVbml0SXRlbT17c2V0UHJpY2VDYXJ0fSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfS8+ICkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgdG90YWxQcmljZS5wcmljZSB94oKsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=
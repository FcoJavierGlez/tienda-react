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
}];

var setUnitItem = function setUnitItem(id, unit) {
  return CART[CART.indexOf(CART.filter(function (e) {
    return e.id == id;
  })[0])].ud = unit;
};

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
      lineNumber: 134,
      columnNumber: 17
    }
  }, "Total a pagar: ", shoppingCart.map(function (e) {
    return e.price * e.ud;
  }).reduce(function (e, acc) {
    return e + acc;
  }).toFixed(2), "\u20AC")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJzZXRVbml0SXRlbSIsInVuaXQiLCJpbmRleE9mIiwiZmlsdGVyIiwiZSIsIkNhcnQiLCJvbk5ld0l0ZW0iLCJjYXJ0IiwiY2hhbmdlVW5pdCIsInVzZVN0YXRlIiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwidG90YWxQcmljZSIsImxlbmd0aCIsIm1hcCIsInJlZHVjZSIsImFjYyIsInRvRml4ZWQiLCJ1c2VFZmZlY3QiLCJ0b3RhbEl0ZW1zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsImFkZFVuaXRJdGVtIiwic2V0UHJpY2VDYXJ0IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSwyQ0FGVjtBQUV1RDtBQUNuREMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsV0FKVDtBQUtJQyxPQUFLLEVBQUUsR0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQURTLEVBU1Q7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLGtCQUZWO0FBR0lDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFFBSlQ7QUFLSUMsT0FBSyxFQUFFLEtBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FUUyxFQWlCVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQWpCUyxFQXlCVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQXpCUyxFQWlDVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQWpDUyxFQXlDVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQXpDUyxFQWlEVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQWpEUyxFQXlEVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQXpEUyxFQWlFVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQWpFUyxFQXlFVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQXpFUyxDQUFiOztBQW1GQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixFQUFELEVBQUlPLElBQUo7QUFBQSxTQUFhUixJQUFJLENBQUVBLElBQUksQ0FBQ1MsT0FBTCxDQUFjVCxJQUFJLENBQUNVLE1BQUwsQ0FBYSxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVixFQUFGLElBQVFBLEVBQVo7QUFBQSxHQUFkLEVBQStCLENBQS9CLENBQWQsQ0FBRixDQUFKLENBQTBESyxFQUExRCxHQUErREUsSUFBNUU7QUFBQSxDQUFwQjs7QUFFQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQ2hCLElBQUQsQ0FETDtBQUFBLE1BQ25DaUIsWUFEbUM7QUFBQSxNQUN0QkMsZUFEc0I7O0FBRzFDLE1BQU1DLFVBQVUsR0FBRztBQUNmZCxTQUFLLEVBQUVMLElBQUksQ0FBQ29CLE1BQUwsSUFBZSxDQUFmLEdBQW1CLENBQW5CLEdBQXVCSCxZQUFZLENBQUNJLEdBQWIsQ0FBa0IsVUFBQVYsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ04sS0FBRixHQUFRTSxDQUFDLENBQUNMLEVBQWQ7QUFBQSxLQUFuQixFQUFzQ2dCLE1BQXRDLENBQThDLFVBQUNYLENBQUQsRUFBR1ksR0FBSDtBQUFBLGFBQVdaLENBQUMsR0FBR1ksR0FBZjtBQUFBLEtBQTlDLEVBQWtFQyxPQUFsRSxDQUEwRSxDQUExRTtBQURmLEdBQW5CO0FBSUFDLHlEQUFTLENBQUUsWUFBTTtBQUNiO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQUYsY0FBVSxDQUFDRyxTQUFYLEdBQXVCWixZQUFZLENBQUNHLE1BQXBDO0FBQ0FNLGNBQVUsQ0FBQ0ksS0FBWCxDQUFpQkMsSUFBakIsR0FBeUJkLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUF0QixrQkFBekI7QUFDSCxHQUxRLENBQVQ7O0FBT0EsTUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQy9CLEVBQUQsRUFBSUssRUFBSixFQUFXO0FBQzNCTixRQUFJLENBQUNVLE1BQUwsQ0FBYSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDVixFQUFGLElBQVFBLEVBQVo7QUFBQSxLQUFkLEVBQStCLENBQS9CLEVBQWtDSyxFQUFsQyxHQUF1Q0EsRUFBdkM7QUFDQVksbUJBQWUsQ0FBRWxCLElBQUYsQ0FBZjtBQUNILEdBSEQ7O0FBS0EsTUFBTWlDLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTWQsVUFBVSxDQUFDZCxLQUFYLEdBQW1CWSxZQUFZLENBQUNHLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkIsQ0FBM0IsR0FBK0JILFlBQVksQ0FBQ0ksR0FBYixDQUFrQixVQUFBVixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDTixLQUFGLEdBQVFNLENBQUMsQ0FBQ0wsRUFBZDtBQUFBLEtBQW5CLEVBQXNDZ0IsTUFBdEMsQ0FBOEMsVUFBQ1gsQ0FBRCxFQUFHWSxHQUFIO0FBQUEsYUFBV1osQ0FBQyxHQUFHWSxHQUFmO0FBQUEsS0FBOUMsRUFBa0VDLE9BQWxFLENBQTBFLENBQTFFLENBQXhEO0FBQUEsR0FBckIsQ0FuQjBDLENBb0IxQzs7QUFDQTs7O0FBR0E7Ozs7QUFJQSxTQUNJO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBeEMsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUVAsWUFBWSxDQUFDRyxNQUFiLEtBQXdCLENBQXhCLEdBQ0E7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEQSxHQUVBSCxZQUFZLENBQUNJLEdBQWIsQ0FBa0IsVUFBQ1YsQ0FBRCxFQUFHdUIsQ0FBSDtBQUFBLFdBQVMsTUFBQyxpREFBRDtBQUFVLFVBQUksRUFBRXZCLENBQWhCO0FBQW1CLFNBQUcsRUFBRXVCLENBQXhCO0FBQTJCLGdCQUFVLEVBQUVGLFdBQXZDO0FBQW9ELG1CQUFhLEVBQUVDLFlBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFBLEdBQWxCLENBSlIsQ0FGSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBQyxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE2RGhCLFlBQVksQ0FBQ0ksR0FBYixDQUFrQixVQUFBVixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDTixLQUFGLEdBQVFNLENBQUMsQ0FBQ0wsRUFBZDtBQUFBLEdBQW5CLEVBQXNDZ0IsTUFBdEMsQ0FBOEMsVUFBQ1gsQ0FBRCxFQUFHWSxHQUFIO0FBQUEsV0FBV1osQ0FBQyxHQUFHWSxHQUFmO0FBQUEsR0FBOUMsRUFBa0VDLE9BQWxFLENBQTBFLENBQTFFLENBQTdELFdBTEosQ0FUSixDQURKO0FBbUJILENBL0NEOztHQUFNWixJOztLQUFBQSxJO0FBaURTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjljZjFiY2IzNzI2NzM3M2NmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnXHJcblxyXG4vL2NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKTtcclxuXHJcbmNvbnN0IENBUlQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBzZXRVbml0SXRlbSA9IChpZCx1bml0KSA9PiBDQVJUWyBDQVJULmluZGV4T2YoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXSApIF0udWQgPSB1bml0O1xyXG5cclxuY29uc3QgQ2FydCA9ICh7b25OZXdJdGVtLGNhcnQsY2hhbmdlVW5pdH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKENBUlQpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB7XHJcbiAgICAgICAgcHJpY2U6IENBUlQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZFVuaXRJdGVtID0gKGlkLHVkKSA9PiB7XHJcbiAgICAgICAgQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBDQVJUICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpY2VDYXJ0ID0gKCkgPT4gdG90YWxQcmljZS5wcmljZSA9IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpO1xyXG4gICAgLy9jb25zdCByZWZyZXNoUHJpY2VDYXJ0ID0gY2FydCA9PiBjYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYyk7XHJcbiAgICAvKiBjb25zdCBbcHJpY2Usc2V0UHJpY2VdID0gdXNlU3RhdGUoIGNhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKSApO1xyXG5cclxuICAgIHNldFByaWNlKCBjYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykgKTsgKi9cclxuICAgIC8qIGNvbnN0IFtwcmljZSxzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBzZXRQcmljZSggY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpICk7ICovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hbWVfY2FydFwiPk1pIGNhcnJpdG88aHIvPjwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdCBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIj5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvZGl2PiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5tYXAoIChlLGkpID0+IDxJdGVtQ2FydCBpdGVtPXtlfSBrZXk9e2l9IGNoYW5nZVVuaXQ9e2FkZFVuaXRJdGVtfSBvbkFkZFVuaXRJdGVtPXtzZXRQcmljZUNhcnR9IC8+ICkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5Ub3RhbCBhIHBhZ2FyOiB7IHByaWNlIH3igqw8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+VG90YWwgYSBwYWdhcjogeyByZWZyZXNoUHJpY2VDYXJ0KGNhcnQpIH3igqw8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+VG90YWwgYSBwYWdhcjogeyB0b3RhbFByaWNlLnByaWNlIH3igqw8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj5Ub3RhbCBhIHBhZ2FyOiB7IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMikgfeKCrDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiXSwic291cmNlUm9vdCI6IiJ9
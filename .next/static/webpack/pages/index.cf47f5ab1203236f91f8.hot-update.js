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
}]; //const setUnitItem = (id,unit) => CART[ CART.indexOf( CART.filter( e => e.id == id )[0] ) ].ud = unit;

var Cart = function Cart(_ref) {
  _s();

  var onNewItem = _ref.onNewItem,
      cart = _ref.cart,
      changeUnit = _ref.changeUnit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CART),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];
  /* const totalPrice = {
      price: shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2)
  }; */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var addUnitItem = function addUnitItem(id, ud) {
    CART.filter(function (e) {
      return e.id == id;
    })[0].ud = ud; //console.log(CART);

    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id == id;
    })[0].ud = ud);
    /* setShoppingCart( CART.filter( e => e.id == id )[0].ud = ud ); */

    shoppingCart.map(function (e) {
      return console.log(e);
    }); //setShoppingCart( [...CART] );
  };

  var deleteItem = function deleteItem(id) {
    setShoppingCart(shoppingCart.filter(function (e) {
      return e.id !== id;
    })); //console.log(shoppingCart.length);
    //console.log(shoppingCart);

    setPriceCart();
  }; //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);


  return __jsx("div", {
    id: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.forEach(function (e, i) {
    return __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: e,
      key: i,
      changeUnit: addUnitItem
      /* onAddUnitItem={setPriceCart} */
      ,
      deleteItem: deleteItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 52
      }
    });
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwic3R5bGUiLCJsZWZ0IiwiYWRkVW5pdEl0ZW0iLCJmaWx0ZXIiLCJlIiwibWFwIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUl0ZW0iLCJzZXRQcmljZUNhcnQiLCJmb3JFYWNoIiwiaSIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSwyQ0FGVjtBQUV1RDtBQUNuREMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsV0FKVDtBQUtJQyxPQUFLLEVBQUUsR0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQURTLEVBU1Q7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLGtCQUZWO0FBR0lDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFFBSlQ7QUFLSUMsT0FBSyxFQUFFLEtBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FUUyxDQUFiLEMsQ0FtQkE7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUM7QUFBQTs7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFo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QUFiLENBQWtCLFVBQUFELENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNuQixLQUFGLEdBQVFtQixDQUFDLENBQUNsQixFQUFkO0FBQUEsR0FBbkIsRUFBc0MwQixNQUF0QyxDQUE4QyxVQUFDUixDQUFELEVBQUdTLEdBQUg7QUFBQSxXQUFXVCxDQUFDLEdBQUNTLEdBQWI7QUFBQSxHQUE5QyxDQUE1RixXQUhKLENBVEosQ0FESjtBQWlCSCxDQWhERDs7R0FBTTFCLEk7O0tBQUFBLEk7QUFrRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmNDdmNWFiMTIwMzIzNmY5MWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCdcclxuXHJcbi8vY2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpO1xyXG5cclxuY29uc3QgQ0FSVCA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlBhbGV0YSBJYsOpcmljYSBkZSBCZWxsb3RhIGRlIDQsNSBrZyBDb3ZhcFwiLCAvL1BhbGV0YSAxMDAgJSBJYsOpcmljYSBkZSBCZWxsb3RhIEFsdGEgRXhwcmVzaW9uIFBsYXRhIGRlIENvdmFwIGRlIDQsNSBrZ1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwiamFtb24ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDMwMCxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuXTtcclxuXHJcbi8vY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdW5pdCkgPT4gQ0FSVFsgQ0FSVC5pbmRleE9mKCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0gKSBdLnVkID0gdW5pdDtcclxuXHJcbmNvbnN0IENhcnQgPSAoe29uTmV3SXRlbSxjYXJ0LGNoYW5nZVVuaXR9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShDQVJUKTtcclxuXHJcbiAgICAvKiBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHByaWNlOiBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKVxyXG4gICAgfTsgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWNvdW50XCIpO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkVW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKENBUlQpO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApO1xyXG4gICAgICAgIC8qIHNldFNob3BwaW5nQ2FydCggQ0FSVC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQgKTsgKi9cclxuICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGNvbnNvbGUubG9nKGUpICk7XHJcbiAgICAgICAgLy9zZXRTaG9wcGluZ0NhcnQoIFsuLi5DQVJUXSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQubGVuZ3RoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgc2V0UHJpY2VDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zdCBzZXRQcmljZUNhcnQgPSAoKSA9PiB0b3RhbFByaWNlLnByaWNlID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUgKyBhY2MpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwic2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hbWVfY2FydFwiPk1pIGNhcnJpdG88aHIvPjwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdCBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIj5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvZGl2PiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5mb3JFYWNoKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXthZGRVbml0SXRlbX0gLyogb25BZGRVbml0SXRlbT17c2V0UHJpY2VDYXJ0fSAqLyBkZWxldGVJdGVtPXtkZWxldGVJdGVtfS8+ICkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj5Ub3RhbCBhIHBhZ2FyOiB7IHRvdGFsUHJpY2UucHJpY2UgfeKCrDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgfeKCrDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiXSwic291cmNlUm9vdCI6IiJ9
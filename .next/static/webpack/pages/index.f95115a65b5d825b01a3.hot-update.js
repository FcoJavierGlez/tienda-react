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
        lineNumber: 65,
        columnNumber: 48
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGVuZ3RoIiwic3R5bGUiLCJsZWZ0IiwiYWRkVW5pdEl0ZW0iLCJmaWx0ZXIiLCJlIiwibWFwIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUl0ZW0iLCJzZXRQcmljZUNhcnQiLCJpIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLDJDQUZWO0FBRXVEO0FBQ25EQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxXQUpUO0FBS0lDLE9BQUssRUFBRSxHQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBRFMsRUFTVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsa0JBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsS0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQVRTLENBQWIsQyxDQW1CQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7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LENBQUNhLEdBQWIsQ0FBa0IsVUFBQUQsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ25CLEtBQUYsR0FBUW1CLENBQUMsQ0FBQ2xCLEVBQWQ7QUFBQSxHQUFuQixFQUFzQ3lCLE1BQXRDLENBQThDLFVBQUNQLENBQUQsRUFBR1EsR0FBSDtBQUFBLFdBQVdSLENBQUMsR0FBQ1EsR0FBYjtBQUFBLEdBQTlDLENBQTVGLFdBSEosQ0FUSixDQURKO0FBaUJILENBaEREOztHQUFNekIsSTs7S0FBQUEsSTtBQWtEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjk1MTE1YTY1YjVkODI1YjAxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtQ2FydCBmcm9tICcuL0l0ZW1DYXJ0J1xyXG5cclxuLy9jYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYyk7XHJcblxyXG5jb25zdCBDQVJUID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsZXRhIEliw6lyaWNhIGRlIEJlbGxvdGEgZGUgNCw1IGtnIENvdmFwXCIsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJqYW1vbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGVjbGFkbyBMb2dpdGVjaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuLy9jb25zdCBzZXRVbml0SXRlbSA9IChpZCx1bml0KSA9PiBDQVJUWyBDQVJULmluZGV4T2YoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXSApIF0udWQgPSB1bml0O1xyXG5cclxuY29uc3QgQ2FydCA9ICh7b25OZXdJdGVtLGNhcnQsY2hhbmdlVW5pdH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKENBUlQpO1xyXG5cclxuICAgIC8qIGNvbnN0IHRvdGFsUHJpY2UgPSB7XHJcbiAgICAgICAgcHJpY2U6IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpXHJcbiAgICB9OyAqL1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBzaG9wcGluZ0NhcnQubGVuZ3RoO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuc3R5bGUubGVmdCA9IChzaG9wcGluZ0NhcnQubGVuZ3RoID4gOSA/IGAyMXB4YCA6IGAyNXB4YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhZGRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coQ0FSVCk7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7XHJcbiAgICAgICAgLyogc2V0U2hvcHBpbmdDYXJ0KCBDQVJULmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF0udWQgPSB1ZCApOyAqL1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gY29uc29sZS5sb2coZSkgKTtcclxuICAgICAgICAvL3NldFNob3BwaW5nQ2FydCggWy4uLkNBUlRdICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgIT09IGlkICkgKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNob3BwaW5nQ2FydC5sZW5ndGgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2hvcHBpbmdDYXJ0KTtcclxuICAgICAgICBzZXRQcmljZUNhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnN0IHNldFByaWNlQ2FydCA9ICgpID0+IHRvdGFsUHJpY2UucHJpY2UgPSBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmFtZV9jYXJ0XCI+TWkgY2Fycml0bzxoci8+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0IHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5sZW5ndGggPT09IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JleVwiPkVsIGNhcnJpdG8gZXN0w6EgdmFjw61vPC9kaXY+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lm1hcCggKGUsaSkgPT4gPEl0ZW1DYXJ0IGl0ZW09e2V9IGtleT17aX0gY2hhbmdlVW5pdD17YWRkVW5pdEl0ZW19IG9uQWRkVW5pdEl0ZW09e3NldFByaWNlQ2FydH0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0vPiApICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+VG90YWwgYSBwYWdhcjogeyB0b3RhbFByaWNlLnByaWNlIH3igqw8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj5Ub3RhbCBhIHBhZ2FyOiB7IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlK2FjYyApIH3igqw8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
    console.log(shoppingCart);
    console.log("filter");
    console.log(shoppingCart.filter(function (e) {
      return e.id == 1;
    })[0].ud);
    var totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? "21px" : "25px";
  });

  var changeUnitItem = function changeUnitItem(id, ud) {
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
      changeUnit: changeUnitItem,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Il0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJ0b3RhbEl0ZW1zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsImNoYW5nZVVuaXRJdGVtIiwiZGVsZXRlSXRlbSIsImFkZEl0ZW0iLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLElBQUlBLElBQUksR0FBRyxDQUNQO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSwyQ0FGVjtBQUV1RDtBQUNuREMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsV0FKVDtBQUtJQyxPQUFLLEVBQUUsR0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQURPLEVBU1A7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLGtCQUZWO0FBR0lDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFFBSlQ7QUFLSUMsT0FBSyxFQUFFLEtBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FUTyxDQUFYLEMsQ0FtQkE7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUM7QUFBQTs7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJ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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBeEMsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUXRCLFlBQVksQ0FBQ0UsTUFBYixLQUF3QixDQUF4QixHQUNBO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREEsR0FFQUYsWUFBWSxDQUFDRyxHQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBR21CLENBQUg7QUFBQSxXQUFTLE1BQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVuQixDQUFoQjtBQUFtQixTQUFHLEVBQUVtQixDQUF4QjtBQUEyQixnQkFBVSxFQUFFSixjQUF2QztBQUF1RCxnQkFBVSxFQUFFQyxVQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBQSxHQUFsQixDQUpSLENBRkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUMsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBNkRiLFVBQTdELFdBRkosQ0FUSixDQURKO0FBZ0JILENBNUREOztHQUFNWixJOztLQUFBQSxJO0FBOERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Y2QyNWUwMTllNGQ3NzY4ZDE1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnXHJcblxyXG4vL2NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKTtcclxuXHJcbmxldCBDQVJUID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsZXRhIEliw6lyaWNhIGRlIEJlbGxvdGEgZGUgNCw1IGtnIENvdmFwXCIsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJqYW1vbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGVjbGFkbyBMb2dpdGVjaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuLy9jb25zdCBzZXRVbml0SXRlbSA9IChpZCx1bml0KSA9PiBDQVJUWyBDQVJULmluZGV4T2YoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXSApIF0udWQgPSB1bml0O1xyXG5cclxuY29uc3QgQ2FydCA9ICh7b25OZXdJdGVtLGNhcnQsY2hhbmdlVW5pdH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKENBUlQpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgKTtcclxuXHJcbiAgICAvKiBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHByaWNlOiBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKVxyXG4gICAgfTsgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG9wcGluZ0NhcnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSAxIClbMF0udWQpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBzaG9wcGluZ0NhcnQubGVuZ3RoO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuc3R5bGUubGVmdCA9IChzaG9wcGluZ0NhcnQubGVuZ3RoID4gOSA/IGAyMXB4YCA6IGAyNXB4YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIC8qIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggWy4uLkNBUlRdICk7ICovXHJcblxyXG4gICAgICAgIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQ7XHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQgKTtcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coQ0FSVCk7XHJcbiAgICAgICAgLy9zZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdLnVkID0gdWQgKTtcclxuICAgICAgICAvKiBzZXRTaG9wcGluZ0NhcnQoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkICk7ICovXHJcbiAgICAgICAgLy9zaG9wcGluZ0NhcnQubWFwKCBlID0+IGNvbnNvbGUubG9nKGUpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KCBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgIT09IGlkICkgKTtcclxuICAgICAgICBDQVJUID0gc2hvcHBpbmdDYXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIFsuLi5zaG9wcGluZ0NhcnQsIGl0ZW1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnN0IHNldFByaWNlQ2FydCA9ICgpID0+IHRvdGFsUHJpY2UucHJpY2UgPSBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmFtZV9jYXJ0XCI+TWkgY2Fycml0bzxoci8+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0IHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5sZW5ndGggPT09IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JleVwiPkVsIGNhcnJpdG8gZXN0w6EgdmFjw61vPC9kaXY+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lm1hcCggKGUsaSkgPT4gPEl0ZW1DYXJ0IGl0ZW09e2V9IGtleT17aX0gY2hhbmdlVW5pdD17Y2hhbmdlVW5pdEl0ZW19IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19Lz4gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj5Ub3RhbCBhIHBhZ2FyOiB7IHRvdGFsUHJpY2UgfeKCrDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiXSwic291cmNlUm9vdCI6IiJ9
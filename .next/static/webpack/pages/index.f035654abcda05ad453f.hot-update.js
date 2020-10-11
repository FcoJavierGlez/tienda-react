webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart/index.js");
/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ItemList */ "./components/ItemList/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ITEMS_DB = [{
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
  id: 3,
  name: "Piano de cola",
  description: "ñdjabvndmnbñnbéñkah jerodbklja´ñ´ldkfbmnñdklfhjj n",
  img: "nd.png",
  price: 1800,
  ud: 1
}];

var addItemToCart = function addItemToCart(id) {
  ITEMS_DB.filter(function (e) {
    return e.id == id;
  })[0];
  console.log("Añadido");
};

var prueba = function prueba(item) {
  onNewItem = item;
};

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"]
  /* cart={CART} */
  , {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewItem: addItemToCart
    /* cart={CART} changeUnit={setUnitItem} */
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSVRFTVNfREIiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJhZGRJdGVtVG9DYXJ0IiwiZmlsdGVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcnVlYmEiLCJpdGVtIiwib25OZXdJdGVtIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsMkNBRlY7QUFFdUQ7QUFDbkRDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFdBSlQ7QUFLSUMsT0FBSyxFQUFFLEdBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FEYSxFQVNiO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxrQkFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxLQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBVGEsRUFpQmI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLGVBRlY7QUFHSUMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsUUFKVDtBQUtJQyxPQUFLLEVBQUUsSUFMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQWpCYSxDQUFqQjs7QUEyQkEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBTixFQUFFLEVBQUk7QUFBQ0QsVUFBUSxDQUFDUSxNQUFULENBQWlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNSLEVBQUYsSUFBUUEsRUFBWjtBQUFBLEdBQWxCLEVBQW1DLENBQW5DO0FBQXVDUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQXVCLENBQTNGOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLElBQUksRUFBSTtBQUNuQkMsV0FBUyxHQUFHRCxJQUFaO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBRWhCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFHO0FBQUM7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFFUjtBQUFlO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosQ0FESjtBQWdDSCxDQWxDRDs7S0FBTVEsSztBQW9DU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjAzNTY1NGFiY2RhMDVhZDQ1M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtTGlzdCc7XHJcblxyXG5jb25zdCBJVEVNU19EQiA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlBhbGV0YSBJYsOpcmljYSBkZSBCZWxsb3RhIGRlIDQsNSBrZyBDb3ZhcFwiLCAvL1BhbGV0YSAxMDAgJSBJYsOpcmljYSBkZSBCZWxsb3RhIEFsdGEgRXhwcmVzaW9uIFBsYXRhIGRlIENvdmFwIGRlIDQsNSBrZ1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwiamFtb24ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDMwMCxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlRlY2xhZG8gTG9naXRlY2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlBpYW5vIGRlIGNvbGFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcIm5kLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxODAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWRkSXRlbVRvQ2FydCA9IGlkID0+IHtJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdOyBjb25zb2xlLmxvZyhcIkHDsWFkaWRvXCIpfVxyXG5cclxuY29uc3QgcHJ1ZWJhID0gaXRlbSA9PiB7XHJcbiAgICBvbk5ld0l0ZW0gPSBpdGVtO1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IC8qIGNhcnQ9e0NBUlR9ICovIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydCBvbk5ld0l0ZW09e2FkZEl0ZW1Ub0NhcnR9IC8qIGNhcnQ9e0NBUlR9IGNoYW5nZVVuaXQ9e3NldFVuaXRJdGVtfSAqLy8+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSVRFTVNfREIubWFwKCBlID0+IGUgKSlcclxuICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIGUgPT4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbk5ld0l0ZW0oZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggSVRFTVNfREIuZmlsdGVyKCBlbCA9PiBlbC5pZCA9PSBlLmlkIClbMF0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBydWViYSggSVRFTVNfREIuZmlsdGVyKCBlbCA9PiBlbC5pZCA9PSBlLmlkIClbMF0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWdyZWdhciBhbCBjYXJyaXRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IClcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKElURU1TX0RCLm1hcCggZSA9PiBlICkpXHJcbiAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCBlID0+IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2UubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV3SXRlbShlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWdyZWdhciBhbCBjYXJyaXRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IClcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEl0ZW1MaXN0IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==
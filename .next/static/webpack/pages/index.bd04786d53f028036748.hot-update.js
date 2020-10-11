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
  }), //console.log(ITEMS_DB.map( e => e ))
  ITEMS_DB.map(function (e) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 40
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, e.name), __jsx("button", {
      type: "button",
      onClick: function onClick() {
        //onNewItem(e.id);
        console.log(ITEMS_DB.filter(function (el) {
          return el.id == e.id;
        })[0]);
        prueba(ITEMS_DB.filter(function (el) {
          return el.id == e.id;
        })[0]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "Agregar al carrito"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSVRFTVNfREIiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJhZGRJdGVtVG9DYXJ0IiwiZmlsdGVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcnVlYmEiLCJpdGVtIiwib25OZXdJdGVtIiwiSW5kZXgiLCJtYXAiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSwyQ0FGVjtBQUV1RDtBQUNuREMsYUFBVyxFQUFFLG9EQUhqQjtBQUlJQyxLQUFHLEVBQUUsV0FKVDtBQUtJQyxPQUFLLEVBQUUsR0FMWDtBQU1JQyxJQUFFLEVBQUU7QUFOUixDQURhLEVBU2I7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLGtCQUZWO0FBR0lDLGFBQVcsRUFBRSxvREFIakI7QUFJSUMsS0FBRyxFQUFFLFFBSlQ7QUFLSUMsT0FBSyxFQUFFLEtBTFg7QUFNSUMsSUFBRSxFQUFFO0FBTlIsQ0FUYSxFQWlCYjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsZUFGVjtBQUdJQyxhQUFXLEVBQUUsb0RBSGpCO0FBSUlDLEtBQUcsRUFBRSxRQUpUO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLElBQUUsRUFBRTtBQU5SLENBakJhLENBQWpCOztBQTJCQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFOLEVBQUUsRUFBSTtBQUFDRCxVQUFRLENBQUNRLE1BQVQsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1IsRUFBRixJQUFRQSxFQUFaO0FBQUEsR0FBbEIsRUFBbUMsQ0FBbkM7QUFBdUNTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFBdUIsQ0FBM0Y7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsSUFBSSxFQUFJO0FBQ25CQyxXQUFTLEdBQUdELElBQVo7QUFDSCxDQUZEOztBQUlBLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFaEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUc7QUFBQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUVSO0FBQWU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSVE7QUFDQVAsVUFBUSxDQUFDZ0IsR0FBVCxDQUFjLFVBQUFQLENBQUM7QUFBQSxXQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1BLENBQUMsQ0FBQ1AsSUFBUixDQURlLEVBRWY7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUcsbUJBQU07QUFDbEM7QUFDQVEsZUFBTyxDQUFDQyxHQUFSLENBQWFYLFFBQVEsQ0FBQ1EsTUFBVCxDQUFpQixVQUFBUyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ2hCLEVBQUgsSUFBU1EsQ0FBQyxDQUFDUixFQUFmO0FBQUEsU0FBbkIsRUFBdUMsQ0FBdkMsQ0FBYjtBQUNBVyxjQUFNLENBQUVaLFFBQVEsQ0FBQ1EsTUFBVCxDQUFpQixVQUFBUyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ2hCLEVBQUgsSUFBU1EsQ0FBQyxDQUFDUixFQUFmO0FBQUEsU0FBbkIsRUFBdUMsQ0FBdkMsQ0FBRixDQUFOO0FBQ0gsT0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZlLENBQUo7QUFBQSxHQUFmLENBTFIsQ0FESixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLENBREo7QUFnQ0gsQ0FsQ0Q7O0tBQU1jLEs7QUFvQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkMDQ3ODZkNTNmMDI4MDM2NzQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0JztcclxuaW1wb3J0IEl0ZW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbUxpc3QnO1xyXG5cclxuY29uc3QgSVRFTVNfREIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBcIiwgLy9QYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBkZSA0LDUga2dcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLDsWRqYWJ2bmRtbmLDsW5iw6nDsWthaCBqZXJvZGJrbGphwrTDscK0bGRrZmJtbsOxZGtsZmhqaiBuXCIsXHJcbiAgICAgICAgaW1nOiBcImphbW9uLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJUZWNsYWRvIExvZ2l0ZWNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJQaWFubyBkZSBjb2xhXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJuZC5wbmdcIixcclxuICAgICAgICBwcmljZTogMTgwMCxcclxuICAgICAgICB1ZDogMVxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSBpZCA9PiB7SVRFTVNfREIuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXTsgY29uc29sZS5sb2coXCJBw7FhZGlkb1wiKX1cclxuXHJcbmNvbnN0IHBydWViYSA9IGl0ZW0gPT4ge1xyXG4gICAgb25OZXdJdGVtID0gaXRlbTtcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiAvKiBjYXJ0PXtDQVJUfSAqLyAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnQgb25OZXdJdGVtPXthZGRJdGVtVG9DYXJ0fSAvKiBjYXJ0PXtDQVJUfSBjaGFuZ2VVbml0PXtzZXRVbml0SXRlbX0gKi8vPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSVRFTVNfREIubWFwKCBlID0+IGUgKSlcclxuICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIGUgPT4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbk5ld0l0ZW0oZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggSVRFTVNfREIuZmlsdGVyKCBlbCA9PiBlbC5pZCA9PSBlLmlkIClbMF0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBydWViYSggSVRFTVNfREIuZmlsdGVyKCBlbCA9PiBlbC5pZCA9PSBlLmlkIClbMF0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+QWdyZWdhciBhbCBjYXJyaXRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSVRFTVNfREIubWFwKCBlID0+IGUgKSlcclxuICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIGUgPT4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OZXdJdGVtKGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5BZ3JlZ2FyIGFsIGNhcnJpdG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKVxyXG4gICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8SXRlbUxpc3QgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9
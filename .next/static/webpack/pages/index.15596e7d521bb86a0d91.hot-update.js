webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cart/ItemCart/ItemCart.jsx":
/*!***********************************************!*\
  !*** ./components/Cart/ItemCart/ItemCart.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Cart\\ItemCart\\ItemCart.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ItemCart = function ItemCart(_ref) {
  _s();

  var item = _ref.item,
      id = _ref.id,
      changeUnit = _ref.changeUnit,
      onAddUnitItem = _ref.onAddUnitItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      units = _useState[0],
      setUnits = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.getElementById("totalPrice").innerHTML = "Total a pagar: ".concat(onAddUnitItem(), "\u20AC");
  });
  return __jsx("div", {
    className: "item-cart",
    key: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "name-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, item.name), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "target-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/products/".concat(item.img),
    alt: "Imagen del producto"
    /* height="70px" */
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "info-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Precio/unidad: "), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 68
    }
  }, "".concat(parseFloat(item.price), "\u20AC"))), __jsx("div", {
    className: "unit-buttons-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    onClick: function onClick() {
      if (units == 1) return;
      setUnits(units - 1);
      changeUnit(item.id, item.ud - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "-"), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "x".concat(item.ud)), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      setUnits(units + 1);
      changeUnit(item.id, item.ud + 1); //onAddUnitItem();

      /* console.log(item.id);
      console.log(`Unidades: ${item.ud}`); */
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "+")), __jsx("div", {
    className: "text-right bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Precio: ".concat(parseFloat(item.price * item.ud).toFixed(2), "\u20AC")))));
};

_s(ItemCart, "4EY3SAcGVRksdWwPSiWySHPuI+E=");

_c = ItemCart;
/* harmony default export */ __webpack_exports__["default"] = (ItemCart);

var _c;

$RefreshReg$(_c, "ItemCart");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0l0ZW1DYXJ0L0l0ZW1DYXJ0LmpzeCJdLCJuYW1lcyI6WyJJdGVtQ2FydCIsIml0ZW0iLCJpZCIsImNoYW5nZVVuaXQiLCJvbkFkZFVuaXRJdGVtIiwidXNlU3RhdGUiLCJ1bml0cyIsInNldFVuaXRzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm5hbWUiLCJpbWciLCJwYXJzZUZsb2F0IiwicHJpY2UiLCJ1ZCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3QztBQUFBOztBQUFBLE1BQXRDQyxJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxNQUFqQ0MsRUFBaUMsUUFBakNBLEVBQWlDO0FBQUEsTUFBOUJDLFVBQThCLFFBQTlCQSxVQUE4QjtBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLENBQUQsQ0FEb0I7QUFBQSxNQUM5Q0MsS0FEOEM7QUFBQSxNQUN4Q0MsUUFEd0M7O0FBR3JEQyx5REFBUyxDQUFFLFlBQU07QUFDYkMsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxTQUF0Qyw0QkFBcUVQLGFBQWEsRUFBbEY7QUFDSCxHQUZRLENBQVQ7QUFJQSxTQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsT0FBRyxFQUFFRixFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCRCxJQUFJLENBQUNXLElBQWpDLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsc0JBQWVYLElBQUksQ0FBQ1ksR0FBcEIsQ0FBUjtBQUFtQyxPQUFHLEVBQUM7QUFBc0I7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFDK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFTQyxVQUFVLENBQUNiLElBQUksQ0FBQ2MsS0FBTixDQUFuQixZQUQvQyxDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFHLG1CQUFNO0FBQ2xDLFVBQUtULEtBQUssSUFBSSxDQUFkLEVBQWtCO0FBQ2xCQyxjQUFRLENBQUVELEtBQUssR0FBRyxDQUFWLENBQVI7QUFDQUgsZ0JBQVUsQ0FBQ0YsSUFBSSxDQUFDQyxFQUFOLEVBQVNELElBQUksQ0FBQ2UsRUFBTCxHQUFVLENBQW5CLENBQVY7QUFDSCxLQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixFQU1JO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBa0NmLElBQUksQ0FBQ2UsRUFBdkMsRUFOSixFQU9JO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFHLG1CQUFNO0FBQ2xDVCxjQUFRLENBQUVELEtBQUssR0FBRyxDQUFWLENBQVI7QUFDQUgsZ0JBQVUsQ0FBQ0YsSUFBSSxDQUFDQyxFQUFOLEVBQVNELElBQUksQ0FBQ2UsRUFBTCxHQUFVLENBQW5CLENBQVYsQ0FGa0MsQ0FHbEM7O0FBQ0E7O0FBRUgsS0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEosQ0FKSixFQW1CSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE2Q0YsVUFBVSxDQUFDYixJQUFJLENBQUNjLEtBQUwsR0FBV2QsSUFBSSxDQUFDZSxFQUFqQixDQUFWLENBQStCQyxPQUEvQixDQUF1QyxDQUF2QyxDQUE3QyxZQW5CSixDQUpKLENBSEosQ0FESjtBQWdDSCxDQXZDRDs7R0FBTWpCLFE7O0tBQUFBLFE7QUF5Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1NTk2ZTdkNTIxYmI4NmEwZDkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgSXRlbUNhcnQgPSAoe2l0ZW0saWQsY2hhbmdlVW5pdCxvbkFkZFVuaXRJdGVtfSkgPT4ge1xyXG4gICAgY29uc3QgW3VuaXRzLHNldFVuaXRzXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKS5pbm5lckhUTUwgPSBgVG90YWwgYSBwYWdhcjogJHsgb25BZGRVbml0SXRlbSgpIH3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FydFwiIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaXRlbVwiPntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyZ2V0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9wcm9kdWN0cy8ke2l0ZW0uaW1nfWB9IGFsdD1cIkltYWdlbiBkZWwgcHJvZHVjdG9cIiAvKiBoZWlnaHQ9XCI3MHB4XCIgKi8vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9sZFwiPlByZWNpby91bmlkYWQ6IDwvZGl2PjxkaXY+e2Ake3BhcnNlRmxvYXQoaXRlbS5wcmljZSl94oKsYH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuaXQtYnV0dG9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVuaXRzID09IDEgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyggdW5pdHMgLSAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VVbml0KGl0ZW0uaWQsaXRlbS51ZCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57YHgke2l0ZW0udWR9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaXRzKCB1bml0cyArIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVVuaXQoaXRlbS5pZCxpdGVtLnVkICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQWRkVW5pdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVuaWRhZGVzOiAke2l0ZW0udWR9YCk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgYm9sZFwiPntgUHJlY2lvOiAke3BhcnNlRmxvYXQoaXRlbS5wcmljZSppdGVtLnVkKS50b0ZpeGVkKDIpfeKCrGB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1DYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=
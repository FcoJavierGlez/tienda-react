module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCart */ "./components/Cart/ItemCart/index.js");
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Cart\\Cart.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Cart = ({
  cart,
  setUnitItem,
  deleteItem,
  emptyCart
}) => {
  return __jsx("div", {
    id: "shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Mi carrito"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, cart.length > 1 ? __jsx("div", {
    className: "text-right error pointer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: () => emptyCart(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 67
    }
  }, "Vaciar cesta")) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }))), __jsx("hr", {
    className: "margin-hr-top-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "item-list scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, cart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : cart.map((e, i) => __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    item: e,
    key: i,
    setUnitItem: setUnitItem,
    deleteItem: deleteItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 40
    }
  }))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/Cart/ItemCart/ItemCart.jsx":
/*!***********************************************!*\
  !*** ./components/Cart/ItemCart/ItemCart.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Cart\\ItemCart\\ItemCart.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ItemCart = ({
  item,
  id,
  setUnitItem,
  deleteItem
}) => {
  const {
    0: units,
    1: setUnits
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  /* useEffect( () => {
      document.getElementById("totalPrice").innerHTML = `Total a pagar: ${ onAddUnitItem() }€`;
  }); */

  return __jsx("div", {
    className: "item-cart",
    key: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "name-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, item.name), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "target-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `/products/${item.img}`,
    alt: "Imagen del producto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "info-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Precio/unidad: "), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 68
    }
  }, `${parseFloat(item.price)}€`)), __jsx("div", {
    className: "unit-buttons-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    onClick: () => {
      if (units == 1) return;
      setUnits(units - 1);
      setUnitItem(item.id, item.ud - 1);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "-"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, `x${item.ud}`), __jsx("button", {
    type: "button",
    onClick: () => {
      setUnits(units + 1);
      setUnitItem(item.id, item.ud + 1);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "+")), __jsx("div", {
    className: "foot-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "likeLink error",
    type: "button",
    onClick: () => deleteItem(item.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Eliminar"), __jsx("div", {
    className: "text-right bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, `Precio: ${parseFloat(item.price * item.ud).toFixed(2)}€`)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemCart);

/***/ }),

/***/ "./components/Cart/ItemCart/index.js":
/*!*******************************************!*\
  !*** ./components/Cart/ItemCart/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemCart */ "./components/Cart/ItemCart/ItemCart.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_ItemCart__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Cart/index.js":
/*!**********************************!*\
  !*** ./components/Cart/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./components/Cart/Cart.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Cart__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/ItemList/ItemList.jsx":
/*!******************************************!*\
  !*** ./components/ItemList/ItemList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\ItemList\\ItemList.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ItemList = ({
  db,
  item,
  id,
  addItem
}) => {
  return __jsx("div", {
    id: `itemList-${id}`,
    className: "item-list-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: `/products/${item.img}`,
    alt: "Imagen del producto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "product-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-center bold product-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, item.name), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, item.price, "\u20AC"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, item.description), item.intoCart ? __jsx("div", {
    className: "text-center text-orange bold height-32 grid align-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Ya en la cesta") : __jsx("button", {
    type: "button",
    className: "button-cart",
    onClick: () => addItem(db.filter(e => e.id == item.id)[0]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "A\xF1adir a la cesta"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./components/ItemList/index.js":
/*!**************************************!*\
  !*** ./components/ItemList/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList */ "./components/ItemList/ItemList.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_ItemList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Nav/Nav.jsx":
/*!********************************!*\
  !*** ./components/Nav/Nav.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./components/Nav/Search/index.js");
/* harmony import */ var _NavTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavTools */ "./components/Nav/NavTools/index.js");
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Nav\\Nav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = () => {
  return __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "menu_logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "hamburger_menu",
    className: "nav_hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "svg_menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 62
    }
  }))), __jsx("div", {
    className: "logo nav_hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx(_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_NavTools__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Nav/NavTools/NavTools.jsx":
/*!**********************************************!*\
  !*** ./components/Nav/NavTools/NavTools.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Nav\\NavTools\\NavTools.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NavTools = () => {
  return __jsx("div", {
    className: "nav-tools",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nav_hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "span_line1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "Hola, identif\xEDcate"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 71
    }
  }), __jsx("span", {
    className: "span_line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 76
    }
  }, "Cuenta y listas")), __jsx("div", {
    className: "nav_hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "span_line1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Devoluciones "), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 66
    }
  }), __jsx("span", {
    className: "span_line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 71
    }
  }, "y Pedidos")), __jsx("div", {
    className: "nav_hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "span_line1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Suscr\xEDbete a "), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 66
    }
  }), __jsx("span", {
    className: "span_line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 71
    }
  }, "Prime")), __jsx("div", {
    className: "nav_hover shopping_basket",
    onClick: () => {
      const CART_LIST = document.getElementById("shopping-cart");
      CART_LIST.setAttribute("class", CART_LIST.getAttribute("class") === "close_cart" || CART_LIST.getAttribute("class") === null ? "open_cart" : "close_cart");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("span", {
    id: "cart-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavTools);

/***/ }),

/***/ "./components/Nav/NavTools/index.js":
/*!******************************************!*\
  !*** ./components/Nav/NavTools/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTools */ "./components/Nav/NavTools/NavTools.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_NavTools__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Nav/Search/Search.jsx":
/*!******************************************!*\
  !*** ./components/Nav/Search/Search.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\components\\Nav\\Search\\Search.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Search = () => {
  return __jsx("div", {
    id: "buscador",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("select", {
    name: "",
    id: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "Todos los departamentos \u25BC")), __jsx("input", {
    type: "text",
    name: "",
    id: "",
    onClick: () => {
      const SEARCH = document.getElementById("buscador");
      SEARCH.style.border = "3px solid orange";
      SEARCH.style.borderRadius = "9px";
      SEARCH.style.boxShadow = "orange 0px 0px 4px 1px";
    },
    onBlur: () => {
      const SEARCH = document.getElementById("buscador");
      SEARCH.style.border = "3px solid #111111";
      SEARCH.style.borderRadius = "9px";
      SEARCH.style.boxShadow = "0px 0px #111111";
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "search_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "search",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "svg_search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Nav/Search/index.js":
/*!****************************************!*\
  !*** ./components/Nav/Search/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./components/Nav/Search/Search.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Search__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./components/Nav/Nav.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Nav__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ITEMS_DB = [{
  id: 1,
  name: `Paleta Ibérica de Bellota de 4,5 kg Covap`,
  //Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap de 4,5 kg
  description: `Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap con un peso de 4,5 kg. 
            Este jamón esta elaborado con cerdos de raza 100 % ibérica criados en total libertad en las mejores 
            dehesas del valle de los Pedroches en Cordoba, con una alimentacion a base de Bellotas. 
            Para potenciar todas sus aromas este jamón ha sido curado naturalmente durante más de 24 meses.`,
  img: `jamon.png`,
  price: 300,
  ud: 1,
  intoCart: false
}, {
  id: 2,
  name: `Pack de 5 calcetines Mujer Algodón para invierno`,
  description: `Calcetines 100% de algodón puro, calentitos, para el invierno.`,
  img: `calcetines.png`,
  price: 9.95,
  ud: 1,
  intoCart: false
}, {
  id: 3,
  name: `Piano electrónico Yamaha P45`,
  description: `Piano electrónico con 88 teclas de martillo graduables.`,
  img: `yamaha_p45.png`,
  price: 500,
  ud: 1,
  intoCart: false
}, {
  id: 4,
  name: `Meade LX200 telescopio de 25,4 cm F/10 ACF Tubo Azul UHTC`,
  description: `Tubo de 25,4 cm (10 pulgadas) F/10 ACF óptica con Snoot azul con uhtc)`,
  img: `meade_lx200.png`,
  price: 2290,
  ud: 1,
  intoCart: false
}, {
  id: 5,
  name: `Juego de tronos - Canción de hielo y fuego 1`,
  description: `Tras el largo verano, el invierno se acerca a los Siete Reinos. 
            Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse 
            a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, 
            hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, 
            beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey 
            e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos.`,
  img: `juego_de_tronos_gigamesh.png`,
  price: 29.95,
  ud: 1,
  intoCart: false
}, {
  id: 6,
  name: `Código limpio`,
  description: `Cada año, se invierten innumerables horas y se pierden numerosos recursos debido a código mal escrito, 
            ralentizando el desarrollo, disminuyendo la productividad, generando graves fallos e incluso pudiendo acabar 
            con la organización o empresa. El reconocido experto de software Robert C. Martin, junto con sus colegas de 
            Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y 
            crearlo de forma correcta, de este modo mejorará como programador. Esta obra se divide en tres partes. 
            La primera describe los principios, patrones y prácticas para crear código limpio. 
            La segunda incluye varios casos de estudio cuya complejidad va aumentando. 
            Cada ejemplo es un ejercicio de limpieza y transformación de código con problemas. 
            La tercera parte del libro contiene una lista de heurística y síntomas de código erróneo (smells) confeccionada 
            al crear los casos prácticos. El resultado es una base de conocimientos que describe cómo pensamos cuando creamos, 
            leemos y limpiamos código. Imprescindible para cualquier desarrollador, ingeniero de software, director de proyectos, 
            jefe de equipo o analista de sistemas interesado en crear código de mejor calidad. 
            ¡El libro que todo programador debe leer!`,
  img: `codigo_limpio.png`,
  price: 49.95,
  ud: 1,
  intoCart: false
}, {
  id: 7,
  name: `Chaqueta pesada de motociclista hombre`,
  description: `Chaqueta de motociclista de cuero 100% vacuno para hombre.`,
  img: `bohmberg_man.png`,
  price: 159.95,
  ud: 1,
  intoCart: false
}, {
  id: 8,
  name: `Chaqueta pesada de motociclista mujer`,
  description: `Chaqueta de motociclista de cuero 100% vacuno para mujer.`,
  img: `bohmberg_woman.png`,
  price: 149.95,
  ud: 1,
  intoCart: false
}, {
  id: 9,
  name: `El Señor de los Anillos - La Comunidad del Anillo`,
  description: `El Señor de los Anillos (1ª parte): La Comunidad del Anillo. versión tapa dura.`,
  img: `la_comunidad_del_anillo_minotauro.png`,
  price: 19.95,
  ud: 1,
  intoCart: false
}, {
  id: 10,
  name: `El Señor de los Anillos - Las dos Torres`,
  description: `El Señor de los Anillos (2ª parte): Las dos Torres. versión tapa dura.`,
  img: `las_dos_torres_minotauro.png`,
  price: 19.95,
  ud: 1,
  intoCart: false
}, {
  id: 11,
  name: `El Señor de los Anillos - El retorno del Rey`,
  description: `El Señor de los Anillos (3ª parte): El retorno del Rey. versión tapa dura.`,
  img: `el_retorno_del_rey_minotauro.png`,
  price: 19.95,
  ud: 1,
  intoCart: false
}];
/* harmony default export */ __webpack_exports__["default"] = (ITEMS_DB);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart/index.js");
/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ItemList */ "./components/ItemList/index.js");
/* harmony import */ var _js_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/constants */ "./js/constants.js");
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Index = () => {
  const {
    0: shoppingCart,
    1: setShoppingCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: totalPrice,
    1: setTotalPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(shoppingCart.length == 0 ? "0.00" : shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc).toFixed(2));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const totalItems = document.getElementById("cart-count");
    const priceCart = document.getElementById("totalPrice");
    document.title = "Amazon.fake";
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? `21px` : `25px`;
    setTotalPrice(shoppingCart.length == 0 ? "0.00" : shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc).toFixed(2));
    priceCart.innerHTML = `Total a pagar: ${totalPrice}€`;
  });

  const setUnitItem = (id, ud) => {
    const NEW_CART = [...shoppingCart];
    NEW_CART.find(e => e.id == id).ud = ud;
    setShoppingCart(NEW_CART);
  };

  const deleteItem = id => {
    const ITEM = _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].find(e => e.id == id);
    setShoppingCart(shoppingCart.filter(e => e.id !== id));
    ITEM.ud = 1;
    ITEM.intoCart = false;
  };

  const emptyCart = () => {
    shoppingCart.map(e => deleteItem(e.id));
    setShoppingCart([]);
  };

  const addItem = item => {
    const NEW_CART = [...shoppingCart];
    NEW_CART.push(_js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].find(e => e.id == item.id));
    _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].find(e => e.id == item.id).intoCart = true;
    setShoppingCart(NEW_CART);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: shoppingCart,
    deleteItem: deleteItem,
    setUnitItem: setUnitItem,
    emptyCart: emptyCart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].map(e => __jsx(_components_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    db: _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"],
    item: e,
    key: e.id,
    id: e.id,
    addItem: addItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 44
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9JdGVtQ2FydC9JdGVtQ2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0l0ZW1DYXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L0l0ZW1MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2VG9vbHMvTmF2VG9vbHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdlRvb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJ0IiwiY2FydCIsInNldFVuaXRJdGVtIiwiZGVsZXRlSXRlbSIsImVtcHR5Q2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJpIiwiSXRlbUNhcnQiLCJpdGVtIiwiaWQiLCJ1bml0cyIsInNldFVuaXRzIiwidXNlU3RhdGUiLCJuYW1lIiwiaW1nIiwicGFyc2VGbG9hdCIsInByaWNlIiwidWQiLCJ0b0ZpeGVkIiwiSXRlbUxpc3QiLCJkYiIsImFkZEl0ZW0iLCJkZXNjcmlwdGlvbiIsImludG9DYXJ0IiwiZmlsdGVyIiwiTmF2IiwiTmF2VG9vbHMiLCJDQVJUX0xJU1QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiU2VhcmNoIiwiU0VBUkNIIiwic3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJJVEVNU19EQiIsIkluZGV4Iiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJ1c2VFZmZlY3QiLCJ0b3RhbEl0ZW1zIiwicHJpY2VDYXJ0IiwidGl0bGUiLCJpbm5lckhUTUwiLCJsZWZ0IiwiTkVXX0NBUlQiLCJmaW5kIiwiSVRFTSIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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QVFELElBQUksQ0FBQ0MsRUFBakMsRUFBc0NjLFFBQXRDLEdBQWlELElBQWpEO0FBQ0FrQixtQkFBZSxDQUFFVyxRQUFGLENBQWY7QUFDSCxHQUxEOztBQU9BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUVaLFlBQVo7QUFBMEIsY0FBVSxFQUFFdkMsVUFBdEM7QUFBa0QsZUFBVyxFQUFFRCxXQUEvRDtBQUE0RSxhQUFTLEVBQUVFLFNBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUW9DLHFEQUFRLENBQUNsQyxHQUFULENBQWNDLENBQUMsSUFBSSxNQUFDLDREQUFEO0FBQVUsTUFBRSxFQUFFaUMscURBQWQ7QUFBd0IsUUFBSSxFQUFFakMsQ0FBOUI7QUFBaUMsT0FBRyxFQUFFQSxDQUFDLENBQUNJLEVBQXhDO0FBQTRDLE1BQUUsRUFBRUosQ0FBQyxDQUFDSSxFQUFsRDtBQUFzRCxXQUFPLEVBQUVZLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkIsQ0FGUixDQURKLENBTEosQ0FESjtBQWdCSCxDQTFERDs7QUE0RGVrQixvRUFBZixFOzs7Ozs7Ozs7OztBQ2xFQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCc7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHtjYXJ0LHNldFVuaXRJdGVtLGRlbGV0ZUl0ZW0sZW1wdHlDYXJ0fSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+TWkgY2Fycml0bzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IGNhcnQubGVuZ3RoID4gMSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgZXJyb3IgcG9pbnRlclwiPjxhIG9uQ2xpY2s9eyAoKSA9PiBlbXB0eUNhcnQoKSB9PlZhY2lhciBjZXN0YTwvYT48L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYXJnaW4taHItdG9wLWNhcnRcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0IHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIj5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvZGl2PiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBzZXRVbml0SXRlbT17c2V0VW5pdEl0ZW19IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19Lz4gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBpZD1cInRvdGFsUHJpY2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEl0ZW1DYXJ0ID0gKHtpdGVtLGlkLHNldFVuaXRJdGVtLGRlbGV0ZUl0ZW19KSA9PiB7XHJcbiAgICBjb25zdCBbdW5pdHMsc2V0VW5pdHNdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgLyogdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpLmlubmVySFRNTCA9IGBUb3RhbCBhIHBhZ2FyOiAkeyBvbkFkZFVuaXRJdGVtKCkgfeKCrGA7XHJcbiAgICB9KTsgKi9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jYXJ0XCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1pdGVtXCI+e2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJnZXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL3Byb2R1Y3RzLyR7aXRlbS5pbWd9YH0gYWx0PVwiSW1hZ2VuIGRlbCBwcm9kdWN0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2xkXCI+UHJlY2lvL3VuaWRhZDogPC9kaXY+PGRpdj57YCR7cGFyc2VGbG9hdChpdGVtLnByaWNlKX3igqxgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5pdC1idXR0b25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdW5pdHMgPT0gMSApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaXRzKCB1bml0cyAtIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaXRJdGVtKGl0ZW0uaWQsaXRlbS51ZCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57YHgke2l0ZW0udWR9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaXRzKCB1bml0cyArIDEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaXRJdGVtKGl0ZW0uaWQsaXRlbS51ZCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlrZUxpbmsgZXJyb3JcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IGRlbGV0ZUl0ZW0oaXRlbS5pZCkgfT5FbGltaW5hcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGJvbGRcIj57YFByZWNpbzogJHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UqaXRlbS51ZCkudG9GaXhlZCgyKX3igqxgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FydDsiLCJpbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FydDsiLCJpbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiLCJcclxuY29uc3QgSXRlbUxpc3QgPSAoe2RiLGl0ZW0saWQsYWRkSXRlbX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e2BpdGVtTGlzdC0ke2lkfWB9IGNsYXNzTmFtZT1cIml0ZW0tbGlzdC1tYWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvcHJvZHVjdHMvJHtpdGVtLmltZ31gfSBhbHQ9XCJJbWFnZW4gZGVsIHByb2R1Y3RvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBib2xkIHByb2R1Y3QtbmFtZVwiPntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS5wcmljZX3igqw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uaW50b0NhcnQgPyBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtb3JhbmdlIGJvbGQgaGVpZ2h0LTMyIGdyaWQgYWxpZ24tY2VudGVyXCI+WWEgZW4gbGEgY2VzdGE8L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXR0b24tY2FydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGFkZEl0ZW0oIGRiLmZpbHRlciggZSA9PiBlLmlkID09IGl0ZW0uaWQgKVswXSApIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBw7FhZGlyIGEgbGEgY2VzdGFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0OyIsImltcG9ydCBJdGVtTGlzdCBmcm9tICcuL0l0ZW1MaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0OyIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5pbXBvcnQgTmF2VG9vbHMgZnJvbSAnLi9OYXZUb29scyc7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGFtYnVyZ2VyX21lbnVcIiBjbGFzc05hbWU9XCJuYXZfaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgY2xhc3NOYW1lPVwic3ZnX21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbmF2X2hvdmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDxOYXZUb29scyAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiXHJcbmNvbnN0IE5hdlRvb2xzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10b29sc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMVwiPkhvbGEsIGlkZW50aWbDrWNhdGU8L3NwYW4+PGJyLz48c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUyXCI+Q3VlbnRhIHkgbGlzdGFzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5fbGluZTFcIj5EZXZvbHVjaW9uZXMgPC9zcGFuPjxici8+PHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMlwiPnkgUGVkaWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2hvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUxXCI+U3VzY3LDrWJldGUgYSA8L3NwYW4+PGJyLz48c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUyXCI+UHJpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9ob3ZlciBzaG9wcGluZ19iYXNrZXRcIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0FSVF9MSVNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wcGluZy1jYXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBDQVJUX0xJU1Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBDQVJUX0xJU1QuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IFwiY2xvc2VfY2FydFwiIHx8IENBUlRfTElTVC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PT0gbnVsbCApID8gXHJcbiAgICAgICAgICAgICAgICAgICAgXCJvcGVuX2NhcnRcIiA6IFwiY2xvc2VfY2FydFwiICk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjYXJ0LWNvdW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9vbHM7IiwiaW1wb3J0IE5hdlRvb2xzIGZyb20gJy4vTmF2VG9vbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9vbHM7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImJ1c2NhZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ub2RvcyBsb3MgZGVwYXJ0YW1lbnRvcyAmI3gyNUJDOzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgaWQ9XCJcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFNFQVJDSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzY2Fkb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBvcmFuZ2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU0VBUkNILnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiOXB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3hTaGFkb3cgPSBcIm9yYW5nZSAwcHggMHB4IDRweCAxcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFNFQVJDSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzY2Fkb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCAjMTExMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjlweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4ICMxMTExMTFcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNlYXJjaFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3NOYW1lPVwic3ZnX3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiY29uc3QgSVRFTVNfREIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogYFBhbGV0YSBJYsOpcmljYSBkZSBCZWxsb3RhIGRlIDQsNSBrZyBDb3ZhcGAsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBQYWxldGEgMTAwICUgSWLDqXJpY2EgZGUgQmVsbG90YSBBbHRhIEV4cHJlc2lvbiBQbGF0YSBkZSBDb3ZhcCBjb24gdW4gcGVzbyBkZSA0LDUga2cuIFxyXG4gICAgICAgICAgICBFc3RlIGphbcOzbiBlc3RhIGVsYWJvcmFkbyBjb24gY2VyZG9zIGRlIHJhemEgMTAwICUgaWLDqXJpY2EgY3JpYWRvcyBlbiB0b3RhbCBsaWJlcnRhZCBlbiBsYXMgbWVqb3JlcyBcclxuICAgICAgICAgICAgZGVoZXNhcyBkZWwgdmFsbGUgZGUgbG9zIFBlZHJvY2hlcyBlbiBDb3Jkb2JhLCBjb24gdW5hIGFsaW1lbnRhY2lvbiBhIGJhc2UgZGUgQmVsbG90YXMuIFxyXG4gICAgICAgICAgICBQYXJhIHBvdGVuY2lhciB0b2RhcyBzdXMgYXJvbWFzIGVzdGUgamFtw7NuIGhhIHNpZG8gY3VyYWRvIG5hdHVyYWxtZW50ZSBkdXJhbnRlIG3DoXMgZGUgMjQgbWVzZXMuYCxcclxuICAgICAgICBpbWc6IGBqYW1vbi5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IGBQYWNrIGRlIDUgY2FsY2V0aW5lcyBNdWplciBBbGdvZMOzbiBwYXJhIGludmllcm5vYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYENhbGNldGluZXMgMTAwJSBkZSBhbGdvZMOzbiBwdXJvLCBjYWxlbnRpdG9zLCBwYXJhIGVsIGludmllcm5vLmAsXHJcbiAgICAgICAgaW1nOiBgY2FsY2V0aW5lcy5wbmdgLFxyXG4gICAgICAgIHByaWNlOiA5Ljk1LFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBgUGlhbm8gZWxlY3Ryw7NuaWNvIFlhbWFoYSBQNDVgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUGlhbm8gZWxlY3Ryw7NuaWNvIGNvbiA4OCB0ZWNsYXMgZGUgbWFydGlsbG8gZ3JhZHVhYmxlcy5gLFxyXG4gICAgICAgIGltZzogYHlhbWFoYV9wNDUucG5nYCxcclxuICAgICAgICBwcmljZTogNTAwLFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBgTWVhZGUgTFgyMDAgdGVsZXNjb3BpbyBkZSAyNSw0IGNtIEYvMTAgQUNGIFR1Ym8gQXp1bCBVSFRDYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFR1Ym8gZGUgMjUsNCBjbSAoMTAgcHVsZ2FkYXMpIEYvMTAgQUNGIMOzcHRpY2EgY29uIFNub290IGF6dWwgY29uIHVodGMpYCxcclxuICAgICAgICBpbWc6IGBtZWFkZV9seDIwMC5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAyMjkwLFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBuYW1lOiBgSnVlZ28gZGUgdHJvbm9zIC0gQ2FuY2nDs24gZGUgaGllbG8geSBmdWVnbyAxYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFRyYXMgZWwgbGFyZ28gdmVyYW5vLCBlbCBpbnZpZXJubyBzZSBhY2VyY2EgYSBsb3MgU2lldGUgUmVpbm9zLiBcclxuICAgICAgICAgICAgTG9yZCBFZGRhcmQgU3RhcmssIHNlw7FvciBkZSBJbnZlcm5hbGlhLCBkZWphIHN1cyBkb21pbmlvcyBwYXJhIHVuaXJzZSBcclxuICAgICAgICAgICAgYSBsYSBjb3J0ZSBkZSBzdSBhbWlnbyBlbCByZXkgUm9iZXJ0IEJhcmF0aGVvbiwgbGxhbWFkbyBlbCBVc3VycGFkb3IsIFxyXG4gICAgICAgICAgICBob21icmUgZMOtc2NvbG8geSBvdHJvcmEgZ3VlcnJlcm8gYXVkYXogY3V5YXMgbWF5b3JlcyBhZmljaW9uZXMgc29uIGNvbWVyLCBcclxuICAgICAgICAgICAgYmViZXIgeSBlbmdlbmRyYXIgYmFzdGFyZG9zLiBFZGRhcmQgU3Rhcmsgb2N1cGFyw6EgZWwgY2FyZ28gZGUgTWFubyBkZWwgUmV5IFxyXG4gICAgICAgICAgICBlIGludGVudGFyw6EgZGVzZW50cmHDsWFyIHVuYSBtYXJhw7FhIGRlIGludHJpZ2FzIHF1ZSBwb25kcsOhIGVuIHBlbGlncm8gc3UgdmlkYSB5IGxhIGRlIHRvZG9zIGxvcyBzdXlvcy5gLFxyXG4gICAgICAgIGltZzogYGp1ZWdvX2RlX3Ryb25vc19naWdhbWVzaC5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAyOS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogYEPDs2RpZ28gbGltcGlvYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYENhZGEgYcOxbywgc2UgaW52aWVydGVuIGlubnVtZXJhYmxlcyBob3JhcyB5IHNlIHBpZXJkZW4gbnVtZXJvc29zIHJlY3Vyc29zIGRlYmlkbyBhIGPDs2RpZ28gbWFsIGVzY3JpdG8sIFxyXG4gICAgICAgICAgICByYWxlbnRpemFuZG8gZWwgZGVzYXJyb2xsbywgZGlzbWludXllbmRvIGxhIHByb2R1Y3RpdmlkYWQsIGdlbmVyYW5kbyBncmF2ZXMgZmFsbG9zIGUgaW5jbHVzbyBwdWRpZW5kbyBhY2FiYXIgXHJcbiAgICAgICAgICAgIGNvbiBsYSBvcmdhbml6YWNpw7NuIG8gZW1wcmVzYS4gRWwgcmVjb25vY2lkbyBleHBlcnRvIGRlIHNvZnR3YXJlIFJvYmVydCBDLiBNYXJ0aW4sIGp1bnRvIGNvbiBzdXMgY29sZWdhcyBkZSBcclxuICAgICAgICAgICAgT2JqZWN0IE1lbnRvciwgbm9zIHByZXNlbnRhbiBzdXMgw7NwdGltYXMgdMOpY25pY2FzIHkgbWV0b2RvbG9nw61hcyDDoWdpbGVzIHBhcmEgbGltcGlhciBlbCBjw7NkaWdvIHNvYnJlIGxhIG1hcmNoYSB5IFxyXG4gICAgICAgICAgICBjcmVhcmxvIGRlIGZvcm1hIGNvcnJlY3RhLCBkZSBlc3RlIG1vZG8gbWVqb3JhcsOhIGNvbW8gcHJvZ3JhbWFkb3IuIEVzdGEgb2JyYSBzZSBkaXZpZGUgZW4gdHJlcyBwYXJ0ZXMuIFxyXG4gICAgICAgICAgICBMYSBwcmltZXJhIGRlc2NyaWJlIGxvcyBwcmluY2lwaW9zLCBwYXRyb25lcyB5IHByw6FjdGljYXMgcGFyYSBjcmVhciBjw7NkaWdvIGxpbXBpby4gXHJcbiAgICAgICAgICAgIExhIHNlZ3VuZGEgaW5jbHV5ZSB2YXJpb3MgY2Fzb3MgZGUgZXN0dWRpbyBjdXlhIGNvbXBsZWppZGFkIHZhIGF1bWVudGFuZG8uIFxyXG4gICAgICAgICAgICBDYWRhIGVqZW1wbG8gZXMgdW4gZWplcmNpY2lvIGRlIGxpbXBpZXphIHkgdHJhbnNmb3JtYWNpw7NuIGRlIGPDs2RpZ28gY29uIHByb2JsZW1hcy4gXHJcbiAgICAgICAgICAgIExhIHRlcmNlcmEgcGFydGUgZGVsIGxpYnJvIGNvbnRpZW5lIHVuYSBsaXN0YSBkZSBoZXVyw61zdGljYSB5IHPDrW50b21hcyBkZSBjw7NkaWdvIGVycsOzbmVvIChzbWVsbHMpIGNvbmZlY2Npb25hZGEgXHJcbiAgICAgICAgICAgIGFsIGNyZWFyIGxvcyBjYXNvcyBwcsOhY3RpY29zLiBFbCByZXN1bHRhZG8gZXMgdW5hIGJhc2UgZGUgY29ub2NpbWllbnRvcyBxdWUgZGVzY3JpYmUgY8OzbW8gcGVuc2Ftb3MgY3VhbmRvIGNyZWFtb3MsIFxyXG4gICAgICAgICAgICBsZWVtb3MgeSBsaW1waWFtb3MgY8OzZGlnby4gSW1wcmVzY2luZGlibGUgcGFyYSBjdWFscXVpZXIgZGVzYXJyb2xsYWRvciwgaW5nZW5pZXJvIGRlIHNvZnR3YXJlLCBkaXJlY3RvciBkZSBwcm95ZWN0b3MsIFxyXG4gICAgICAgICAgICBqZWZlIGRlIGVxdWlwbyBvIGFuYWxpc3RhIGRlIHNpc3RlbWFzIGludGVyZXNhZG8gZW4gY3JlYXIgY8OzZGlnbyBkZSBtZWpvciBjYWxpZGFkLiBcclxuICAgICAgICAgICAgwqFFbCBsaWJybyBxdWUgdG9kbyBwcm9ncmFtYWRvciBkZWJlIGxlZXIhYCxcclxuICAgICAgICBpbWc6IGBjb2RpZ29fbGltcGlvLnBuZ2AsXHJcbiAgICAgICAgcHJpY2U6IDQ5Ljk1LFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBuYW1lOiBgQ2hhcXVldGEgcGVzYWRhIGRlIG1vdG9jaWNsaXN0YSBob21icmVgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQ2hhcXVldGEgZGUgbW90b2NpY2xpc3RhIGRlIGN1ZXJvIDEwMCUgdmFjdW5vIHBhcmEgaG9tYnJlLmAsXHJcbiAgICAgICAgaW1nOiBgYm9obWJlcmdfbWFuLnBuZ2AsXHJcbiAgICAgICAgcHJpY2U6IDE1OS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgbmFtZTogYENoYXF1ZXRhIHBlc2FkYSBkZSBtb3RvY2ljbGlzdGEgbXVqZXJgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQ2hhcXVldGEgZGUgbW90b2NpY2xpc3RhIGRlIGN1ZXJvIDEwMCUgdmFjdW5vIHBhcmEgbXVqZXIuYCxcclxuICAgICAgICBpbWc6IGBib2htYmVyZ193b21hbi5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAxNDkuOTUsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIG5hbWU6IGBFbCBTZcOxb3IgZGUgbG9zIEFuaWxsb3MgLSBMYSBDb211bmlkYWQgZGVsIEFuaWxsb2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBFbCBTZcOxb3IgZGUgbG9zIEFuaWxsb3MgKDHCqiBwYXJ0ZSk6IExhIENvbXVuaWRhZCBkZWwgQW5pbGxvLiB2ZXJzacOzbiB0YXBhIGR1cmEuYCxcclxuICAgICAgICBpbWc6IGBsYV9jb211bmlkYWRfZGVsX2FuaWxsb19taW5vdGF1cm8ucG5nYCxcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMCxcclxuICAgICAgICBuYW1lOiBgRWwgU2XDsW9yIGRlIGxvcyBBbmlsbG9zIC0gTGFzIGRvcyBUb3JyZXNgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgRWwgU2XDsW9yIGRlIGxvcyBBbmlsbG9zICgywqogcGFydGUpOiBMYXMgZG9zIFRvcnJlcy4gdmVyc2nDs24gdGFwYSBkdXJhLmAsXHJcbiAgICAgICAgaW1nOiBgbGFzX2Rvc190b3JyZXNfbWlub3RhdXJvLnBuZ2AsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTEsXHJcbiAgICAgICAgbmFtZTogYEVsIFNlw7FvciBkZSBsb3MgQW5pbGxvcyAtIEVsIHJldG9ybm8gZGVsIFJleWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBFbCBTZcOxb3IgZGUgbG9zIEFuaWxsb3MgKDPCqiBwYXJ0ZSk6IEVsIHJldG9ybm8gZGVsIFJleS4gdmVyc2nDs24gdGFwYSBkdXJhLmAsXHJcbiAgICAgICAgaW1nOiBgZWxfcmV0b3Jub19kZWxfcmV5X21pbm90YXVyby5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJVEVNU19EQjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuaW1wb3J0IElURU1TX0RCIGZyb20gJy4uL2pzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoIHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IFwiMC4wMFwiIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSthY2MgKS50b0ZpeGVkKDIpICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1jb3VudFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUNhcnQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFByaWNlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlICAgPSBcIkFtYXpvbi5mYWtlXCI7XHJcblxyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG5cclxuICAgICAgICBzZXRUb3RhbFByaWNlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaWNlQ2FydC5pbm5lckhUTUwgPSBgVG90YWwgYSBwYWdhcjogJHt0b3RhbFByaWNlfeKCrGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRVbml0SXRlbSA9IChpZCx1ZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IE5FV19DQVJUID0gWy4uLnNob3BwaW5nQ2FydF07XHJcbiAgICAgICAgTkVXX0NBUlQuZmluZCggZSA9PiBlLmlkID09IGlkICkudWQgPSB1ZDtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIE5FV19DQVJUICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IGlkID0+IHsgXHJcbiAgICAgICAgY29uc3QgSVRFTSA9IElURU1TX0RCLmZpbmQoIGUgPT4gZS5pZCA9PSBpZCApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgSVRFTS51ZCAgICAgICA9IDE7XHJcbiAgICAgICAgSVRFTS5pbnRvQ2FydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtcHR5Q2FydCA9ICgpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGRlbGV0ZUl0ZW0oZS5pZCkgKTtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBORVdfQ0FSVCA9IFsuLi5zaG9wcGluZ0NhcnRdO1xyXG4gICAgICAgIE5FV19DQVJULnB1c2goIElURU1TX0RCLmZpbmQoIGUgPT4gZS5pZCA9PSBpdGVtLmlkKSApO1xyXG4gICAgICAgIElURU1TX0RCLmZpbmQoIGUgPT4gZS5pZCA9PSBpdGVtLmlkICkuaW50b0NhcnQgPSB0cnVlO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggTkVXX0NBUlQgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydCBjYXJ0PXtzaG9wcGluZ0NhcnR9IGRlbGV0ZUl0ZW09e2RlbGV0ZUl0ZW19IHNldFVuaXRJdGVtPXtzZXRVbml0SXRlbX0gZW1wdHlDYXJ0PXtlbXB0eUNhcnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVRFTVNfREIubWFwKCBlID0+IDxJdGVtTGlzdCBkYj17SVRFTVNfREJ9IGl0ZW09e2V9IGtleT17ZS5pZH0gaWQ9e2UuaWR9IGFkZEl0ZW09e2FkZEl0ZW19IC8+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
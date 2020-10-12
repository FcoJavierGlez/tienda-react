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
    priceCart.innerHTML = `Total a pagar: ${totalPrice}€`;
  });

  const setUnitItem = (id, ud) => {
    shoppingCart.filter(e => e.id == id)[0].ud = ud;
    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.length == 0 ? 0 : shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc).toFixed(2));
  };

  const deleteItem = id => {
    const ITEM = _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(e => e.id == id)[0];
    setShoppingCart(shoppingCart.filter(e => e.id !== id));
    setTotalPrice((totalPrice - shoppingCart.filter(e => e.id == id).map(e => e.price * e.ud)).toFixed(2));
    ITEM.ud = 1;
    ITEM.intoCart = false;
  };

  const emptyCart = () => {
    console.log(shoppingCart);

    for (let i = shoppingCart.length - 1; i > -1; i--) deleteItem(shoppingCart[i].id);

    setShoppingCart([]);
    setTotalPrice("0.00");
  };

  const addItem = item => {
    _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(e => e.id == item.id)[0].intoCart = true;
    shoppingCart.push(_js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].filter(e => e.id == item.id)[0]); //No sé la razón, pero si no hago este push el array no se actualiza a tiempo y el precio no cambia, porqué ocurre esto???

    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc).toFixed(2));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "main-container scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"].map((e, i) => __jsx(_components_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    db: _js_constants__WEBPACK_IMPORTED_MODULE_4__["default"],
    item: e,
    key: e.id,
    id: e.id,
    addItem: addItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 48
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9JdGVtQ2FydC9JdGVtQ2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0l0ZW1DYXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L0l0ZW1MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2VG9vbHMvTmF2VG9vbHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdlRvb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJ0IiwiY2FydCIsInNldFVuaXRJdGVtIiwiZGVsZXRlSXRlbSIsImVtcHR5Q2FydCIsImxlbmd0aCIsIm1hcCIsImUiLCJpIiwiSXRlbUNhcnQiLCJpdGVtIiwiaWQiLCJ1bml0cyIsInNldFVuaXRzIiwidXNlU3RhdGUiLCJuYW1lIiwiaW1nIiwicGFyc2VGbG9hdCIsInByaWNlIiwidWQiLCJ0b0ZpeGVkIiwiSXRlbUxpc3QiLCJkYiIsImFkZEl0ZW0iLCJkZXNjcmlwdGlvbiIsImludG9DYXJ0IiwiZmlsdGVyIiwiTmF2IiwiTmF2VG9vbHMiLCJDQVJUX0xJU1QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiU2VhcmNoIiwiU0VBUkNIIiwic3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJJVEVNU19EQiIsIkluZGV4Iiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJ1c2VFZmZlY3QiLCJ0b3RhbEl0ZW1zIiwicHJpY2VDYXJ0IiwidGl0bGUiLCJpbm5lckhUTUwiLCJsZWZ0IiwiSVRFTSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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O0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUW9DLHFEQUFRLENBQUNsQyxHQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILEtBQVMsTUFBQyw0REFBRDtBQUFVLE1BQUUsRUFBRWdDLHFEQUFkO0FBQXdCLFFBQUksRUFBRWpDLENBQTlCO0FBQWlDLE9BQUcsRUFBRUEsQ0FBQyxDQUFDSSxFQUF4QztBQUE0QyxNQUFFLEVBQUVKLENBQUMsQ0FBQ0ksRUFBbEQ7QUFBc0QsV0FBTyxFQUFFWSxPQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZCLENBRlIsQ0FESixDQUxKLENBREo7QUFnQkgsQ0E1REQ7O0FBOERla0Isb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwRUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7Y2FydCxzZXRVbml0SXRlbSxkZWxldGVJdGVtLGVtcHR5Q2FydH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmFtZV9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk1pIGNhcnJpdG88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjYXJ0Lmxlbmd0aCA+IDEgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGVycm9yIHBvaW50ZXJcIj48YSBvbkNsaWNrPXsgKCkgPT4gZW1wdHlDYXJ0KCkgfT5WYWNpYXIgY2VzdGE8L2E+PC9kaXY+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWFyZ2luLWhyLXRvcC1jYXJ0XCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdCBzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0Lm1hcCggKGUsaSkgPT4gPEl0ZW1DYXJ0IGl0ZW09e2V9IGtleT17aX0gc2V0VW5pdEl0ZW09e3NldFVuaXRJdGVtfSBkZWxldGVJdGVtPXtkZWxldGVJdGVtfS8+IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgaWQ9XCJ0b3RhbFByaWNlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBJdGVtQ2FydCA9ICh7aXRlbSxpZCxzZXRVbml0SXRlbSxkZWxldGVJdGVtfSkgPT4ge1xyXG4gICAgY29uc3QgW3VuaXRzLHNldFVuaXRzXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIC8qIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKS5pbm5lckhUTUwgPSBgVG90YWwgYSBwYWdhcjogJHsgb25BZGRVbml0SXRlbSgpIH3igqxgO1xyXG4gICAgfSk7ICovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FydFwiIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaXRlbVwiPntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyZ2V0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9wcm9kdWN0cy8ke2l0ZW0uaW1nfWB9IGFsdD1cIkltYWdlbiBkZWwgcHJvZHVjdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9sZFwiPlByZWNpby91bmlkYWQ6IDwvZGl2PjxkaXY+e2Ake3BhcnNlRmxvYXQoaXRlbS5wcmljZSl94oKsYH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuaXQtYnV0dG9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVuaXRzID09IDEgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyggdW5pdHMgLSAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0SXRlbShpdGVtLmlkLGl0ZW0udWQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2B4JHtpdGVtLnVkfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyggdW5pdHMgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0SXRlbShpdGVtLmlkLGl0ZW0udWQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpa2VMaW5rIGVycm9yXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiBkZWxldGVJdGVtKGl0ZW0uaWQpIH0+RWxpbWluYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBib2xkXCI+e2BQcmVjaW86ICR7cGFyc2VGbG9hdChpdGVtLnByaWNlKml0ZW0udWQpLnRvRml4ZWQoMil94oKsYH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcnQ7IiwiaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcnQ7IiwiaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7IiwiXHJcbmNvbnN0IEl0ZW1MaXN0ID0gKHtkYixpdGVtLGlkLGFkZEl0ZW19KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtgaXRlbUxpc3QtJHtpZH1gfSBjbGFzc05hbWU9XCJpdGVtLWxpc3QtbWFpblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL3Byb2R1Y3RzLyR7aXRlbS5pbWd9YH0gYWx0PVwiSW1hZ2VuIGRlbCBwcm9kdWN0b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9sZCBwcm9kdWN0LW5hbWVcIj57aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0ucHJpY2V94oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpdGVtLmludG9DYXJ0ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW9yYW5nZSBib2xkIGhlaWdodC0zMiBncmlkIGFsaWduLWNlbnRlclwiPllhIGVuIGxhIGNlc3RhPC9kaXY+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBhZGRJdGVtKCBkYi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0gKSB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQcOxYWRpciBhIGxhIGNlc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDsiLCJpbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi9JdGVtTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDsiLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcclxuaW1wb3J0IE5hdlRvb2xzIGZyb20gJy4vTmF2VG9vbHMnO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhhbWJ1cmdlcl9tZW51XCIgY2xhc3NOYW1lPVwibmF2X2hvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGNsYXNzTmFtZT1cInN2Z19tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIG5hdl9ob3ZlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8TmF2VG9vbHMgLz5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsIlxyXG5jb25zdCBOYXZUb29scyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdG9vbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5fbGluZTFcIj5Ib2xhLCBpZGVudGlmw61jYXRlPC9zcGFuPjxici8+PHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMlwiPkN1ZW50YSB5IGxpc3Rhczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2hvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUxXCI+RGV2b2x1Y2lvbmVzIDwvc3Bhbj48YnIvPjxzcGFuIGNsYXNzTmFtZT1cInNwYW5fbGluZTJcIj55IFBlZGlkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMVwiPlN1c2Nyw61iZXRlIGEgPC9zcGFuPjxici8+PHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMlwiPlByaW1lPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfaG92ZXIgc2hvcHBpbmdfYmFza2V0XCIgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENBUlRfTElTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcHBpbmctY2FydFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQ0FSVF9MSVNULnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICggQ0FSVF9MSVNULmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcImNsb3NlX2NhcnRcIiB8fCBDQVJUX0xJU1QuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IG51bGwgKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3Blbl9jYXJ0XCIgOiBcImNsb3NlX2NhcnRcIiApO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2FydC1jb3VudFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRvb2xzOyIsImltcG9ydCBOYXZUb29scyBmcm9tICcuL05hdlRvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlRvb2xzOyIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidXNjYWRvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VG9kb3MgbG9zIGRlcGFydGFtZW50b3MgJiN4MjVCQzs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIGlkPVwiXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBTRUFSQ0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1c2NhZG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgb3JhbmdlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjlweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm94U2hhZG93ID0gXCJvcmFuZ2UgMHB4IDBweCA0cHggMXB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIG9uQmx1cj17XHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBTRUFSQ0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1c2NhZG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgIzExMTExMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI5cHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU0VBUkNILnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAjMTExMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzZWFyY2hcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzTmFtZT1cInN2Z19zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiLCJpbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsImNvbnN0IElURU1TX0RCID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IGBQYWxldGEgSWLDqXJpY2EgZGUgQmVsbG90YSBkZSA0LDUga2cgQ292YXBgLCAvL1BhbGV0YSAxMDAgJSBJYsOpcmljYSBkZSBCZWxsb3RhIEFsdGEgRXhwcmVzaW9uIFBsYXRhIGRlIENvdmFwIGRlIDQsNSBrZ1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgY29uIHVuIHBlc28gZGUgNCw1IGtnLiBcclxuICAgICAgICAgICAgRXN0ZSBqYW3Ds24gZXN0YSBlbGFib3JhZG8gY29uIGNlcmRvcyBkZSByYXphIDEwMCAlIGliw6lyaWNhIGNyaWFkb3MgZW4gdG90YWwgbGliZXJ0YWQgZW4gbGFzIG1lam9yZXMgXHJcbiAgICAgICAgICAgIGRlaGVzYXMgZGVsIHZhbGxlIGRlIGxvcyBQZWRyb2NoZXMgZW4gQ29yZG9iYSwgY29uIHVuYSBhbGltZW50YWNpb24gYSBiYXNlIGRlIEJlbGxvdGFzLiBcclxuICAgICAgICAgICAgUGFyYSBwb3RlbmNpYXIgdG9kYXMgc3VzIGFyb21hcyBlc3RlIGphbcOzbiBoYSBzaWRvIGN1cmFkbyBuYXR1cmFsbWVudGUgZHVyYW50ZSBtw6FzIGRlIDI0IG1lc2VzLmAsXHJcbiAgICAgICAgaW1nOiBgamFtb24ucG5nYCxcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBgUGFjayBkZSA1IGNhbGNldGluZXMgTXVqZXIgQWxnb2TDs24gcGFyYSBpbnZpZXJub2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBDYWxjZXRpbmVzIDEwMCUgZGUgYWxnb2TDs24gcHVybywgY2FsZW50aXRvcywgcGFyYSBlbCBpbnZpZXJuby5gLFxyXG4gICAgICAgIGltZzogYGNhbGNldGluZXMucG5nYCxcclxuICAgICAgICBwcmljZTogOS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogYFBpYW5vIGVsZWN0csOzbmljbyBZYW1haGEgUDQ1YCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFBpYW5vIGVsZWN0csOzbmljbyBjb24gODggdGVjbGFzIGRlIG1hcnRpbGxvIGdyYWR1YWJsZXMuYCxcclxuICAgICAgICBpbWc6IGB5YW1haGFfcDQ1LnBuZ2AsXHJcbiAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogYE1lYWRlIExYMjAwIHRlbGVzY29waW8gZGUgMjUsNCBjbSBGLzEwIEFDRiBUdWJvIEF6dWwgVUhUQ2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBUdWJvIGRlIDI1LDQgY20gKDEwIHB1bGdhZGFzKSBGLzEwIEFDRiDDs3B0aWNhIGNvbiBTbm9vdCBhenVsIGNvbiB1aHRjKWAsXHJcbiAgICAgICAgaW1nOiBgbWVhZGVfbHgyMDAucG5nYCxcclxuICAgICAgICBwcmljZTogMjI5MCxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgbmFtZTogYEp1ZWdvIGRlIHRyb25vcyAtIENhbmNpw7NuIGRlIGhpZWxvIHkgZnVlZ28gMWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBUcmFzIGVsIGxhcmdvIHZlcmFubywgZWwgaW52aWVybm8gc2UgYWNlcmNhIGEgbG9zIFNpZXRlIFJlaW5vcy4gXHJcbiAgICAgICAgICAgIExvcmQgRWRkYXJkIFN0YXJrLCBzZcOxb3IgZGUgSW52ZXJuYWxpYSwgZGVqYSBzdXMgZG9taW5pb3MgcGFyYSB1bmlyc2UgXHJcbiAgICAgICAgICAgIGEgbGEgY29ydGUgZGUgc3UgYW1pZ28gZWwgcmV5IFJvYmVydCBCYXJhdGhlb24sIGxsYW1hZG8gZWwgVXN1cnBhZG9yLCBcclxuICAgICAgICAgICAgaG9tYnJlIGTDrXNjb2xvIHkgb3Ryb3JhIGd1ZXJyZXJvIGF1ZGF6IGN1eWFzIG1heW9yZXMgYWZpY2lvbmVzIHNvbiBjb21lciwgXHJcbiAgICAgICAgICAgIGJlYmVyIHkgZW5nZW5kcmFyIGJhc3RhcmRvcy4gRWRkYXJkIFN0YXJrIG9jdXBhcsOhIGVsIGNhcmdvIGRlIE1hbm8gZGVsIFJleSBcclxuICAgICAgICAgICAgZSBpbnRlbnRhcsOhIGRlc2VudHJhw7FhciB1bmEgbWFyYcOxYSBkZSBpbnRyaWdhcyBxdWUgcG9uZHLDoSBlbiBwZWxpZ3JvIHN1IHZpZGEgeSBsYSBkZSB0b2RvcyBsb3Mgc3V5b3MuYCxcclxuICAgICAgICBpbWc6IGBqdWVnb19kZV90cm9ub3NfZ2lnYW1lc2gucG5nYCxcclxuICAgICAgICBwcmljZTogMjkuOTUsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIG5hbWU6IGBDw7NkaWdvIGxpbXBpb2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBDYWRhIGHDsW8sIHNlIGludmllcnRlbiBpbm51bWVyYWJsZXMgaG9yYXMgeSBzZSBwaWVyZGVuIG51bWVyb3NvcyByZWN1cnNvcyBkZWJpZG8gYSBjw7NkaWdvIG1hbCBlc2NyaXRvLCBcclxuICAgICAgICAgICAgcmFsZW50aXphbmRvIGVsIGRlc2Fycm9sbG8sIGRpc21pbnV5ZW5kbyBsYSBwcm9kdWN0aXZpZGFkLCBnZW5lcmFuZG8gZ3JhdmVzIGZhbGxvcyBlIGluY2x1c28gcHVkaWVuZG8gYWNhYmFyIFxyXG4gICAgICAgICAgICBjb24gbGEgb3JnYW5pemFjacOzbiBvIGVtcHJlc2EuIEVsIHJlY29ub2NpZG8gZXhwZXJ0byBkZSBzb2Z0d2FyZSBSb2JlcnQgQy4gTWFydGluLCBqdW50byBjb24gc3VzIGNvbGVnYXMgZGUgXHJcbiAgICAgICAgICAgIE9iamVjdCBNZW50b3IsIG5vcyBwcmVzZW50YW4gc3VzIMOzcHRpbWFzIHTDqWNuaWNhcyB5IG1ldG9kb2xvZ8OtYXMgw6FnaWxlcyBwYXJhIGxpbXBpYXIgZWwgY8OzZGlnbyBzb2JyZSBsYSBtYXJjaGEgeSBcclxuICAgICAgICAgICAgY3JlYXJsbyBkZSBmb3JtYSBjb3JyZWN0YSwgZGUgZXN0ZSBtb2RvIG1lam9yYXLDoSBjb21vIHByb2dyYW1hZG9yLiBFc3RhIG9icmEgc2UgZGl2aWRlIGVuIHRyZXMgcGFydGVzLiBcclxuICAgICAgICAgICAgTGEgcHJpbWVyYSBkZXNjcmliZSBsb3MgcHJpbmNpcGlvcywgcGF0cm9uZXMgeSBwcsOhY3RpY2FzIHBhcmEgY3JlYXIgY8OzZGlnbyBsaW1waW8uIFxyXG4gICAgICAgICAgICBMYSBzZWd1bmRhIGluY2x1eWUgdmFyaW9zIGNhc29zIGRlIGVzdHVkaW8gY3V5YSBjb21wbGVqaWRhZCB2YSBhdW1lbnRhbmRvLiBcclxuICAgICAgICAgICAgQ2FkYSBlamVtcGxvIGVzIHVuIGVqZXJjaWNpbyBkZSBsaW1waWV6YSB5IHRyYW5zZm9ybWFjacOzbiBkZSBjw7NkaWdvIGNvbiBwcm9ibGVtYXMuIFxyXG4gICAgICAgICAgICBMYSB0ZXJjZXJhIHBhcnRlIGRlbCBsaWJybyBjb250aWVuZSB1bmEgbGlzdGEgZGUgaGV1csOtc3RpY2EgeSBzw61udG9tYXMgZGUgY8OzZGlnbyBlcnLDs25lbyAoc21lbGxzKSBjb25mZWNjaW9uYWRhIFxyXG4gICAgICAgICAgICBhbCBjcmVhciBsb3MgY2Fzb3MgcHLDoWN0aWNvcy4gRWwgcmVzdWx0YWRvIGVzIHVuYSBiYXNlIGRlIGNvbm9jaW1pZW50b3MgcXVlIGRlc2NyaWJlIGPDs21vIHBlbnNhbW9zIGN1YW5kbyBjcmVhbW9zLCBcclxuICAgICAgICAgICAgbGVlbW9zIHkgbGltcGlhbW9zIGPDs2RpZ28uIEltcHJlc2NpbmRpYmxlIHBhcmEgY3VhbHF1aWVyIGRlc2Fycm9sbGFkb3IsIGluZ2VuaWVybyBkZSBzb2Z0d2FyZSwgZGlyZWN0b3IgZGUgcHJveWVjdG9zLCBcclxuICAgICAgICAgICAgamVmZSBkZSBlcXVpcG8gbyBhbmFsaXN0YSBkZSBzaXN0ZW1hcyBpbnRlcmVzYWRvIGVuIGNyZWFyIGPDs2RpZ28gZGUgbWVqb3IgY2FsaWRhZC4gXHJcbiAgICAgICAgICAgIMKhRWwgbGlicm8gcXVlIHRvZG8gcHJvZ3JhbWFkb3IgZGViZSBsZWVyIWAsXHJcbiAgICAgICAgaW1nOiBgY29kaWdvX2xpbXBpby5wbmdgLFxyXG4gICAgICAgIHByaWNlOiA0OS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgbmFtZTogYENoYXF1ZXRhIHBlc2FkYSBkZSBtb3RvY2ljbGlzdGEgaG9tYnJlYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYENoYXF1ZXRhIGRlIG1vdG9jaWNsaXN0YSBkZSBjdWVybyAxMDAlIHZhY3VubyBwYXJhIGhvbWJyZS5gLFxyXG4gICAgICAgIGltZzogYGJvaG1iZXJnX21hbi5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAxNTkuOTUsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4LFxyXG4gICAgICAgIG5hbWU6IGBDaGFxdWV0YSBwZXNhZGEgZGUgbW90b2NpY2xpc3RhIG11amVyYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYENoYXF1ZXRhIGRlIG1vdG9jaWNsaXN0YSBkZSBjdWVybyAxMDAlIHZhY3VubyBwYXJhIG11amVyLmAsXHJcbiAgICAgICAgaW1nOiBgYm9obWJlcmdfd29tYW4ucG5nYCxcclxuICAgICAgICBwcmljZTogMTQ5Ljk1LFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBuYW1lOiBgRWwgU2XDsW9yIGRlIGxvcyBBbmlsbG9zIC0gTGEgQ29tdW5pZGFkIGRlbCBBbmlsbG9gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgRWwgU2XDsW9yIGRlIGxvcyBBbmlsbG9zICgxwqogcGFydGUpOiBMYSBDb211bmlkYWQgZGVsIEFuaWxsby4gdmVyc2nDs24gdGFwYSBkdXJhLmAsXHJcbiAgICAgICAgaW1nOiBgbGFfY29tdW5pZGFkX2RlbF9hbmlsbG9fbWlub3RhdXJvLnBuZ2AsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxLFxyXG4gICAgICAgIGludG9DYXJ0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgbmFtZTogYEVsIFNlw7FvciBkZSBsb3MgQW5pbGxvcyAtIExhcyBkb3MgVG9ycmVzYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEVsIFNlw7FvciBkZSBsb3MgQW5pbGxvcyAoMsKqIHBhcnRlKTogTGFzIGRvcyBUb3JyZXMuIHZlcnNpw7NuIHRhcGEgZHVyYS5gLFxyXG4gICAgICAgIGltZzogYGxhc19kb3NfdG9ycmVzX21pbm90YXVyby5wbmdgLFxyXG4gICAgICAgIHByaWNlOiAxOS45NSxcclxuICAgICAgICB1ZDogMSxcclxuICAgICAgICBpbnRvQ2FydDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIG5hbWU6IGBFbCBTZcOxb3IgZGUgbG9zIEFuaWxsb3MgLSBFbCByZXRvcm5vIGRlbCBSZXlgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgRWwgU2XDsW9yIGRlIGxvcyBBbmlsbG9zICgzwqogcGFydGUpOiBFbCByZXRvcm5vIGRlbCBSZXkuIHZlcnNpw7NuIHRhcGEgZHVyYS5gLFxyXG4gICAgICAgIGltZzogYGVsX3JldG9ybm9fZGVsX3JleV9taW5vdGF1cm8ucG5nYCxcclxuICAgICAgICBwcmljZTogMTkuOTUsXHJcbiAgICAgICAgdWQ6IDEsXHJcbiAgICAgICAgaW50b0NhcnQ6IGZhbHNlXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSVRFTVNfREI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnO1xyXG5pbXBvcnQgSXRlbUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtTGlzdCc7XHJcbmltcG9ydCBJVEVNU19EQiBmcm9tICcuLi9qcy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG90YWxQcmljZSxzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyBcIjAuMDBcIiA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtY291bnRcIik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VDYXJ0ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxQcmljZVwiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSAgID0gXCJBbWF6b24uZmFrZVwiO1xyXG5cclxuICAgICAgICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IHNob3BwaW5nQ2FydC5sZW5ndGg7XHJcbiAgICAgICAgdG90YWxJdGVtcy5zdHlsZS5sZWZ0ID0gKHNob3BwaW5nQ2FydC5sZW5ndGggPiA5ID8gYDIxcHhgIDogYDI1cHhgKTtcclxuICAgICAgICBcclxuICAgICAgICBwcmljZUNhcnQuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7dG90YWxQcmljZX3igqxgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZCA9PiB7IFxyXG4gICAgICAgIGNvbnN0IElURU0gPSBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApWzBdO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggKHRvdGFsUHJpY2UgLSBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKS5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkpLnRvRml4ZWQoMikgKTtcclxuICAgICAgICBJVEVNLnVkICAgICAgID0gMTtcclxuICAgICAgICBJVEVNLmludG9DYXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1wdHlDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3BwaW5nQ2FydCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHNob3BwaW5nQ2FydC5sZW5ndGgtMTsgaSA+IC0xOyBpLS0pIFxyXG4gICAgICAgICAgICBkZWxldGVJdGVtKCBzaG9wcGluZ0NhcnRbaV0uaWQgKTtcclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoW10pO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoXCIwLjAwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSBpdGVtID0+IHtcclxuICAgICAgICBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0uaW50b0NhcnQgPSB0cnVlO1xyXG4gICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKCBJVEVNU19EQi5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpdGVtLmlkIClbMF0gKTsgLy9ObyBzw6kgbGEgcmF6w7NuLCBwZXJvIHNpIG5vIGhhZ28gZXN0ZSBwdXNoIGVsIGFycmF5IG5vIHNlIGFjdHVhbGl6YSBhIHRpZW1wbyB5IGVsIHByZWNpbyBubyBjYW1iaWEsIHBvcnF1w6kgb2N1cnJlIGVzdG8/Pz9cclxuICAgICAgICBzZXRTaG9wcGluZ0NhcnQoIHNob3BwaW5nQ2FydCApO1xyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoIHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkudG9GaXhlZCgyKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0IGNhcnQ9e3Nob3BwaW5nQ2FydH0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0gc2V0VW5pdEl0ZW09e3NldFVuaXRJdGVtfSBlbXB0eUNhcnQ9e2VtcHR5Q2FydH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXIgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIChlLGkpID0+IDxJdGVtTGlzdCBkYj17SVRFTVNfREJ9IGl0ZW09e2V9IGtleT17ZS5pZH0gaWQ9e2UuaWR9IGFkZEl0ZW09e2FkZEl0ZW19IC8+IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
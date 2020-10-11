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

 //cart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc);

let CART = [{
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

const Cart = ({
  onNewItem,
  cart,
  changeUnit
}) => {
  const {
    0: shoppingCart,
    1: setShoppingCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CART);
  const {
    0: totalPrice,
    1: setTotalPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(shoppingCart.length == 0 ? 0 : shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc));
  /* const totalPrice = {
      price: shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2)
  }; */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const totalItems = document.getElementById("cart-count");
    totalItems.innerHTML = shoppingCart.length;
    totalItems.style.left = shoppingCart.length > 9 ? `21px` : `25px`;
  });

  const setUnitItem = (id, ud) => {
    shoppingCart.filter(e => e.id == id)[0].ud = ud;
    setShoppingCart(shoppingCart);
    setTotalPrice(shoppingCart.length == 0 ? 0 : shoppingCart.map(e => e.price * e.ud).reduce((e, acc) => e + acc));
  };

  const deleteItem = id => {
    setTotalPrice((totalPrice - shoppingCart.filter(e => e.id == id).map(e => e.price * e.ud)).toFixed(2));
    setShoppingCart(shoppingCart.filter(e => e.id !== id));
  };

  const addItem = item => {
    setShoppingCart([...shoppingCart, item]);
  }; //const setPriceCart = () => totalPrice.price = shoppingCart.length == 0 ? 0 : shoppingCart.map( e => e.price*e.ud ).reduce( (e,acc) => e + acc).toFixed(2);


  return __jsx("div", {
    id: "shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "name_cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Mi carrito", __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "item-list scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, shoppingCart.length === 0 ? __jsx("div", {
    className: "text-center text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "El carrito est\xE1 vac\xEDo") : shoppingCart.map((e, i) => __jsx(_ItemCart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    item: e,
    key: i,
    changeUnit: setUnitItem,
    deleteItem: deleteItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 48
    }
  }))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-right",
    id: "totalPrice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Total a pagar: ", totalPrice, "\u20AC")));
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
  changeUnit,
  onAddUnitItem,
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
      changeUnit(item.id, item.ud - 1);
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
      changeUnit(item.id, item.ud + 1);
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

const ItemList = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  });
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
var _jsxFileName = "C:\\Users\\FJGS_\\OneDrive\\Desktop\\tienda_react\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ITEMS_DB = [{
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

const addItemToCart = id => {
  ITEMS_DB.filter(e => e.id == id)[0];
  console.log("Añadido");
};

const prueba = item => {
  onNewItem = item;
};

const Index = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"]
  /* cart={CART} */
  , {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewItem: addItemToCart
    /* cart={CART} changeUnit={setUnitItem} */
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9JdGVtQ2FydC9JdGVtQ2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0l0ZW1DYXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L0l0ZW1MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2VG9vbHMvTmF2VG9vbHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdlRvb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNBUlQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZyIsInByaWNlIiwidWQiLCJDYXJ0Iiwib25OZXdJdGVtIiwiY2FydCIsImNoYW5nZVVuaXQiLCJzaG9wcGluZ0NhcnQiLCJzZXRTaG9wcGluZ0NhcnQiLCJ1c2VTdGF0ZSIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwibGVuZ3RoIiwibWFwIiwiZSIsInJlZHVjZSIsImFjYyIsInVzZUVmZmVjdCIsInRvdGFsSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0Iiwic2V0VW5pdEl0ZW0iLCJmaWx0ZXIiLCJkZWxldGVJdGVtIiwidG9GaXhlZCIsImFkZEl0ZW0iLCJpdGVtIiwiaSIsIkl0ZW1DYXJ0Iiwib25BZGRVbml0SXRlbSIsInVuaXRzIiwic2V0VW5pdHMiLCJwYXJzZUZsb2F0IiwiSXRlbUxpc3QiLCJOYXYiLCJOYXZUb29scyIsIkNBUlRfTElTVCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIlNlYXJjaCIsIlNFQVJDSCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIklURU1TX0RCIiwiYWRkSXRlbVRvQ2FydCIsImNvbnNvbGUiLCJsb2ciLCJwcnVlYmEiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7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RDs7QUFJQSxNQUFNdUIsS0FBSyxHQUFHLE1BQU07QUFFaEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUc7QUFBQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUVKO0FBQWU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixDQURKO0FBZ0NILENBbENEOztBQW9DZUksb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMxRUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEl0ZW1DYXJ0IGZyb20gJy4vSXRlbUNhcnQnXHJcblxyXG4vL2NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKTtcclxuXHJcbmxldCBDQVJUID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsZXRhIEliw6lyaWNhIGRlIEJlbGxvdGEgZGUgNCw1IGtnIENvdmFwXCIsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJqYW1vbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGVjbGFkbyBMb2dpdGVjaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuLy9jb25zdCBzZXRVbml0SXRlbSA9IChpZCx1bml0KSA9PiBDQVJUWyBDQVJULmluZGV4T2YoIENBUlQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXSApIF0udWQgPSB1bml0O1xyXG5cclxuY29uc3QgQ2FydCA9ICh7b25OZXdJdGVtLGNhcnQsY2hhbmdlVW5pdH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKENBUlQpO1xyXG4gICAgY29uc3QgW3RvdGFsUHJpY2Usc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgKTtcclxuXHJcbiAgICAvKiBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHByaWNlOiBzaG9wcGluZ0NhcnQubGVuZ3RoID09IDAgPyAwIDogc2hvcHBpbmdDYXJ0Lm1hcCggZSA9PiBlLnByaWNlKmUudWQgKS5yZWR1Y2UoIChlLGFjYykgPT4gZSArIGFjYykudG9GaXhlZCgyKVxyXG4gICAgfTsgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWNvdW50XCIpO1xyXG4gICAgICAgIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gc2hvcHBpbmdDYXJ0Lmxlbmd0aDtcclxuICAgICAgICB0b3RhbEl0ZW1zLnN0eWxlLmxlZnQgPSAoc2hvcHBpbmdDYXJ0Lmxlbmd0aCA+IDkgPyBgMjFweGAgOiBgMjVweGApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VW5pdEl0ZW0gPSAoaWQsdWQpID0+IHtcclxuICAgICAgICBzaG9wcGluZ0NhcnQuZmlsdGVyKCBlID0+IGUuaWQgPT0gaWQgKVswXS51ZCA9IHVkO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0ICk7XHJcbiAgICAgICAgc2V0VG90YWxQcmljZSggc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PSAwID8gMCA6IHNob3BwaW5nQ2FydC5tYXAoIGUgPT4gZS5wcmljZSplLnVkICkucmVkdWNlKCAoZSxhY2MpID0+IGUrYWNjICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVJdGVtID0gaWQgPT4geyBcclxuICAgICAgICBzZXRUb3RhbFByaWNlKCAodG90YWxQcmljZSAtIHNob3BwaW5nQ2FydC5maWx0ZXIoIGUgPT4gZS5pZCA9PSBpZCApLm1hcCggZSA9PiBlLnByaWNlKmUudWQgKSkudG9GaXhlZCgyKSApO1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggc2hvcHBpbmdDYXJ0LmZpbHRlciggZSA9PiBlLmlkICE9PSBpZCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIHNldFNob3BwaW5nQ2FydCggWy4uLnNob3BwaW5nQ2FydCwgaXRlbV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc3Qgc2V0UHJpY2VDYXJ0ID0gKCkgPT4gdG90YWxQcmljZS5wcmljZSA9IHNob3BwaW5nQ2FydC5sZW5ndGggPT0gMCA/IDAgOiBzaG9wcGluZ0NhcnQubWFwKCBlID0+IGUucHJpY2UqZS51ZCApLnJlZHVjZSggKGUsYWNjKSA9PiBlICsgYWNjKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYW1lX2NhcnRcIj5NaSBjYXJyaXRvPGhyLz48L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3Qgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0Lmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5XCI+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L2Rpdj4gOiBcclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQubWFwKCAoZSxpKSA9PiA8SXRlbUNhcnQgaXRlbT17ZX0ga2V5PXtpfSBjaGFuZ2VVbml0PXtzZXRVbml0SXRlbX0gZGVsZXRlSXRlbT17ZGVsZXRlSXRlbX0vPiApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGlkPVwidG90YWxQcmljZVwiPlRvdGFsIGEgcGFnYXI6IHsgdG90YWxQcmljZSB94oKsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBJdGVtQ2FydCA9ICh7aXRlbSxpZCxjaGFuZ2VVbml0LG9uQWRkVW5pdEl0ZW0sZGVsZXRlSXRlbX0pID0+IHtcclxuICAgIGNvbnN0IFt1bml0cyxzZXRVbml0c10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICAvKiB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsUHJpY2VcIikuaW5uZXJIVE1MID0gYFRvdGFsIGEgcGFnYXI6ICR7IG9uQWRkVW5pdEl0ZW0oKSB94oKsYDtcclxuICAgIH0pOyAqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNhcnRcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWl0ZW1cIj57aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmdldC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvcHJvZHVjdHMvJHtpdGVtLmltZ31gfSBhbHQ9XCJJbWFnZW4gZGVsIHByb2R1Y3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvbGRcIj5QcmVjaW8vdW5pZGFkOiA8L2Rpdj48ZGl2PntgJHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UpfeKCrGB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bml0LWJ1dHRvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1bml0cyA9PSAxICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VW5pdHMoIHVuaXRzIC0gMSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVW5pdChpdGVtLmlkLGl0ZW0udWQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2B4JHtpdGVtLnVkfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyggdW5pdHMgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VVbml0KGl0ZW0uaWQsaXRlbS51ZCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlrZUxpbmsgZXJyb3JcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ICgpID0+IGRlbGV0ZUl0ZW0oaXRlbS5pZCkgfT5FbGltaW5hcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGJvbGRcIj57YFByZWNpbzogJHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UqaXRlbS51ZCkudG9GaXhlZCgyKX3igqxgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FydDsiLCJpbXBvcnQgSXRlbUNhcnQgZnJvbSAnLi9JdGVtQ2FydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FydDsiLCJpbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiLCJjb25zdCBJdGVtTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0OyIsImltcG9ydCBJdGVtTGlzdCBmcm9tICcuL0l0ZW1MaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0OyIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5pbXBvcnQgTmF2VG9vbHMgZnJvbSAnLi9OYXZUb29scyc7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaGFtYnVyZ2VyX21lbnVcIiBjbGFzc05hbWU9XCJuYXZfaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgY2xhc3NOYW1lPVwic3ZnX21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbmF2X2hvdmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDxOYXZUb29scyAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiXHJcbmNvbnN0IE5hdlRvb2xzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10b29sc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMVwiPkhvbGEsIGlkZW50aWbDrWNhdGU8L3NwYW4+PGJyLz48c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUyXCI+Q3VlbnRhIHkgbGlzdGFzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5fbGluZTFcIj5EZXZvbHVjaW9uZXMgPC9zcGFuPjxici8+PHNwYW4gY2xhc3NOYW1lPVwic3Bhbl9saW5lMlwiPnkgUGVkaWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2hvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUxXCI+U3VzY3LDrWJldGUgYSA8L3NwYW4+PGJyLz48c3BhbiBjbGFzc05hbWU9XCJzcGFuX2xpbmUyXCI+UHJpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9ob3ZlciBzaG9wcGluZ19iYXNrZXRcIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0FSVF9MSVNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wcGluZy1jYXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBDQVJUX0xJU1Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBDQVJUX0xJU1QuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IFwiY2xvc2VfY2FydFwiIHx8IENBUlRfTElTVC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PT0gbnVsbCApID8gXHJcbiAgICAgICAgICAgICAgICAgICAgXCJvcGVuX2NhcnRcIiA6IFwiY2xvc2VfY2FydFwiICk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjYXJ0LWNvdW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9vbHM7IiwiaW1wb3J0IE5hdlRvb2xzIGZyb20gJy4vTmF2VG9vbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9vbHM7IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImJ1c2NhZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ub2RvcyBsb3MgZGVwYXJ0YW1lbnRvcyAmI3gyNUJDOzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgaWQ9XCJcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFNFQVJDSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzY2Fkb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBvcmFuZ2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU0VBUkNILnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiOXB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3hTaGFkb3cgPSBcIm9yYW5nZSAwcHggMHB4IDRweCAxcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFNFQVJDSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVzY2Fkb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCAjMTExMTExXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNFQVJDSC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjlweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTRUFSQ0guc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4ICMxMTExMTFcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNlYXJjaFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3NOYW1lPVwic3ZnX3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1MaXN0JztcclxuXHJcbmNvbnN0IElURU1TX0RCID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiUGFsZXRhIEliw6lyaWNhIGRlIEJlbGxvdGEgZGUgNCw1IGtnIENvdmFwXCIsIC8vUGFsZXRhIDEwMCAlIEliw6lyaWNhIGRlIEJlbGxvdGEgQWx0YSBFeHByZXNpb24gUGxhdGEgZGUgQ292YXAgZGUgNCw1IGtnXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiw7FkamFidm5kbW5iw7FuYsOpw7FrYWggamVyb2Ria2xqYcK0w7HCtGxka2ZibW7DsWRrbGZoamogblwiLFxyXG4gICAgICAgIGltZzogXCJqYW1vbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiVGVjbGFkbyBMb2dpdGVjaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk1LFxyXG4gICAgICAgIHVkOiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiUGlhbm8gZGUgY29sYVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIsOxZGphYnZuZG1uYsOxbmLDqcOxa2FoIGplcm9kYmtsamHCtMOxwrRsZGtmYm1uw7Fka2xmaGpqIG5cIixcclxuICAgICAgICBpbWc6IFwibmQucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MDAsXHJcbiAgICAgICAgdWQ6IDFcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBhZGRJdGVtVG9DYXJ0ID0gaWQgPT4ge0lURU1TX0RCLmZpbHRlciggZSA9PiBlLmlkID09IGlkIClbMF07IGNvbnNvbGUubG9nKFwiQcOxYWRpZG9cIil9XHJcblxyXG5jb25zdCBwcnVlYmEgPSBpdGVtID0+IHtcclxuICAgIG9uTmV3SXRlbSA9IGl0ZW07XHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYgLyogY2FydD17Q0FSVH0gKi8gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0IG9uTmV3SXRlbT17YWRkSXRlbVRvQ2FydH0gLyogY2FydD17Q0FSVH0gY2hhbmdlVW5pdD17c2V0VW5pdEl0ZW19ICovLz5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhJVEVNU19EQi5tYXAoIGUgPT4gZSApKVxyXG4gICAgICAgICAgICAgICAgICAgIElURU1TX0RCLm1hcCggZSA9PiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uTmV3SXRlbShlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBJVEVNU19EQi5maWx0ZXIoIGVsID0+IGVsLmlkID09IGUuaWQgKVswXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJ1ZWJhKCBJVEVNU19EQi5maWx0ZXIoIGVsID0+IGVsLmlkID09IGUuaWQgKVswXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5BZ3JlZ2FyIGFsIGNhcnJpdG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKVxyXG4gICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSVRFTVNfREIubWFwKCBlID0+IGUgKSlcclxuICAgICAgICAgICAgICAgICAgICBJVEVNU19EQi5tYXAoIGUgPT4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OZXdJdGVtKGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5BZ3JlZ2FyIGFsIGNhcnJpdG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKVxyXG4gICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8SXRlbUxpc3QgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
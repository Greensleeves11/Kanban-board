/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Lato', sans-serif;\r\n  background: linear-gradient(to right, #141e30, #243b55);\r\n}\r\n\r\n.board-container {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  width: 70rem;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n}\r\n\r\n.col {\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(230, 230, 230);\r\n  position: relative;\r\n}\r\n\r\n.col:not(:last-child) {\r\n  border-right: 2px solid rgb(150, 150, 150);\r\n}\r\n\r\n.col-title {\r\n  height: 5rem;\r\n  border-bottom: 2px solid rgb(150, 150, 150);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1.25rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.col-body {\r\n  min-height: 23rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.col-body:first-child {\r\n  justify-content: center;\r\n}\r\n\r\n.new-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  outline: none;\r\n  background-color: ghostwhite;\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n.importance {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  column-gap: 0.5rem;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.importance:not(:first-of-type) {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1rem;\r\n  background-color: #555555;\r\n  color: rgb(248, 248, 255);\r\n  border: none;\r\n  padding-block: 0.5rem;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n  background-color: #6e6e6e;\r\n}\r\n\r\n.bin-img-container img {\r\n  height: 3.5rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* .bin-img-container img:hover {\r\n  cursor: pointer;\r\n  height: 3.75rem;\r\n  margin-top: 1.75rem;\r\n} */\r\n\r\n.card {\r\n  background-color: rgb(248, 248, 255);\r\n  text-align: center;\r\n  width: 80%;\r\n  border-radius: 5px;\r\n  margin-top: 1rem;\r\n  font-size: 1rem;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n.card p {\r\n  margin: 0;\r\n  padding-inline: 0.5rem;\r\n}\r\n\r\n.card-header {\r\n  padding-top: 0.25rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n  position: relative;\r\n}\r\n\r\n.remove-task {\r\n  height: 15px;\r\n  position: absolute;\r\n  left: 4px;\r\n  top: 4px;\r\n}\r\n\r\n.card-body {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.card:hover {\r\n  cursor: pointer;\r\n  opacity: 0.85;\r\n}\r\n\r\n/* Media queries */\r\n\r\n@media (max-width: 1200px) {\r\n  .board-container {\r\n    width: 60rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .board-container {\r\n    flex-direction: column;\r\n    width: 40rem;\r\n  }\r\n\r\n  .col {\r\n    width: 100%;\r\n    margin-bottom: 3rem;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .col-body {\r\n    min-height: 20rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .board-container {\r\n    width: 30rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .board-container {\r\n    width: 20rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./public/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,uDAAuD;AACzD;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,2CAA2C;EAC3C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;;;GAIG;;AAEH;EACE,oCAAoC;EACpC,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iDAAiD;AACnD;;AAEA;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA,kBAAkB;;AAElB;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Lato', sans-serif;\r\n  background: linear-gradient(to right, #141e30, #243b55);\r\n}\r\n\r\n.board-container {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  width: 70rem;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n}\r\n\r\n.col {\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(230, 230, 230);\r\n  position: relative;\r\n}\r\n\r\n.col:not(:last-child) {\r\n  border-right: 2px solid rgb(150, 150, 150);\r\n}\r\n\r\n.col-title {\r\n  height: 5rem;\r\n  border-bottom: 2px solid rgb(150, 150, 150);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1.25rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.col-body {\r\n  min-height: 23rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.col-body:first-child {\r\n  justify-content: center;\r\n}\r\n\r\n.new-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  outline: none;\r\n  background-color: ghostwhite;\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n.importance {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  column-gap: 0.5rem;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.importance:not(:first-of-type) {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.btn {\r\n  margin-top: 1rem;\r\n  background-color: #555555;\r\n  color: rgb(248, 248, 255);\r\n  border: none;\r\n  padding-block: 0.5rem;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n  background-color: #6e6e6e;\r\n}\r\n\r\n.bin-img-container img {\r\n  height: 3.5rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* .bin-img-container img:hover {\r\n  cursor: pointer;\r\n  height: 3.75rem;\r\n  margin-top: 1.75rem;\r\n} */\r\n\r\n.card {\r\n  background-color: rgb(248, 248, 255);\r\n  text-align: center;\r\n  width: 80%;\r\n  border-radius: 5px;\r\n  margin-top: 1rem;\r\n  font-size: 1rem;\r\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n.card p {\r\n  margin: 0;\r\n  padding-inline: 0.5rem;\r\n}\r\n\r\n.card-header {\r\n  padding-top: 0.25rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 700;\r\n  position: relative;\r\n}\r\n\r\n.remove-task {\r\n  height: 15px;\r\n  position: absolute;\r\n  left: 4px;\r\n  top: 4px;\r\n}\r\n\r\n.card-body {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.card:hover {\r\n  cursor: pointer;\r\n  opacity: 0.85;\r\n}\r\n\r\n/* Media queries */\r\n\r\n@media (max-width: 1200px) {\r\n  .board-container {\r\n    width: 60rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .board-container {\r\n    flex-direction: column;\r\n    width: 40rem;\r\n  }\r\n\r\n  .col {\r\n    width: 100%;\r\n    margin-bottom: 3rem;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .col-body {\r\n    min-height: 20rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .board-container {\r\n    width: 30rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .board-container {\r\n    width: 20rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./public/img/cancel.png":
/*!*******************************!*\
  !*** ./public/img/cancel.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/cancel.png");

/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./public/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./public/src/TaskController.ts":
/*!**************************************!*\
  !*** ./public/src/TaskController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskController": () => (/* binding */ TaskController)
/* harmony export */ });
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Model */ "./public/src/model/Model.ts");
/* harmony import */ var _view_UIView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/UIView */ "./public/src/view/UIView.ts");
/* harmony import */ var _model_CategoryVO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/CategoryVO */ "./public/src/model/CategoryVO.ts");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFactory */ "./public/src/taskFactory.ts");
/* harmony import */ var _view_TaskView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/TaskView */ "./public/src/view/TaskView.ts");
/* harmony import */ var _model_ListVO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/ListVO */ "./public/src/model/ListVO.ts");
/* harmony import */ var _model_TaskVO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/TaskVO */ "./public/src/model/TaskVO.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TaskController = (function () {
    function TaskController() {
        var _this = this;
        this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.model;
                        return [4, this.model.dataService.get()];
                    case 1:
                        _a.localData = _b.sent();
                        if (this.model.localData) {
                            this.view = new _view_UIView__WEBPACK_IMPORTED_MODULE_1__.UIView(this.model.localData[0]);
                            this.view.render(this.root, 'beforeend');
                            this.setData();
                            this.addEventListeners();
                        }
                        return [2];
                }
            });
        }); };
        this.setData = function () {
            _this.setCategories();
            _this.setColumns();
            _this.setTasks();
        };
        this.setCategories = function () {
            if (_this.model.localData) {
                for (var i = 0; i < _this.model.localData[1].length; i++) {
                    _this.model.localData[1][i] = new _model_CategoryVO__WEBPACK_IMPORTED_MODULE_2__.CategoryVO(_this.model.localData[1][i].index, _this.model.localData[1][i].label, _this.model.localData[1][i].color, _this.model.localData[1][i]._id);
                    var picker = (document.getElementById(_this.model.localData[1][i].index.toString()));
                    picker.value = _this.model.localData[1][i].color;
                }
                _this.colorAllTasks();
            }
        };
        this.setColumns = function () {
            if (_this.model.localData) {
                for (var i = 0; i < _this.model.localData[0].length; i++) {
                    _this.model.localData[0][i] = new _model_ListVO__WEBPACK_IMPORTED_MODULE_5__.ListVO(_this.model.localData[0][i].label, _this.model.localData[0][i].items, _this.model.localData[0][i]._id);
                }
            }
        };
        this.setTasks = function () {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    for (var i = 0; i < column.items.length; i++) {
                        column.items[i] = new _model_TaskVO__WEBPACK_IMPORTED_MODULE_6__.TaskVO(column.items[i].index, column.items[i].body, column.items[i].category, column.label, column.items[i]._id, column.items[i].columnID);
                    }
                });
            }
        };
        this.colorTask = function (task) {
            var picker = document.getElementById(task.category);
            var taskToColor = document.getElementById(task.index.toString());
            if (taskToColor) {
                taskToColor.style.backgroundColor = picker.value;
            }
        };
        this.colorAllTasks = function () {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    column.items.forEach(function (task) {
                        var picker = (document.getElementById(task.category));
                        var taskToColor = document.getElementById(task.index.toString());
                        if (taskToColor) {
                            taskToColor.style.backgroundColor = picker.value;
                        }
                    });
                });
            }
        };
        this.createTask = function () {
            var body = document.querySelector('#new-card-text');
            var category = _this.checkCategory();
            var task = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_3__.taskFactory)(_this.model.localData[2].counter++, body.value, category);
            _this.model.localData[0][0].items.push(task);
            body.value = '';
            return task;
        };
        this.checkCategory = function () {
            var radioButtons = document.getElementsByName('importance');
            var importance;
            var category = '';
            radioButtons.forEach(function (btn) {
                var button = btn;
                if (button.checked) {
                    importance = parseInt(button.value);
                    if (importance === 1) {
                        category = 'c-not-important';
                    }
                    else if (importance === 2) {
                        category = 'c-important';
                    }
                    else if (importance === 3) {
                        category = 'c-urgent';
                    }
                }
            });
            return category;
        };
        this.removeTaskById = function (index) {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    for (var i = 0; i < column.items.length; i++) {
                        if (column.items[i].index === index) {
                            column.items.splice(i, 1);
                            break;
                        }
                    }
                });
            }
        };
        this.addRemoveListener = function (task) {
            var iconParent = document.getElementById(task.index.toString());
            if (iconParent) {
                var icon = iconParent.children[0].children[1];
                icon.addEventListener('click', function (e) {
                    _this.processRemoval(e);
                });
            }
        };
        this.addRemoveListeners = function () {
            var removeIcons = document.querySelectorAll('.remove-task');
            removeIcons.forEach(function (icon) {
                icon.addEventListener('click', function (e) {
                    _this.processRemoval(e);
                });
            });
        };
        this.processRemoval = function (e) {
            var _a;
            var task = document.getElementById(e.target.parentElement.parentElement.id);
            if (task) {
                task.remove();
                var taskDB_1;
                if (_this.model.localData) {
                    (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                        column.items.forEach(function (item) {
                            if (item.index === parseInt(task.id)) {
                                taskDB_1 = item;
                            }
                        });
                    });
                }
                _this.removeTaskById(parseInt(e.target.parentElement.parentElement.id));
                if (taskDB_1) {
                    _this.model.taskService.delete(taskDB_1);
                }
            }
        };
        this.addFormListener = function () {
            var form = document.querySelector('.new-card');
            if (form) {
                form.addEventListener('submit', function (e) {
                    _this.processSubmit(e);
                });
            }
        };
        this.processSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var body, task, taskView, column, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e.preventDefault();
                        body = document.querySelector('#new-card-text');
                        if (!(body.value !== '')) return [3, 2];
                        task = this.createTask();
                        taskView = new _view_TaskView__WEBPACK_IMPORTED_MODULE_4__.TaskView(task);
                        column = document.querySelectorAll('.col-body')[1];
                        taskView.render(column, 'beforeend');
                        this.colorTask(task);
                        this.addRemoveListener(task);
                        this.addOnDragStartListener(task);
                        this.addTaskEditListener(task);
                        this.model.taskService.add(task);
                        if (this.model.localData) {
                            this.model.counterService.update(this.model.localData[2]);
                        }
                        _a = this.model;
                        return [4, this.model.dataService.get()];
                    case 1:
                        _a.localData = _b.sent();
                        this.setTasks();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        }); };
        this.addOnDragStartListener = function (task) {
            var item = document.getElementById(task.index.toString());
            if (item) {
                item.addEventListener('dragstart', function (e) {
                    if (e.dataTransfer) {
                        e.dataTransfer.setData('text/plain', e.target.id);
                    }
                });
            }
        };
        this.addOnDragOverListener = function () {
            var columns = document.querySelectorAll('.col-body');
            columns.forEach(function (column) {
                column.addEventListener('dragover', function (e) {
                    e.preventDefault();
                });
            });
        };
        this.addOnDropListener = function () {
            var columns = document.querySelectorAll('.col-body');
            columns.forEach(function (column) {
                column.addEventListener('drop', function (e) {
                    var _a, _b;
                    if (e.target.classList.contains('col-body')) {
                        var id = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text');
                        var draggableElement_1 = document.getElementById(id);
                        var dropzone = e.target;
                        dropzone.appendChild(draggableElement_1);
                        (_b = e.dataTransfer) === null || _b === void 0 ? void 0 : _b.clearData();
                        var columnFrom_1 = {
                            label: '',
                            items: [],
                            _id: '',
                        };
                        if (_this.model.localData && draggableElement_1) {
                            _this.model.localData[0].forEach(function (column) {
                                column.items.forEach(function (task) {
                                    if (task.index === parseInt(draggableElement_1.id)) {
                                        columnFrom_1 = column;
                                    }
                                });
                            });
                        }
                        var columnTo = {
                            label: '',
                            items: [],
                            _id: '',
                        };
                        var columns_1 = document.querySelectorAll('.col-body');
                        for (var i = 1; i < columns_1.length; i++) {
                            if (columns_1[i] === dropzone && _this.model.localData) {
                                columnTo = _this.model.localData[0][i - 1];
                                break;
                            }
                        }
                        var taskIndex = 0;
                        if (draggableElement_1) {
                            for (var i = 0; i < columnFrom_1.items.length; i++) {
                                if (columnFrom_1.items[i].index === parseInt(draggableElement_1.id)) {
                                    taskIndex = i;
                                    break;
                                }
                            }
                        }
                        columnTo.items.push(columnFrom_1.items.splice(taskIndex, 1)[0]);
                        var task = columnTo.items[columnTo.items.length - 1];
                        task.columnID = columnTo._id;
                        _this.model.taskService.edit(task);
                    }
                });
            });
        };
        this.addColorChangeListeners = function () {
            var pickers = document.querySelectorAll('*[id^="c-"]');
            pickers.forEach(function (picker) {
                picker.addEventListener('change', function (e) {
                    if (_this.model.localData) {
                        _this.model.localData[1].forEach(function (category) {
                            if (category.index === picker.id) {
                                category.color = e.target.value;
                                _this.model.categoryService.edit(category);
                            }
                        });
                    }
                    if (_this.model.localData) {
                        _this.model.localData[0].forEach(function (column) {
                            column.items.forEach(function (item) {
                                if (item.category === picker.id) {
                                    var colorPicker = document.getElementById(item.index.toString());
                                    if (colorPicker) {
                                        colorPicker.style.backgroundColor = e.target.value;
                                    }
                                }
                            });
                        });
                    }
                });
            });
        };
        this.addTaskEditListener = function (task) {
            var taskItem = document.getElementById(task.index.toString());
            if (taskItem) {
                var contentEditable_1 = taskItem.children[1].children[0];
                contentEditable_1.addEventListener('blur', function () {
                    if (_this.model.localData) {
                        _this.model.localData[0].forEach(function (column) {
                            column.items.forEach(function (item) {
                                if (item.index ===
                                    parseInt(contentEditable_1.parentNode.parentNode.id)) {
                                    item.body = contentEditable_1.innerText;
                                }
                            });
                        });
                        _this.model.taskService.edit(task);
                    }
                });
            }
        };
        this.addEventListeners = function () {
            _this.addFormListener();
            _this.addOnDragOverListener();
            _this.addOnDropListener();
            _this.addColorChangeListeners();
            if (_this.model.localData) {
                _this.model.localData[0].forEach(function (column) {
                    column.items.forEach(function (task) {
                        _this.addRemoveListener(task);
                        _this.addTaskEditListener(task);
                        _this.addOnDragStartListener(task);
                    });
                });
            }
        };
        this.model = new _model_Model__WEBPACK_IMPORTED_MODULE_0__.Model();
        this.root = document.getElementById('root');
    }
    return TaskController;
}());



/***/ }),

/***/ "./public/src/model/CategoryVO.ts":
/*!****************************************!*\
  !*** ./public/src/model/CategoryVO.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryVO": () => (/* binding */ CategoryVO)
/* harmony export */ });
var CategoryVO = (function () {
    function CategoryVO(index, label, color, _id) {
        (this.index = index),
            (this.label = label),
            (this.color = color),
            (this._id = _id);
    }
    return CategoryVO;
}());



/***/ }),

/***/ "./public/src/model/ListVO.ts":
/*!************************************!*\
  !*** ./public/src/model/ListVO.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVO": () => (/* binding */ ListVO)
/* harmony export */ });
var ListVO = (function () {
    function ListVO(label, items, _id) {
        (this.label = label), (this.items = items), (this._id = _id);
    }
    return ListVO;
}());



/***/ }),

/***/ "./public/src/model/Model.ts":
/*!***********************************!*\
  !*** ./public/src/model/Model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _services_CategoryService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CategoryService */ "./public/src/services/CategoryService.ts");
/* harmony import */ var _services_CounterService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/CounterService */ "./public/src/services/CounterService.ts");
/* harmony import */ var _services_TaskService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TaskService */ "./public/src/services/TaskService.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataService */ "./public/src/services/DataService.ts");




var Model = (function () {
    function Model() {
        this.dataService = new _services_DataService__WEBPACK_IMPORTED_MODULE_3__.DataService('http://localhost:5000/api/routes/data');
        this.categoryService = new _services_CategoryService__WEBPACK_IMPORTED_MODULE_0__.CategoryService('http://localhost:5000/api/routes/category');
        this.counterService = new _services_CounterService__WEBPACK_IMPORTED_MODULE_1__.CounterService('http://localhost:5000/api/routes/counter');
        this.taskService = new _services_TaskService__WEBPACK_IMPORTED_MODULE_2__.TaskService('http://localhost:5000/api/routes/task');
    }
    return Model;
}());



/***/ }),

/***/ "./public/src/model/TaskVO.ts":
/*!************************************!*\
  !*** ./public/src/model/TaskVO.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskVO": () => (/* binding */ TaskVO)
/* harmony export */ });
var TaskVO = (function () {
    function TaskVO(index, body, category, column, _id, columnID) {
        (this.index = index),
            (this.body = body),
            (this.category = category),
            (this.column = column);
        this._id = _id;
        this.columnID = columnID;
    }
    return TaskVO;
}());



/***/ }),

/***/ "./public/src/services/CategoryService.ts":
/*!************************************************!*\
  !*** ./public/src/services/CategoryService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CategoryService = (function () {
    function CategoryService(CATEGORY_URL) {
        this.CATEGORY_URL = CATEGORY_URL;
    }
    CategoryService.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.CATEGORY_URL)];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    CategoryService.prototype.edit = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.CATEGORY_URL + "/".concat(category._id), {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(category),
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return CategoryService;
}());



/***/ }),

/***/ "./public/src/services/CounterService.ts":
/*!***********************************************!*\
  !*** ./public/src/services/CounterService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterService": () => (/* binding */ CounterService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CounterService = (function () {
    function CounterService(COUNTER_URL) {
        this.COUNTER_URL = COUNTER_URL;
    }
    CounterService.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.COUNTER_URL)];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    CounterService.prototype.update = function (counter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.COUNTER_URL + "/".concat(counter._id), {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(counter),
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return CounterService;
}());



/***/ }),

/***/ "./public/src/services/DataService.ts":
/*!********************************************!*\
  !*** ./public/src/services/DataService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DataService = (function () {
    function DataService(DATA_URL) {
        this.DATA_URL = DATA_URL;
    }
    DataService.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.DATA_URL)];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    return DataService;
}());



/***/ }),

/***/ "./public/src/services/TaskService.ts":
/*!********************************************!*\
  !*** ./public/src/services/TaskService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var TaskService = (function () {
    function TaskService(TASK_URL) {
        this.TASK_URL = TASK_URL;
    }
    TaskService.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.TASK_URL)];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    TaskService.prototype.add = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((task.column = 'To do')) {
                            task.columnID = '61e59d4f75cc8be14f148e0b';
                        }
                        else if ((task.column = 'In progress')) {
                            task.columnID = '61e59d5e75cc8be14f148e0d';
                        }
                        else {
                            task.columnID = '61e59d7975cc8be14f148e0f';
                        }
                        return [4, fetch(this.TASK_URL, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(task),
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TaskService.prototype.delete = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.TASK_URL + "/".concat(task._id), {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(task),
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TaskService.prototype.edit = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.TASK_URL + "/".concat(task._id), {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(task),
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return TaskService;
}());



/***/ }),

/***/ "./public/src/taskFactory.ts":
/*!***********************************!*\
  !*** ./public/src/taskFactory.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
/* harmony import */ var _model_TaskVO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/TaskVO */ "./public/src/model/TaskVO.ts");

var taskFactory = function (index, body, category, column, _id, columnID) {
    return new _model_TaskVO__WEBPACK_IMPORTED_MODULE_0__.TaskVO(index, body, category, column, _id, columnID);
};


/***/ }),

/***/ "./public/src/view/ColumnView.ts":
/*!***************************************!*\
  !*** ./public/src/view/ColumnView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnView": () => (/* binding */ ColumnView)
/* harmony export */ });
var ColumnView = (function () {
    function ColumnView(title, childElement) {
        var _this = this;
        this.render = function (parentElement, position) {
            parentElement.insertAdjacentHTML(position, _this.template);
            var allColumnBodies = parentElement.querySelectorAll('.col-body');
            _this.columnBody = allColumnBodies[allColumnBodies.length - 1];
            _this.childElement.render(_this.columnBody, position);
        };
        this.title = title;
        this.childElement = childElement;
        this.template = "<div class=\"col\">\n    <div class=\"col-title\">\n    <p class=\"title-text\">".concat(title, "</p>\n    </div>\n    <div class=\"col-body\">\n    </div>\n    </div>");
    }
    return ColumnView;
}());



/***/ }),

/***/ "./public/src/view/ControlPanelView.ts":
/*!*********************************************!*\
  !*** ./public/src/view/ControlPanelView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPanelView": () => (/* binding */ ControlPanelView)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./public/src/view/View.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ControlPanelView = (function (_super) {
    __extends(ControlPanelView, _super);
    function ControlPanelView() {
        var _this = _super.call(this) || this;
        _this.template = template;
        return _this;
    }
    return ControlPanelView;
}(_View__WEBPACK_IMPORTED_MODULE_0__.View));

var template = "<form action=\"#\" class=\"new-card\">\n<label for=\"new-card-text\" hidden>Create new card</label>\n<textarea name=\"\" id=\"new-card-text\" cols=\"20\" rows=\"10\"></textarea>\n<div class=\"importance\">\n  <div>\n    <input\n      type=\"color\"\n      name=\"not-important-picker\"\n      id=\"c-not-important\"\n    />\n  </div>\n  <label for=\"not-important\">Not important</label>\n  <input\n    type=\"radio\"\n    name=\"importance\"\n    id=\"not-important\"\n    value=\"1\"\n    checked\n  />\n</div>\n<div class=\"importance\">\n  <div>\n    <input\n      type=\"color\"\n      name=\"important-picker\"\n      id=\"c-important\"\n    />\n  </div>\n  <label for=\"important\">Important</label>\n  <input type=\"radio\" name=\"importance\" id=\"important\" value=\"2\" />\n</div>\n<div class=\"importance\">\n  <div>\n    <input type=\"color\" name=\"urgent-picker\" id=\"c-urgent\" />\n  </div>\n  <label for=\"urgent\">Urgent</label>\n  <input type=\"radio\" name=\"importance\" id=\"urgent\" value=\"3\" />\n</div>\n<label for=\"btn-form\" hidden>Form button</label>\n<input type=\"submit\" value=\"Create\" class=\"btn\" />\n</form>";


/***/ }),

/***/ "./public/src/view/TaskListView.ts":
/*!*****************************************!*\
  !*** ./public/src/view/TaskListView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListView": () => (/* binding */ TaskListView)
/* harmony export */ });
/* harmony import */ var _TaskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskView */ "./public/src/view/TaskView.ts");

var TaskListView = (function () {
    function TaskListView(cardItems) {
        this.children = cardItems.map(function (item) {
            return new _TaskView__WEBPACK_IMPORTED_MODULE_0__.TaskView(item);
        });
    }
    TaskListView.prototype.render = function (parentElement, position) {
        this.children.forEach(function (child) {
            child.render(parentElement, position);
        });
    };
    return TaskListView;
}());



/***/ }),

/***/ "./public/src/view/TaskView.ts":
/*!*************************************!*\
  !*** ./public/src/view/TaskView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskView": () => (/* binding */ TaskView)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./public/src/view/View.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TaskView = (function (_super) {
    __extends(TaskView, _super);
    function TaskView(task) {
        var _this = _super.call(this) || this;
        _this.template = "<div class='card' draggable='true' id='".concat(task.index, "'>\n  <section class=\"card-header\">\n    <p class=\"card-text-header\">\n     Task #").concat(task.index, "\n   </p>\n   <img src=\"img/cancel.png\" alt=\"remove task\" class=\"remove-task\" />\n  </section>\n  <section class=\"card-body\">\n    <p class=\"card-text\" contenteditable=\"true\">\n      ").concat(task.body, "\n    </p>\n  </section>\n</div>");
        return _this;
    }
    return TaskView;
}(_View__WEBPACK_IMPORTED_MODULE_0__.View));



/***/ }),

/***/ "./public/src/view/UIView.ts":
/*!***********************************!*\
  !*** ./public/src/view/UIView.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIView": () => (/* binding */ UIView)
/* harmony export */ });
/* harmony import */ var _TaskListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListView */ "./public/src/view/TaskListView.ts");
/* harmony import */ var _ControlPanelView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlPanelView */ "./public/src/view/ControlPanelView.ts");
/* harmony import */ var _ColumnView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnView */ "./public/src/view/ColumnView.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var UIView = (function () {
    function UIView(columnList) {
        var _this = this;
        this.template = '<div class="board-container"></div>';
        this.render = function (element, position) {
            if (element) {
                element.insertAdjacentHTML(position, _this.template);
                _this.element = element.querySelector('.board-container');
                _this.children.forEach(function (child) {
                    return child.render(_this.element, position);
                });
            }
        };
        var controlPanelView = new _ColumnView__WEBPACK_IMPORTED_MODULE_2__.ColumnView('Create/remove task', new _ControlPanelView__WEBPACK_IMPORTED_MODULE_1__.ControlPanelView());
        var columnViewList = columnList.map(function (column) { return new _ColumnView__WEBPACK_IMPORTED_MODULE_2__.ColumnView(column.label, new _TaskListView__WEBPACK_IMPORTED_MODULE_0__.TaskListView(column.items)); });
        this.children = __spreadArray([controlPanelView], columnViewList, true);
    }
    return UIView;
}());



/***/ }),

/***/ "./public/src/view/View.ts":
/*!*********************************!*\
  !*** ./public/src/view/View.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
var View = (function () {
    function View() {
        var _this = this;
        this.template = '';
        this.render = function (element, position) {
            element.insertAdjacentHTML(position, _this.template);
        };
    }
    return View;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./public/src/main.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./public/style.css");
/* harmony import */ var _img_cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/cancel.png */ "./public/img/cancel.png");
/* harmony import */ var _TaskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskController */ "./public/src/TaskController.ts");



var taskController = new _TaskController__WEBPACK_IMPORTED_MODULE_2__.TaskController();
taskController.init();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
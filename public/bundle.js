/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/***/ (() => {

eval("\nfunction setAttributes(element, attrs) {\n    for (var i = 0; i < attrs.length; i++) {\n        var attr = attrs[i];\n        element.setAttribute(attr.name, attr.value);\n    }\n}\nfunction createButton(isIncrement) {\n    var btn = document.createElement(\"button\");\n    setAttributes(btn, [\n        { name: \"type\", value: \"button\" },\n        { name: \"class\", value: \"btn btn-primary button\" },\n    ]);\n    if (isIncrement) {\n        // TODO: Gotta be a better way\n        setAttributes(btn, [\n            { name: \"onclick\", value: \"clickHandler(true)\" },\n        ]);\n    }\n    else {\n        setAttributes(btn, [\n            { name: \"onclick\", value: \"clickHandler(false)\" },\n        ]);\n    }\n    var display = isIncrement ? \"👍\" : \"👎\";\n    btn.appendChild(document.createTextNode(display));\n    return btn;\n}\nvar clickHandler = function (isIncrement) {\n    var el = document.getElementById(\"counter-value\");\n    var counter = 0;\n    if (isIncrement) {\n        counter = parseInt(el === null || el === void 0 ? void 0 : el.innerHTML) + 1;\n    }\n    else {\n        counter = parseInt(el === null || el === void 0 ? void 0 : el.innerHTML) - 1;\n    }\n    if (el != null) { // TOOD: find a better way to do this shit !\n        el.innerHTML = counter.toString();\n    }\n};\n// setup the DOM tree using JS by creating the element nodes\n// get the root div for the app and render children using js\n// basically what React is doing !\nvar app = document.getElementById(\"app\");\n// render the navbar\nvar nav = document.createElement(\"nav\");\nsetAttributes(nav, [\n    { name: \"id\", value: \"navbar\" },\n    { name: \"class\", value: \"navbar navbar-light bg-light\" },\n]);\nvar navA = document.createElement(\"a\");\nsetAttributes(navA, [\n    { name: \"class\", value: \"navbar-brand\" },\n    { name: \"href\", value: \"#\" },\n]);\nnavA.appendChild(document.createTextNode(\"Like Counter\"));\nnav.appendChild(navA);\napp === null || app === void 0 ? void 0 : app.appendChild(nav);\n// setup the div with a init counter value\nvar counter = document.createElement(\"div\");\nsetAttributes(counter, [\n    { name: \"id\", value: \"counter\" },\n    { name: \"class\", value: \"counter\" },\n]);\nvar h3 = document.createElement(\"h3\");\nsetAttributes(h3, [\n    { name: \"id\", value: \"counter-value\" },\n]);\nh3.appendChild(document.createTextNode(\"0\"));\ncounter.appendChild(h3);\n// setup the buttons\nvar btnDiv = document.createElement(\"div\");\nsetAttributes(btnDiv, [\n    { name: \"id\", value: \"btn-div\" },\n    { name: \"class\", value: \"btn-div\" },\n]);\nvar incrementBtn = createButton(true);\nvar decrementBtn = createButton(false);\nbtnDiv.appendChild(incrementBtn);\nbtnDiv.appendChild(decrementBtn);\napp === null || app === void 0 ? void 0 : app.appendChild(btnDiv);\n// do a nice pop up animation!\nvar notificatonDiv = document.createElement(\"div\");\nsetAttributes(notificatonDiv, [\n    { name: \"id\", value: \"notification\" },\n    { name: \"class\", value: \"notification\" },\n]);\n// TODO: Need to work on this\napp === null || app === void 0 ? void 0 : app.appendChild(nav);\napp === null || app === void 0 ? void 0 : app.appendChild(counter);\napp === null || app === void 0 ? void 0 : app.appendChild(btnDiv);\n\n\n//# sourceURL=webpack://counter-ts/./public/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/script.js"]();
/******/ 	
/******/ })()
;
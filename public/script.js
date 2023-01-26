"use strict";
function setAttributes(element, attrs) {
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        element.setAttribute(attr.name, attr.value);
    }
}
function createButton(isIncrement) {
    var btn = document.createElement("button");
    setAttributes(btn, [
        { name: "type", value: "button" },
        { name: "class", value: "btn btn-primary button" },
    ]);
    if (isIncrement) {
        // TODO: Gotta be a better way
        setAttributes(btn, [
            { name: "onclick", value: "clickHandler(true)" },
        ]);
    }
    else {
        setAttributes(btn, [
            { name: "onclick", value: "clickHandler(false)" },
        ]);
    }
    var display = isIncrement ? "👍" : "👎";
    btn.appendChild(document.createTextNode(display));
    return btn;
}
var clickHandler = function (isIncrement) {
    var el = document.getElementById("counter-value");
    var counter = 0;
    if (isIncrement) {
        counter = parseInt(el === null || el === void 0 ? void 0 : el.innerHTML) + 1;
    }
    else {
        counter = parseInt(el === null || el === void 0 ? void 0 : el.innerHTML) - 1;
    }
    if (el != null) { // TOOD: find a better way to do this shit !
        el.innerHTML = counter.toString();
    }
};
// setup the DOM tree using JS by creating the element nodes
// get the root div for the app and render children using js
// basically what React is doing !
var app = document.getElementById("app");
// render the navbar
var nav = document.createElement("nav");
setAttributes(nav, [
    { name: "id", value: "navbar" },
    { name: "class", value: "navbar navbar-light bg-light" },
]);
var navA = document.createElement("a");
setAttributes(navA, [
    { name: "class", value: "navbar-brand" },
    { name: "href", value: "#" },
]);
navA.appendChild(document.createTextNode("Like Counter"));
nav.appendChild(navA);
app === null || app === void 0 ? void 0 : app.appendChild(nav);
// setup the div with a init counter value
var counter = document.createElement("div");
setAttributes(counter, [
    { name: "id", value: "counter" },
    { name: "class", value: "counter" },
]);
var h3 = document.createElement("h3");
setAttributes(h3, [
    { name: "id", value: "counter-value" },
]);
h3.appendChild(document.createTextNode("0"));
counter.appendChild(h3);
// setup the buttons
var btnDiv = document.createElement("div");
setAttributes(btnDiv, [
    { name: "id", value: "btn-div" },
    { name: "class", value: "btn-div" },
]);
var incrementBtn = createButton(true);
var decrementBtn = createButton(false);
btnDiv.appendChild(incrementBtn);
btnDiv.appendChild(decrementBtn);
app === null || app === void 0 ? void 0 : app.appendChild(btnDiv);
// do a nice pop up animation!
var notificatonDiv = document.createElement("div");
setAttributes(notificatonDiv, [
    { name: "id", value: "notification" },
    { name: "class", value: "notification" },
]);
// TODO: Need to work on this
app === null || app === void 0 ? void 0 : app.appendChild(nav);
app === null || app === void 0 ? void 0 : app.appendChild(counter);
app === null || app === void 0 ? void 0 : app.appendChild(btnDiv);

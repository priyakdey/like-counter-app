"use strict";


type Attribute = {
    name: string;
    value: string;
}

function setAttributes(element: HTMLElement, attrs: Attribute[]): void {
    for (let i = 0; i < attrs.length; i++) {
        let attr = attrs[i];
        element.setAttribute(attr.name, attr.value);
    }
}

function createButton(isIncrement: boolean): HTMLElement {
    const btn = document.createElement("button");
    setAttributes(btn, [
        { name: "type", value: "button" },
        { name: "class", value: "btn btn-primary button" },
    ]);

    if (isIncrement) {
        // TODO: Gotta be a better way
        setAttributes(btn, [
            { name: "onclick", value: "clickHandler(true)" },
        ]);
    } else {
        setAttributes(btn, [
            { name: "onclick", value: "clickHandler(false)" },
        ]);
    }

    const display = isIncrement ? "👍" : "👎";
    btn.appendChild(document.createTextNode(display));
    return btn;
}

const clickHandler = (isIncrement: boolean) => {
    const el = document.getElementById("counter-value");
    let counter: number = 0;
    if (isIncrement) {
        counter = parseInt(el?.innerHTML!) + 1;
    } else {
        counter = parseInt(el?.innerHTML!) - 1;
    }
    if (el != null) {   // TOOD: find a better way to do this shit !
        el.innerHTML = counter.toString();
    }
}

// setup the DOM tree using JS by creating the element nodes

// get the root div for the app and render children using js
// basically what React is doing !
const app = document.getElementById("app");

// render the navbar
const nav = document.createElement("nav");
setAttributes(nav, [
    { name: "id", value: "navbar" },
    { name: "class", value: "navbar navbar-light bg-light" },
]);

const navA = document.createElement("a");
setAttributes(navA, [
    { name: "class", value: "navbar-brand" },
    { name: "href", value: "#" },
]);
navA.appendChild(document.createTextNode("Like Counter"));
nav.appendChild(navA);
app?.appendChild(nav);

// setup the div with a init counter value
const counter = document.createElement("div");
setAttributes(counter, [
    { name: "id", value: "counter" },
    { name: "class", value: "counter" },
]);
const h3 = document.createElement("h3");
setAttributes(h3, [
    { name: "id", value: "counter-value" },
]);
h3.appendChild(document.createTextNode("0"));
counter.appendChild(h3);

// setup the buttons
const btnDiv = document.createElement("div");
setAttributes(btnDiv, [
    { name: "id", value: "btn-div" },
    { name: "class", value: "btn-div" },
]);
const incrementBtn = createButton(true);
const decrementBtn = createButton(false);
btnDiv.appendChild(incrementBtn);
btnDiv.appendChild(decrementBtn);
app?.appendChild(btnDiv);

// do a nice pop up animation!
const notificatonDiv = document.createElement("div");
setAttributes(notificatonDiv, [
    { name: "id", value: "notification" },
    { name: "class", value: "notification" },
]);
// TODO: Need to work on this


app?.appendChild(nav);
app?.appendChild(counter);
app?.appendChild(btnDiv);
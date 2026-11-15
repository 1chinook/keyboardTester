"use strict";

const keyboard = document.getElementById("keyboardArea");
const mouse = document.getElementById("mouse");
const history = document.getElementById("btn-Area");
const letterByCode = {
    "KeyQ": "q",
    "KeyW": "w",
    "KeyE": "e",
    "KeyR": "r",
    "KeyT": "t",
    "KeyY": "y",
    "KeyU": "u",
    "KeyI": "ı",
    "KeyO": "o",
    "KeyP": "p",
    "BracketLeft": "ğ",
    "BracketRight": "ü",
    "KeyA": "a",
    "KeyS": "s",
    "KeyD": "d",
    "KeyF": "f",
    "KeyG": "g",
    "KeyH": "h",
    "KeyJ": "j",
    "KeyK": "k",
    "KeyL": "l",
    "Semicolon": "ş",
    "KeyZ": "z",
    "KeyX": "x",
    "KeyC": "c",
    "KeyV": "v",
    "KeyB": "b",
    "KeyN": "n",
    "KeyM": "m",
    "Comma": "ö",
    "Period": "ç"
};
const mouseButtons = [
    ["leftClick", "Left Click"],
    ["mouseWheel", "Middle Click"],
    ["rightClick", "Right Click"],
];
const pressed = new Set();
const recentInputs = [];

function highlight(element, active) {
    if (active) {
        pressed.add(element);
        element.style.backgroundColor = "#0b2549";
    } else {
        pressed.delete(element);
        element.style.removeProperty("background-color");
    }
}

function record(label) {
    recentInputs.push(`<${label}>`);
    if (recentInputs.length > 50) recentInputs.shift();
    history.textContent = recentInputs.join("   ");
    history.scrollLeft = history.scrollWidth;
}

function handleKey(event) {
    const id = letterByCode[event.code] ? `key-${letterByCode[event.code]}` : event.code;
    const key = document.getElementById(id);
    if (!key || !keyboard.contains(key)) return;

    if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key !== "Tab") {
        event.preventDefault();
    }
    const active = event.type === "keydown";
    highlight(key, active);
    if (!active) record(event.code);
}

document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

mouse.addEventListener("mousedown", (event) => {
    const button = mouseButtons[event.button];
    if (button) highlight(document.getElementById(button[0]), true);
});

document.addEventListener("mouseup", (event) => {
    const button = mouseButtons[event.button];
    if (!button) return;
    const element = document.getElementById(button[0]);
    if (!pressed.has(element)) return;
    highlight(element, false);
    record(button[1]);
});

mouse.addEventListener("contextmenu", (event) => event.preventDefault());
window.addEventListener("blur", () => {
    for (const element of pressed) highlight(element, false);
});

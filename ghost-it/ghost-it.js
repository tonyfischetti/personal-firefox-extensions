
const lowOpacity = 0.3;

let KEY_STARTKEY = "Alt";
let KEY_DEEPER = "≠";
let KEY_UNDO = "u";

let theCurrentElement;
let overThisElement;
let overTheseElements;
let ghostedElements = [];
let howDeep = 1;

// tuple holding element and old background color
let reddenedElements = [];

let triggerKeyIsPressed = false;


browser.storage.local.get("ghostit_hotkey").
  then(res => {
    console.log("Ghost It registered hotkey of:");
    console.log(res.ghostit_hotkey);
    KEY_STARTKEY = res.ghostit_hotkey ?? KEY_STARTKEY;
  }).
  then(() => browser.storage.local.get("ghostit_deeper")).
  then(res => {
    console.log("Ghost It registered deeper hotkey of:");
    console.log(res.ghostit_deeper);
    KEY_DEEPER = res.ghostit_deeper ?? KEY_DEEPER;
  }).
  then(() => browser.storage.local.get("ghostit_undo")).
  then(res => {
    console.log("Ghost It registered an undo hotkey of:");
    console.log(res.ghostit_undo);
    KEY_UNDO = res.ghostit_undo ?? KEY_UNDO;
  });


window.addEventListener('click', e => {
  if (triggerKeyIsPressed) {
    reddenedElements.map(([i]) => {
      i.style.visibility = 'hidden';
      ghostedElements.push(i);
    });
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}, false);


window.addEventListener('keydown', function(event) {
  if (event.key===KEY_DEEPER) {
    if (triggerKeyIsPressed) {
      howDeep++;
      overThisElement = overTheseElements[overTheseElements.length-howDeep];
      reddenedElements.push([overThisElement,
                             overThisElement.style.backgroundColor]);
      overThisElement.style.backgroundColor = "red";
    }
  }
  if (event.key===KEY_STARTKEY) {
    triggerKeyIsPressed = true;
    overTheseElements = document.querySelectorAll(":hover");
    overThisElement = overTheseElements[overTheseElements.length-howDeep];
    reddenedElements.push([overThisElement,
                           overThisElement.style.backgroundColor]);
    overThisElement.style.backgroundColor = "red";
  }
});

window.addEventListener('keyup', function(event) {
  if (event.key===KEY_STARTKEY) {
    triggerKeyIsPressed = false;
    console.log(`reddened elements: ${reddenedElements}`);
    reddenedElements.map(([el, oldColor]) => {
      el.style.backgroundColor = oldColor;
    });
    reddenedElements = [];
    howDeep = 1;
  }
  if (event.key===KEY_UNDO) {
    const tmp = ghostedElements.pop()
    tmp.style.visibility = "visible";
  }
});


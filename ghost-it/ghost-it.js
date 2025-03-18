
var GODEEPER = "≠";
var UNDO = "u";
var STARTKEY = "Alt";
var DESTROYELEMENT = "Shift";

var thecurrentelement = "";
var overthiselement = "";
var overtheseelements = [];
var ghostedElements = [];
var howDeep = 1;
var reddenedOldColors = [];
var reddenedElements = [];

var triggerKeyIsPressed = false;


var getfromstorage = browser.storage.local.get("ghostitinhotkey");
getfromstorage.then((res) => {
  console.log("Ghost It registered hotkey of:");
  console.log(res.ghostitinhotkey);
  STARTKEY = res.ghostitinhotkey;
});
var getfromstorage = browser.storage.local.get("ghostitinhotkeydeeper");
getfromstorage.then((res) => {
  console.log("Ghost It registered deeper hotkey of:");
  console.log(res.ghostitinhotkeydeeper);
  GODEEPER = res.ghostitinhotkeydeeper;
});


window.addEventListener('click', function (e) {
  if(triggerKeyIsPressed){
    for(i = 0; i < reddenedElements.length; i++){
      var oldEl  = reddenedElements[i];
      var oldCol = reddenedOldColors[i];
      oldEl.style.visibility = "hidden";
      ghostedElements.push(oldEl);
    }
  }
}, false);


window.addEventListener('keydown', function(event) {
  // console.log("\nreddened elements are now:");
  // console.log(reddenedElements);
  // console.log("how deep");
  // console.log(howDeep);
  // console.log("\n");
  if(event.key===GODEEPER){
    if(triggerKeyIsPressed){
      howDeep = howDeep + 1;
      overthiselement = overtheseelements[overtheseelements.length-howDeep];
      var oldBackgroundColor = overthiselement.style.backgroundColor;
      reddenedOldColors.push(oldBackgroundColor);
      reddenedElements.push(overthiselement);
      overthiselement.style.backgroundColor = "red";
      // console.log("NOW... reddened elements are:");
      // console.log(reddenedElements);
      // console.log("and we are this many deep");
      // console.log(howDeep);
      // console.log("\n");
    }
  }
  if(event.key===STARTKEY){
    triggerKeyIsPressed = true;
    overtheseelements = document.querySelectorAll(":hover");
    overthiselement = overtheseelements[overtheseelements.length-howDeep];
    var oldBackgroundColor = overthiselement.style.backgroundColor;
    reddenedOldColors.push(oldBackgroundColor);
    reddenedElements.push(overthiselement);
    overthiselement.style.backgroundColor = "red";
  }
});

window.addEventListener('keyup', function(event) {
  if(event.key===STARTKEY){
    triggerKeyIsPressed = false;
    for(i = 0; i < reddenedElements.length; i++){
      var oldEl  = reddenedElements[i];
      var oldCol = reddenedOldColors[i];
      oldEl.style.backgroundColor = oldCol;
    }
    // overthiselement.style.backgroundColor = oldBackgroundColor;
    reddenedOldColors = [];
    reddenedElements = [];
    howDeep = 1;
  }
  if(event.key===UNDO){
    var tmp = ghostedElements.pop()
    tmp.style.visibility = "visible";
  }
});


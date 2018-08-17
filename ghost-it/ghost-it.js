


var GODEEPER = "≠";
var GOSHALLOWER = "–";
var UNDO = "u";
var STARTKEY = "Alt";
var DESTROYELEMENT = "Shift";



var thecurrentelement = "";
var overthiselement = "";
var overtheseelements = [];
var ghostedElements = [];
var destroyedElements = [];
var howDeep = 1;
var reddenedOldColors = [];
var reddenedElements = [];

var triggerKeyIsPressed = false;
var destroyKeyIsPressed = false;


window.addEventListener('click', function (e) {
  if(triggerKeyIsPressed && destroyKeyIsPressed){
    elToRemove = reddenedElements[reddenedElements.length-1];
    console.log("\ntrying to remove:");
    console.log(elToRemove);
    console.log("\n");
    elToRemove.parentNode.removeChild(elToRemove);
    // reddenedElements[0].parentNode.removeChild(reddenedElements[0]);
    destroyedElements.push(elToRemove);
  } else if(triggerKeyIsPressed){
    for(i = 0; i < reddenedElements.length; i++){
      var oldEl  = reddenedElements[i];
      var oldCol = reddenedOldColors[i];
      oldEl.style.visibility = "hidden";
      ghostedElements.push(oldEl);
    }
  }
}, false);


window.addEventListener('keydown', function(event) {
  console.log(event.key);
  console.log("\nreddened elements are now:");
  console.log(reddenedElements);
  console.log("\n");
  if(event.key===GODEEPER){
    if(triggerKeyIsPressed){
      howDeep = howDeep + 1;
      overthiselement = overtheseelements[overtheseelements.length-howDeep];
      var oldBackgroundColor = overthiselement.style.backgroundColor;
      reddenedOldColors.push(oldBackgroundColor);
      reddenedElements.push(overthiselement);
      overthiselement.style.backgroundColor = "red";
    }
  }
  if(event.key===GOSHALLOWER){
    if(triggerKeyIsPressed){
      howDeep = howDeep - 1;
      if(howDeep==0){
        overtheseelements = [];
        reddenedElements = [];
        reddenedOldColors = [];
      }
      overthiselement = overtheseelements[overtheseelements.length-howDeep];
      var oldCol = reddenedOldColors.pop();
      var oldEl  = reddenedElements.pop();
      reddenedOldColors.push(oldBackgroundColor);
      reddenedElements.push(overthiselement);
      oldEl.style.backgroundColor = oldCol;
      overtheseelements.pop();
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
  if(event.key===DESTROYELEMENT){
    destroyKeyIsPressed = true;
    // overtheseelements = document.querySelectorAll(":hover");
    // overthiselement = overtheseelements[overtheseelements.length-howDeep];
    // var oldBackgroundColor = overthiselement.style.backgroundColor;
    // reddenedOldColors.push(oldBackgroundColor);
    // reddenedElements.push(overthiselement);
  }
});

window.addEventListener('keyup', function(event) {
  if(event.key===DESTROYELEMENT){
    destroyKeyIsPressed = false;
  }
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


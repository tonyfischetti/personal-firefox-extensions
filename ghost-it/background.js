



var thecurrentelement = "";
var overthiselement = "";
var oldBackgroundColor = "";
var ghostedElements = [];

var triggerKeyIsPressed = false;


window.addEventListener('click', function (e) {
	currentElement = e.target;
  thecurrentelement = currentElement;
  if(triggerKeyIsPressed){
    thecurrentelement.style.visibility = "hidden";
    ghostedElements.push(thecurrentelement);
  }
}, false);


window.addEventListener('keydown', function(event) {
  if(event.key==="Alt"){
    triggerKeyIsPressed = true;
    overthiselement = document.querySelectorAll(":hover");
    overthiselement = overthiselement[overthiselement.length-1];
    oldBackgroundColor = overthiselement.style.backgroundColor;
    overthiselement.style.backgroundColor = "red";
  }
});

window.addEventListener('keyup', function(event) {
  if(event.key==="Alt"){
    triggerKeyIsPressed = false;
  }
  if(event.key==="u"){
    var tmp = ghostedElements.pop()
    tmp.style.visibility = "visible";
  }
  overthiselement.style.backgroundColor = oldBackgroundColor;
});


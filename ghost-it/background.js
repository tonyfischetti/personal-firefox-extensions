function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(handleClick);


// function handleResponse(message) {
//   console.log(`Message from the ghost-it script:  ${message.response}`);
// }
//
// function handleError(error) {
//   console.log(`Error: ${error}`);
// }
//
//
// function logStorageChange(changes, area) {
//   console.log("Change in storage area: " + area);
//  
//   var changedItems = Object.keys(changes);
//  
//   for (var item of changedItems) {
//     if(item==="ghostitinhotkey"){
//       console.log("GHOST HOT CHANGED TO");
//       var newval = changes[item].newValue;
//       console.log(newval);
//       // var sending = browser.runtime.sendMessage({ hotkeychange: newval });
//       // sending.then(handleResponse, handleError);
//     }
//   }
// }
//
// browser.storage.onChanged.addListener(logStorageChange);

function saveOptions(e) {
  browser.storage.local.set({
    ghostitinhotkey: document.querySelector("#ghostitinhotkey").value
  });
  browser.storage.local.set({
    ghostitinhotkeydeeper: document.querySelector("#ghostitinhotkeydeeper").value
  });
  // browser.storage.local.set({
  //   ghostitinhotkeyshallower: document.querySelector("#ghostitinhotkeyshallower").value
  // });
  e.preventDefault();
}




function restoreOptions() {
  var storageItem = browser.storage.local.get('ghostitinhotkey');
  storageItem.then((res) => {
    document.querySelector("#current-gi-hotkey").innerText = res.ghostitinhotkey;
  });
  storageItem = browser.storage.local.get('ghostitinhotkeydeeper');
  storageItem.then((res) => {
    document.querySelector("#current-gi-deeper-hotkey").innerText = res.ghostitinhotkeydeeper;
  });
  // storageItem = browser.storage.local.get('ghostitinhotkeyshallower');
  // storageItem.then((res) => {
  //   document.querySelector("#current-gi-shallower-hotkey").innerText = res.ghostitinhotkeyshallower;
  // });

  var gettingItem = browser.storage.local.get('ghostitinhotkey');
  gettingItem.then((res) => {
    document.querySelector("#ghostitinhotkey").value = res.ghostitinhotkey || 'Alt';
  });
  gettingItem = browser.storage.local.get('ghostitinhotkeydeeper');
  gettingItem.then((res) => {
    document.querySelector("#ghostitinhotkeydeeper").value = res.ghostitinhotkeydeeper || '≠';
  });
  // gettingItem = browser.storage.local.get('ghostitinhotkeyshallower');
  // gettingItem.then((res) => {
  //   document.querySelector("#ghostitinhotkeyshallower").value = res.ghostitinhotkeyshallower || '–';
  // });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


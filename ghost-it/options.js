let KEY_STARTKEY = "Alt";
let KEY_DEEPER = "≠";
let KEY_UNDO = "u";


const saveOptions = e => {
  e.preventDefault();
  Promise.resolve().
    then(() => {
      browser.storage.local.set({
        ghostit_hotkey: document.getElementById("ghostit-hotkey").value || KEY_STARTKEY
      })
    }).
    then(() => {
      browser.storage.local.set({
        ghostit_deeper: document.getElementById("ghostit-deeper").value || KEY_DEEPER
      })
    }).
    then(() => {
      browser.storage.local.set({
        ghostit_undo: document.getElementById("ghostit-undo").value || KEY_UNDO
      })
    }).
    then(() => {
      restoreOptions();
    });
}


const restoreOptions = () => {
   browser.storage.local.get('ghostit_hotkey').
    then(res => document.getElementById("current-gi-hotkey").innerText = res.ghostit_hotkey ?? KEY_STARTKEY);

   browser.storage.local.get('ghostit_deeper').
    then(res => document.getElementById("current-gi-deeper").innerText = res.ghostit_deeper ?? KEY_DEEPER);

   browser.storage.local.get('ghostit_undo').
    then(res => document.getElementById("current-gi-undo").innerText = res.ghostit_undo ?? KEY_UNDO);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


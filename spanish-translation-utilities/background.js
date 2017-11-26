
var make_google_url = function(aword){
  var the_base = "https://translate.google.com/#es/en/";
  return the_base + aword;
}

var make_spanish_dict_url = function(aword){
  var the_base = "http://www.spanishdict.com/translate/";
  return the_base + aword;
}

var make_lingee_url = function(aword){
  var the_base = "https://www.linguee.com/english-spanish/search?source=spanish&query=";
  return the_base + aword;
}


browser.menus.create({
  id: "translate-selection-google",
  title: "Translate with Google",
  contexts: ["selection"]
});

browser.menus.create({
  id: "translate-selection-spanish-dict",
  title: "Translate with Spanish Dict",
  contexts: ["selection"]
});

browser.menus.create({
  id: "translate-selection-lingee",
  title: "Translate with Lingee",
  contexts: ["selection"]
});


browser.menus.onClicked.addListener(function(info, tab) {
  var the_text_raw = info.selectionText;
  var the_text = encodeURI(the_text_raw);
  if (info.menuItemId == "translate-selection-google") {
    var the_url = make_google_url(the_text);
    browser.windows.create({url: the_url});
  }
  if (info.menuItemId == "translate-selection-spanish-dict") {
    var the_text = info.selectionText;
    var the_url = make_spanish_dict_url(the_text);
    browser.windows.create({url: the_url});
  }
  if (info.menuItemId == "translate-selection-lingee") {
    var the_text = info.selectionText;
    var the_url = make_lingee_url(the_text);
    browser.windows.create({url: the_url});
  }
});


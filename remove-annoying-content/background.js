

var WIKI_REGEX = new RegExp('https://.*\\.wikipedia\\.org/wiki/.*');
var FB_REGEX = new RegExp('https://www.facebook.com/.*');
var TWITTER_REGEX = new RegExp('https://mobile.twitter.com/.*');


function injectWiki(){
  browser.tabs.executeScript({ file: "./remove-wiki-sidebar.js" });
}


function injectFB(){
  browser.tabs.executeScript({ file: "./remove-facebook-sidebar.js" });
}


function injectTwitter(){
  browser.tabs.executeScript({ file: "./remove-mobile-twitter-header.js" });
}


function injectMaster(tabInfo){
  var currentUrl = tabInfo.url;
  if(WIKI_REGEX.test(currentUrl)){
    injectWiki();
  }
  else if(FB_REGEX.test(currentUrl)){
    injectFB();
  }
  else if(TWITTER_REGEX.test(currentUrl)){
    injectTwitter();
  }
}

browser.browserAction.onClicked.addListener(function(tab){
  injectMaster(tab);
});




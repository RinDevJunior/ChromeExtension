
function getword(info,tab) { 
  var link = info.selectionText;
  link = link.replace(/[-+()\s]/g, '');
  link = link.replace(' ', '');
 
  if (link.indexOf("http") == -1)
  {
      link = "http://www.google.com/search?q=" + link;
  }

  chrome.tabs.create({  
    url: link,
  });           
}
chrome.contextMenus.create({
  title: "Go to: %s", 
  contexts:["selection"], 
  onclick: getword,
});
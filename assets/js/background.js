
var callback = function(details) 
{
	chrome.tabs.query( {active: true, currentWindow: true}, function(tabs)
	{
			chrome.tabs.sendMessage(tabs[0].id, {}, function(response) 
			{
    				console.log("Message send.");
  			})
  	})
};
var filter = {urls: ["*://app.asana.com/*"]};
var opt_extraInfoSpec = [];

chrome.webRequest.onCompleted.addListener(callback, filter, opt_extraInfoSpec);


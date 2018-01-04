
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) 
{
    console.log("Message received.");
    translate();
});
var key_class_table = [
	{key:"Board", className:"Tab", textContent:"Board"},
	{key:"Conversations", className:"Tab", textContent:"Conversations"}
];
var key_id_table = [
	{key:"Board", id: 1}
];

function translate() {
	key_class_table.forEach(function(item,index){
		//console.log("translate class:"+index + " ," + item.className);
		translateByClassName(item.key, item.className, item.textContent);
	});
	key_id_table.forEach(function(item,index){
		//console.log("translate class:"+index + " ," + item.id);
		translateByClassName(obj.key, obj.id);
	});
};

function translateByClassName(key, className, textContent) {
	var elements = document.getElementsByClassName(className);
	//console.log("size of elements:" + elements.length);
	for (var i = 0; i < elements.length; i++) {
		var elementText = elements[i].textContent;
  		if (elementText != null &&  elementText == textContent) {
  			replace(elements[i], key);
   	 	}
  	}
}

function translateById(key,id) {
	var element = document.getElementById(id);
	if(element){
		replace(element, key);
	}
}

/**
* Get message from locale and replace the textContent of the element
* @param {Object} key, the messageName in locale file
**/
function replace(element, key){
	var replaceText = chrome.i18n.getMessage(key);
	if(replaceText){
		//console.log(element.textContent);
		element.textContent = replaceText;
	}
}
var ExpandableGrid = (function() {
  "use strict"
  
  var list;
  var texts = [];
  
  // Constructor
  var Init = function(element) {
 	
 	// Get html list
  	list = document.getElementById(element);
  	
  	// Save texts and hide original
  	for (var i = 0; i < list.children.length; i++) {
  		var listElement = list.children[i];
  		texts.push(listElement.children[1].innerHTML);
  		listElement.children[1].style.display ='none';
  	}
  };
  
  return function(element) {
  	new Init(element);
  };
 })();

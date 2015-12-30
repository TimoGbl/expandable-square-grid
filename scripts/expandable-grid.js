
var ExpandableGrid = (function() {
  "use strict"
  
  // Constructor
  var Init = function(element) {
 
  	var list = document.getElementById(element);
  	
  	for (var i = 0; i < list.childNodes.length; i++) {
  		console.log(list.childNodes[i]);
  	}
  };
  
  return function(element) {
  	new Init(element);
  };
 })();

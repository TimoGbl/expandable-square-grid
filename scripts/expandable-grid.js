
var ExpandableGrid = (function() {
  "use strict"
  
  // Constructor
  var Init = function(element) {
 
  	var list = document.getElementById(element);
  	
  	for (var i = 0; i < list.children.length; i++) {
  		console.log(list.children[i]);
  		list.children[i].children[1].style.display ='none';
  	}
  };
  
  return function(element) {
  	new Init(element);
  };
 })();

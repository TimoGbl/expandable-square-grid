var ExpandableGrid = (function() {
  "use strict"

  // Data
  var list = {};
  var texts = [];
  var transitionProps = {
    properties: 'all',
    duration: 0.5,
    timing: 'ease-in-out'
  };

  // State
  var expanded = false;

  // Constructor
  var Init = function(element, transitionInput) {

 	// Save transition information
 	if (transitionInput) {
 	    transitionProps = transitionInput;
 	}

 	// Get html list
  	list = document.getElementById(element);

  	// Set css transition properties
  	list.style.transitionProperty = transitionProps.properties;
    list.style.transitionDuration = transitionProps.duration;
    list.style.transitionTimingFunction = transitionProps.timing;

  	// Save texts and hide original
  	for (var i = 0; i < list.children.length; i++) {
  		var listElement = list.children[i];

  		// Save detail texts
  		texts.push(listElement.children[1].innerHTML);

  		// Hide detail texts
  		listElement.children[1].style.display ='none';
  	}
  };

  return function(element, transitionInput) {
    new Init(element, transitionInput);
  };
 })();

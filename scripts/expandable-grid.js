var ExpandableGrid = (function() {
    'use strict';

    // Data
    var list = {};
    var heights = [];
    var expandedSquare = {};
    var textElements = [];
    var transitionProps = {
        duration: 0.5,
        timing: 'cubic-bezier(0.5, 0.1, 0, 1)'
    };

    // State
    // Tells toggle squarw if it should expand the grid or not
    var expand = true;

    // Adds the right content into the expandable element and expands it
    function toggleSquare(index) {
        if (expand) {
            expandedSquare.replaceChild(textElements[index], expandedSquare.childNodes[0]);
            expandedSquare.style.height = heights[index] + 'px';
        } else {
            expandedSquare.style.height ='0';
        }
    }

    // Click list element
    function click(element, index) {
        return function() {
            // remove active class from all square
            for (var i = 0; i < list.children.length; i++) {
                list.children[i].classList.remove('active');
            }

            // Save if element was active before
            var elementActive = element.classList.contains('active') ? true : false;

            if (!elementActive) {
                // If element wasn't active before, we have to add the active
                // class and set the state to
                element.classList.add('active');
                expand = true;
            } else {
                expand = false;
            }

            toggleSquare(index);
        };
    }

    // Constructor
    var Init = function(element, transitionInput) {

        var i;

        // Save transition information
        if (transitionInput) {
            transitionProps = transitionInput;
        }

        // Get html list
        list = document.getElementById(element);

        // Save textElements and hide original
        for (i = 0; i < list.children.length; i++) {
            var listElement = list.children[i];

            // Save detail textElements
            // Expecting the grid elements to habe to children
            // 1. Text to be displayed in grid
            // 2. Text to be displayed in expanded element
            textElements.push(listElement.children[1]);

            // Add event listeners
            listElement.addEventListener("click", click(listElement, i));
        }

        // Create new li
        expandedSquare = document.createElement('div');

        // Set styles
        expandedSquare.style.height = 'auto';
        expandedSquare.style.width ='100%';

        expandedSquare.style.transition = 'height ' +
            transitionProps.timing + ' ' +
            transitionProps.duration + 's';

        // Add stylable class to element
        expandedSquare.classList.add('expandet-element');

        // Add empty span element so the list element has content
        var newSpan = document.createElement('span');
        expandedSquare.appendChild(newSpan);

        // Add new list element in the middle of the list
        list.insertBefore(expandedSquare, list.childNodes[list.children.length]);

        // Add each list elements info text to the new list element and
        // save it's height for later because we have to set a specific height
        // so that the transitin is  animating. this is not working with height auto
        for (i = 0; i < textElements.length; i++) {
            expandedSquare.replaceChild(textElements[i], expandedSquare.childNodes[0]);
            heights.push(expandedSquare.clientHeight);
        }

        // Collapse new list element
        expandedSquare.style.height = '0';
    };

    return function(element, transitionInput) {
        new Init(element, transitionInput);
    };
})();

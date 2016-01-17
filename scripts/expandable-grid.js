var ExpandableGrid = (function() {
    'use strict';

    // Data
    var list = {};
    var heights = [];
    var expandetSquare = {};
    var textElements = [];
    var transitionProps = {
        properties: 'height',
        duration: 0.5,
        timing: 'cubic-bezier(0.5, 0.1, 0, 1)'
    };

    // State
    var expanded = false;

    function toggleSquare(index) {
        if (expanded) {
            expandetSquare.replaceChild(textElements[index], expandetSquare.childNodes[0]);
            expandetSquare.style.height = heights[index] + 'px';
        } else {
            expandetSquare.style.height ='0';
        }
    }

    // Click list element
    function click(element, index) {
        return function() {
            // Save if element was active before
            var elementActive = element.classList.contains('active') ? true : false;

            // remove active class from all square
            for (var i = 0; i < list.children.length; i++) {
                list.children[i].classList.remove('active');
            }

            if (!elementActive) {
                // add class active to target
                element.classList.add('active');
                expanded = true;
            } else {
                expanded = false;
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
            textElements.push(listElement.children[1]);

            // Add event listeners
            listElement.addEventListener("click", click(listElement, i));
        }

        // Create new li
        expandetSquare = document.createElement('div');
        expandetSquare.style.height = 'auto';
        expandetSquare.style.width ='100%';
        expandetSquare.style.transition = transitionProps.properties + ' ' +
            transitionProps.timing + ' ' +
            transitionProps.duration + 's';
        expandetSquare.classList.add('expandet-element');
        expandetSquare.style.overflow ='hidden';

        var newP = document.createElement('span');
        expandetSquare.appendChild(newP);

        list.insertBefore(expandetSquare, list.childNodes[list.children.length]);

        for (i = 0; i < textElements.length; i++) {
            expandetSquare.replaceChild(textElements[i], expandetSquare.childNodes[0]);
            heights.push(expandetSquare.clientHeight);
        }

        expandetSquare.style.height = '0';
    };

    return function(element, transitionInput) {
        new Init(element, transitionInput);
    };
})();

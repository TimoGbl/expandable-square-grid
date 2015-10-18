var squares = document.querySelectorAll('.square');

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', open(squares[i]));
}

function open(element) {
    return function() {
        // remove active class from all square
        for (var i = 0; i < squares.length; i++) {
            squares[i].classList.remove('active');
        }
        // add class active to target
        element.classList.add('active');
    };
}

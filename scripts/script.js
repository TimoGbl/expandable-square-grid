var squares = document.querySelectorAll('.square');

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', open(squares[i]));
}

function open(element) {
    return function() {
        for (var i = 0; i < squares.length; i++) {
            squares[i].classList.remove('active');
        }
        element.classList.add('active');
    };
}

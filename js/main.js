// Select all squares
const squares = document.querySelectorAll('.square');

// Add click listener to each square
squares.forEach((square) => {
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'yellow';
  });
});

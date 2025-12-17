// Select all squares
const squares = document.querySelectorAll('.square');

// Add click behavior
squares.forEach((square) => {
  square.addEventListener('click', () => {
    square.classList.add('active');
  });
});

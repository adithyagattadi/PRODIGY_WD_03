const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = Array(9).fill('');

function makeMove(index) {
  if (!gameBoard[index] && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateMessage();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombinations) {
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      message.textContent = `Player ${gameBoard[a]} wins!`;
      return true;
    }
  }

  if (!gameBoard.includes('')) {
    message.textContent = "It's a draw!";
    return true;
  }

  return false;
}

function updateMessage() {
  message.textContent = `Player ${currentPlayer}'s turn`;
}

function resetBoard() {
  gameBoard = Array(9).fill('');
  currentPlayer = 'X';
  cells.forEach(cell => cell.textContent = '');
  updateMessage();
}

resetButton.addEventListener('click', resetBoard);

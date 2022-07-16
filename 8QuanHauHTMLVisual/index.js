var currentPath = window.location.pathname;
var chessBoardList = document.querySelector(".chess_board_list")
currentPath = currentPath.replace("index.html", "result.txt")
console.log(currentPath);



async function fetchText () {
  let response = await fetch(currentPath);
  let resultArray = await (await response.text()).split("\n");
  resultArray.forEach(item => {
    var listPositionForQueen = item.split('')
    listPositionForQueen.pop()
    listPositionForQueen = listPositionForQueen.map(elem => parseInt(elem, 10))
    console.log('begin of this method');
    placeQueen(listPositionForQueen)
    console.log('end of this method');
  })
}

function placeQueen (data) {
  createChessBoard()
  for (let i = 0; i < 8; i++) {
    var rowGraphicsSimulator = ''
    for (let j = 1; j <= 8; j++) {
      // For Console test
      if (data[i] == j) rowGraphicsSimulator = rowGraphicsSimulator + "X"
      else rowGraphicsSimulator = rowGraphicsSimulator + "-"
    }
    console.log(rowGraphicsSimulator);
  }
}

function createChessBoard () {
  var newChessBoardDiv = document.createElement('div')
  newChessBoardDiv.className = "chess_board"
  // var parentChessBoard = document.querySelector(".chess_board")
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      var childRectBoard = document.createElement('div')
      if ((i - j) % 2 == 0) {
        childRectBoard.className = "light_rect"
      } else childRectBoard.className = "dark_rect"
      newChessBoardDiv.appendChild(childRectBoard)
    }
  }
  chessBoardList.appendChild(newChessBoardDiv)
}

// Create Chess Board HTML
createChessBoard()
// Run graphics simulate
fetchText()


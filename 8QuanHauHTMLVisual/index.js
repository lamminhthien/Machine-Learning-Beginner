// Đường dẫn hiện tại
var currentPath = window.location.pathname;
// Danh sách các bàn cờ
var chessBoardList = document.querySelector(".chess_board_list")
// Thay đổi đường dẫn để đọc file kết quẩ
currentPath = currentPath.replace("index.html", "result.txt")

// Hàm đọc file kết quả
async function fetchResultData () {
  let response = await fetch(currentPath);
  let resultArray = await (await response.text()).split("\n");

  resultArray.forEach(item => {
    var listPositionForQueen = item.split('')
    listPositionForQueen.pop()
    listPositionForQueen = listPositionForQueen.map(elem => parseInt(elem, 10))

    console.log('begin of this method');
    placeQueenConsole(listPositionForQueen)
    createChessBoardAndSpawnQueen(listPositionForQueen)
    console.log('end of this method');
  })
}

function placeQueenConsole (data) {
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

function createChessBoardAndSpawnQueen(data) {
  var newChessBoardDiv = document.createElement('div')
  newChessBoardDiv.className = "chess_board"

  for (let i = 0; i < 8; i++) {
    for (let j = 1; j <= 8; j++) {
      var childRectBoard = document.createElement('div')

      if ((i - j) % 2 == 0) {
        childRectBoard.className = "light_rect"
      } else childRectBoard.className = "dark_rect"


      if (data[i] == j) {
        var queenSpawnDiv = document.createElement('div')
        queenSpawnDiv.className = "queen"
        childRectBoard.appendChild(queenSpawnDiv)
      }

      newChessBoardDiv.appendChild(childRectBoard)
    }
  }
  chessBoardList.appendChild(newChessBoardDiv)
}
// Run graphics simulate
fetchResultData()



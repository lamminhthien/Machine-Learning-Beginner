var currentPath = window.location.pathname;
currentPath = currentPath.replace("index.html","result.txt")
console.log(currentPath);

async function fetchText() {
  let response = await fetch(currentPath);
  let resultArray = await (await response.text()).split("\n");
  resultArray.forEach(item => {
    var listPositionForQueen = item.split('')
    listPositionForQueen.pop()
    listPositionForQueen = listPositionForQueen.map(elem => parseInt(elem,10))
    console.log('begin of this method');
    drawChessBoardAndQueen(listPositionForQueen)
    console.log('end of this method');
  })
}

function drawChessBoardAndQueen(data) {
  var element = document.querySelector('.chess-board');
  for (let i = 0; i <8; i++) {
    var rowGraphicsSimulator =''
    for (let j=1; j<=8;j++) {
      if (data[i]==j) rowGraphicsSimulator = rowGraphicsSimulator + "X"
      else rowGraphicsSimulator = rowGraphicsSimulator + "-"
    }
    console.log(rowGraphicsSimulator);
  }
}

// Run graphics simulate
fetchText()


var currentPath = window.location.pathname;
currentPath = currentPath.replace("index.html","result.txt")
console.log(currentPath);
rawData = ""
async function fetchText() {
  let response = await fetch(currentPath);
  let data = await response.text();
  console.log(data.split("\n"));
}

fetchText()

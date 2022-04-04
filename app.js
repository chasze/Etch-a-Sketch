

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
  
};

makeRows(16, 16);

addGridListen()


function addGridListen() { 
    let gridItem = document.querySelectorAll('.grid-item')
 for (let i = 0; i < gridItem.length; i++) {
     gridItem[i].addEventListener("mouseover", function(event) {
        gridItem[i].classList.add('grid-item-hover')

     });
 }
}



 

 let resetBtn = document.querySelector('.reset')
 let resizeBtn = document.querySelector('.resize')

 resetBtn.addEventListener('click', (e) => {

    let gridItem = document.querySelectorAll('.grid-item')

    for (let i = 0; i < gridItem.length; i++) 
    { gridItem[i].classList.remove('grid-item-hover') }



 } )

 resizeBtn.addEventListener('click', (e) => {
    while ( container.firstChild ) container.removeChild( container.firstChild );

    let newRow = parseInt(prompt('Enter a number of rows'))
    let newCol = parseInt(prompt('Enter a number of Columns'))
    makeRows(newRow, newCol)
    addGridListen()
   
 })




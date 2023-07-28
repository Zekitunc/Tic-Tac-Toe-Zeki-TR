
let currentPlayer = "X";
let gameActive = true;

const board = document.getElementById('board');
const cell1 = document.getElementById('1');
const cell2 = document.getElementById('2');
const cell3 = document.getElementById('3');
const cell4 = document.getElementById('4');
const cell5 = document.getElementById('5');
const cell6 = document.getElementById('6');
const cell7 = document.getElementById('7');
const cell8 = document.getElementById('8');
const cell9 = document.getElementById('9');
const status = document.getElementById('status');

const restartBtn = document.getElementById('restart-btn');

const cells = [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9];  
let hamle =9;
// Hücrelere tıklandığında çağrılan fonksiyon
function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.id)-1;
    console.log(cellIndex);
    console.log(cells[cellIndex].textContent);
    // hüçre boşsa doldur sonra ise işareti çevir
   if(cells[cellIndex].textContent != null && cells[cellIndex].textContent != "X" && cells[cellIndex].textContent != "O")
   {
     cells[cellIndex].textContent = currentPlayer;
     if(currentPlayer =="X")
     { currentPlayer = "O"}
     else if( currentPlayer =="O")
     {currentPlayer ="X"} //okey
     hamle = hamle-1;
   }

    checkGameStatus();
}

// Oyun durumunu kontrol etme fonksiyonu
function checkGameStatus() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay kombinasyonlar
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey kombinasyonlar
        [0, 4, 8], [2, 4, 6]             // Çapraz kombinasyonlar
    ];

    // Kazanan kombinasyonu kontrol et
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if(cells[a].textContent == "X" && cells[b].textContent=="X" && cells[c].textContent == "X")
        {alert("X KAZANDI");
           gameActive = false;   
           status.textContent = "X KAZANDI";
        }
        else if(cells[a].textContent == "O" && cells[b].textContent=="O" && cells[c].textContent == "O")
        {
            alert("O KAZANDI");
            gameActive = false;   
            status.textContent = "O KAZANDI";
        }     
    }
    if(hamle ==0 && gameActive==true)
    {alert("kimse kazanmadı");
        gameActive=false;
        status.textContent = "BERABERE";
    }
}

// Oyunu yeniden başlatma fonksiyonu
function restartGame() {
    const cells = [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9];  
    currentPlayer = "X";
    gameActive = true;
    status.textContent = "";
    cells.forEach(cell => cell.textContent = "");
    hamle =9;
}

// Hücrelere tıklama olayını dinle
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Restart butonuna tıklama olayını dinle
restartBtn.addEventListener('click', restartGame);
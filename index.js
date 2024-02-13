// Mengambil referensi tombol
var buttonMain = document.querySelector(".btn-main");

// Menambahkan event listener untuk menangani klik tombol
buttonMain.addEventListener("click", function() {
  // Menghasilkan angka acak untuk dadu 1
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomDice1 = "dice" + randomNumber1 + ".png";
  var randomImage1 = "./images/" + randomDice1;
  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", randomImage1);

  // Menghasilkan angka acak untuk dadu 2
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomDice2 = "dice" + randomNumber2 + ".png";
  var randomImage2 = "./images/" + randomDice2;
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImage2);

  var title = document.querySelector(".title");

  // Menentukan hasil permainan
  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins";
  } else if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw";
  } else {
    title.innerHTML = "Player 2 Wins";
  }
});

function resetGame() {
    // Mengatur gambar dadu kembali ke gambar default
    var defaultDiceImage = "./images/dice6.png";
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
    image1.setAttribute("src", defaultDiceImage);
    image2.setAttribute("src", defaultDiceImage);
  
    // Mengatur teks h1 kembali ke "Refresh Me"
    var title = document.querySelector(".title");
    title.innerHTML = "Game Dadu";
  }

  var buttonRefresh = document.querySelector(".btn-refresh");
  buttonRefresh.addEventListener("click", function() {
    resetGame();
  });
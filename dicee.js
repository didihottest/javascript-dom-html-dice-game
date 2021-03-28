function randomDice() {
    var dice1 = Math.floor ((Math.random()*6)+1);
    var dice2 = Math.floor ((Math.random()*6)+1);
    
    if (dice1 === dice2){
        document.querySelector("h1").innerText = "Draw !";
    } else if (dice1 > dice2) {
        document.querySelector("h1").innerText = "Player 1 Wins !";
    } else if (dice1 < dice2) {
        document.querySelector("h1").innerText = "Player 2 Wins !";
    }
    
    var diceImage1 = `images/dice${dice1}.png`;
    var diceImage2 = `images/dice${dice2}.png`;

    document.getElementsByClassName("img1")[0].src = diceImage1;
    document.getElementsByClassName("img2")[0].src = diceImage2;
    
    
    /*
       
    if (dice1 === 1){
        document.getElementsByClassName("img1")[0].src = "images/dice1.png";
    } else if (dice1 === 2){
        document.getElementsByClassName("img1")[0].src = "images/dice2.png";
    } else if (dice1 === 3){
        document.getElementsByClassName("img1")[0].src = "images/dice3.png";
    } else if (dice1 === 4 ){
        document.getElementsByClassName("img1")[0].src = "images/dice4.png";
    } else if (dice1 === 5){
        document.getElementsByClassName("img1")[0].src ="images/dice5.png";
    } else if (dice1 === 6) {
        document.getElementsByClassName("img1")[0].src = "images/dice6.png";
    }

    if (dice2 === 1){
        document.getElementsByClassName("img2")[0].src = "images/dice1.png";
    } else if (dice2 === 2){
        document.getElementsByClassName("img2")[0].src = "images/dice2.png";
    } else if (dice2 === 3){
        document.getElementsByClassName("img2")[0].src = "images/dice3.png";
    } else if (dice2 === 4 ){
        document.getElementsByClassName("img2")[0].src = "images/dice4.png";
    } else if (dice2 === 5){
        document.getElementsByClassName("img2")[0].src ="images/dice5.png";
    } else if (dice2 === 6){
        document.getElementsByClassName("img2")[0].src = "images/dice6.png";
    }
*/
}

randomDice();
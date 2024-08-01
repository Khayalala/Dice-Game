const left_dice = document.querySelector(".left_dice img");
const right_dice= document.querySelector(".right_dice img");
const h1 = document.querySelector("h1");
let randomNumber1 = Math.ceil(Math.random()*6);
let randomNumber2 = Math.ceil(Math.random()*6);

left_dice.setAttribute("src", `./images/dice${randomNumber1}.png`);
right_dice.setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    h1.innerHTML="Player 1 Wins!";
} else if(randomNumber2>randomNumber1){
    h1.innerHTML="Player 2 Wins!";
} else h1.innerHTML="Draw!";
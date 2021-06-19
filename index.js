let randomNumber1=Math.ceil(Math.random()*6);
let randomNumber2=Math.ceil(Math.random()*6);
// let img1 = document.getElementsByClassName("img1");
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
img1.setAttribute('src', `./images/dice${randomNumber1}.png`);
img2.setAttribute('src', `./images/dice${randomNumber2}.png`);

let h1 = document.querySelector('h1');
h1.innerText = "You won!";
if(randomNumber1 > randomNumber2){
    h1.innerText ='Player1 Won!';

}else if(randomNumber1 == randomNumber2){
    h1.innerText = "Its a draw!";
}
else{
    h1.innerText='Player2 Won!';
}


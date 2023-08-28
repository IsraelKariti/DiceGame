var rand1 =Math.floor( Math.random()*6)+1;
var rand2 =Math.floor(  Math.random()*6)+1;

if(rand1 > rand2){
    document.querySelector("h1").textContent = "player1 win";
}
if(rand1 < rand2){
    document.querySelector("h1").textContent = "player2 win";
}
if(rand1 == rand2){
    document.querySelector("h1").textContent = "both win";
}

var img1name = "dice"+rand1+".png"
document.querySelector(".img1").setAttribute("src", "./images/"+img1name);

var img2name = "dice"+rand2+".png"
document.querySelector(".img2").src = "./images/"+img2name;
var randomnumber1 = (Math.floor(Math.random() * 6) + 1);
var rimg = ("images/dice" + randomnumber1 + ".png");
var a = document.querySelectorAll("img")[0];
a.setAttribute("src",rimg);


var randomnumber2 = (Math.floor(Math.random() * 6) + 1);
var rimg2 = ("images/dice" + randomnumber2 + ".png");
var a1 = document.querySelectorAll("img")[1];
a1.setAttribute("src",rimg2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "player 1 is the Winner";
}else if  (randomnumber2 > randomnumber1){
       document.querySelector("h1").innerHTML = "player 2 is the Winner";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}

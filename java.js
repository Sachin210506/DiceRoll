var rand1= Math.floor(6*(Math.random()))+1;
var rand2= Math.floor(6*(Math.random()))+1;
while(rand2===rand1){
    rand2= Math.floor(6*(Math.random()))+1;
}
var ranimg1="/images/dice"+rand1+".png";
var ranimg2="/images/dice"+rand2+".png";
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
image1.setAttribute("src",ranimg1);
image2.setAttribute("src",ranimg2);
if(rand1>rand2){
    document.querySelector("h1").innerHTML=("Player 1 Wins!");
}
else{
     document.querySelector("h1").innerHTML=("Player 2 Wins!");
}
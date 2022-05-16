
function something(){
    var a= Math.floor(Math.random()*6)+1;
 return a;  
}
    var p1 = something();
      var b= document.querySelectorAll("img")[0];
    var randomDiceImage= "images/dice"+p1+".png";
    b.setAttribute("src",randomDiceImage);
 
    var p2= something();
    var b= document.querySelectorAll("img")[1];
  var randomDiceImage= "images/dice"+p2+".png";
  b.setAttribute("src",randomDiceImage);

    

 if(p1>p2){
    document.querySelector("h1").innerHTML="&#128681 Player 1 Wins!";
 }
 else if(p2>p1){
    document.querySelector("h1").innerHTML="Player 2 Wins! &#128681";
 }
 else{
    document.querySelector("h1").textContent="Refresh! Its A Draw";
 }
 


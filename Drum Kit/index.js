var a=document.querySelectorAll(".drum").length;
var i=0;
var audio= new Audio("sounds/tom-1.mp3");
while(i<a){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var b=this.innerHTML;
     makeSound(b);
     animation(b);
    });
    i++;
}

document.addEventListener("keypress",function(event){
makeSound(event.key);
animation(event.key);
});
function makeSound (key){
  switch(key){
    case "w":
        {
          var audio= new Audio("sounds/crash.mp3");
          audio.play();
          break;
        }
    case "a":
        {
          var audio= new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        }
  case "s":
          {
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
          }
  case "d":
              {
                var audio= new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
                          }
          case "j":
        {
          var audio= new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        }case "k":
        {
          var audio= new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        }case "l":
        {
          var audio= new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        }
        case "W":
          {
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
          }
      case "A":
          {
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
          }
    case "S":
            {
              var audio= new Audio("sounds/snare.mp3");
              audio.play();
              break;
            }
    case "D":
                {
                  var audio= new Audio("sounds/tom-1.mp3");
                  audio.play();
                  break;
                            }
            case "J":
          {
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
          }case "K":
          {
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
          }case "L":
          {
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
          }                 
}
}
function animation(pressed) {
 var a= document.querySelector("." + pressed);
 
 a.classList.add("pressed");
 setTimeout(function (){
   a.classList.remove("pressed");
 },200);
}
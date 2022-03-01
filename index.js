//detecting click
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  var buttonhtml=this.innerHTML
  helper(buttonhtml);
  addanimation(buttonhtml);
  });
}
function helper(buttonhtml)
{
  switch (buttonhtml) {
    case "w":
      var au=new Audio("sounds/crash.mp3");
      au.play();
      break;
    case "a":
      var au=new Audio("sounds/kick-bass.mp3");
      au.play();
      break;
    case "s":
      var au=new Audio("sounds/snare.mp3");
      au.play();
      break;
    case "d":
      var au=new Audio("sounds/tom-1.mp3");
      au.play();
      break;
    case "j":
      var au=new Audio("sounds/tom-2.mp3");
      au.play();
      break;
    case "k":
      var au=new Audio("sounds/tom-3.mp3");
      au.play();
      break;
    case "l":
      var au=new Audio("sounds/tom-4.mp3");
      au.play();
      break;
    default:
      console.log(buttonhtml);
      break;

  }
}

function addanimation(keyy)
{
  var activeButton=document.querySelector("." + keyy)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100)
}
//detecting keyboard event
document.addEventListener("keypress",function(event){
  helper(event.key);
  addanimation(event.key);
})


 let pbox = document.getElementsByClassName("playbox");
 console.log(pbox);
 for(var i = 0; i < pbox.length; i++) {
  pbox[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
return function() {
   console.log("you clicked region number " + i);
};
}

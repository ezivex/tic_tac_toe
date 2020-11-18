let pbItems = new Array(9);
console.log(pbItems);

 let pbox = document.getElementsByClassName("playbox");

// function playerMove(){

//     let pbox = document.getElementsByClassName("playbox");
//     pbox.addEventListener("click", playerMove);

//     for( let i = 0; i < 10; i++ )
//     {
//         pboxp[i].innerHtml="x";
//         if(pbox[i]=="x"){
//             break;
//         }
//     }
// }


for (i = 0; i < pbox.length; i++) {
    pbox[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

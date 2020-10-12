let menu = document.getElementById("menuBtn");
let navbar = document.getElementById("navbar");

navbar.style.right ="-250px";
menu.addEventListener("click", perform);
navbar.addEventListener("click", perform);

 function perform() {
  if(navbar.style.right === "-250px"){
    navbar.style.right = "0";
  }

  else{
    navbar.style.right= "-250px";
  }
}

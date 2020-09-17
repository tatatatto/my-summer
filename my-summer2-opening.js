'usestrict'

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const G = document.getElementById("G");
const monologue = document.getElementById("monologue");
const link = document.getElementById("link");
const title = document.getElementById("title");

setTimeout("firstRemoveAndFlash()",5900);

function firstRemoveAndFlash(){
  A.remove();
  monologue.remove();
  B.style.display = "block";
  B.classList.add("flash");
  setTimeout("secondRemoveAndFlash()",2900);
  }
  
  function secondRemoveAndFlash(){
  B.remove();
  C.style.display = "block";
  C.classList.add("flash");
  setTimeout("thirdRemoveAndFlash()",2900);
  }
  
  function thirdRemoveAndFlash(){
  C.remove();
  D.style.display = "block";
  D.classList.add("flash");
  setTimeout("fourthRemoveAndFlash()",2900);
  }
  
  function fourthRemoveAndFlash(){
  D.remove();
  E.style.display = "block";
  E.classList.add("flash");
  setTimeout("fifthRemoveAndFlash()",2900);
  }
  
  function fifthRemoveAndFlash(){
  E.remove();
  F.style.display = "block";
  F.classList.add("flash");
  setTimeout("sixthRemoveAndFlash()",2900);
  }

  function sixthRemoveAndFlash(){
  F.remove();
  G.style.display = "block";
  link.style.display = "block";
  title.style.display = "block";
  }






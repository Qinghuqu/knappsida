const delbutton = document.getElementById("delete");
const alert = document.getElementById("container");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
delbutton.addEventListener("click", function(){
  delbutton.style="display:none";
  alert.style="display:flex";

});

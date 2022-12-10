var fullTable = document.getElementById("full-table");
var tableBtn = document.getElementById("btnShow");

var fioShow = document.getElementById("fio-back");
var fioBtn = document.getElementById("showFio");

var telShow = document.getElementById("tel-back");
var telBtn = document.getElementById("showTel");

var formShow = document.getElementById("new-form");
var formBtn = document.getElementById("addTel");

var tableClose = document.getElementsByClassName("close")[0];
var fioClose = document.getElementsByClassName("close")[1];
var telClose = document.getElementsByClassName("close")[2];


tableBtn.onclick = function() {
  fullTable.style.display = "block";
  tableBtn.style.display="none";
}
tableClose.onclick = function() {
  fullTable.style.display = "none";
  tableBtn.style.display="inline";
}

fioBtn.onclick = function(){
  fioShow.style.display = "block";
}
fioClose.onclick = function() {
  fioShow.style.display = "none";
}

telBtn.onclick = function(){
  telShow.style.display = "block";
}
telClose.onclick = function() {
  telShow.style.display = "none";
}

formBtn.onclick = function(){
  formShow.style.display = "block";
  telBtn.style.display = "inline";
  formBtn.style.display = "none";
}

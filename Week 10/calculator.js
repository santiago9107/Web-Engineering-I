var term;
var apr;


window.onload = function()
{
  document.getElementById("apr").focus();
  document.getElementById("term").focus();
};

function checkValues() {
  var txt = "";
  var txt2 ="";
  if (document.getElementById("term").validity.rangeOverflow) {
    txt = "Term value should be between 1 and 40";
  } else {
    txt = "";
  } 
  document.getElementById("message1").innerHTML = txt;

  if (document.getElementById("apr").validity.rangeOverflow) {
    txt2 = "APR value should be between 0 and 25";
  } else {
    txt2 = "";
  } 
  document.getElementById("message2").innerHTML = txt2;

};



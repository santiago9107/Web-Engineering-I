var term;
var apr;
var amount;
var Mpayment;


window.onload = function()
{
  document.getElementById("apr").focus();
  document.getElementById("calculate").onclick = getValues;
};

function getValues()
{
  term = document.getElementById("term").value;
  apr = document.getElementById("apr").value;
  amount = document.getElementById("amount").value;
  if( apr === null || apr <0 || apr >25){
    return false;
   }
   else;
  
  if( term === null || term <1 || term >40){
    return false;
  }
  else;
  apr /= 1200;
  term *= 12;
  Mpayment = calculate();
  document.getElementById("payment").value = Mpayment.toFixed(2);
  mistakeMessages = validateValues();
  document.getElementById("calculate") = mistakeMessages;
 
};


function calculate()
{
	var paym = amount*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
	return paym;
};





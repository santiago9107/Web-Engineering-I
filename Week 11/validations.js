function validate(e){
e.preventDefault();  
var phone = document.getElementById("phone").value;
var phoneNo = /^\+?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
var first_name = document.getElementById("first_name").value;
var last_name = document.getElementById("last_name").value;
var address = document.getElementById("address").value;
var credit_card = document.getElementById("credit_card").value;
var card_number = /^\+?([0-9]{4})\)?[ ]?([0-9]{4})[ ]?([0-9]{4})?[ ]?([0-9]{4})$/;
var exp_date = document.getElementById("exp_date").value;
var date_format = /^[0][1-9]|[1][0-2][/]([2])([0])([2-9]{1})([0-9]{1})$/; 


if(phoneNo.test(phone))
  {
    true;       
  }
else{document.getElementById("phoneWrong").innerHTML = "Phone number must be in the following format XXX-XXX-XXXX";}  


if(card_number.test(credit_card))
  {
    true;       
  }
else{document.getElementById("cardWrong").innerHTML = "Credit card number must be in the following format XXXX XXXX XXXX XXXX";}  



if(date_format.test(exp_date))
  {
    true;       
  }
else{document.getElementById("expWrong").innerHTML = "Input a correct date MM/YYYY";} 

if(first_name==""||last_name==""||address==""||phone==""||credit_card==""||exp_date==""){
  document.getElementById("incompleteFields").innerHTML = "Complete all fields";

}

}

function focusFirst_name(e)
{
   document.getElementById("first_name").focus();
}




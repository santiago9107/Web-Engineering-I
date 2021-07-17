<?php

    $first_name = $_GET["first_name"];
    $last_name = $_GET["last_name"];
    $address = $_GET["address"];
    $phone = $_GET["phone"];
    $exp_date = $_GET["exp_date"];
    $selected_radio = $_GET["card"];
    $paym = $_GET["total"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Review Confirmation</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css"> 
</head>
<body>


<h1> This is your Order confirmation: </h1>
      <?php
         print "FIRST NAME: $first_name<br />";
         print "LAST NAME: $last_name<br />";
         print "ADDRESS: $address<br />";
         print "PHONE: $phone<br />";
         print "EXPIRATION DATE: $exp_date<br />";
         print "CARD TYPE: $selected_radio<br />";
      
      ?>  

   <br>
   <br>
      
   <img src="order.jpg" 
             alt="order.jpg" 
             width="1000" 
             height="230"
        >

<h2> Your total payment is:</h2> <br/>
<?php
         print "$paym<br/>";
      ?>  
      <br>
      <br>   

<form action="assign11_a.php" method="GET" >
<button type="submit" name="confirmation" value="confirmed">Confirm Purchase</button>
<button type="submit" name="confirmation" value="canceled">Cancel Purchase</button>
</form>
   
</body>
</html>
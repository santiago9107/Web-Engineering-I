<?php

    $apr = $_GET["apr"];
    $term = $_GET["term"];
    $amount = $_GET["amount"];
    
$interest = $apr/1200;
$termMonths = $term * 12;
$paym = $amount*($interest * pow((1 + $interest), $termMonths))/(pow((1 + $interest), $termMonths) - 1);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mortgage Calculated Value</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css"> 
</head>
<body>

<h2>The values used to calculate your monthly payment are: <br/>
      <?php
         print "APR: $apr<br />";
         print "Term: $term<br />";
         print "Amount: $amount<br />";
         
      ?>  
   </h2>

   <img src="payment.png" 
             alt="payment.png" 
             width="800" 
             height="400"
        >
<h1> And your monthly Payment is: <br/>
<?php
         print "Your payment: $paym<br />";
      ?>  
   </h1>

</body>
</html>




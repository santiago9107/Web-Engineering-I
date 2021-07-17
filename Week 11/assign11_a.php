<?php
    $confirmation = $_GET["confirmation"];
   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase status</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css"> 
</head>
<body>


<h1> Your order was: </h1>
      <?php
         print "$confirmation<br/>";
             
      ?>  

   <br>
   <br>
     
</body>
</html>
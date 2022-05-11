<?php
    include 'connect.php';

    if(isset($_POST['submit'])){
        $description = $_POST['description'];
        $weight = $_POST['weight'];
        $cost = $_POST['cost'];
        $number = $_POST['number'];

        if($description == '') echo "<span>Description is required</span>";
        if($weight == '') echo "<span>Wight is required</span>";
        if($cost == '') echo "<span>Description is required</span>";
        if($number == '') echo "<span>Description is required</span>";


        if($description != '' && $weight != '' && $cost != '' && $number != ''){
            $postSql = "INSERT INTO products(Product_desc, Cost, Weight, Numb) VALUES('$description', '$cost', '$weight', '$number')";
            $query = mysqli_query($conn, $postSql);

            echo "The Query is INSERT INTO Products VALUES('$description', '$cost', '$weight', '$number')<br/>";
            echo "Insert into perl_pgm_com was successfull!";
        }
    }

?>
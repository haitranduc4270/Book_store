<?php
    include 'connect.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    h1 {
        margin: 0;
        color: royalblue;
    }

    table {
        margin-top: 8px;
    }
    </style>
    <title>Document</title>
</head>

<body>
    <h1>Select Product We Just Sold:</h1>

    <form action="sale.php" method="POST" id="sale">
        <?php
        
            $getSql = "SELECT * FROM products";
            $query = mysqli_query($conn, $getSql);
            while($row = mysqli_fetch_array($query)){
                echo "<input type='radio' name='product' value='".$row['Product_desc']."' id=''>".$row['Product_desc']."  ";
            }
        ?>
        <br />
        <input type="submit" value="Click To Submit" name="submit">
        <input type="reset" value="Reset" form="sale">
    </form>
    <p>The query is SELECT * from Products</p>
    <table border="1">
        <tr>
            <td>Num</td>
            <td>Product</td>
            <td>Cost</td>
            <td>Weight</td>
            <td>Count</td>
        </tr>
        <?php
                $query2 = mysqli_query($conn, $getSql);
                while($row2 = mysqli_fetch_array($query2)){
                    echo "<tr>
                        <td>".$row2['ProductID']."</td>
                        <td>".$row2['Product_desc']."</td>
                        <td>".$row2['Cost']."</td>
                        <td>".$row2['Weight']."</td>
                        <td>".$row2['Numb']."</td>
                    </tr>";
                }
            ?>
    </table>
</body>

</html>
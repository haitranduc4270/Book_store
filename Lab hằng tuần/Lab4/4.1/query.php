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

    h4 {
        margin: 0;
    }

    tr:first-child>td {
        font-weight: bold;
        text-align: center;
    }
    </style>
    <title>Document</title>
</head>

<body>
    <h1>Products Data</h1>
    <h4>The Query is SELECT * FROM Products</h4>
    <table border="1">
        <tr>
            <td>Num</td>
            <td>Product</td>
            <td>Cost</td>
            <td>Weight</td>
            <td>Count</td>
        </tr>
        <?php
            $getSql = "SELECT * FROM products";
            $query = mysqli_query($conn, $getSql);
            while($row = mysqli_fetch_array($query)){
                echo "<tr>
                    <td>".$row['ProductID']."</td>
                    <td>".$row['Product_desc']."</td>
                    <td>".$row['Cost']."</td>
                    <td>".$row['Weight']."</td>
                    <td>".$row['Numb']."</td>
                </tr>";
            }
        ?>
    </table>
</body>

</html>
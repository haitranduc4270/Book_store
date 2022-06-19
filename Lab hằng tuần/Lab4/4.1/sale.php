<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Update Result for Table Products</h1>

    <?php
        include "connect.php";
        if(isset($_POST['submit'])){
            $product = $_POST['product'];
         
            $updateSQL = "UPDATE products SET Numb = Numb - 1 WHERE (Product_desc ='$product')";
            echo "This query is $updateSQL";
            $query = mysqli_query($conn, $updateSQL);
        }
    ?>

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
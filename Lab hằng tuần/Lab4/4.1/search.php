<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
    <style>
    h1 {
        margin: 0;
        color: royalblue
    }

    tr:first-child>td {
        font-weight: bold;
    }
    </style>
</head>

<body>
    <h1>Products Data</h1>
    <?php
        include 'connect.php';

        if(isset($_POST['search'])){
            $search = $_POST['search_input'];

            $sql = "SELECT * FROM products WHERE (Product_desc = '$search')";
            $query = mysqli_query($conn, $sql);

            echo  "<p>The query is $sql</p>";
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
<?php
    include '../4.2/connect.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    h1 {
        margin: 0;
    }

    .group {
        display: flex;

    }

    .group div {
        margin: 12px;
    }

    .title {
        font-weight: bold;
    }

    span {
        cursor: pointer;
    }
    </style>
</head>

<body>
    <h1>Business Listings</h1>
    <div class="group">
        <div class="categories">
            <table border="1">
                <tr>
                    <td class="title">Click on a category to find business listings:</td>
                </tr>
                <?php
                    $getCatSQL = "SELECT * FROM  categories";
                    $query = mysqli_query($conn, $getCatSQL);
                    while($row = mysqli_fetch_array($query)){
                        //.$row['CategoryID'].
                        echo "<tr class='cat_item'>
                            <td><form method='GET'>
                                <span onclick='onSubmit(event)'>
                                    ".$row['Title']."
                                    <input hidden class='submit_input' type='submit' name='cat_id' value='".$row['CategoryID']."'>
                                </span>
                            </form></td>
                        </tr>";
                    }

            ?>
            </table>
        </div>
        <div class="busines">
            <table border="1">
                <?php
                if(isset($_GET['cat_id'])){
                    $cat_id = $_GET['cat_id'];
                    
                    $businessSQL = "SELECT * FROM categories, businesses, biz_categories 
                                    WHERE categories.CategoryID = biz_categories.CategoryID 
                                    AND businesses.BusinessID = biz_categories.BusinessID 
                                    AND categories.CategoryID = '$cat_id'";

                    $query = mysqli_query($conn, $businessSQL);

                    while ($row = mysqli_fetch_array($query)){
                        echo "<tr>
                            <td>".$row['Name']."</td>
                            <td>".$row['Address']."</td>
                            <td>".$row['City']."</td>
                            <td>".$row['Telephone']."</td>
                            <td>".$row['URL']."</td>
                            <td>".$row['CategoryID']."</td>
                        </tr>";
                    }
                }
            ?>
            </table>
        </div>
    </div>

    <script>
    const onSubmit = (event) => {
        //console.log(event.target);
        const input = event.target.querySelector(".submit_input");
        input.click();
    }
    </script>

</body>

</html>
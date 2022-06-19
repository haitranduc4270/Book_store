<?php
    include "../4.2/connect.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="add_biz.css">
    <title>Document</title>
</head>

<body>
    <h1>Businness Registrantion</h1>
    <form action="" method="POST" id="form-biz">
        <div class="group">
            <div class="left">
                <p>Click on one, or control-click on multiple categories:</p>
                <div class="checkbox">
                    <?php
                        $getSQL = "SELECT * FROM  categories";
                        $query = mysqli_query($conn, $getSQL);
                        while($row = mysqli_fetch_array($query)){
                            echo "<input hidden type='checkbox' class='category_checkbox' id='".$row['CategoryID']."' name='category[]' value='".$row['CategoryID']."' onclick='onChecked()'>
                            <label class='category_label' for='".$row['CategoryID']."'>".$row['Title']."</label>";
                        }
                    ?>
                </div>
            </div>
            <div class="right">
                <table>
                    <tr>
                        <td>Businness</td>
                        <td><input type="text" name="name" id=""></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><input type="text" name="address" id=""></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type="text" name="city" id=""></td>
                    </tr>
                    <tr>
                        <td>Telephone</td>
                        <td><input type="tel" name="tel" id=""></td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td><input type="text" name="url" id=""></td>
                    </tr>
                </table>
            </div>
        </div>

        <input type="submit" name="submit" value="Add Another Business">
    </form>

    <!-- Submit data to database -->
    <?php
        if(isset($_POST['submit'])){
            $category = $_POST['category'];  //array
            $name = $_POST['name'];
            $address = $_POST['address'];
            $city = $_POST['city'];
            $tel = $_POST['tel'];
            $url = $_POST['url'];

            $addBizSql = "INSERT INTO businesses(Name, Address, City, Telephone, URL) VALUES('$name', '$address', '$city', '$tel', '$url')";
            $query = mysqli_query($conn, $addBizSql);

            $selectID = "SELECT * FROM businesses WHERE Telephone = '$tel'";
            $queryID = mysqli_query($conn, $selectID);

            // Vì id business tăng tự động nên khi insert vào bảng business thì phải select ra ID của nó
            while ($rowID = mysqli_fetch_array($queryID)){
                foreach ($category as $cat){ 
                    $addBiz_catSQL = "INSERT INTO biz_categories(BusinessID, CategoryID) VALUES('".$rowID['BusinessID']."', '$cat')";
                    $query = mysqli_query($conn, $addBiz_catSQL);
                }
            }           
        }
    ?>
</body>
<script>
const checkBtn = document.querySelectorAll(".category_checkbox");
const label = document.querySelectorAll(".category_label")
const onChecked = () => {
    checkBtn.forEach((check, index) => {
        if (check.checked) {
            label[index].classList.add("active");
        } else {
            label[index].classList.remove("active");
        }
    })
}
</script>

</html>
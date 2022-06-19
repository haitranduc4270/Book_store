<?php
    include '../4.2/connect.php';
?>

<?php
    if(isset($_POST['add'])){
        $catID = $_POST['catID'];
        $title = $_POST['title'];
        $decription = $_POST['decription'];

        if($catID == '') echo "<span>Vui lòng nhập CatID!</span><br/>";
        if($title == '') echo "<span>Vui lòng nhập Title!</span><br/>";
        if($decription == '') echo "<span>Vui lòng nhập Decription!</span><br/>";

        if($catID != '' && $title != '' && $decription != ''){
            $postSQL = "INSERT INTO categories(CategoryID, Title, Description) VALUES('$catID', '$title', '$decription')";
            $query = mysqli_query($conn, $postSQL);
            header('location: admin.php');
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    td {
        padding: 4px;
    }

    td>input {
        color: darkgreen;
        width: 300px;
    }

    td:first-child>input {
        width: 100px;
    }

    tr:first-child>td {
        background-color: #ccc;
        font-weight: bold;
    }

    input[type='submit'] {
        margin-top: 8px;
        cursor: pointer;
    }

    span {
        color: red;
    }
    </style>
</head>

<body>
    <h1>Category Administration</h1>
    <form action="" method="POST">
        <table border="1">
            <tr>
                <td>CatID</td>
                <td>Title</td>
                <td>Description</td>
            </tr>
            <?php
                $getSQL = "SELECT * FROM  categories";
                $query = mysqli_query($conn, $getSQL);
                while($row = mysqli_fetch_array($query)){
                    echo "<tr>
                        <td>".$row['CategoryID']."</td>
                        <td>".$row['Title']."</td>
                        <td>".$row['Description']."</td>
                    </tr>";
                }
            ?>
            <tr>
                <td>
                    <input type="text" name="catID">
                </td>
                <td>
                    <input type="text" name="title">
                </td>
                <td>
                    <input type="text" name="decription">
                </td>
            </tr>
        </table>
        <input type="submit" name="add" value="Add Category" />
    </form>
</body>

</html>
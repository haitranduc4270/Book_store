<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Table</title>
</head>

<body>
    <?php
        $dbserver = 'localhost';
        $dbuser = 'root';
        $dbpass = '';
        $dbname = 'myTest';
        $tableName = 'Products';
        $connect = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);
        if(!$connect){
            die ("Cannot connect to $dbserver using $dbuser");
        }else {
            $sqlQuery = "CREATE TABLE $tableName(
                ProductID INT UNSIGNED NOT NULL
                AUTO_INCREMENT PRIMARY KEY,
                Product_desc VARCHAR(50),
                Cost INT,
                Weight INT,
                Numb INT)";
        }
        mysqli_select_db($connect, $dbname);
        if(mysqli_query($connect, $sqlQuery)){
            print '<font size="4" color="blue" >Created Table ';
            print "<i>$tableName</i> in database <i>$dbname</i><br></font>";
            print "<br>SQLcmd=$sqlQuery";
        }else {
            die ("Table Create Creation Failed SQLcmd = $SQLcmd");
        }
        mysqli_close($connect);
    ?>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Square and Cube</title>
</head>

<body>
    <h1 style="font-size:1.6rem;color:blue">Generate Square and Cube Values</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="GET">
        <table>
            <tr>
                <td>Select Start Number: </td>
                <td>
                    <select name="start">
                        <?php
                            for($i = 0; $i <= 10; $i++) {
                                print ("<option>$i</option>");
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Select End Number: </td>
                <td>
                    <select name="end">
                        <?php
                            for($i = 0; $i <= 20; $i++) {
                                print ("<option>$i</option>");
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right"><input type="submit" value="Submit"></td>
                <td align="left"><input type="reset" value="Reset"></td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Number</th>
                <th>Square</th>
                <th>Cube</th>
            </tr>
            <?php 
                if(array_key_exists('start', $_GET)){
                    $start = $_GET['start'];
                    $end = $_GET['end'];
                    $i = $start;
                    while ($i <= $end){
                        $sqr = $i * $i;
                        $cubed = $i * $i * $i;
                        print "<tr>
                            <td>$i</td>
                            <td>$sqr</td>
                            <td>$cubed</td>
                        </tr>";
                    }
                }
            ?>
        </table>
    </form>

</body>

</html>
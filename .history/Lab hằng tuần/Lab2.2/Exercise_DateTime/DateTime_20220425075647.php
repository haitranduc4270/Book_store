<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Date Time</title>
</head>

<body>
    <h2>Enter your name and select date and time for the appointment.</h2>

    <form action="" method="post">
        <table>
            <tr>
                <td>Your name:</td>
                <td><input type="text" name="name" id="name"></td>
            </tr>
            <tr>
                <td>Date:</td>
                <td>
                    <table>
                        <tr>
                            <td><select name="date" id="date"></select></td>
                            <td><select name="month" id="month"></select></td>
                            <td><select name="year" id="year"></select></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Time:</td>
                <td>
                    <table>
                        <tr>
                            <td><select name="hour" id="hour">
                                    <?php 
                                    for($i = 0; $i < 23; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="minute" id="minute">
                                    <?php 
                                    for($i = 0; $i < 23; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="second" id="second">
                                    <?php 
                                    for($i = 0; $i < 59; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="right"><input type="submit" value="Submit"></td>
                <td align="left"><input type="reset" value="Reset"></td>
            </tr>
        </table>
    </form>
</body>

</html>
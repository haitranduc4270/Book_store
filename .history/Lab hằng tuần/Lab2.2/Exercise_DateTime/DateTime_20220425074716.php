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
                <td><select name="date" id="date"></select></td>
                <td><select name="month" id="month"></select></td>
                <td><select name="year" id="year"></select></td>
            </tr>
            <tr>
                <td><select name="hour" id="hour"></select></td>
                <td><select name="minute" id="minute"></select></td>
                <td><select name="second" id="second"></select></td>
            </tr>
        </table>
    </form>
</body>

</html>
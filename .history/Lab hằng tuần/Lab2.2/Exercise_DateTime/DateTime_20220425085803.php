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

    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="GET">
        <table>
            <tr>
                <td>Your name:</td>
                <td><input id="name" type="text" name="name" value="<?php echo (isset($name))?$name:'';?>"></td>
            </tr>
            <tr>
                <td>Date:</td>
                <td>
                    <table>
                        <tr>
                            <td><select name="day" id="day">
                                    <?php 
                                    for($i = 1; $i < 32; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="month" id="month">
                                    <?php 
                                    for($i = 1; $i < 13; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="year" id="year">
                                    <?php 
                                    for($i = 1900; $i < 2022; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                    print ("<option selected>2022</option>");
                                ?>
                                </select></td>
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
                                    for($i = 0; $i < 24; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="minute" id="minute">
                                    <?php 
                                    for($i = 0; $i < 60; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                            <td><select name="second" id="second">
                                    <?php 
                                    for($i = 0; $i < 60; $i++) {
                                        print ("<option>$i</option>");
                                    }
                                ?>
                                </select></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="right"><input type="submit" name="submit" value="Submit"></td>
                <td align="left"><input type="reset" value="Reset"></td>
            </tr>
        </table>
    </form>

    <div class="">
        <?php
            // Check onSubmited in input:submit.   isset: check empty variable
            if(isset($_GET['submit'])){
                $name = $_GET['name'];
                print ("<p>Hi $name!</p>");

                $day = $_GET['day'];
                $month = $_GET['month'];
                $year = $_GET['year'];
                $hour = $_GET['hour'];
                $minute = $_GET['minute'];
                $second = $_GET['second'];
                print ("You have choose to have an appointment on $hour:$minute:$second, $day/$month/$year <br/>");

                print ("More information <br/>");

                if($hour > 12){
                    $hour -= 12;
                    print ("In 12 hours, the time and date is $hour:$minute:$second PM, $day/$month/$year <br/>");
                }else{
                    print ("In 12 hours, the time and date is $hour:$minute:$second AM, $day/$month/$year <br/>");
                }
                
                switch($month){
                    case [1, 3, 5, 7, 8, 10, 12]:
                        print ("This month has 31 days!");
                        break;
                    case [4, 6, 9, 11]:
                        print ("This month has 30 day!");
                        break;
                    case 2:
                        if(($year % 100 == 0 && $year % 400 == 0) || $year % 4 == 0){
                            print ("This month has 29 days!");
                        }else {
                            print ("This month has 28 days!");
                        }
                }
            }
        ?>
    </div>
</body>

</html>
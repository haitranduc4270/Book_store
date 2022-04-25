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

    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="GET" id="form_datetime">
        <?php
            if(array_key_exists('name', $_GET)){
                $name = $_GET['name'];                
                $day = $_GET['day'];
                $month = $_GET['month'];
                $year = $_GET['year'];
                $hour = $_GET['hour'];
                $minute = $_GET['minute'];
                $second = $_GET['second'];
            }else{
                $name = "";                
                $day = 0;
                $month = 0;
                $year = 0;
                $hour = 0;
                $minute = 0;
                $second = 0;
            }
        ?>
        <table>
            <tr>
                <td>Your name:</td>
                <td><input id="name" type="text" name="name" value="<?php echo $name; ?>"></td>
            </tr>
            <tr>
                <td>Date:</td>
                <td>
                    <table>
                        <tr>
                            <td><select name="day" id="day">
                                    <?php 
                                    for($i = 1; $i < 32; $i++) {
                                        if($day == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                        }
                                    }
                                ?>
                                </select></td>
                            <td><select name="month" id="month">
                                    <?php 
                                    for($i = 1; $i < 13; $i++) {
                                        if($month == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                        }
                                    }
                                ?>
                                </select></td>
                            <td><select name="year" id="year">
                                    <?php 
                                    for($i = 1900; $i <= 2022; $i++) {
                                        if($hour == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                            if($i == 2022)
                                                print ("<option selected>2022</option>");
                                        }
                                    }
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
                                        if($hour == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                        }
                                    }
                                ?>
                                </select></td>
                            <td><select name="minute" id="minute">
                                    <?php 
                                    for($i = 0; $i < 60; $i++) {
                                        if($minute == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                        }
                                    }
                                ?>
                                </select></td>
                            <td><select name="second" id="second">
                                    <?php 
                                    for($i = 0; $i < 60; $i++) {
                                        if($second == $i) {
                                            print ("<option selected>$i</option>");
                                        }else{
                                            print ("<option>$i</option>");
                                        }
                                    }
                                ?>
                                </select></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="right"><input type="submit" name="submit" value="Submit"></td>
                <td align="left"><input type="reset" value="Reset" form="form_datetime"></td>
            </tr>
        </table>
    </form>

    <div class="">
        <?php
            // Check onSubmited in input:submit.   isset: check empty variable
            if(isset($_GET['submit'])){                
                print ("Hi $name! <br/>");
                print ("You have choose to have an appointment on $hour:$minute:$second, $day/$month/$year <br/>");
                print ("More information <br/>");

                if($hour >= 12){
                    $hour -= 12;
                    print ("In 12 hours, the time and date is $hour:$minute:$second PM, $day/$month/$year <br/>");
                }else{
                    print ("In 12 hours, the time and date is $hour:$minute:$second AM, $day/$month/$year <br/>");
                }

                if($month == 2){
                    if(($year % 100 == 0 && $year % 400 == 0) || $year % 4 == 0){
                        print ("This month has 29 days!");
                    }else {
                        print ("This month has 28 days!");
                    }
                }elseif($month == 4 || $month == 6 || $month == 9 || $month == 11){
                    print ("This month has 30 day!");
                }else{
                    print ("This month has 31 days!");
                }
            }
        ?>
    </div>
</body>

</html>
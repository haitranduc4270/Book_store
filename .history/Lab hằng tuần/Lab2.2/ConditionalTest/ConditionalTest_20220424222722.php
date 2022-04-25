<html lang="en">

<head>
    <title>Conditional Test</title>
</head>

<body>
    <?php
        $first = $_GET['firstName'];
        $middle = $_GET['middleName'];
        $last = $_GET['lastName'];

        echo "Hi $first! Your full name is $last $middle $first. <br/>";
        if($first == $last) {
            echo "$first and $last are equal";
        } elseif($first < $last) {
            echo "$first is greater than $last";
        } else {
            echo "$first is less than $last";
        }
        echo "<br/>";

        $grade1 = $_GET['grade1'];
        $grade2 = $_GET['grade2'];
        $final = (2 * $grade1 + 3 * $grade2) / 5;
        if($final > 89){
            echo "Your final grade is $final. You got an A. Congratulation!";
        }elseif($final > 79){
            echo "Your final grade is $final. You got an B.";
        }elseif($final > 69){
            echo "Your final grade is $final. You got an C.";
        }elseif($final > 59){
            echo "Your final grade is $final. You got an D.";
        }elseif($final > 0){
            echo "Your final grade is $final. You got an F.";
        }else{
            echo "Illegal grade less than 0. Final grade = $final";
        }
    ?>
</body>

</html>
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
            printf ("Your final grade is %.1f. You got an A. Congratulation!", $final);
            $rate = "A";
        }elseif($final > 79){
            printf ("Your final grade is %.1f. You got an B.", $final);
            $rate = "B";
        }elseif($final > 69){
            printf ("Your final grade is %.1f. You got an C.", $final);
            $rate = "C";
        }elseif($final > 59){
            printf ("Your final grade is %.1f. You got an D.", $final);
            $rate = "D";
        }elseif($final > 39){
            printf ("Your final grade is %.1f. You got an D.", $final);
            $rate = "E";
        }elseif($final > 0){
            printf ("Your final grade is %.1f. You got an F.", $final);
            $rate = "F";
        }else{
            printf ("Illegal grade less than 0. Final grade = %.1f", $final);
            $rate = "Illegal";
        }

        print("<br/>");
        switch($rate){
            case "A": print("Excellent!"); break;
            case "B": print("Good!"); break;
            case "C": print("Not bad!"); break;
            case "D": print("Normal!"); break;
            case "E": print("Bad!"); break;
            case "F": print("You have to try again!"); break;
            default: print("Illegal grade!");
        }
    ?>
</body>

</html>
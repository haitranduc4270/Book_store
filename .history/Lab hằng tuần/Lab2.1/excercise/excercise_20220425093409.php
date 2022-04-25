<?php
    $name = $_POST['name'];
    $class = $_POST['class'];
    $university = $_POST['university'];
    $hobbies = array();

    $readBook = $_POST['read-books'];
    if($readBook == "Yes") array_push($hobbies, "Read Book");

    $sports = $_POST['sports'];
    if($sports == "Yes") array_push($hobbies, "Play Sports");

    $code = $_POST['code'];
    if($code == "Yes") array_push($hobbies, "Code");

    $watchYoutube = $_POST['watch-youtube'];
    if($watchYoutube == "Yes") array_push($hobbies, "Watch Youtube");

    $travel = $_POST['travel'];
    if($travel == "Yes") array_push($hobbies, "Travel");

    echo "$name <br/>";
    echo "$class <br/>";
    echo "$university <br/>";
    echo "Các sở thích: <br/>";
    foreach($hobbies as $i){
        echo "- $i <br/>";
    }
?>
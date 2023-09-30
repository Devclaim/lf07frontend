<?php    
    echo "Hello World";

    $file = __DIR__ . '/measurements.txt';

    if(file_exists($file)) {
        echo "<br>";
        echo file_get_contents($file);
    } else {
        echo "<br> Measurements File missing.";
    }
    
?>
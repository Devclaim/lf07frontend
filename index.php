<?php
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LF07 Frontend</title>

        <link rel="stylesheet" href="style.css">
        <script src="javascript/UpdateMeasurements.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
        <script> const div = d3.selectAll("div");</script>
        <script type="importmap">
            {
                "imports": {
                "three": "https://unpkg.com/three@0.157.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.157.0/examples/jsm/"
                }
            }
        </script>
    </head>
  
    <body style="text-align:center;">
        
        <canvas id="bg"></canvas>

        <h1 class="title">
            Smart Garden
        </h1>
    </body>

    <script src="javascript/MainScene.js" type="module"></script>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>nmail</title>
    <meta name="viewport" content="width=device-width"/>
    <link rel="stylesheet" type="text/css" href="libraries/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles/css/log-reg.css">
    <link rel="stylesheet" type="text/css" href="styles/css/inbox.css">
    <link rel="stylesheet" type="text/css" href="styles/css/side-menu.css">
    <link rel="stylesheet" type="text/css" href="styles/css/all.css">
</head>
<body>
<?php
    session_start();
    if (isset($_SESSION['Id'])) {
        echo file_get_contents("side-menu.html").file_get_contents("inbox.html");
    } else {
        echo file_get_contents("log-reg.html");
        if (strpos($_SERVER['REQUEST_URI'], "error=empty") !== false) {
            echo "<div class='error-div'></divclass><label class='error-label'>Fill in all fields :(</label></div>";
        } else if (strpos($_SERVER['REQUEST_URI'], "error=match") !== false) {
            echo "<div class='error-div'></divclass><label class='error-label'>Passwords do not match :(</label></div>";
        } else if (strpos($_SERVER['REQUEST_URI'], "error=username") !== false) {
            echo "<div class='error-div'></divclass><label class='error-label'>Username already in use :(</label></div>";
        } else if (strpos($_SERVER['REQUEST_URI'], "error=log-incorrect") !== false) {
            echo "<div class='error-div'></divclass><label class='error-label'>Username and/or password incorrect :(</label></div>";
        }
    }
?>
</body>
<script type="text/javascript" src="libraries/jquery/jquery.min.js"></script>
<script type="text/javascript" src="libraries/tether/tether.min.js"></script>
<script type="text/javascript" src="libraries/bootstrap/js/bootstrap.js"></script>
<script type="text/javascript" src="js/log-reg.js"></script>
<script type="text/javascript" src="js/side-menu.js"></script>
</html>
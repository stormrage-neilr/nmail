<?php
/**
 * Created by PhpStorm.
 * User: neilrafferty
 * Date: 27/02/2017
 * Time: 18:41
 */
require_once('dbconnect.php');
$username = $_POST['username'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm-password'];

if (empty($username) || empty($password) || empty($confirm_password)) {
    header("Location: ../www/index.php?error=empty");
    exit();
} else if ($password != $confirm_password) {
    header("Location: ../www/index.php?error=match");
    exit();
} else {
    $query = "call Check_Username('$username')";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        header("Location: ../www/index.php?error=username");
    } else {
        $query = "call Register_User('$username','$password')";
        $result = mysqli_query($conn, $query);
        mysqli_close($conn);
        header("Location: ../www/index.php");
    }
}
mysqli_close($conn);
exit();
?>
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

$query = "call Login('$username','$password')";
$result = mysqli_query($conn, $query);

if (!$row = $result->fetch_assoc()) {
    header("Location: ../www/index.php?error=log-incorrect");
} else {
    session_start();
    $_SESSION['Id'] = $row['Id'];
    header("Location: ../www/index.php");
}
mysqli_close($conn);
exit();
?>
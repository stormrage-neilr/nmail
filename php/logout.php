<?php
/**
 * Created by PhpStorm.
 * User: neilrafferty
 * Date: 27/02/2017
 * Time: 18:41
 */
session_start();
session_destroy();
header("Location: ../www/index.php");
exit();
?>
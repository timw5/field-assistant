<?php 
$username = $_POST["email"];
$Msg =  "Got email: " . $username; 
if(isset($_POST)) {
    echo "hello";
}
?>
<html>
    <p><?php echo $Msg ?></p>
</html>
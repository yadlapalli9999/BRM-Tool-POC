<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "demo";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    //Getting data query
    $trp = mysqli_query($conn, "SELECT * from users");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows);
 
?>
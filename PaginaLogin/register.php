<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "website";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $password);

    $success = $stmt->execute();
    // Execute the statement
    if (!$success) {
        echo "Error: " . $stmt->error;
    }/*else{
        $to = $email;
        $subject = "Welcome!";
        $message = "Thank you for registering!";
        $headers = "From: your-email@example.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Email sending failed.";
        }
    }*/
    

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>

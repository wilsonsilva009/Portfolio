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
    $stored_password = $_POST['Password'];
    $password;
    

    // Prepare a statement
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $name);

    // Execute the statement
    $stmt->execute();
    $stmt->store_result();

    // Check if the user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($password);
        $stmt->fetch();

        // Verify the password
        if ($password == $stored_password) {
            echo "Login successful";
            // Redirect the user here / start session
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "User not found.";
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
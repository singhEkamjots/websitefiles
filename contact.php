<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $reason = $_POST["reason"];

    
    $to = "ekamjot446@gmail.com"; 

   
    $subject = "Contact Form Submission";

    // Build email message
    $message = "First Name: " . $firstName . "\n";
    $message .= "Last Name: " . $lastName . "\n";
    $message .= "Reason for Contact: " . $reason . "\n";


    $headers = "From: " . $firstName . " " . $lastName . " <" . $to . ">" . "\r\n";
    $headers .= "Reply-To: " . $to . "\r\n";


    if (mail($to, $subject, $message, $headers)) {
    
        echo "<p class='submission-message'>Thank you for your submission!</p>";
    } else {
        echo "<p class='error-message'>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>

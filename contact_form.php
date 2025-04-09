<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send email (you would set up email sending via an SMTP server or a service like SendGrid)
    mail("soleatharva@gmail.com", "New Contact Form Submission", "Name: $name\nEmail: $email\nMessage: $message");
    
    echo "Thank you for your message!";
}
?>

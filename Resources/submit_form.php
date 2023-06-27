<?php
$to = "kainen.white@gmail.com";
$subject = "Form Submission";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From: $name <$email>";

if (mail($to, $subject, $message, $headers)) {
  echo "Form submitted successfully. Thank you!";
} else {
  echo "Error sending the form. Please try again.";
}
?>

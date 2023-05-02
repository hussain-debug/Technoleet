<?php
if($_POST) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "sufiturabhusssain@gmail.com";
  $subject = "New contact form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";
  if(mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "Error sending message.";
  }
}
?>
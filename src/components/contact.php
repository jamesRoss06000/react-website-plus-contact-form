<?php
if (isset($_POST['submit'])) {

  $userName = $_POST['name'];
  $userEmail = $_POST['email'];
  $userMessage = $_POST['message'];

  $emailSubject = 'New Message From My Website Visitor';
  $emailBody = 'Visitor Name: ' . $userName . '\n\n' .
    'Visitor Email: ' . $userEmail . '\n\n' .
    'Message: ' . $userMessage . '\n\n';

  $emailTo = 'james_ross@outlook.fr';

  $headers = 'From: ' . $emailFrom . '\n\n';

  mail($emailTo, $emailSubject, $emailBody, $headers);

  header('Location: index.js/mailsent');
}

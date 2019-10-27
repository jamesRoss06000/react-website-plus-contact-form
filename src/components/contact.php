<?php

$userName = $_POST['name'];
$userEmail = $_POST['email'];
$userMessage = $_POST['message'];

$emailFrom = 'james_ross@outlook.fr';

$emailSubject = 'New Message From Visitor';
$emailBody = 'Visitor Name: $userName.\n'.
'Visitor Email: $userEmail.\n'.
'Visitor Telephone: $userPhone.\n'. 
'Message: $userMessage.\n';

$emailTo = 'james_ross@outlook.fr';

$headers = 'From: $emailFrom \r\n';
$headers .= 'Reply-To: $userEmail \r\n';

mail($emailTo,$emailSubject,$emailBody,$headers);

header('Location: index.js');
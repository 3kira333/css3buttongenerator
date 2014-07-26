<?php

$email = htmlspecialchars($_POST['email']);
$getBody = htmlspecialchars($_POST['getBody']);

date_default_timezone_set('Europe/Moscow');
require_once 'PHPMailer/class.phpmailer.php';

$mail = new PHPMailer;

$mail->IsSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = 'true';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->CharSet = 'UTF-8';

$body = $getBody;
$mail->Username = 'razor1702@gmail.com';
$mail->Password = 'callofduty4';
$mail->FromName = 'CSS3 Button Generator';
$mail->SetFrom('CSS3 Button Generator');
$mail->Subject = 'Your Code';
$mail->MsgHTML($body);
$address = $email;
$mail->AddAddress($address, 'for you');

$mail->Send();

?>
<?php

$email = htmlspecialchars($_POST['email']);
$getBody = htmlspecialchars($_POST['getBody']);


// массив спецсимволов для замены
$search = array(PHP_EOL, chr(10), chr(13), '\r' , '\n', '\t', '\x0B', '\0');
// на что заменять
$replace = '<br/>';
// текст с переносами строк

// функция замены переноса строк
$getBody = str_replace($search , $replace, $getBody);



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
$mail->Username = '***@gmail.com';
$mail->Password = '***';
$mail->FromName = 'CSS3 Button Generator';
$mail->SetFrom('CSS3 Button Generator');
$mail->Subject = 'Your Code';
$mail->MsgHTML($body);
$address = $email;
$mail->AddAddress($address, 'for you');

$mail->Send();

?>
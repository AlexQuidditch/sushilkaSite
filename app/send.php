<?php
header("Content-type: text/html; charset=utf-8");
//**********************************************
if(empty($_POST['js'])){

$log ="";
$error="no"; //флаг наличия ошибки

		$posName = addslashes($_POST['posName']);
		$posName = htmlspecialchars($posName);
		$posName = stripslashes($posName);
		$posName = trim($posName);

		$posPhone = addslashes($_POST['posPhone']);
		$posPhone = htmlspecialchars($posPhone);
		$posPhone = stripslashes($posPhone);
		$posPhone = trim($posPhone);

//	Telegram Sender

	//Array of request parameters
$params = array(
'api_token'  => "9b8b547ce197e6ff8fcb783cc30c97f0",
'msg' =>
"Новая просьба перезвонить с сайта Avon:

Имя: $posName
Телефон: $posPhone

Ваша служба доставки уведомлений :)"
);
// Generate URL-encoded query string from $params
$post = http_build_query($params);

// Preparing request
$context = stream_context_create(array(
                'http' => array(
                    'method' => 'POST', //Set it to GET to perform a GET request
                    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                    'content' => $post,
                    'timeout' => 10,
                ),
            ));

// Perform the request
$response = file_get_contents("https://tg-notifcaster.rhcloud.com/api/v1/selfMessage", false, $context);
	echo "1";
}

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
'api_token'  => "",
'msg' =>
"Новый заказ:

Имя: $posName
Телефон: $posPhone
Заказано:

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
echo ($response) ? '1' : '0';
}
?>

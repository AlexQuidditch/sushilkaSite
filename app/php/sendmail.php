<?
$posName = addslashes($_POST['posName']);
$posName = htmlspecialchars($posName);
$posName = stripslashes($posName);
$posName = trim($posName);

$posPhone = addslashes($_POST['posPhone']);
$posPhone = htmlspecialchars($posPhone);
$posPhone = stripslashes($posPhone);
$posPhone = trim($posPhone);

$mail = $_POST["order"];
$mail = htmlspecialchars($mail);
$mail = stripslashes($mail);
$mail = trim($mail);

$subject = htmlentities($_GET["subj"]) . "/ Заказ (".date("d.m.Y h:i").")";

$mail = strip_tags($mail, "<b><div><table><tbody><tr><td><html><body><style><h1><th><br>");
$mail = str_replace("<td></td>", "",$mail);
$mail = preg_replace('/<div[^>]+class="basket_num_buttons"[^>]*>.*?<\/div>/i', '', $mail);
$mail = preg_replace("/<([a-z][a-z0-9]*)[^>]*?(\/?)>/i",'<$1$2>', $mail);

$template = "
<html>

<style>
*
{ font-family: Arial;}
table
{ border-collapse: collapse; }
td
{ padding: 5px; border: 1px solid #000;}
th
{
background: #999; padding: 5px;
}

</style>
<body>
<h1>".$subject."</h1>
".$mail."

</body>

</html>";

$template .= '<hr>' . $_SERVER['HTTP_REFERER'];

// Clear form

$head = "<tr><th>ID</th><th>Название</th><th>Цена</th><th>Кол-во</th><th>Всего</th></tr>";

$template = str_replace ( "<tbody>" ,"<tbody>".$head, $template);

$domain = "webinside.ru";

$from = "no-reply@". $domain;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: ". $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$success = mail("z_evgen@mail.ru", $subject, $template, $headers);
echo ($success) ? 'true' : 'false';

//	Telegram Sender

	//Array of request parameters
$params = array(
'api_token'  => "",
'msg' =>
"Новый заказ:

Имя: $posName
Телефон: $posPhone
Заказано: $subject

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

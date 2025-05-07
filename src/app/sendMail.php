<?php
header("Access-Control-Allow-Origin: https://www.borna-kitak.de");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: https://www.borna-kitak.de");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: https://www.borna-kitak.de");

        $json = file_get_contents('php://input'); // Payload from input
        $params = json_decode($json); // Parse the JSON into an object

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'kitak.borna@gmail.com'; // Recipient email address
        $subject = "Contact From <$email>";
        $message = "From: $name <br> $message";

        // Email headers
        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers)); // Send the email
        break;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>

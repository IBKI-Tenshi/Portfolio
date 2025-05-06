<?php
// CORS-Header setzen
header("Access-Control-Allow-Origin: https://www.borna-kitak.de");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Handle Preflight-Anfragen (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // JSON-Daten aus dem Body lesen
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    $email = $params->email ?? '';
    $name = $params->name ?? '';
    $messageContent = $params->message ?? '';

    $recipient = 'kitak.borna@gmail.com';
    $subject = "Contact From <$email>";
    $message = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($messageContent));

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: noreply@mywebsite.com';

    mail($recipient, $subject, $message, implode("\r\n", $headers));

    echo json_encode(["status" => "success"]);
    exit;
}

// Für alle anderen Methoden
http_response_code(405);
header("Allow: POST, OPTIONS");
exit;
?>

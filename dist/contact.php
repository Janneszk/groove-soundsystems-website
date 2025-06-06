<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" &&
    isset($_POST["name"], $_POST["email"], $_POST["nachricht"], $_POST["subject"], $_POST["agreement"])
) {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject_input = htmlspecialchars($_POST["subject"]);
    $nachricht = htmlspecialchars($_POST["nachricht"]);

    $to = "janneszk1@gmail.com";
    $subject = "Neue Nachricht von $name: $subject_input";
    $message = "Name: $name\nE-Mail: $email\nNachricht:\n$nachricht";

    $headers = "From: website@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Nachricht wurde erfolgreich gesendet!";
    } else {
        echo "Beim Senden der Nachricht ist ein Fehler aufgetreten.";
    }
}
?>

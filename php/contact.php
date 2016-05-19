<?php
    $to = "thierry.marais@amserv-it.fr";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "De: $from";
    $subject = "Vous avez reçu un mail de votre site web";
    $fields = array();
    $fields{"name"} = "Prénom";
    $fields{"surname"} = "Nom";
    $fields{"email"} = "Email";
    $fields{"phone"} = "Téléphone";
    $fields{"city"} = "Ville";
    $fields{"message"} = "Message";
    $body = "Voici le message:\n\n"; foreach($fields as $a => $b){ $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
	mail($to, $subject, $body, $headers)
?>

<?php
$email = $_POST['email'];
$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];

function filter_email_header($form_field) {  
    return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
    }

    $email  = filter_email_header($email);


    $headers = "From: $email_addressn";
$sent = mail('jesuscano@yahoo.es', 'Feedback Form Submission', $mensaje, $headers);


if ($sent) {

    ?><html>
    <head>
    <title>Thank You</title>
    </head>
    <body>
    <h1>Thank You</h1>
    <p>Thank you for your feedback.</p>
    </body>
    </html>
    
    <?php
    
    } else {
    ?><html>
    <head>
    <title>Something went wrong</title>
    </head>
    <body>
    <h1>Something went wrong</h1>
    <p>We could not send your feedback. Please try again.</p>
    </body>
    </html>
    <?php
    }
    ?>
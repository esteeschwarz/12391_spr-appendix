<?php

$myfile = fopen("data1006es01.csv", "a+") or die("FUCT! I forgot to tie my shoes!");
$txt = $_POST["data"]; //request-  mit q funktioniert, duck wird geschrieben
fwrite($myfile, $txt);
//sleep(1);

fclose($myfile);


?>
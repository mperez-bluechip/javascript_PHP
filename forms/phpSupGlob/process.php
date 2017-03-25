<?php

  // var_dump($_POST);

  $favmusic = $_REQUEST['favoritemusic'];

  foreach($favmusic as $key => $value){
    echo $favmusic[$key], "<br />";
  }

?>

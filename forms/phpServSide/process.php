<?php

$myname = $_REQUEST['myname'];
$mypassword = $_REQUEST['mypassword'];
$mypasswordconf = $_REQUEST['mypasswordconf'];

if(empty($myname)) :
	echo "<div>Sorry, your name is a required field</div>";
endif;

if(strlen($mypassword) <	 6) :
	echo "<div>Sorry, your password has to be at least 8 characters long</div>";
endif;

if($mypassword !== $mypasswordconf) :
	echo "<div>Sorry, passwords must match</div>";
endif;

if( !preg_match("/[A-Za-z]+, [A-Za-z]+/", $myname)) :
	echo "<div>Sorry, the name must be in the format: Last, First</div>";
endif;

?>

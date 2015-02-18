<?php
	if(count($_FILES) > 0)
	{
		move_uploaded_file($_FILES['img']['tmp_name'],"./".$_FILES['img']['name']);
	}	
?>

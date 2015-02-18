<?php
	if(count($_FILES) > 0)
	{
		move_uploaded_file($_FILES['img']['tmp_name'],"uploads/".$_FILES['img']['name']);
	}	
?>

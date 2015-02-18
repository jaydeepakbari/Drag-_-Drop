function uploader(place) 
{
		
	this.drop = function(event) {
		
		event.preventDefault();
	 	var dt = event.dataTransfer;
	 	var files = dt.files;
		var formdata=new FormData();
		
	 	for (var i = 0; i<files.length; i++) {
			var file = files[i];
			formdata.append("img",file);
			$.ajax({
				url:"uploader.php",
				processData: false,
				contentType: false,
				data:formdata,
				type: "POST",	
				success:function(){
					$("#drop").css("background","pink");
				}
			});
	 	}
		
	}
	this.dragleave = function(event){
		console.log("dragleave");
		$(this).css('background-color', 'pink');
	}
	this.dragenter = function(event){
		console.log("dragenter");
		$(this).css('background-color', 'pink');
	}
	this.dragover = function(event){
		console.log("dragover");
		$(this).css('background-color', 'red');
	}
	this.dragend = function(event){
		console.log("dragend");
		$(this).css('background-color', 'pink');
	}
	this.dragstart = function(event){
		console.log("dragstart");
		$(this).css('background-color', 'pink');
	}

	this.uploadPlace =  document.getElementById(place);
	this.uploadPlace.addEventListener("dragover", function(event) {
		event.stopPropagation(); 
		event.preventDefault();
	}, true);
	this.uploadPlace.addEventListener("drop", this.drop, false); 	
	this.uploadPlace.addEventListener("dragleave", this.dragleave, false); 	
	this.uploadPlace.addEventListener("dragenter", this.dragenter, false); 	
	this.uploadPlace.addEventListener("dragover", this.dragover, false); 	
	this.uploadPlace.addEventListener("dragend", this.dragend, false); 	
	this.uploadPlace.addEventListener("dragstart", this.dragstart, false); 	
}

$(document).ready(function(){
	uploader("drop");	
});

	

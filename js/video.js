(function(){

	var video = document.getElementById('video');
	var vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.getUserMedia ||
	navigator.webkitGetUserMedia || 
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia;

	// Capture video
	navigator.getMedia ({
		video: true,
		audio: true
	},function(stream){
		try{
			video.srcObject = stream;
		} catch (error){
			video.src = vendorUrl.createObjectURL(stream);
		}
		video.play();
	},function(error){
		//An error ocurred
		console.log(error.code);
	});

})();

	
$(document).ready(function() {

	$(window).scroll(function() {

	  	if($(document).scrollTop() > 70) {
	    	$("#nav").addClass("shrink");
	    }

    else {

	    $("#nav").removeClass("shrink");
    }

  });

});



				// Way 2

	// $(window).on('scroll',function(){
	// 	if($(window).scrollTop() > 50){
	// 		$('#nav').addClass('shrink');
	// 	}else{
	// 		$('#nav').removeClass('shrink');
	// 	}
	
	// 	});
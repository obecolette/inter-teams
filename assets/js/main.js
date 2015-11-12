$(document).on("ready", function(e) {
	$(".razors figcaption").hide();
	$(".razors .icon-dots").click(function() {
		
		var $razor = $(this).parents(".razors");
		var $razorText = $razor.find("figcaption");

		if( $razor.hasClass("back") ){
			$razor.removeClass("back");
			$razorText.fadeOut();
		} else { 
			$razor.addClass("back");
			$razorText.fadeIn();
		};
	});


});




// $(document).on("ready", function(e) {
// ​
// 	$(".razors figcaption").hide();
// ​
// 	$(".razors .icon-dots").click(function() {
// 		$(this).parents(".razors").toggleClass("back").find("figcaption").fadeToggle();
// 	});
// ​
// ​
// })




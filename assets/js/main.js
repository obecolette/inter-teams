console.log("ready2go!")

$(document).on("ready", function(e) {
	// $(".card").flip('toggle');
	// $(".card").flip({
	// 	axis: 'x',
	// 	speed: 400
	// });
	$(".icon-dots").click(function() {
	    var thisCaption = $(".icon-dots").index($(this));

	    $(".caption").eq(thisCaption).toggle("slow",function() {});

	});

	$('.content').click(function(){
		$(this).toggleClass('expand');

	});




	// $(".").hide();
	console.log("hide");

	// $(".icon-dots").on('click', function(){
		// $(".card").flip('toggle');
		// $(".card").flip({
		// 	axis: 'x',
		// 	speed: 400
		// });


		e.preventDefault();
		var thisCaption = $(".icon-dots").index($(this));
		console.log(thisCaption);

		$(".caption").eq(thisCaption).toggle();
		$(".caption").hide();
});
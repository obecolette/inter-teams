console.log("ready2go!")

$(document).on("ready", function(e) {

  $(".caption").hide();

  $('.content').click(function(){
  	$(this).toggleClass('expand');

  });

  $(".icon-dots").click(function() {
      var thisCaption = $(".icon-dots").index($(this));

      $(".caption").hide("fast",function() {});
      $(".caption").eq(thisCaption).show("fast",function() {});
      $("#gallery").find("figure").removeClass("back");
      $("figure").eq(thisCaption).addClass("back");
  });


})
jQuery(function ($) {

	$(".img_prof_picture")
		.mouseenter(
			function(){
				$(".prof_fore_ground").show();
			});

	$(".prof_fore_ground")
		.mouseleave(
			function(){
				$(this).hide();
			});

});


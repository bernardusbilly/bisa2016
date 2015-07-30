$(window).ready(function() {
	$('.home-title').hide(); // Fade in current section title
	$('.home-title').fadeIn();
	window.setTimeout(function() {
		console.log("hidden-title: animated fadeInLeft");
		$('.hidden-title').addClass("animated fadeInLeft");
		$('.hidden-title').show();
	}, 1500);

	// information per officer

	$('.info-officer-group').hide();
	$('.info-officer-photo').hover(function() {
		var name = $(this).children().attr('data-trigger');
		console.log(name + " is hovered.");
		$('.'+name).show();
		$('.'+name).removeClass("animated fadeOutRight");
		$('.'+name).addClass("animated fadeInLeft");
		$(this).removeClass("photo-bw");
	}, function() {
		// leave hover
		var name = $(this).children().attr('data-trigger');
		console.log(name + " is hovered.");
		$('.'+name).removeClass("animated fadeInLeft");
		$('.'+name).addClass("animated fadeOutRight");
		$(this).addClass("photo-bw");
	});
});
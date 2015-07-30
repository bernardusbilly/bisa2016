$(window).ready(function() {
	$('.info-officer-group').hide();
	$('.info-officer-photo').hover(function() {
		var name = $(this).children().attr('data-trigger');
		console.log(name + " is hovered.");
		$('.'+name).show();
		$('.'+name).removeClass("animated fadeOut");
		$('.'+name).addClass("animated fadeIn");
		$(this).removeClass("photo-bw");
	}, function() {
		// leave hover
		var name = $(this).children().attr('data-trigger');
		console.log(name + " is hovered.");
		$('.'+name).removeClass("animated fadeIn");
		$('.'+name).addClass("animated fadeOut");
		$(this).addClass("photo-bw");
	});
});
$(window).ready(function() {
	$('.hidden-title').hide();
	$('.title').hover(function() {
		$('.hidden-title').fadeIn();
	}, function() {
		$('.hidden-title').fadeOut();
	});
});
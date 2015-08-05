$(window).ready(function() {

	// animate in any current section

	$('.section-text').hide(); // Fade in current section title
	$('.section-text').fadeIn();
	window.setTimeout(function() {
		$('.hidden-title').addClass("animated fadeInLeft");
		$('.hidden-title').show();
	}, 1500);

	// set the height for a particular section
	var winHeight = $(window).height();
	var timer;
	var marginPhotoHeight = $('.photo-officer').height()/2;
	var marginAboutText = $('.about-text').height()/2;

	$('.about-text-wrapper').css("height", winHeight+"px");
	$('.about-text-wrapper').css("margin-top", -marginAboutText+"px");
	$('.info-officer-photo').css("height", winHeight+"px");
	$('.info-officer-photo').css("margin-top", -marginPhotoHeight+"px");

	$(window).resize(function() {
		winHeight = $(window).height();
		var marginPhotoHeight = $('.photo-officer').height()/2;
		clearTimeout(timer);
	    timer = setTimeout(function() {
	        $('.info-officer-photo').css("height", winHeight+"px");
	        $('.info-officer-photo').css("margin-top", -marginPhotoHeight);
	    },200);
	});

	// information per officer

	$('.info-officer-group').hide();
	$('.info-officer-photo').hover(function() {
		var name = $(this).children().attr('data-trigger');
		/*console.log($(this).children().next());*/
		/*$(this).children().next().css("font-size", "40px");*/
		$('.'+name).show();
		$('.'+name+ " .info-officer-name").removeClass("animated fadeOutRight");
		$('.'+name+ " .info-officer-name").addClass("animated fadeInLeft");
		$('.'+name+ " .info-officer-pos").removeClass("animated fadeOutDown");
		$('.'+name+ " .info-officer-pos").addClass("animated fadeInUp");
		$(this).children().removeClass("photo-bw");
	}, function() {
		// leave hover
		var name = $(this).children().attr('data-trigger');
		$('.'+name+ " .info-officer-name").removeClass("animated fadeInLeft");
		$('.'+name+ " .info-officer-name").addClass("animated fadeOutRight");
		$('.'+name+ " .info-officer-pos").removeClass("animated fadeInUp");
		$('.'+name+ " .info-officer-pos").addClass("animated fadeOutDown");
		$(this).children().addClass("photo-bw");
	});
});
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
	console.log(marginPhotoHeight);
	var marginAboutText = $('.about-text').height() * 2/3;

	$('.about-text-wrapper').css("height", winHeight+"px");
	$('.info-officer-photo').css("height", winHeight+"px");
	clearTimeout(timer);
	timer = setTimeout(function() {
        $('.photo-officer').css("margin-top", -marginPhotoHeight+"px");
        $('.about-text').css("margin-top", -marginAboutText+"px");
    }, 200);

	$(window).resize(function() {
		winHeight = $(window).height();
		marginPhotoHeight = $('.photo-officer').height()/2;
		marginAboutText = $('.about-text').height() * 2/3;
		clearTimeout(timer);
	    timer = setTimeout(function() {
	    	$('.about-text-wrapper').css("height", winHeight+"px");
	    	$('.info-officer-photo').css("height", winHeight+"px");
	        $('.photo-officer').css("margin-top", -marginPhotoHeight+"px");
	        $('.about-text').css("margin-top", -marginAboutText+"px");
	    }, 200);
	});

	// information per officer

	$('.info-officer-group').hide();
	$('.info-officer-photo').hover(function() {
		var name = $(this).children().attr('data-trigger');
		// enter hover
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

	// gallery section
	$('.gallery-title').hide()
	$('.gallery-title-wrapper').hover(function() {
		// enter hover
		$('.gallery-title').show();
		$('.gallery-title').removeClass("animated bounceOut");
		$('.gallery-title').addClass("animated bounceIn");
	}, function() {
		// leave hover
		$('.gallery-title').removeClass("animated bounceIn");
		$('.gallery-title').addClass("animated bounceOut");
	});
});
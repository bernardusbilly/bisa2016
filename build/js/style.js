$(window).load(function() {
	$('#load-page').css("opacity", "0");
	$('#load-page').css("z-index", "-100");
});

$(document).ready(function() {

	var ddplus = Dolby.checkDDPlus();
	var audio = new Audio('build/audio/indonesiaraya.mp3');
	if( ddplus === true ){
	    // Dolby Digital Plus supported
	    // code dependent on Dolby Digital Plus here
	    console.log("Browser is supported for Dolby Audio Enhancement.");
	    audio = new Audio('build/audio/indonesiaraya_Dolby.mp4');
	} else {
		console.log("Browser is not supported for Dolby Audio Enhancement.");
	}

	$('.audio-controller').click(function() {
		audio.volume = 0.4;
		if (audio.paused == true) {
			audio.play();
			$('.audio-controller').html("<span class='fa fa-pause'></span>");
		} else {
			audio.pause();
			$('.audio-controller').html("<span class='fa fa-play'></span>");
		}
	});
	
	$('.hidden-title').hide();
	$('.about-text').hide();
	$('.officer-title').hide();
	$('.gallery-title').hide();
	$('.contact-title').hide();

    $('#fullpage').fullpage({
    	//Navigation
        menu: false,
        lockAnchors: true,
        anchors:['home', 'about', 'officer', 'gallery', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopHorizontal: false,

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(index == 1){
            	$('.hidden-title').show();
				$('.hidden-title').addClass("animated fadeInLeft");
			} if(index == 2){
                $('.about-text').show();
				$('.about-text').addClass("animated fadeIn");
            } if(index == 3){
                $('.officer-title').show();
				$('.officer-title').addClass("animated bounceInDown");
            } if(index == 4){
                $('.gallery-title').show();
				$('.gallery-title').addClass("animated bounceIn");
            } if(index == 5){
                $('.contact-title').show();
				$('.contact-title').addClass("animated pulse");
            }
        },

        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            if(index == 1){
            	$('.hidden-title').hide();
				$('.hidden-title').removeClass("animated fadeInLeft");
			} if(index == 2){
            	$('.about-text').hide();
				$('.about-text').removeClass("animated fadeIn");
            } if(index == 3){
                $('.officer-title').hide();
				$('.officer-title').removeClass("animated bounceInDown");
            } if(index == 4){
                $('.gallery-title').hide();
				$('.gallery-title').removeClass("animated bounceIn");
            } if(index == 5){
                $('.contact-title').hide();
				$('.contact-title').removeClass("animated pulse");
            }
        }
    });
});

$(window).load(function() {

	// information per officer

	$('.info-officer-group').hide();
	$('.info-officer-socmed').hide()
	$('.info-officer-photo').hover(function() {
		var name = $(this).children().attr('data-trigger');
		// enter hover
		$('.'+name).show();
		$('.'+name+ " .info-officer-name").removeClass("animated fadeOutRight");
		$('.'+name+ " .info-officer-name").addClass("animated fadeInLeft");
		$('.'+name+ " .info-officer-pos").removeClass("animated fadeOut");
		$('.'+name+ " .info-officer-pos").addClass("animated fadeInUp");
		$('.'+name+ " .info-officer-others").removeClass("animated fadeOut");
		$('.'+name+ " .info-officer-others").addClass("animated fadeInUp");
		$(this).children('.info-officer-socmed').show();
		$(this).children('.info-officer-socmed').removeClass("animated fadeOut");
		$(this).children('.info-officer-socmed').addClass("animated fadeIn");
		$(this).children().removeClass("photo-bw");
	}, function() {
		// leave hover
		var name = $(this).children().attr('data-trigger');
		$('.'+name+ " .info-officer-name").removeClass("animated fadeInLeft");
		$('.'+name+ " .info-officer-name").addClass("animated fadeOutRight");
		$('.'+name+ " .info-officer-pos").removeClass("animated fadeInUp");
		$('.'+name+ " .info-officer-pos").addClass("animated fadeOut");
		$('.'+name+ " .info-officer-others").removeClass("animated fadeInUp");
		$('.'+name+ " .info-officer-others").addClass("animated fadeOut");
		$(this).children('.info-officer-socmed').removeClass("animated fadeIn");
		$(this).children('.info-officer-socmed').addClass("animated fadeOut");
		$(this).children().addClass("photo-bw");
	});

});
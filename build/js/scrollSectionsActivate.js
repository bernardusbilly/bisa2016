$(function() {	
	$('section.scrollsections .title .section-text').hide(); // Hide all titles
	$('.hidden-title').hide();

	$('section.scrollsections').scrollSections({
		alwaysStartWithFirstSection : false,
		scrollMax: 1,
		speed: 600,
		
		before: function($currentSection, $nextSection){
			_initFuturSection($nextSection);
		},
		
		after: function($currentSection, $previousSection){
			_initNewSection($currentSection, $previousSection);
		}
	});
	function _initNewSection($section, $prevSection){
		// Do some stuff each time this new section ends animating
		
		// Only if there is a previous section (its null on first scroll)
		if($prevSection){
			$('.section-text', $prevSection).hide(); // Hide old section title
			$('.hidden-title', $prevSection).hide();
		}
		$('.section-text', $section).fadeIn(); // Fade in current section title
		window.setTimeout(function() {
			console.log("hidden-title: animated fadeInLeft");
			$('.hidden-title').addClass("animated fadeInLeft");
			$('.hidden-title').show();
		}, 1500);
		
		// Do some stuffs only on first init
		if( !$section.data('isInit') ){
			// Create slider for example
			// $('.selector', $section).slider();
			// Singleton
			$section.data('isInit', true);
		}
	}
	function _initFuturSection($section){
		// Do some stuff each time before this section appears
		$('.section-text', $section).hide();
	}
});
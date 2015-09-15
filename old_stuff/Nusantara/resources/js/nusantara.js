var tempSound = true;

function turnOffSound() {
  player.setVolume(0);
  $('#btn-sound').css("visibility", "hidden");
  $('#btn-mute').css("visibility", "visible");
}

function turnOnSound() {
  player.setVolume(100);
  $('#btn-mute').css("visibility", "hidden");
  $('#btn-sound').css("visibility", "visible");
}

function pauseBGVideo() {
  player.pauseVideo();
}

function playBGVideo() {
  player.playVideo();
}

/* Start js*/

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#btn-sound').click(function() {
  turnOffSound();
  tempSound = false;
});

$('#btn-mute').click(function() {
  turnOnSound();
  tempSound = true;
});

$('.stock-photo-expand').click(function(){
  var toggle = $(this).attr("data-toggle");
  console.log(toggle);
  $('#' + toggle).css("display", "block");
  pauseBGVideo();
});

$('.btn-close').click(function() {
  $(this).parent().parent().css("display","none");
  if (tempSound == true) {
    playBGVideo()
  }
});

$('.trigger-hidden-profile').click(function() {
  $('.hidden-profile').css("display", "block");
});
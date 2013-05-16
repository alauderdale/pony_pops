$(document).ready(function() {
  $('#full-width-slider').royalSlider({
    loop: true,
    keyboardNavEnabled: true,
    imageScaleMode: 'none',
    autoScaleSlider: false, 
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    autoPlay: false,
    transitionType:'move',
    globalCaption: true
  });
});
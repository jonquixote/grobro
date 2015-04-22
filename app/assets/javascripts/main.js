$(document).ready(function(){

  $('.main-navigation').singlePageNav({
      offset: $('.navbar-default').outerHeight() - 3,
      filter: ':not(.external)',
      speed: 1000,
      currentClass: 'current',
      easing: 'swing',
      updateHash: true,
      beforeStart: function() {
      },
      onComplete: function() {
      }
  });

  $('.navbar-default').waypoint('sticky', {
    direction: 'down',
    stuckClass: 'stuck animated bounceInDown',
  });

  $('.special-heading').waypoint({
    offset  : '65%',
    handler : function() {
      var $this = $(this);
      $this.addClass('animated fadeIn');

      if($this.is('.three')){
        setTimeout(function(){
            $this.addClass('extraColor');
        }, 1200);
      }
    }
  });


  // Gallery

  $(".owl-slider").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,3],
      itemsTablet: [700,2],
      itemsMobile : [400, 1],
      afterAction : afterAction
  });

  function updateResult(element,value, visible){
    if(visible.length > 2){
      $(element).addClass('opac');
      for(var i=1; i < visible.length - 1; i++){
        $(element).eq(value+i).removeClass('opac');
      }
    }else {
      $(element).removeClass('opac');
    }
  }

  function afterAction(){
    updateResult(".owl-item", this.owl.currentItem, this.owl.visibleItems);
  }

  // Iphone Slider

  $('.carousel').carousel({
    interval: 3000
  });

  $('.iphone-carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getActiveIndex();
    $('.feature-detail').removeClass('active');
    $(".feature-detail[data-slide-to='" + currentIndex + "']").addClass('active');
  });




});

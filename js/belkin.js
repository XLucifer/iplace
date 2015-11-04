$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".lego").offset().top;
		var e2 = $(".mais-produtos").offset().top;
  
		

        if($(window).scrollTop() + ($(window).height()) > e1 && !$('.lego').hasClass('anim') ){
            $('.lego').addClass('anim');
              TweenMax.fromTo($('h3',".lego"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              TweenMax.fromTo($('.box-lego',".lego"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              TweenMax.fromTo($('.box-video',".lego"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
        }    
        if($(window).scrollTop() + ($(window).height()) > e2 && !$('.mais-produtos').hasClass('anim') ){
            $('.mais-produtos').addClass('anim');
              TweenMax.fromTo($('.container',".mais-produtos"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
              
        }    
	});
}

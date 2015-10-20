$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".sobre").offset().top;
		var e2 = $(".toda-linha").offset().top;
		var e3 = $(".places").offset().top;
		var e4 = $(".tips").offset().top;
		

		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.sobre').hasClass('anim') ){
           $('.sobre').addClass('anim');
            TweenMax.fromTo($('.sobre p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('.toda-linha').hasClass('anim') ){
           $('.toda-linha').addClass('anim');
            TweenMax.fromTo($('.toda-linha p'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e3 && !$('.places').hasClass('anim') ){
           $('.places').addClass('anim');
            TweenMax.fromTo($('.places ul'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e4 && !$('.tips').hasClass('anim') ){
           $('.tips').addClass('anim');
            TweenMax.fromTo($('.tips figure'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.tips h3'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.tips hr'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.tips div'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        
	});
}

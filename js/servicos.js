// sobre
$(document).ready(function() {
	tween();	
});






function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".container-servicos").offset().top;
    var e2 = $(".intro").offset().top;
    var e3 = $(".art-tecnica").offset().top;
    var e4 = $(".container-seguro").offset().top;
    var e5 = $(".box-expressa").offset().top;
    var e6 = $(".box-case").offset().top;
    var e7 = $(".box-upgrade").offset().top;
		

		if($(window).scrollTop() + ($(window).height()) > e1 && !$('.container-servicos').hasClass('anim') ){
       $('.container-servicos').addClass('anim');
        TweenMax.fromTo($('p',".container-servicos"), .9, {y: 30, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }		

    if($(window).scrollTop() + ($(window).height()) > e2 && !$('.intro').hasClass('anim') ){
       $('.intro').addClass('anim');
        TweenMax.fromTo($('h2',".intro"), .9, {y: 10, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

    if($(window).scrollTop() + ($(window).height()) > e3 && !$('.art-tecnica').hasClass('anim') ){
       $('.art-tecnica').addClass('anim');
        TweenMax.fromTo($('.box-tecnica',".art-tecnica"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

    if($(window).scrollTop() + ($(window).height()) > e4 && !$('.container-seguro').hasClass('anim') ){
       $('.container-seguro').addClass('anim');
        TweenMax.fromTo($('.head-seguro',".container-seguro"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

    if($(window).scrollTop() + ($(window).height()) > e5 && !$('.box-expressa').hasClass('anim') ){
       $('.box-expressa').addClass('anim');
        TweenMax.fromTo($('.container-expressa',".box-expressa"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

    if($(window).scrollTop() + ($(window).height()) > e6 && !$('.box-case').hasClass('anim') ){
       $('.box-case').addClass('anim');
        TweenMax.fromTo($('header',".box-case"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

    if($(window).scrollTop() + ($(window).height()) > e6 && !$('.box-upgrade').hasClass('anim') ){
       $('.box-upgrade').addClass('anim');
        TweenMax.fromTo($('div',".box-upgrade"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    } 

	});
}
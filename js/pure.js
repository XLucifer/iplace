$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".cabecalho").offset().top;
		var e2 = $(".conheca").offset().top;
    var e3 = $(".duraltek").offset().top;
    var e4 = $(".modelos").offset().top;
		

        if($(window).scrollTop() + ($(window).height()) > e1 && !$('.cabecalho').hasClass('anim') ){
            $('.cabecalho').addClass('anim');
              TweenMax.fromTo($('h1',".cabecalho"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }    
        if($(window).scrollTop() + ($(window).height()) > e2 && !$('.conheca').hasClass('anim') ){
            $('.conheca').addClass('anim');
              TweenMax.fromTo($('.flex-video',".conheca"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }  
        if($(window).scrollTop() + ($(window).height()) > e3 && !$('.duraltek').hasClass('anim') ){
            $('.duraltek').addClass('anim');
              TweenMax.fromTo($('h2',".duraltek"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }  
        if($(window).scrollTop() + ($(window).height()) > e4 && !$('.modelos').hasClass('anim') ){
            $('.modelos').addClass('anim');
              TweenMax.fromTo($('ul',".modelos"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        } 
	});
}

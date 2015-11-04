$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".cabecalho").offset().top;
		var e2 = $(".itens").offset().top;
    var e3 = $(".capas").offset().top;
    var e4 = $(".box-resistente").offset().top;
		

        if($(window).scrollTop() + ($(window).height()) > e1 && !$('.cabecalho').hasClass('anim') ){
            $('.cabecalho').addClass('anim');
              TweenMax.fromTo($('article',".cabecalho"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
        }    
        if($(window).scrollTop() + ($(window).height()) > e2 && !$('.itens').hasClass('anim') ){
            $('.itens').addClass('anim');
              TweenMax.fromTo($('ul',".itens"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              TweenMax.fromTo($('.video',".itens"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
        }    
        if($(window).scrollTop() + ($(window).height()) > e3 && !$('.capas').hasClass('anim') ){
            $('.capas').addClass('anim');
              TweenMax.fromTo($('figure',".capas"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
        }
        if($(window).scrollTop() + ($(window).height()) > e4 && !$('.box-resistente').hasClass('anim') ){
            $('.box-resistente').addClass('anim');
              TweenMax.fromTo($('article',".box-resistente"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
              
        }
	});
}

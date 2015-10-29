$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $("#cabecalho").offset().top;
		var e2 = $(".acessorios").offset().top;
    var e3 = $(".banners").offset().top;
    var e4 = $(".container-portable").offset().top;
    var e5 = $(".produtos").offset().top;
		

		if($(window).scrollTop() + ($(window).height()) > e1 && !$('#cabecalho').hasClass('anim') ){
        $('#cabecalho').addClass('anim');
          TweenMax.fromTo($('div:not(".desk")',"#cabecalho"), .9, {y: 20, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }

    if($(window).scrollTop() + ($(window).height()) > e2 && !$('.acessorios').hasClass('anim') ){
        $('.acessorios').addClass('anim');
        TweenMax.fromTo($('ul',".acessorios"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }
		if($(window).scrollTop() + ($(window).height()) > e3 && !$('.banners').hasClass('anim') ){
        $('.banners').addClass('anim');
        TweenMax.fromTo($('div',".banners"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }
    if($(window).scrollTop() + ($(window).height()) > e4 && !$('.container-portable').hasClass('anim') ){
        $('.container-portable').addClass('anim');
        TweenMax.fromTo($('figure',".container-portable"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }

     if($(window).scrollTop() + ($(window).height()) > e5 && !$('.produtos').hasClass('anim') ){
        $('.produtos').addClass('anim');
        TweenMax.fromTo($('h3',".produtos"), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        TweenMax.fromTo($('ul',".produtos"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
    }
        
	});
}

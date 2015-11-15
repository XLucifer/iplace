$(document).ready(function(){
	tween();

});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $("#cabecalho").offset().top;
		var e2 = $(".conteudo").offset().top;
    var e3 = $(".novo").offset().top;
    var e4 = $(".consultores").offset().top;
		

        if($(window).scrollTop() + ($(window).height()) > e1 && !$('#cabecalho').hasClass('anim') ){
            $('#cabecalho').addClass('anim');
              TweenMax.fromTo($('div',"#cabecalho"), .9, {y: 20, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }    
        if($(window).scrollTop() + ($(window).height()) > e2 && !$('.conteudo').hasClass('anim') ){
            $('.conteudo').addClass('anim');
              TweenMax.fromTo($('.produtos',".conteudo"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        } 
        if($(window).scrollTop() + ($(window).height()) > e3 && !$('.novo').hasClass('anim') ){
            $('.novo').addClass('anim');
              TweenMax.fromTo($('div',".novo"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }    
        if($(window).scrollTop() + ($(window).height()) > e4 && !$('.consultores').hasClass('anim') ){
            $('.consultores').addClass('anim');
              TweenMax.fromTo($('div',".consultores"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        } 
	});
}

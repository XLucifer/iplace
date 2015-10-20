$(document).ready(function(){
	tween();

	
	
	


	// navegacao pelo menu
	$(document).on('click', 'nav a', function() {
		$(".menu-principal li").removeClass("ativo");
		$(this).parent("li").addClass("ativo");
		getnav = $(this).attr("href");
		$("html,body").animate({
			scrollTop: $(getnav).offset().top 
		}, 900);	
		
		return false;
	});	
});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".box-beneficios").offset().top;
		var e2 = $(".descubra").offset().top;
		var e3 = $("#danos-quebras").offset().top;
		var e4 = $(".article-beneficios").offset().top;
		var e5 = $(".box-acionar").offset().top;
		var e6 = $(".box-contrate").offset().top;

		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.box-beneficios').hasClass('anim') ){
           $('.box-beneficios').addClass('anim');
            TweenMax.fromTo($('.topo-beneficios'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('.descubra').hasClass('anim') ){
           $('.descubra').addClass('anim');
            TweenMax.fromTo($('.descubra p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e3 && !$('#danos-quebras').hasClass('anim') ){
           $('#danos-quebras').addClass('anim');
            TweenMax.fromTo($('#danos-quebras div'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e4 && !$('.article-beneficios').hasClass('anim') ){
           $('.article-beneficios').addClass('anim');
            TweenMax.fromTo($('.article-beneficios div'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e5 && !$('.box-acionar').hasClass('anim') ){
           $('.box-acionar').addClass('anim');
            TweenMax.fromTo($('.box-acionar h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.box-acionar ol'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e6 && !$('.box-contrate').hasClass('anim') ){
           $('.box-contrate').addClass('anim');
            TweenMax.fromTo($('.box-contrate h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.box-contrate ul'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
	});
}
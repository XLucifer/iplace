// sobre
$(document).ready(function() {
	tween();	

    // navegacao pelo menu
    $(document).on('click', 'nav a', function() {
      $(".menu-principal li").removeClass("ativo");
      $(this).parent("li").addClass("ativo");
      getnav = $(this).attr("href");
      $("html,body").animate({
        scrollTop: $(getnav).offset().top -100 
      }, 900);  
      
      return false;
    }); 
});






function tween(){
	$(window).on('scroll', function(){
		var e1 = $('#toda-linha').offset().top;
		var e2 = $('#mapa').offset().top;
		var e3 = $("#vendas-corporativas").offset().top;
		var e4 = $(".vitrine").offset().top;
		var e5 = $("#educacional").offset().top;
    var e6 = $('.modelos').offset().top;

		if($(window).scrollTop() + ($(window).height()) > e1 && !$('#toda-linha').hasClass('anim') ){
           $('#toda-linha').addClass('anim');
            TweenMax.fromTo($('.toda-linha h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.toda-linha hr'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.toda-linha .produto-destaque'), .93, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }

		    if($(window).scrollTop() + ($(window).height()) > e2 && !$('#mapa').hasClass('anim') ){
           $('#mapa').addClass('anim');
            TweenMax.fromTo($('.todo-brasil h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.todo-brasil p'), .93, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
            TweenMax.fromTo($('.todo-brasil .btn'), .95, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }

        if($(window).scrollTop() + ($(window).height()) > e3 && !$('#vendas-corporativas').hasClass('anim') ){
           $('#vendas-corporativas').addClass('anim');
            TweenMax.fromTo($('.box-corporativo h4,.box-corporativo p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }

        if($(window).scrollTop() + ($(window).height()) > e4 && !$('.vitrine').hasClass('anim') ){
           $('.vitrine').addClass('anim');
            TweenMax.fromTo($('.vitrine ul'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
       	
       	if($(window).scrollTop() + ($(window).height()) > e5 && !$('#educacional').hasClass('anim') ){
           $('#educacional').addClass('anim');
            TweenMax.fromTo($('.box-educacional'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height()) > e6 && !$('.modelos').hasClass('anim') ){
           $('.modelos').addClass('anim');
            TweenMax.fromTo($('.modelos h3'), .9, {y: 90, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.modelos .box-desktop'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.modelos .box-mobile'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }
	});
}
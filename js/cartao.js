$(document).ready(function(){
	barraAtivo();
	tween();
	state();


	


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
		var e1 = $(".box-anuidade").offset().top;
		var e2 = $(".cartao").offset().top;
		var e3 = $(".footer-grey").offset().top;
		var e4 = $("#fatura").offset().top;
		

		if($(window).scrollTop() + ($(window).height()) > e1 && !$('.box-anuidade').hasClass('anim') ){
           $('.box-anuidade').addClass('anim');
            TweenMax.fromTo($("div",'.box-anuidade'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});            
        }
        if($(window).scrollTop() + ($(window).height()) > e2 && !$('.cartao').hasClass('anim') ){
           $('.cartao').addClass('anim');
            TweenMax.fromTo($("h3",'.cartao'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});            
            TweenMax.fromTo($("section",'.cartao'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
		if($(window).scrollTop() + ($(window).height()) > e3 && !$('.footer-grey').hasClass('anim') ){
           $('.footer-grey').addClass('anim');
            TweenMax.fromTo($(".box-condicoes",'.footer-grey'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});            
        }
        if($(window).scrollTop() + ($(window).height()) > e4 && !$('#fatura').hasClass('anim') ){
           $('#fatura').addClass('anim');
            TweenMax.fromTo($(".box-cartoes",'#fatura'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});            
        }
	});
}

// barra ativo
function barraAtivo(){
	$(".barra-ativo").width($(".ativo").width());
}

function state(){
	$("#city").change(function(){
		$("option:selected").each(function(){
			var valor = $(this).val();

			console.log(valor);

			if(valor == "uf"){
				$("dl").show();
			}
			else {
				$("dl").hide();	
				$("dl[rel^='"+(valor)+"']").show();	
			}
			
		});
	});
}
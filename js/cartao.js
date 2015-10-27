$(document).ready(function(){
	barraAtivo();
	//tween();

	


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
		var e1 = $(".box-consorcio").offset().top;
		
		

		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.box-consorcio').hasClass('anim') ){
           $('.box-consorcio').addClass('anim');
            TweenMax.fromTo($('.box-consorcio article'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.intro .iphone'), .5, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
		
        
	});
}

// barra ativo
function barraAtivo(){
	$(".barra-ativo").width($(".ativo").width());
}
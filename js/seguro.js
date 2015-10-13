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
		
	});
}
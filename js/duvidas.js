$(document).ready(function(){

	/********************************
	 faq  animação
	 esconder/ver respostas
	 ********************************/
	
	function toggleChevron(e) {
    	$(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('claro escuro');

        $(e.target).parent(".panel").toggleClass("dark");
        
	}
		$('#accordion').on('hidden.bs.collapse', toggleChevron);
		$('#accordion').on('shown.bs.collapse', toggleChevron);


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

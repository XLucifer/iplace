$(document).ready(function(){
	barraAtivo();
	tween();

	/********************************
	 faq  animação
	 esconder/ver respostas
	 ********************************/
	
	function toggleChevron(e) {
    	$(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('claro escuro');       
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

	$(".panel").hover(
    	function(){
    		$(this).addClass("dark");
    		$(".claro").addClass("escuro").removeClass("claro");
    	},
    	function(){
    		$(this).removeClass("dark");
    		$(".escuro").addClass("claro").removeClass("escuro");
    });
});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $(".box-consorcio").offset().top;
		var e2 = $(".descubra").offset().top;
		var e3 = $(".footer-intro").offset().top;
		var e4 = $("#vantagem").offset().top;
		var e5 = $(".box-vantagem").offset().top;
		var e6 = $("#planos").offset().top;
		

		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.box-consorcio').hasClass('anim') ){
           $('.box-consorcio').addClass('anim');
            TweenMax.fromTo($('.box-consorcio article'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.intro .iphone'), .5, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('.descubra').hasClass('anim') ){
           $('.descubra').addClass('anim');
            TweenMax.fromTo($('.descubra p'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e3 && !$('.footer-intro').hasClass('anim') ){
           $('.footer-intro').addClass('anim');
            TweenMax.fromTo($('.footer-intro .txt-consorcio'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e4 && !$('#vantagem').hasClass('anim') ){
           $('#vantagem').addClass('anim');
            TweenMax.fromTo($('#vantagem h3'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('#vantagem ul'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e5 && !$('.box-vantagem').hasClass('anim') ){
           $('.box-vantagem').addClass('anim');
            TweenMax.fromTo($('.box-vantagem div'), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e6 && !$('#planos').hasClass('anim') ){
           $('#planos').addClass('anim');
            TweenMax.fromTo($("#planos .tt-destaque"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($("#planos hr"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($("#planos p"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($(".mac-planos"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($(".iphone-planos"), .99, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        
	});
}

// barra ativo
function barraAtivo(){
	$(".barra-ativo").width($(".ativo").width());
}
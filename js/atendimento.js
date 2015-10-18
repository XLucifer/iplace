$(document).ready(function() {
	tween();


	$(".tire-duvidas li").each(function(){
		var classe = $(this).attr("id");
		
		$("a",$(this)).click(function(e) {e.preventDefault();})

		$(this).click(function() {
			if($("."+classe).is(":hidden")){
	        	$(".escondido").hide();	        
	        	$("."+classe).show();		        	
	        	$(".tire-duvidas li").removeClass("black");
	        	$("#"+classe).addClass("black");
	        	$(".escondido").css("height","auto");
	        }      
		    else {
		    	$("."+classe).hide();		    	
		    	$("#"+classe).removeClass("black");	        	
		    }
		});		
		
	});





});

function tween(){
	$(window).on('scroll', function(){
		var e1 = $('.container-atendimento').offset().top;	
		var e2 = $(".article-atendimento").offset().top;	
		var e3 = $(".duvidas-frequentes").offset().top;
		//var e4 = $(".duvida-esclarecida").offset().top;

		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.container-atendimento').hasClass('anim') ){
           $('.container-atendimento').addClass('anim');
            TweenMax.fromTo($('.container-atendimento h2'), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.container-atendimento p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('.article-atendimento').hasClass('anim') ){
           $('.article-atendimento').addClass('anim');
            TweenMax.fromTo($('.article-atendimento h3'), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.article-atendimento p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.article-atendimento a'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e3 && !$('.duvidas-frequentes').hasClass('anim') ){
           $('.duvidas-frequentes').addClass('anim');
            TweenMax.fromTo($('.duvidas-frequentes h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.duvidas-frequentes hr'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.duvidas-frequentes .tire-duvidas'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
        // if($(window).scrollTop() + ($(window).height() / 5 + 200) > e4 && !$('.duvida-esclarecida').hasClass('anim') ){
        //    $('.duvida-esclarecida').addClass('anim');
        //     TweenMax.fromTo($('.duvida-esclarecida .esclarecida'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        //     TweenMax.fromTo($('.duvida-esclarecida .atendimento-contato'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        // }
	});	
}
$(document).ready(function() {
	state();
	tween();
});

function state(){
	$("#city").change(function(){
		$("option:selected").each(function(){
			var valor = $(this).val();

			if(valor == "uf"){
				$(".table tr").show();
			}
			else {
				$(".table tr").hide();	
				$(".table tr[rel^='"+(valor)+"']").show();	
			}
			
		});
	});
}

function tween(){
	$(window).on('scroll', function(){
		var e1 = $('.descubra').offset().top;
		var e2 = $('.fique-atento').offset().top;
		

		
		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('.descubra').hasClass('anim') ){
           $('.descubra').addClass('anim');
            TweenMax.fromTo($('#special-box p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('.fique-atento').hasClass('anim') ){
           $('.fique-atento').addClass('anim');
           	TweenMax.fromTo($('.fique-atento h5'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
           	TweenMax.fromTo($('.fique-atento hr'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.fique-atento ul'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
        }
	});
}
$(document).ready(function() {
	lojas();
	tween();
	
});

// exibir lojas
function lojas(){
	$(".list-estados a").each(function() {
	    $(this).click(function(e) {
	        e.preventDefault();
	       var id = $(this).attr("href");
	        
	        
	        if($(id).is(":hidden")){
	        	$(".box-iplaces").slideUp();	        
	        	$(id).slideDown();	        	
	        }      
	        else {
	        	$(id).slideUp();	        	
	        }
	    });
	});

	$(".sel-estados").change(function() {
		$(".sel-estados option:selected").each(function() {
			var valor = $(this).val();

			if(valor == "nada"){
				$(".box-iplaces").slideUp();	        
			}
			if($("#"+valor).is(":hidden")){
	        	$(".box-iplaces").slideUp();	        
	        	$("#"+valor).slideDown();
	        }      
	        else {
	        	$("#"+valor).slideUp();
	        }
		});
	});
}

function tween(){
	$(window).on('scroll', function(){
		var e1 = $('#lojas').offset().top;
		var e2 = $('#mapa').offset().top;
		var e3 = $('#quem-somos').offset().top;
		var e4 = $('.modelos').offset().top;

		// if($(window).scrollTop() + ($(window).height() / 5 + 200) > e1 && !$('#lojas').hasClass('anim') ){
  //          $('#lojas').addClass('anim');
  //           TweenMax.fromTo($('.tt-encontre'), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
  //           TweenMax.fromTo($('.nav-estados'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
  //       }
		if($(window).scrollTop() + ($(window).height() / 5 + 200) > e2 && !$('#mapa').hasClass('anim') ){
           $('#mapa').addClass('anim');
            TweenMax.fromTo($('.todo-brasil h3'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.todo-brasil p'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e3 && !$('#quem-somos').hasClass('anim') ){
           $('#quem-somos').addClass('anim');
           	TweenMax.fromTo($('.box-quem-somos'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('#quem-somos h4'), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('#quem-somos p'), .7, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
            TweenMax.fromTo($('#quem-somos .saiba-mais'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }
        if($(window).scrollTop() + ($(window).height() / 5 + 200) > e4 && !$('.modelos').hasClass('anim') ){
           $('.modelos').addClass('anim');
            TweenMax.fromTo($('.modelos .box-desktop'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.modelos .box-mobile'), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, delay: .10, ease: Quart.easeOut});
        }
	});
}
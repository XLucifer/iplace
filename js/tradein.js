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
		var e1 = $("#inicio").offset().top;
    var e2 = $("#funciona").offset().top;
    var e3 = $("#voce").offset().top;
    var e4 = $("#consulte").offset().top;
		

  		if($(window).scrollTop() + ($(window).height()) > e1 && !$('#inicio').hasClass('anim') ){
           $('#inicio').addClass('anim');
            TweenMax.fromTo($('.box-upgrade'), .6, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
      }
      
      if($(window).scrollTop() + ($(window).height()) > e2 && !$('#funciona').hasClass('anim') ){
           $('#funciona').addClass('anim');
            TweenMax.fromTo($('h3',"#funciona"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('p',"#funciona"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('ul',"#funciona"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
      } 

      if($(window).scrollTop() + ($(window).height()) > e3 && !$('#voce').hasClass('anim') ){
           $('#voce').addClass('anim');
            TweenMax.fromTo($('h3',"#voce"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('figure',"#voce"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('.box-mais-servicos',"#voce"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
            TweenMax.fromTo($('footer',"#voce"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
      } 

      if($(window).scrollTop() + ($(window).height()) > e4 && !$('#consulte').hasClass('anim') ){
           $('#consulte').addClass('anim');
            TweenMax.fromTo($('section',"#consulte"), .9, {y: 80, z: 1, alpha: 0}, {y: 0, z: 0, alpha: 1, ease: Quart.easeOut});
      } 



	});
}
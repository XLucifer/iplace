$(document).ready(function() {
	$(".list-estados a").each(function() {
	    $(this).click(function(e) {
	        e.preventDefault();
	       var id = $(this).attr("href");
	        $(".box-iplaces").fadeOut();
	        $(id).fadeIn();
	    });
	});
});
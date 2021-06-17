$(document).ready(function(){ 
  $(".nav a").click(function(){
    var hash = this.hash;  
    var height = $(window).height() / 4;
    $('html, body').animate({scrollTop: $(hash).offset().top - height}, 'slow'); 
	return false;
  });
});

$(document).ready(function(){ 
  $(".sidenav a").click(function(){
    var hash = this.hash;  
    $('html, body').animate({scrollTop: $(hash).offset().top - 25}, 'slow'); 
	return false;
  });
});
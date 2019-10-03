$(function(){
	$(window).scroll(function(){
	  var winTop = $(window).scrollTop();
	  if(winTop > 100){
		$("body").addClass("header-small");
	  }else{
		$("body").removeClass("header-small");
	  }//if-else
	});//win func.
  });//ready func.
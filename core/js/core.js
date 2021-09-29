$(function(){
	$("#tab_tit li").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active")
		$("#tab_con .con").hide();
		$("#tab_con .con").eq(index).show();
	})
	
	$(window).scroll(function(){
		// console.log($("#banner").height())
		// console.log($(window).scrollTop())
		if($(window).scrollTop()>$("#banner").height()){
			$("header").css("transform","translateY(-100%)")
			$("#nav_two").addClass("fix")
		}else{
			$("header").css("transform","translateY(0)")
			$("#nav_two").removeClass("fix")
		}
	})
	
	$("#nav_two a").click(function(){
	  $("html,body").animate({scrollTop:($($(this).attr('href')).offset().top-50)},1000);
	 })
})
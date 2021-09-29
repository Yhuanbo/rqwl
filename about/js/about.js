$(function(){
	$("#history_list li").click(function(){
		$("#titlogo").removeClass("switch")
		var index = $(this).index();
		var h = $(".history_img .swiper-slide").height();
		var on = -index * h;
		console.log(on)
		if(index==$("#history_list li").length - 1){
			return false
		}
		if(index==$("#history_list li").length - 2){
			$("#titlogo").addClass("switch")
		}
		$(".history_img .swiper-wrapper").css({
			"transform":"translate3d(0," + (-index * h) + "px,0)",
			"transition-duration":"600ms"
		});
		$(".history_img .swiper-wrapper .swiper-slide").eq(index).addClass("active").siblings().removeClass("active")
		
		$(this).addClass("active").siblings().removeClass("active")
	});
	
	
	$("#tab_tit a").click(function(){
		var index = $(this).index();
		var w = $("#swiper_2 .swiper-slide").width();
		// var on = -index * w;
		$("#swiper_2 .swiper-wrapper").css({
			"transform":"translate3d(" + (-index * w) + "px,0,0)",
			"transition-duration":"300ms"
		})
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	$("#tit2 a").click(function(){
		var index = $(this).index();
		var w = $("#swiper_3 .swiper-slide").width();
		// var on = -index * w;
		$("#swiper_3 .swiper-wrapper").css({
			"transform":"translate3d(" + (-index * w) + "px,0,0)",
			"transition-duration":"300ms"
		})
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	$(window).scroll(function(){
		// console.log($("#banner").height())
		console.log($(window).scrollTop())
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
$(function(){
	$(".tab_tit a").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active")
		$(".tab_con .con").hide()
		$(".tab_con .con").eq(index).show()
	})
	
	$(".input_box").click(function(){
		$(this).find(".drop").fadeIn()
		$(this).find(".sear_btn").addClass("active")
	}).mouseleave(function(){
		$(this).find(".drop").fadeOut()
		$(this).find(".sear_btn").removeClass("active")
	})
	$(".drop a").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected")
		$(this).parent().siblings(".select_tit").html($(this).text())
	})
})
$(function(){
	$("header .lang").click(function(){
		$(this).toggleClass("on")
	})
	$("header .lang").mouseleave(function(){
		$(this).removeClass("on")
	})
	
	$("header .menu-btn").click(function(){
		$(".menu_up").addClass("active")
		$("body").addClass("open")
	})
	$(".menu_up .close").click(function(){
		$(this).parent().removeClass("active")
		$("body").removeClass("open")
	})
	$(window).scroll(function(){
		if($(this).scrollTop()>=50){
			$("header").addClass("on")
		}else{
			$("header").removeClass("on")
		}
	})
	$(".fixed .btn_top").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500)
	})
	$(window).scroll(function(){
		if($(this).scrollTop()>=200){
			$(".fixed").addClass("on")
		}else{
			$(".fixed").removeClass("on")
		}
	})
	
	
	$("#header_nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	$(".menu_up .menu_con a").click(function(){
		$(".menu_up").removeClass("active");
		$("body").removeClass("open")
	})
})
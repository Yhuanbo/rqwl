$(function(){
	var arr = ["img/verify_code.ashx","img/verify_code.png","img/verify_code2.png","img/verify_code3.png","img/verify_code4.png"];
	$("#yzm").click(function(){
		var num = Math.floor(Math.random()*5)
		$(this).find("img").attr("src",arr[num])
	})
	
	$("#reset").click(function(){
		$("#textarea").val("")
	})
})
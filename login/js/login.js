$(function(){
	$(".menu_up").addClass("active")
	$("#btn").click(function(){
		if($("#user").val()==""){
			alert("用户名不能为空")
		}else if($("#pwd").val()==""){
			alert("密码不能为空")
		}else if($("#yzm1").val()==""){
			alert("验证码不能为空")
		}
	})
})
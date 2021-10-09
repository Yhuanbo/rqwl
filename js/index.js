$(function() {
	$("#page").append("<span class='play'></span>")
	var video = document.getElementById("video")
	var cont = 0;
	$("#page .play").click(function() {
		$(this).toggleClass("on")
		cont++;
		if (cont % 2 == 1) {
			video.pause()
		} else {
			video.play()
		}
	})
	video.autoplay = "autoplay";
	video.loop = "loop";

	//新闻动态
	var $this = $("#list_ul");
	var scrollTimer1; //计时器标志
	$this.mousemove(function() {
		clearInterval(scrollTimer1);
	}).mouseleave( function() {
		scrollTimer1 = setInterval(function() {
			var lineHeight = $this.parent().height(); //获取行高
			// console.log("translateY(" + -lineHeight + "px)")
			$this.animate({
				"marginTop": -lineHeight + "px"
			}, 2000, function() { //
				$this.css({
					"marginTop": 0
				}).find("li:first").appendTo($this); //appendTo能直接移动元素
			})
		}, 1500);
	}).trigger("mouseleave");


	var $list = $("#list_ul_sm");
	var scrollTimer; //计时器标志
	$list.mousemove(function() {
		clearInterval(scrollTimer);
	}).mouseleave(function() {
		scrollTimer = setInterval(function() {
			var lineHeight = $list.parent().height(); //获取行高
			// console.log("translateY(" + -lineHeight + "px)")
			$list.animate({
				"marginTop": -lineHeight + "px"
			}, 2000, function() { //
				$list.css({
					"marginTop": 0
				}).find("li:first").appendTo($list); //appendTo能直接移动元素
			})
		}, 1500);
	}).trigger("mouseleave");

})

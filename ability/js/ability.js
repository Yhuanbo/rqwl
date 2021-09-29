$(function(){
	$.getJSON("js/ability.json",function(data){
		$.each(data.one,function(k,v){
			$("#list_one").append("<li class='fl'><div class='wraper'><a href='#'><div class='tit'>" + "<div class='tit_l'><i class='icon'></i><span>" + v.txt +"</span></div><div class='tit_r'><span class='num'>" + v.num + "</span>" + v.tit + "</div></div><div class='infor'>" + v.info + "</div></a></div></li>");
		})
		
		$.each(data.two,function(k,v){
			$("#list_two").append("<li class='fl'><a href='#'><div class='img'><img src='" + v.src + "'></div><h3>" + v.tit + "</h3><p>" + v.txt + "</p><i class='line left'></i><i class='line right'></i><i class='line bottom'></i><i class='line top'></i><i class='line right_bot'></i></a></li>")
		})
		
		$.each(data.three,function(k,v){
			$("#list_three").append("<li class='fl'><div class='wraper'><a href='#'><div class='tit'>" + "<div class='tit_l'><i class='icon'></i><span>" +"</span></div><div class='tit_r'><span>" + v.tit + "</span>" + "</div></div><div class='infor'>" + v.info + "</div></a></div></li>");
		})
		
		$.each(data.four,function(k,v){
			$("#list_four").append("<li class='fl'><a href='#'><div class='img_box'><div class='img1'><img src='" + v.img1 + "'></div><div class='img2'><img src='" + v.img2 + "'></div><i class='mask'></i></div><div class='infor'><div class='infor_t'><i class='icon'></i><h4>" + v.tit +"</h4></div><div class='txt'>" + v.txt +"</div></div></a></li>")
		})
	})
})
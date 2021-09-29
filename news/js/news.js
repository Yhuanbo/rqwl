$(function(){
	$.getJSON("js/news.json",function(data){
		$.each(data,function(k,v){
			$("#news_list").find("ul").append("<li><a href='#'><i class='tab'>" + v.tit +"</i><span class='txt'>" + v.txt + "</span><span class='date'>" + v.time +"</span></a></li>")
		})
		
		
		$("#news_list ul").paging({
			PageNum:10, 
			pageMax:false, 
			pageMaxHideShow:false, 
			pageDownUpHide:false, 
			pageInput:false, 
			pagingBtnHide:false, 
			pagingBtnPaging:true,
			pagingDisplay:"block", 
		}) 
	})
	
 
	
	// $('#news_list').pagination({
	//     coping:true,
	//     homePage:'首页',
	//     endPage:'末页',
	//     prevContent:'上页',
	//     nextContent:'下页',
		
	// });
	
	
	
	
})
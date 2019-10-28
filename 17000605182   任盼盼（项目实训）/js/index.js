$(function(){
	//	pc-logo
$(".logo-box").mouseenter(function(){
	$(".logo-2").stop().animate({height:"50px"})
}).mouseleave(function(){
	$(".logo-2").stop().animate({height:"0px"})
})
//paging
$(".paging ul li").click(function(){
	$(this).addClass("actives").siblings().removeClass("actives");
})

//回到顶部
$(function(){
	$("i").click(function(){
		$(window).scrollTop(0);
		
	})
})
//侧边栏
//$(function(){
//	$("#share").click(function(){
//		$(this).stop().animate({"right":"50px"})
//	}).mouseleave(function(){
//		$(this).stop().animate({"right":"0"})
//		
//	})
//})
var w=$(".shareBox").width();
	$("#share").css({"right":-w});
	
	$(window).resize(function() {
	 	w=$(".shareBox").width();
	 	$("#share").css({"right":-w});
	});
	

	$("#share").hover(function(){
		$(this).animate({
			"right":"0px"
		},200);
	},function(){
		$(this).animate({
			"right":-w
		},200);
	})
//点亮小红星	
	$(".modal-body p i").click(function(){
		var pnum=$(this).parents().index();
		var num=$(this).index();

		for (var i = 0; i < num+1; i++) {
			$(".modal-body p").eq(pnum-1).find("i").eq(i).css("color","red");
		}
	
	})
//	订阅
$("#btn").click(function(){
	alert("您已订阅成功!感谢 的信任!");
})
//登录	
$("#login").click(function(){
	var name=$("#username").val();
	var password=$("#pwd").val();
	
})
})



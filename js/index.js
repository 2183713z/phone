$(document).ready(function(){
	$("#nav_inner li span.nav").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})
	$("#nav_inner li span.nav:first").hover(function(){
		$("#nav_list1 li i").css("color","red");
	},function(){
		$("#nav_list1 li i").css("color","#666");
	})

	$("#nav_list1 li.wangzdh").hover(function(){
		$(this).find("#submenu1").stop().slideDown(300);
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #e4e0e0");
		$(this).css("border-bottom","#FFF");
		//$("#nav #submenu1").css("border-top","none");
	},function(){
		$(this).find("#submenu1").stop().slideUp(300);
		$(this).css("background-color","#f5f5f5");
		$(this).css("border","none");
	})

	$("#nav #submenu1 li a").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})

	$("#nav_list1 li.shangjiarz").hover(function(){
		$(this).find("#submenu2").stop().slideDown(300);
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #e4e0e0");
		$(this).css("border-bottom","none");
		$("#nav #submenu2").css("border-top","none");
	},function(){
		$(this).find("#submenu2").stop().slideUp(300);
		$(this).css("background-color","#f5f5f5");
		$(this).css("border","none");
	})
	$("#nav #submenu2 li a").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})

		$("#nav_list2 li.mydingd").hover(function(){
		$(this).find("#submenu3").stop().slideDown(300);
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #e4e0e0");
		$(this).css("border-bottom","none");
		$("#nav #submenu3").css("border-top","none");
	},function(){
		$(this).find("#submenu3").stop().slideUp(300);
		$(this).css("background-color","#f5f5f5");
		$(this).css("border","none");
	})

	$("#nav #submenu3 li a").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})
	$("#nav #submenu4 a.one").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})
	$("#nav #submenu4 a.together").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");

	})
	$("#nav_list2 li.mylefq").hover(function(){
		$(this).find("#submenu4").stop().slideDown(300);
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #e4e0e0");
		$(this).css("border-bottom","none");
		$("#nav #submenu4").css("border-top","none");
	},function(){
		$(this).find("#submenu4").stop().slideUp(300);
		$(this).css("background-color","#f5f5f5");
		$(this).css("border","none");
	})

	$("#nav_list2 li.last").hover(function(){
		$(this).find("#submenu5").stop().slideDown(300);
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #e4e0e0");
		$(this).css("border-bottom","none");
		$("#nav #submenu5").css("border-top","none");
	},function(){
		$(this).find("#submenu5").stop().slideUp(300);
		$(this).css("background-color","#f5f5f5");
		$(this).css("border","none");
	})
	$("#nav #submenu5 li a").hover(function(){
		$(this).css("color","red");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","#666");
		$(this).css("text-decoration","none");
	})

	$("#header #search #box3").hover(function(){
		$(this).find("#subbox").stop().show(300);
		$(this).find("#subbox").css("box-shadow","0 0 6px #e0e4e4");
		$(this).css("box-shadow","0 0 6px #e0e4e4");
		$(this).css("border-bottom","none");

	},function(){
		$(this).find("#subbox").stop().hide(300);
		$(this).css("box-shadow","none");
		$(this).css("border-bottom","1px solid #808080");
	})

	$("#banner a.right").click(function(){
		$("#piclist").animate({"margin-left":"-850px"},300,function(){
			var first=$("#piclist li:first");
			first.remove();
			$("#piclist").append(first);
			$("#piclist").css("margin-left","0");
		});
	})
	$("#banner a.left").click(function(){
		var last=$("#piclist li:last");
		last.remove();
		$("#piclist").prepend(last);
		$("#piclist").css("margin-left","-850px");
		$("#piclist").animate({"margin-left":"0px"},300)
	})

	$("#banner #nav_left li a.suba").hover(function(){
		$(this).css("color", "red" );
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color", "#808080" );
		$(this).css("text-decoration","none");
	})

	$("#banner #nav_left>li").hover(function(){
		$(this).find(".submenu").css("display","block");
		$(this).css("border-right","none");
		$(this).css("border-bottom","1px solid #ccc");
		$(this).siblings().css("border-right","1px solid #ccc");
	},function(){
		$(this).find(".submenu").css("display","none");
		$(this).css("border-right","1px solid #f0f0f0");
		$(this).css("border-bottom","1px solid #f0f0f0");
		$(this).siblings().css("border-right","1px solid #f0f0f0");
	})

	$("#banner .submenu span.cha").click(function(){
		$("#banner .submenu").css("display","none");
	})

	$("#banner #nav_right #list li:first").hover(function(){
		$("#banner #nav_right #list .wrap1").css("background-color","#d1ff68");
		$("#banner #nav_right #list .zpbz1").css("color","#d1ff68");

	},function(){
			$("#banner #nav_right #list .wrap1").css("background-color","#bec7d4");
			$("#banner #nav_right #list .zpbz1").css("color","#bec7d4");
	})

	$("#banner #nav_right #list li:last").hover(function(){
		$("#banner #nav_right #list .wrap3").css("background-color","#8cd3fd");
		$("#banner #nav_right #list .zpbz3").css("color","#8cd3fd");

	},function(){
			$("#banner #nav_right #list .wrap3").css("background-color","#bec7d4");
			$("#banner #nav_right #list .zpbz3").css("color","#bec7d4");
	})
	$("#banner #nav_right #list li:eq(1)").hover(function(){
		$("#banner #nav_right #list .wrap2").css("background-color","#f87d99");
		$("#banner #nav_right #list .zpbz2").css("color","#f87d99");

	},function(){
			$("#banner #nav_right #list .wrap2").css("background-color","#bec7d4");
			$("#banner #nav_right #list .zpbz2").css("color","#bec7d4");
	})
/*第一个nav0087d8*/
	$("#main1 #list1 li:first").hover(function(){
		$("#main1 #list1 .list").css("display","none");
		$("#main1 .list2").css("display","block");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","white");
		$(this).siblings().find(".box2").css("display","none");
		$("#main1 #list1 li:eq(1)").find("font.bo").css("color","#e02b00");
		$("#main1 #list1 li:eq(2)").find("font.bo").css("color","#fe8502");
		$("#main1 #list1 li:eq(3)").find("font.bo").css("color","#82ab27");
	},function(){
		$("#main1 .list2").css("display","block");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","#fff");
		$("#main1 .list2").css("display","block");
		$("#main1 .list3").css("display","none");
		$("#main1 .list4").css("display","none");
		$("#main1 .list5").css("display","none");
	})
/*第二个nave02b00*/
	$("#main1 #list1 li:eq(1)").hover(function(){
		$("#main1 #list1 .list").css("display","none");
		$("#main1 .list3").css("display","block");
		// $("#main1 .list2").css("display","none");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","white");
		$(this).siblings().find(".box2").css("display","none");
		$("#main1 #list1 li:eq(0)").find("font.bo").css("color","#0087db");
		$("#main1 #list1 li:eq(2)").find("font.bo").css("color","#fe8502");
		$("#main1 #list1 li:eq(3)").find("font.bo").css("color","#82ab27");
	},function(){
		$("#main1 .list2").css("display","block");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","#fff");
		$("#main1 .list3").css("display","block");
		$("#main1 .list2").css("display","none");
		$("#main1 .list4").css("display","none");
		$("#main1 .list5").css("display","none");
	})
/*第三个navfe8502*/
	$("#main1 #list1 li:eq(2)").hover(function(){
		$("#main1 #list1 .list").css("display","none");
		$("#main1 .list4").css("display","block");
		// $("#main1 .list2").css("display","none");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","white");
		$(this).siblings().find(".box2").css("display","none");
		$("#main1 #list1 li:eq(0)").find("font.bo").css("color","#0087d8");
		$("#main1 #list1 li:eq(1)").find("font.bo").css("color","#e02b00");
		$("#main1 #list1 li:eq(3)").find("font.bo").css("color","#82ab27");
	},function(){
		$("#main1 .list2").css("display","block");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","#fff");
		$("#main1 .list4").css("display","block");
		$("#main1 .list2").css("display","none");
		$("#main1 .list3").css("display","none");
		$("#main1 .list5").css("display","none");
	})
/*last nav82ab27*/
	$("#main1 #list1 li:last").hover(function(){
		$("#main1 #list1 .list").css("display","none");
		$("#main1 .list5").css("display","block");
		// $("#main1 .list2").css("display","none");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","white");
		$(this).siblings().find(".box2").css("display","none");
		$("#main1 #list1 li:eq(0)").find("font.bo").css("color","#0087d8");
		$("#main1 #list1 li:eq(1)").find("font.bo").css("color","#e02b00");
		$("#main1 #list1 li:eq(2)").find("font.bo").css("color","#fe8502");
	},function(){
		$("#main1 .list2").css("display","block");
		$(this).find(".box2").css("display","block");
		$(this).find("font.bo").css("color","#fff");
		$("#main1 .list5").css("display","block");
		$("#main1 .list2").css("display","none");
		$("#main1 .list3").css("display","none");
		$("#main1 .list4").css("display","none");

	})

	$("#main1 .list li").hover(function(){
		$(this).css("margin-top","-5px");
	},function(){
		$(this).css("margin-top","0px");
	})
/*高性价比   右侧部分*/
	$("#main2 .lista li:first").hover(function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$("#main2 .piclist1").css("display","block");
		$("#main2 .piclist2").css("display","none");
		$("#main2 .piclist3").css("display","none");
		$("#main2 .piclist4").css("display","none");
		$("#main2 .piclist5").css("display","none");
		$(this).siblings().css("background-color","#4d4b4c");
		$(this).siblings().find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	},function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	})
	$("#main2 .lista li:last").hover(function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$("#main2 .piclist5").css("display","block");
		$("#main2 .piclist1").css("display","none");
		$("#main2 .piclist3").css("display","none");
		$("#main2 .piclist4").css("display","none");
		$("#main2 .piclist2").css("display","none");
		$(this).siblings().css("background-color","#4d4b4c");
		$(this).siblings().find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	},function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	})
	$("#main2 .lista li:eq(1)").hover(function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$("#main2 .piclist2").css("display","block");
		$("#main2 .piclist1").css("display","none");
		$("#main2 .piclist3").css("display","none");
		$("#main2 .piclist4").css("display","none");
		$("#main2 .piclist5").css("display","none");
		$(this).siblings().css("background-color","#4d4b4c");
		$(this).siblings().find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	},function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	})
	$("#main2 .lista li:eq(2)").hover(function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$("#main2 .piclist3").css("display","block");
		$("#main2 .piclist1").css("display","none");
		$("#main2 .piclist2").css("display","none");
		$("#main2 .piclist4").css("display","none");
		$("#main2 .piclist5").css("display","none");
		$(this).siblings().css("background-color","#4d4b4c");
		$(this).siblings().find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	},function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).siblings().find("span.sanjiao").css("display","none");
	})
	$("#main2 .lista li:eq(3)").hover(function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$("#main2 .piclist4").css("display","block");
		$("#main2 .piclist1").css("display","none");
		$("#main2 .piclist2").css("display","none");
		$("#main2 .piclist3").css("display","none");
		$("#main2 .piclist5").css("display","none");
		$(this).siblings().css("background-color","#4d4b4c");
		$(this).siblings().find("span.sanjiao").css("display","none");
		$(this).siblings().find("span.sanjiao").css("display","none");
	},function(){
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
		$(this).css("background-color","#eb5345");
		$(this).find("span.sanjiao").css("display","block");
	})



	$("#main2 #main2right .piclist1 li").hover(function(){		
		$(this).find("div.subhez").css("display","block");
	},function(){
		$(this).find("div.subhez").css("display","none");
	})

	
	$("#main2 #main2right .piclist0 li").hover(function(){		
		$(this).find("div.subhez").css("display","block");
	},function(){
		$(this).find("div.subhez").css("display","none");
	})

	/*main3 的轮播*/
	$("#main3_mid span.rightspan").click(function(){
		$("#main3_list2").animate({"margin-left":"-550px"},300,function(){
			var first=$("#main3_list2 li:first");
			first.remove();
			$("#main3_list2").append(first);
			$("#main3_list2").css("margin-left","0");
		})
	})
	$("#main3_mid span.leftspan").click(function(){
		var last=$("#main3_list2 li:last");
		last.remove();
		$("#main3_list2").prepend(last);
		$("#main3_list2").css("margin-left","-550px");
		$("#main3_list2").animate({"margin-left":"0px"},300);
	})
	// $('#main_list').kxbdSuperMarquee({
	// 			distance:550,
	// 			time:4,
	// 			navId:'#main3Nav',
	// 			direction:'left'
	// 		});
/*main3 的动画效果*/

//第一个
	$("#main3_left #main3_list1 li:first").hover(function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");
		$("#main3_mid .right_1").css("display","block");
		$("#main3_mid .right").css("display","none");
		$("#main3_mid .main3_list31").css("display","block");
		$("#main3_mid .lists").css("display","none");
	},function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");


	})

// 第二个
	$("#main3_left #main3_list1 li:eq(1)").hover(function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");
		$("#main3_mid .right").css("display","none");
		$("#main3_mid .right_2").css("display","block");
		$("#main3_mid .right_1").css("display","none");
		$("#main3_mid .lists").css("display","none");
		$("#main3_mid .main3_list32").css("display","block");
		$("#main3_mid .main3_list31").css("display","none");
	},function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");

	})
// 第三个
	$("#main3_left #main3_list1 li:eq(2)").hover(function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");
		$("#main3_mid .right").css("display","none");
		$("#main3_mid .right_3").css("display","block");
		$("#main3_mid .right_1").css("display","none");
		$("#main3_mid .lists").css("display","none");
		$("#main3_mid .main3_list33").css("display","block");
		$("#main3_mid .main3_list31").css("display","none");
	},function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");

	})
// 第四个
	$("#main3_left #main3_list1 li:eq(3)").hover(function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");
		$("#main3_mid .right").css("display","none");
		$("#main3_mid .right_4").css("display","block");
		$("#main3_mid .right_1").css("display","none");
		$("#main3_mid .lists").css("display","none");
		$("#main3_mid .main3_list34").css("display","block");
		$("#main3_mid .main3_list31").css("display","none");
	},function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");

	})
// 第五个
	$("#main3_left #main3_list1 li:eq(4)").hover(function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");
		$("#main3_mid .right").css("display","none");
		$("#main3_mid .right_5").css("display","block");
		$("#main3_mid .right_1").css("display","none");
		$("#main3_mid .lists").css("display","none");
		$("#main3_mid .main3_list35").css("display","block");
		$("#main3_mid .main3_list31").css("display","none");
	},function(){
		$(this).find("a").css("background-color","#333");
		$(this).find("a").css("color","#fff");
		$(this).siblings().find("a").css("background-color","#fff");
		$(this).siblings().find("a").css("color","#000");

	})
/*footer*/
$("#footer_bottom #pic").hover(function(){
		$("p.xin").css("background-color","red");
		$("p.xin").css("color","white");
		$(" #footer_bottom #pic #box2").css("background-color","red");
	},function(){
		$("p.xin").css("background-color","#8d8d8d");
		$("#footer_bottom #pic #box2").css("background-color","#757575");
	})
	$("#footer_bottom #footer_list li a").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	})











})
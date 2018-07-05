var Login = function() {
    var e = {
            inputClick: function() {
                var e = $(".ha_sr");
                e.on("focus", ".nor", function() {
                    $(this).closest(".ha_sr").addClass("ha_click");
                });
                e.on("blur", ".nor", function() {
                    $(this).closest(".ha_sr").removeClass("ha_click");
                });
            },
            codeClick: function() {
                var e = $(".txtbox");
                e.on("focus", function() {
                    $(this).addClass("ha_click");
                });
                e.on("blur", function() {
                    $(this).removeClass("ha_click");
                });
            }
        },
        t = function() {
            e.inputClick(), e.codeClick()
        };
    return {
        fn: e,
        init: t
    }
}();
var Index = function() {
    var e = {
            serverTab: function() {
                var e = $(".u-serverNav li"),
                    t = $(".u-serverLst .lst"),
                    n = 0;
                e.hover(function() {
                    n = e.index(this), e.removeClass("cur").eq(n).addClass("cur"), t.removeClass("cur").eq(n).addClass("cur")
                });
                for (var s = 0; s < t.length; s++) t.eq(s).find("div").eq(0).addClass("cur");
            },
            serverTab: function() {
                var e = $(".I-notice-nav li"),
                    t = $(".I-notice-tab .I-notice-tab-list"),
                    n = 0;
                e.hover(function() {
                    n = e.index(this), e.removeClass("cur").eq(n).addClass("cur"), t.removeClass("cur").eq(n).addClass("cur")
                });
                for (var s = 0; s < t.length; s++) t.eq(s).find("div").eq(0).addClass("cur");
            },
            friendLst: function() {
                var e = $(".g-friendLst .more");
                t = $(".m-friendLst");
                l = $(".m-friendLst li");
                h = l.height() * l.length;
                e.on('click', function() {
                    if (e.is(".more-on")) {
                        h = l.height() * l.length;
                        t.stop(true).animate({ height: h + "px" }, 400);
                        e.removeClass("more-on").addClass("more-off");
                        e.find('i').removeClass("fa-angle-down").addClass("fa-angle-up");
                    } else {
                        t.stop(true).animate({ height: '50px' }, 400);
                        e.removeClass("more-off").addClass("more-on");
                        e.find('i').removeClass("fa-angle-up").addClass("fa-angle-down");
                    }
                    return false;
                });

            },
            scrollTop: function() {
                $("#top").bind('click', function() {
                    $("html,body").animate({ scrollTop: '0' }, 800)
                });
            },
            fixedNav: function() {
                var e = $(".mn-fixed li a");
                e.mouseenter(function() {
                    $(this).next(".txt").addClass("show")
                }).mouseleave(function() {
                    $(this).next(".txt").removeClass("show")
                });
            },
            ewmBox: function() {
                var e = $(".m-leftGroup .wx");
                e.mouseenter(function() {
                    $(this).find(".ewm").css("display","block")
                }).mouseleave(function() {
                    $(this).find(".ewm").css("display","none")
                });
            }

        },
        t = function() {
            e.serverTab(), e.friendLst(), e.scrollTop(), e.fixedNav(),e.ewmBox()
        };
    return {
        fn: e,
        init: t
    }
}();
var Page = function() {
    var e = {
            page404: function() {
                var e = $(".u-recommendG-lst li");
                e.hover(function() {
                    $(this).find('.hover').stop(true).animate({ bottom: 0 });
                }, function() {
                    $(this).find('.hover').stop(true).animate({ bottom: -40 });

                });
            },
            newsOtherTab: function() {
                var e = $(".about-nav li"),
                    t = $(".about-lst"),
                    n = 0;
                e.hover(function() {
                    n = e.index(this), e.removeClass("cur").eq(n).addClass("cur"), t.removeClass("cur").eq(n).addClass("cur")
                });
                for (var s = 0; s < t.length; s++) t.eq(s).find("div").eq(0).addClass("cur");
            },
            gameEwm: function() {
                var e = $(".hoverBtn");
                e.mouseenter(function() {
                    $(this).find(".ewm").css("display","block")
                }).mouseleave(function() {
                    $(this).find(".ewm").css("display","none")
                });
            }

    },
        t = function() {
            e.page404(),e.newsOtherTab(),e.gameEwm()
        };
    return {
        fn: e,
        init: t
    }
}();

/* jq 写入插件*/
$.fn.extend({
    tab: function(el,events,handler){
        $(el).hide().eq(0).show();
        events = events ? events : "click";
        return this.on(events, function(event) {
            event.preventDefault();
            var n = $(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            var $el = $(el);
            $el.hide();
            $el.eq(n).show();
            if($.isFunction(handler)) handler($(this));
        })
    },
    backTop: function(){
        return this.on('click',function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 400)
        });
    },
    checkbox: function(el,handler){
        var el = el ? el : "div";
        this.off('click');
        return this.on('click', function(event) {
            event.preventDefault();
            var d,val,arrayA=[];
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
            }
            if(typeof($(this).attr('data-allselectid'))!='undefined'){
                val = $(this).attr('data-allselectid');
                if($(this).hasClass('active')){
                    $(el + "[data-allselectid='"+ val +"']").addClass('active');
                    $(el + "[data-optionid='"+ val +"']").addClass('active');
                    d = $(el + ".active[data-optionid='"+ val +"']").length;
                }else{
                    $(el + "[data-allselectid='"+ val +"']").removeClass('active');
                    $(el + "[data-optionid='"+ val +"']").removeClass('active');
                    d = 0;
                }
                arrayA = $(el + ".active[data-optionid='"+ val +"']");
            }
            if(typeof($(this).attr('data-optionid'))!='undefined'){
                val = $(this).attr('data-optionid');
                var l = $(el + "[data-optionid='"+ val +"']").length;
                if(!$(this).hasClass('active')){
                    $(el + "[data-allselectid='"+ val +"']").removeClass('active');
                }
                d = $(el + ".active[data-optionid='"+ val +"']").length;
                if(d==l) $(el + "[data-allselectid='"+ val +"']").addClass('active');
                arrayA = $(el + ".active[data-optionid='"+ val +"']");
            }
            if($.isFunction(handler)) handler(arrayA);
        });
    },
    textareaMax:function(elText){
        return this.each(function(index, el) {
            if(typeof($(el).attr('maxlength'))!='undefined'){
                $(el).keyup(function(){
                    console.log(11)
                    var n =  $(this).attr('maxlength'),
                        curLength = $(this).val().length,
                        $numbT = $(elText);
                    if(curLength>n) 
                    { 
                    var num=$(this).val().substr(0,n); 
                    $(this).val(num); 
                        alert("超过字数限制，多出的字将被截断！" ); 
                    }else { 
                        $numbT.eq(index).text($(this).val().length); 
                    } 
                });
            }
        });
    }

})

$.extend({
    //线动画
    newsIconM: function(ele,widthLi,iconClass,widthDefault,e) {
        var e = e ? e : '',
            cont = $(ele).index(e),
            Nleft = cont * widthLi;
        widthDefault = widthDefault ? widthDefault : 0;
        $(iconClass).stop().animate({
            "left": Nleft + widthDefault
        }, 300);
    },
    slider: function(el){
        var $btnBox = $(el).find(".slideBtn"),
            $btn = $btnBox.find("div"),
            $li = $(el).find("li"),
            $next = $(el).find(".next"),
            $prev = $(el).find(".prev"),
            n_li = $li.length,
            w_li = $li.width(),
            time,time2
            nowN = 0;
        function changeS(numb){
            var nB,nB2,nA,nA2;
            nB = numb-1 >=0 ? numb-1 : n_li-1;
            nB2 = numb-2 >=0 ? numb-2 : (numb-1 ==0 ? n_li-1 : n_li-2);
            nA = numb+1 < n_li ? numb+1 : 0;
            nA2 = numb+2 < n_li ? numb+2 : (numb+1==n_li ? 1 : 0);
            nowN = numb;
            $li.eq(numb).addClass('nowS').siblings().removeClass('nowS');
            $li.eq(nB).addClass('beforeS').siblings().removeClass('beforeS');
            if(n_li>=5) $li.eq(nB2).addClass('beforeS2').siblings().removeClass('beforeS2');
            $li.eq(nA).addClass('afterS').siblings().removeClass('afterS');
            if(n_li>=5) $li.eq(nA2).addClass('afterS2').siblings().removeClass('afterS2');
            $btn.eq(numb).addClass('active').siblings().removeClass('active');
        }
        changeS(nowN);
        $li.click(function(event) {
            var nowI = $(this).index();
            changeS(nowI);
        });
        $btn.click(function(event) {
            var nowI = $(this).index(),
                v = Math.abs(nowN-nowI);
            if(v==2||v==3){
                if(nowN-nowI>0){
                    $li.eq(nowI).addClass('beforeS');   
                }else{
                    $li.eq(nowI).addClass('afterS');
                    $li.eq(nowI+1).addClass('beforeS');   
                }
            }
            var setT = function(){changeS(nowI);};
            setTimeout(setT,100);          
        });
        $next.click(function(event) {
            clearTimeout(time);
            fn =function(){
                if(nowN<$li.length-1){
                    nowN++;
                    changeS(nowN);
                }else{
                   changeS(0); 
                }
            };
            time = setTimeout(fn,200); 
        });
        $prev.click(function(event) {
            clearTimeout(time2);
            fn =function(){
                if(nowN > 0){
                    nowN--;
                    console.log(nowN);
                    changeS(nowN);
                }else{
                   changeS($li.length-1); 
                }
            };
            time2 = setTimeout(fn,200); 
        });
    }
});

$(function() {
    Login.init();
    Index.init();
    Page.init();
    // 首页滚屏
/*    $(".hiSliderHeader").hiSlider({
        isShowControls: true,
		isAuto:true, 
        isShowTitle: false
    });*/
	
	 // 首页滚屏 弹性
	$('.hiSliderHeader').hiSlider({
		isFlexible: true,
		isSupportTouch: true,
		titleAttr: function(curIdx){
			return $('img', this).attr('alt');
		}
	});
	
    // 首页热门活动滚动信息
    $(".hiSliderAct").hiSlider({
        isShowControls: true,
		isAuto:true, 
		direction: 'top',
		isShowPage:false,
        isShowTitle: false
    });
	
    //游戏中心 头部轮播
    $(".hiSliderGmCenter").hiSlider({
		isFlexible: true,
		isSupportTouch: true,
		titleAttr: function(curIdx){
			return $('img', this).attr('alt');
		}
	});
	
    // 礼包左右轮播活动信息
    $(".hiSliderLibao").hiSlider({
        isShowControls: true,
		isAuto:true,  
		isShowPage:false,
        isShowTitle: false
    });
	
    // 热点速报轮播区
    $(".hiSliderSubao").hiSlider({
        isShowControls: false,
		isAuto:true,  
		isShowPage:true,
        isShowTitle: false
    });
	
    //内页广告滚动
    $(".hiSliderHot").hiSlider({
        isShowControls: false,
        isShowTitle: false
    });
	
    //游戏大眼睛
    $(".hiSliderGame").hiSlider({
        isShowControls: false,
        isShowTitle: false
    });
	
    //积分商城大眼睛
    $(".hiSliderShop").hiSlider({
        isShowControls: false,
        isShowTitle: false
    });
	// 首页滚屏
    $(".hiSliderIndex").hiSlider({
        isShowControls: false,
        isShowTitle: false
    });
    
    $(".content_server .select_checkbox div").checkbox();
    //侧边返回顶部按钮
    $(".btn_backTop").backTop();
    //游戏tab
    $(".nav_gameMain li").tab(".list_gameMain");
    //游戏轮播
    $.slider("#slide1");
    $.slider("#slide2");
    $.slider("#slide3");

// 友情链接 更多全部显示出来
	$(".btn_key_more").toggle(
		function(){
				$(this).addClass("k_off");
				$(this).removeClass("k_on"); 
				$(this).text("收起 ∧");
				$(".FreLinkBox").css("height","auto"); 
		;}, 
		function(){
				$(this).addClass("k_on");
				$(this).removeClass("k_off"); 
				$(this).text("更多 ∨");
				$(".FreLinkBox").css("height","32px"); 
			;}
	);
	  
  	
 
	
//顶通点击下拉 游戏列表		 
//$(".btn_topC_Game").click(function(){
//	if($(".TopGameShow_Group").css("display")=="none"){
//	$(".TopGameShow_Group").show();
//	$(".iconC_game_on").removeClass("iconC_game_on").addClass("iconC_game_off"); 
//	}
//	else{
//	$(".TopGameShow_Group").hide();
//	$(".iconC_game_off").removeClass("iconC_game_off").addClass("iconC_game_on"); 
//	}
//});
// 游戏列表离开 隐藏
$(".TopGameShow_Group").mouseleave(function(event) {
		$(".TopGameShow_Group").hide(); 
		$(".iconC_game_off").removeClass("iconC_game_off").addClass("iconC_game_on"); 
});


// 首页 精品推荐 换一换
    $(".btn_game_huan").click(function() {		 
		$(".JidoList li").delay(150).fadeOut();
		$(".JidoList li:eq(0)").delay(200).fadeIn();
		$(".JidoList li:eq(1)").delay(400).fadeIn();
		$(".JidoList li:eq(2)").delay(600).fadeIn(); 
		$(".JidoList li:eq(3)").delay(800).fadeIn(); 
		$(".JidoList li:eq(4)").delay(900).fadeIn(); 
		$(".JidoList li:eq(5)").delay(1100).fadeIn();  
    });
	
//鼠标经过显示 精彩直播
	$(".Shiti_Box").mouseenter(function(event) {
		$(this).addClass("shiti_on"); 
	});
		
	$(".Shiti_Box").mouseleave(function(event) {
		$(this).removeClass("shiti_on"); 
	});
	
 
//什么是U米 TIPS 浮层
        $(".uimi_zi").dropdown(".uimi_tips","100");
		
	 //OTHER 
			$(".btns_play").click(function(){
			$(".pop_mark").show(  );
			$(".overlay").show(  );  
			$(".pop_down").hide(  ); 
			});
	//OTHER 
    
});



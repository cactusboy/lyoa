$.fn.extend({
    tab: function(el,events,handler){
        $(el).hide().eq(0).show();
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
    textSlider: function(settings) {
        var _self = this;
        settings = jQuery.extend({
            speed: "normal",
            line: 2,
            timer: 3000
        }, settings);
        this.scllor = function($this, settings) {
            var ul = $("dl:eq(0)", $this);
            var timerID;
            var li = ul.children();
            var liHight = $(li[0]).height();
            var upHeight = 0 - settings.line * liHight; //滚动的高度;
            var scrollUp = function() {
                ul.animate({
                    marginTop: upHeight
                }, settings.speed, function() {
                    for (i = 0; i < settings.line; i++) {
                        ul.find("dd:first", $this).appendTo(ul);
                    }
                    ul.css({
                        marginTop: 0
                    });
                });
            };
            var autoPlay = function() {
                timerID = window.setInterval(scrollUp, settings.timer);
            };
            var autoStop = function() {
                window.clearInterval(timerID);
            };
            //事件绑定
            ul.hover(autoStop, autoPlay).mouseout();
        };
        return this.each(function() {
            _self.scllor($(this), settings);
        });
    },
    selectNumb: function(callback_success,callback_error){
        return this.each(function(index, el) {
            var _self = this,
                $btn_add = $(this).find('.btn_addNumb'),
                $btn_reduce = $(this).find('.btn_reduceNumb'),
                $p = $(this).find("p"),
                max = $(this).data("max") ? $(this).data("max") : 1;
            if(Number($p.text()) == max) $btn_add.addClass('disable');
            if(Number($p.text())==1) $btn_reduce.addClass('disable');
            $(this).attr('data-selNumb', $p.text());
            $btn_add.on('click', function(event) {
                event.preventDefault();
                var val = Number($p.text())+1;
                if(val <= max) {
                    $p.text(val);
                    $(_self).attr('data-selNumb', $p.text());
                    if($.isFunction(callback_success)) callback_success($(_self),index);
                    if(val == max) $(this).addClass('disable');
                }else{
                    if($.isFunction(callback_error)) callback_error($(_self),index);    
                };
                if(Number($p.text())>1 && $btn_reduce.hasClass('disable')) $btn_reduce.removeClass('disable');
            });
            $btn_reduce.on('click', function(event) {
                event.preventDefault();
                var val = Number($p.text());
                if(!$(this).hasClass('disable') && val>1){
                   $p.text(val-1);
                   $(_self).attr('data-selNumb', $p.text());
                   if($.isFunction(callback_success)) callback_success($(_self),index);
                   if(Number($p.text()) < max && $btn_add.hasClass('disable')) {
                        $btn_add.removeClass('disable')
                    }
                };
                if(Number($p.text())==1) $(this).addClass('disable');
            });
        });
    },
    checkbox: function(handler){
        this.off('click');
        return this.on('click', function(event) {
            event.preventDefault();
            var d,val;
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
            }
            if(typeof($(this).attr('data-allselectid'))!='undefined'){
                val = $(this).attr('data-allselectid');
                if($(this).hasClass('active')){
                    $("div[data-allselectid='"+ val +"']").addClass('active');
                    $("div[data-optionid='"+ val +"']").addClass('active');
                    d = $(".active[data-optionid='"+ val +"']").length;
                }else{
                    $("div[data-allselectid='"+ val +"']").removeClass('active');
                    $("div[data-optionid='"+ val +"']").removeClass('active');
                    d = 0;
                }
            }
            if(typeof($(this).attr('data-optionid'))!='undefined'){
                val = $(this).attr('data-optionid');
                var l = $("div[data-optionid='"+ val +"']").length;
                if(!$(this).hasClass('active')){
                    $("div[data-allselectid='"+ val +"']").removeClass('active');
                }
                d = $(".active[data-optionid='"+ val +"']").length;
                if(d==l) $("div[data-allselectid='"+ val +"']").addClass('active');
            }
            if($.isFunction(handler)) handler(d,this);
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
    //线动画 垂直
    newsIconM2: function(ele,heightLi,iconClass,heightDefault,e) {
        var e = e ? e : '',
            cont = $(ele).index(e),
            Ntop = cont * heightLi;
        heightDefault = heightDefault ? heightDefault : 0;
        $(iconClass).stop().animate({
            "top": Ntop + heightDefault
        }, 300);
    }
})

$(function() { 
    //点击回到顶部
    $(".btn_backTop").backTop();
    
    //checkbox
    $('.select_checkbox div').checkbox();

    //radio单选
    $(document).on('click', '.radioBox div', function(event) {
        event.preventDefault();
        if(!$(this).hasClass('active')){
            $(this).addClass('active').siblings().removeClass('active');
        }
    });
});

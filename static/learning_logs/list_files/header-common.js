var options = {
		loginFormId:"toploginForm",//登录框content
		logoutFormId:"toplogoutForm",//注销框(既已登录)content
		linkRelNameId:"linkRelName",
		loginNameId:"topLoginName",
		vipId:"topLoginVip",
		topLoginBtnId:"topLoginBtn",
		topRegBtnId:"topRegBtn",
		logoutBtnId:"topLogoutBth",
		logoutCallBack:topBarLogoutCallback,
		loginCallBack:topBarLoginCallback
	}
	objNav = new nav(options);
	objNav.init();

	//处理消息
	var msgOptions = {
		boxId:"p-message-box",
		btnId:"btn_messageC"
	}
	var obj_topBar_msg = new topBar_msg(msgOptions);
	obj_topBar_msg.init();
	//个人信息下拉
	$(".btn_messageC").dropdown(".dropdownC","200",function(){obj_topBar_msg.TopUserShowMsg()},function(){obj_topBar_msg.TopUserHideMsg()});

   

    //第三方账号登录
    var winID = null;
    function open_win(url) {
        document.domain = "youzu.com";
        winID = window.open(url, "newwindow", "height=700, width=800, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no") //写成一行
        var loop = setInterval(function () {
            if (winID.closed) {
                clearInterval(loop);
                parent.location.reload();
            }
        }, 1);
    }
	
	function topBarLogoutCallback(){
        window.location.reload()
    }

    function topBarLoginCallback(){
        window.location.reload()
    }
	
	function addHomePage() {
        homepage = "http://www.youzu.com"
        sitename = 'www.youzu.com';
        AddFavorite(homepage,sitename);
    }

    function saveHomePageToDesckTop() {
        homepage = "http://www.youzu.com"
        sitename = '游族网络';
        toDesktop(homepage,sitename);
    }

    //保存到桌面
    function toDesktop(sUrl,sName){
        try {
            var WshShell = new ActiveXObject("WScript.Shell");
            var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
            oUrlLink.TargetPath = sUrl;
            oUrlLink.Save();
        }
        catch(e)  {
            alert("当前浏览器安全级别不允许操作！");
        }
    }

    function AddFavorite(sURL, sTitle)
    {
        try
        {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e)
        {
            try
            {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e)
            {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
	

    //注册 调用统一的注册js
    function topBarWidgetReg() {
        com_login.showLogin('','reg');
        $('#com_pop_login').css({'top':'200px','left':'50%','margin-left':'-204px'});
    }

    //显示高V用户信息绑定弹框
    function topBarShowBindVVipInfo() {
        var html = '<div class="pop_wanshan_Group">\
                    <div class="pop_titleZu"> <span class="tit_biaoti">完善信息</span> <a href="javascript:;" onclick="top_bar_wansanConHide()" class="ic_close"></a> </div>\
                    <div class="pop_neirongZu">\
                    <div class="p_yueNei_Box">\
                    <p class="p_yuenoti"><i class="iconC iconC_shan_a"></i>完善资料后可尊享专属特权服务<i class="iconC iconC_shan_b"></i></p>\
                    <form name="form1" method="post" action="">\
                    <p class="tian_ha"><em class="must_fu"  >*</em>\
                    <input type="text" class="in_sx" onfocus="top_bar_checkWansOnFocus(this)" id="top_bar_wansan_mobile" placeholder="请输入手机号" value="">\
                    </p>\
                    <p class="tips_error_ha" style="display:block; " id="top_bar_wansan_mobile_error"></p>\
                    <p class="tian_ha"><em class="must_fu"  >*</em>\
                    <input type="text" class="in_sx  sx_2" onfocus="top_bar_checkWansOnFocus(this)" id="top_bar_wansan_captcha" placeholder="验证码" value="">\
                    <span class="icon_yzm_post">\
                    <a href="javascript:top_bar_changeWansanCaptcha();">\
                    <img src="'+headerSDK.home_apiUrl[headerSDK.env]+'/jsonp/sms/code?v='+headerSDK.version+'" width="130" height="43" id="top_bar_wanSanShowCaptcha">\
                    </a>\
                    </span> </p>\
                    <p class="tips_error_ha" style="display:block; " id="top_bar_wansan_captcha_error"></p>\
                    <p class="tian_ha"><em class="must_fu"  >*</em>\
                    <input type="text" class="in_sx sx_2 " onfocus="top_bar_checkWansOnFocus(this)" id="top_bar_wansan_sms" placeholder="短信验证码" value="">\
                    <span class="in_ma ma_01" id="wansan_send_sms"   style="display: block; " onclick="top_bar_wansanSendSms()">获取验证码</span>\
                    <span class="in_ma ma_02" id="top_bar_wansan_send_sec"  style="display: none; ">已发送</span>\
                    </p>\
                    <p class="tips_error_ha" style="display:block; " id="top_bar_wansan_sms_error"></p>\
                    <p class="tian_ha"><em class="must_fu"  >*</em>\
                    <input type="text" class="in_sx  " onfocus="top_bar_checkWansOnFocus(this)" id="top_bar_wansan_wx"  placeholder="请输入微信号" value="">\
                    </p>\
                    <p class="tian_ha">\
                    <input type="text" class="in_sx  " onfocus="top_bar_checkWansOnFocus(this)" id="top_bar_wansan_qq"  placeholder="请输入QQ号" value="">\
                    </p>\
                    <p class="tips_error_ha" style="display:block; " id="top_bar_wansan_bottom_error"></p>\
                    <p class="p_btn_ha" > <a href="javascript:;" onclick="top_bar_wansanSubmit()" class="btn_tj_huang" title="提交"> 提 交</a> </p>\
                </form>\
                </div>\
                </div>\
                </div>'
        com_login.picProp.init(html, function (o) {
        }).show();
        return
    }

    //高V信息已绑定弹框
    function topBarShowBindVVipInfoHad() {
        var html = '<div class="pop_wanshan_Group">\
                        <div class="pop_titleZu"> <span class="tit_biaoti">完善信息</span> <a href="javascript:;" onclick="top_bar_wansanConHide()" class="ic_close"></a> </div>\
                        <div class="pop_neirongZu">\
                        <div class="p_yueNei_Box">\
                        <p class="p_yuenoti" style="margin-top: 30px;color: #525252;">您已经完善过信息了</p>\
                        <form name="form1" method="post" action="">\
                        <p class="p_btn_ha p_guan_ha" > <a href="javascript:;" onclick="top_bar_wansanConHide()" class="btn_tj_huang" title="关闭"> 关 闭</a> </p>\
                        </form>\
                        </div>\
                        </div>\
                    </div>'
        com_login.picProp.init(html, function (o) {
        }).show();
        return
    }

    //消息中crm定义的完善高V用户新的js
    function CrmVVipBindInfoMsgJs() {
        $.ajax({
            url: headerSDK.home_apiUrl[headerSDK.env]+'/jsonp/sms/checkvvip',
            type: 'GET',
            dataType: "jsonp",
            data: {},
            success: function (res) {
                if(res.status == 200 && res.data.is_bind_end){
                    topBarShowBindVVipInfoHad()
                }else{
                    topBarShowBindVVipInfo()
                }
            }
        });
    }

    function top_bar_checkWansOnFocus(e) {
        top_bar_removeInError(e)
    }

    function top_bar_removeInError(e) {
        var id = $(e).attr('id')
        var new_id = id+'_error';
        $("#"+new_id).html('')
        if ($(e).hasClass('in_error')) {
            $(e).removeClass('in_error')
        }
    }

    function top_bar_changeWansanCaptcha() {
        var captchaUrl = headerSDK.home_apiUrl[headerSDK.env]+'/jsonp/sms/code';

        now = new Date();
        $("#top_bar_wanSanShowCaptcha").attr('src', captchaUrl + '?v=' + now.getTime());
    }

    function top_bar_wansanSendSms() {
        $("#top_bar_wansan_bottom_error").html('')
        var mobile = $("#top_bar_wansan_mobile").val().replace(/\s/g, "");
        var captcha = $("#top_bar_wansan_captcha").val().replace(/\s/g, "");
        var check_ok = true
        if (mobile.length != 11) {
            $("#top_bar_wansan_mobile").addClass('in_error')
            check_ok = false
        }
        if (captcha.length < 3) {
            $("#top_bar_wansan_captcha").addClass('in_error')
            check_ok = false
        }
        if (!check_ok) {
            return
        }
        $.ajax({
            url: headerSDK.home_apiUrl[headerSDK.env]+'/jsonp/sms/send',
            type: 'GET',
            dataType: "jsonp",
            data: {
                mobile: mobile,
                captcha: captcha
            },
            success: function (data) {
                if (data.status == 200) {
                    $("#top_bar_wansan_send_sms").hide();
                    $("#top_bar_wansan_send_sec").show();
                    var id, str, times = 60;
                    $("#top_bar_wansan_send_sec").html('已发送');
                    id = setInterval(function () {
                        str = '已发送(' + times + 's)';
                        $("#top_bar_wansan_send_sec").html(str);
                        times--;
                        if (times <= 0) {
                            $("#top_bar_wansan_send_sec").hide();
                            $("#top_bar_wansan_send_sms").show();
                            clearInterval(id);
                        }
                    }, 1000);
                } else if (data.status == 101) {
                    $("#top_bar_wansan_mobile_error").html('请输入正确手机号吗')
                    $("#top_bar_wansan_mobile").addClass('in_error')
                    top_bar_changeWansanCaptcha();
                } else if (data.status == 102) {
                    $("#top_bar_wansan_captcha_error").html('图片验证码错误')
                    $("#top_bar_wansan_captcha").addClass('in_error')
                    top_bar_changeWansanCaptcha();
                } else if (data.status == 103) {
                    $("#top_bar_wansan_sms_error").html('短信验证码发送次数受限')
                    top_bar_changeWansanCaptcha();
                } else {
                    $("#top_bar_wansan_bottom_error").html(data.msg)

                    top_bar_changeWansanCaptcha();
                }
            }
        });
    }

    function top_bar_wansanSubmit() {
        $("#top_bar_wansan_bottom_error").html('')
        var mobile = $("#top_bar_wansan_mobile").val().replace(/\s/g, "");//手机号
        var sms_code = $("#top_bar_wansan_sms").val().replace(/\s/g, "");//手机验证码

        var wx = $("#top_bar_wansan_wx").val().replace(/\s/g, "");//微信
        var check_ok = true
        if (mobile.length != 11) {
            $("#top_bar_wansan_mobile").addClass('in_error')
            check_ok = false
        }
        if (sms_code.length < 1) {
            $("#top_bar_wansan_sms").addClass('in_error')
            check_ok = false
        }
        if (wx.length < 1) {
            $("#top_bar_wansan_wx").addClass('in_error')
            check_ok = false
        }
        if (!check_ok) {
            return
        }
        var qq = $("#top_bar_wansan_qq").val().replace(/\s/g, "");//QQ

        $.ajax({
            url: headerSDK.home_apiUrl[headerSDK.env]+'/jsonp/sms/wansan',
            type: 'GET',
            dataType: "jsonp",
            data: {
                mobile: mobile,
                code: sms_code,
                wx: wx,
                qq: qq
            },
            success: function (data) {
                if (data.status == '101') {
                    $("#top_bar_wansan_mobile_error").html('请输入正确手机号吗')
                    $("#top_bar_wansan_mobile").addClass('in_error')
                } else if (data.status == '102') {
                    $("#top_bar_wansan_sms_error").html('手机验证码错误')
                    $("#top_bar_wansan_sms").addClass('in_error')
                }else {
                    top_bar_wansanConHide();
                }
            }
        });
    }

    function top_bar_wansanConHide() {
        $('.pop_wanshan_Group').hide();
        $(".pop_wanshan_Group").remove();
        background().hide();
    }
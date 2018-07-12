//页面加载完成执行打点属性写入
$(document).ready(function () {
    var data_loc_id_prex = '0006';
    var data_loc_set = [
        //0:首页 1:积分兑换列表页 2:周边礼包列表页 3:勋章中心列表页  4:积分兑换详情页 5:周边礼包详情页 6:购物车详情 7:订单详情
        ['0000', '1000', '2000', '3000', '4000', '5000', '6000', '7000'],
        //绑定dom
        ['a,.praise', 'a,.praise', 'a,.praise', 'a,.praise',
            'a,.praise', 'a,.praise','a', 'a']
    ];


    $(".pstat").each(function (index) {
        var data_loc_id_middle = data_loc_set[0][loc_i];
        var data_loc_id = data_loc_id_prex + data_loc_id_middle + (index + 1);
        // console.log($(this));
        $(this).find(data_loc_set[1][loc_i]).each(function (childindex) {
            $(this).attr('data_loc_id', data_loc_id);
            $(this).attr('data_id', childindex + 1);
            $(this).attr('event_type', 'click');
            if (!$(this).attr("custom")) {
                $(this).attr('custom', 'nav:' + (childindex + 1));
            }
        });
    });
});

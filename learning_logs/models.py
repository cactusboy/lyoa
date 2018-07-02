from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Topic(models.Model):
    """旅行团的设置"""
    tour_name = models.CharField('旅行团名称', max_length=100)
    text = models.TextField('旅行团备注')
    route1 = models.CharField('行程1', max_length=500, null=True)
    route2 = models.CharField('行程2', max_length=500, null=True)
    route3 = models.CharField('行程3', max_length=500, null=True)
    route4 = models.CharField('行程4', max_length=500, null=True)
    route5 = models.CharField('行程5', max_length=500, null=True)
    date_added = models.DateField('建立时间', auto_now_add=True)
    date_start = models.DateField('出发日期')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """返回模型的字符串表示"""
        return self.tour_name

    # 定义Topic模型的显示名字
    class Meta:
        verbose_name = '旅行团名称'
        # 模型的复数形式
        verbose_name_plural = '旅行团名称'


class Entry(models.Model):
    """参团人员"""
    # 性别选择列表
    GENDER_CHOICES = (
        (u'男', u'男'),
        (u'女', u'女'),
    )
    # 铺位选择列表
    bed_choices = (
        (u'上铺', u'上铺'),
        (u'中铺', u'中铺'),
        (u'下铺', u'下铺'),
    )
    # 外键，一对多关系，on_delete=models.CASCADE是级联删除，verbose_name是显示的名称
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, verbose_name='旅行团名称')
    # TypeError: __init__() missing 1 required positional argument: 'on_delete'
    text = models.TextField('备注')
    date_added = models.DateField('入团时间', auto_now_add=True)
    # 参团人姓名
    name = models.CharField('参团人姓名', max_length=50)
    # 预报来源
    signup = models.CharField('预报来源', max_length=100)
    # 性别
    sex = models.CharField('性别', max_length=2, choices=GENDER_CHOICES)
    # 身份证号
    number = models.CharField('身份证号', max_length=18)
    # 联系电话
    phone = models.CharField('联系电话', max_length=11)
    # 铺位
    bunk = models.CharField('铺位', max_length=4, choices=bed_choices, default='上铺')
    # 结款
    money = models.DecimalField('结款', max_digits=5, decimal_places=2)

    class Meta(object):
        verbose_name_plural = '参团人员'

    def __str__(self):
        """返回模型的字符串表示"""
        return self.name

# Generated by Django 2.0.6 on 2018-07-08 04:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateField(auto_now_add=True, verbose_name='入团时间')),
                ('name', models.CharField(max_length=50, verbose_name='参团人姓名')),
                ('signup', models.CharField(max_length=100, verbose_name='预报来源')),
                ('sex', models.CharField(choices=[('男', '男'), ('女', '女')], max_length=2, verbose_name='性别')),
                ('number', models.CharField(max_length=18, verbose_name='身份证号')),
                ('phone', models.CharField(max_length=11, verbose_name='联系电话')),
                ('bunk', models.CharField(choices=[('上铺', '上铺'), ('中铺', '中铺'), ('下铺', '下铺')], default='上铺', max_length=4, verbose_name='铺位')),
                ('money', models.DecimalField(decimal_places=2, max_digits=8, verbose_name='结款')),
                ('text', models.TextField(verbose_name='备注')),
            ],
            options={
                'verbose_name_plural': '参团人员',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tour_name', models.CharField(max_length=100, verbose_name='旅行团名称')),
                ('text', models.CharField(max_length=200, null=True, verbose_name='旅行团备注')),
                ('route1', models.CharField(max_length=200, null=True, verbose_name='行程1')),
                ('route2', models.CharField(max_length=200, null=True, verbose_name='行程2')),
                ('route3', models.CharField(max_length=200, null=True, verbose_name='行程3')),
                ('route4', models.CharField(max_length=200, null=True, verbose_name='行程4')),
                ('route5', models.CharField(max_length=200, null=True, verbose_name='行程5')),
                ('date_added', models.DateField(auto_now_add=True, verbose_name='建立时间')),
                ('date_start', models.DateField(verbose_name='出发日期')),
                ('img', models.ImageField(max_length=200, upload_to='img', verbose_name='图片')),
                ('img_name', models.CharField(max_length=20, verbose_name='图片名称')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': '旅行团名称',
                'verbose_name_plural': '旅行团名称',
            },
        ),
        migrations.AddField(
            model_name='entry',
            name='topic',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='learning_logs.Topic', verbose_name='旅行团名称'),
        ),
    ]

# Generated by Django 2.0.6 on 2018-07-08 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning_logs', '0002_auto_20180708_1249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='text',
            field=models.CharField(blank=True, default='无', max_length=100, null=True, verbose_name='个人备注'),
        ),
    ]

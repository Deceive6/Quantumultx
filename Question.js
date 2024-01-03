#!name=HyperWeb
#!desc=hyperweb会员解锁
#!homepage=https://yfamily.ml
#!author=ddgksf2013
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/hyperweb.png

^https://zy6kcqa01a.execute-api.us-east-2.amazonaws.com/prod/verifyReceipt url script-response-body https://github.com/deezertidal/private/raw/master/js-backup/Crack/hyperweb.js


# 2023.10.04 部分解锁premium,音质不能设置为超高(建议登录后再打开脚本,重启app等待脚本生效)
# 仓库地址 https://github.com/app2smile/rules
# 功能: 1.去除播放广告 2.歌手/专辑列表正常展示 3.去除随机播放
hostname = spclient.wg.spotify.com
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js
^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/ url script-request-header https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js

项目名称：百度网盘，一刻相册 解锁部分功能
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：非一次性解锁，每次解锁需打开脚本

**************************************

[rewrite_local]

^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js

项目名称：Not Boring 五件套
[ 气氛、天气、小习惯、计时器、计算器 ]
下载地址：https://t.cn/A60e9gAX
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/NotBoring.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/NotBoring.js

项目名称：彩云天气+彩云天气Pro
下载地址：https://t.cn/A66d95hV
版本支持：7.6.0
更新日期：2023-12-02
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
# SVIP地图-48小时预报(方法来源:苍井灰灰)
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

脚本功能：javdb 解锁永久会员
软件版本：1.9.16
下载地址：https://jav.app
脚本作者：Hausd0rff
更新时间：2023-05-26
脚本发布：https://t.me/yqc_123
使用声明：‼️脚本仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
# > javdb 解锁永久会员
^https?:\/\/.*\/api\/v1\/users url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/javbdvipcrack.js
^https?:\/\/.*\/api\/v1\/(movies\/.*\/play|startup) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/javdbvipcrack.js

#!name=AccuWeather
#!desc=AccuWeather解锁会员
#!homepage=https://yfamily.ml
#!author=Marol62926
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/accu.png
[Script]
AccuWeather=type=http-response,pattern=https://app-subscription-proxy.accuweather.com/subscriptions/v1/apple/validate,script-path=https://raw.githubusercontent.com/Marol62926/MarScrpt/main/accuWeather.js,requires-body=1,max-size=0
[MITM]
hostname = api.revenuecat.com,%APPEND% app-subscription-proxy.accuweather.com,zy6kcqa01a.execute-api.us-east-2.amazonaws.com,api.pxxgg.xyz, api.ujvnmkx.cn, jdforrepam.com, api.yijingluowangluo.xyz, api.wwwuh5.cn, api.hechuangxinxi.xyz,*.cyapi.cn, *.caiyunapp.com,pan.baidu.com


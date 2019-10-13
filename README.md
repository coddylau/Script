## 浏览器中使用的脚本

安装Tampermonkey后可使用以下脚本[Tampermonkey官网](https://www.tampermonkey.net/)

将js文件内容复制到脚本页面即可使用

### 默认发送仅自己可见微博

使用帮助：
输入微博后点击空白处即可自动切换为自己可见微博，如果失效重新刷新网页。

如果文本未修改，点击空白处不会触发切换。

[默认发送仅自己可见微博](https://github.com/coddylau/Script/blob/master/post-weibo.js)

### 维基百科免输入验证码进入

用于此镜像地址的维基百科验证码免输入[镜像地址](https://zh.wikipedia.hk.cn/wiki/Wikipedia:%E9%A6%96%E9%A1%B5)

[维基百科验证码免输入](https://github.com/coddylau/Script/blob/master/wiki.js)

### 删除网页canvas标签

部分网站使用canvas占用电脑太多性能，删除这些canvas标签，画布小于300像素的不删除

[删除canvas](https://github.com/coddylau/Script/blob/master/remove-canvas.js)

### 删除微博推送信息

微博推送信息太烦，删除，防止自己走神

[删除微博推送](https://github.com/coddylau/Script/blob/master/weibo-zen.js)

### B 站选中所有 UP 主

用于设置分组时选中所有 UP 主

注意点：进入设置分组页面后需要刷新网页才可以启用

[B 站选中所有 UP 主](https://github.com/coddylau/Script/blob/master/selectAllUp.js)

## NODE中使用的脚本

### 合并同名文件

合并 文本类型文件
```bash
# 使用方法: node merge.js [相对于此文件的目录名称] [文件类型]
# 例子
node merge.js book md
```

[合并文件](https://github.com/coddylau/Script/blob/master/merge.js)

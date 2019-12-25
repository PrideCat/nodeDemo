/* 例子：
	Share({
		title: "title",
		content: "content",
		src: "src",
		url: "",
		shares: [], // 分享列表
		template: "", // 分享链接模板
		info: {} // 每个分享的额外设置
	});
*/
; !window.buildShare && (buildShare = (function () {
    var defaultConfig = ["qzone", "qqweibo", "sinaweibo", "qq"];
    var defaultHTMLTemplate = '<a target="_blank" href="${shareLink}" class="shareBtn ${prefix}_${shareBtnType}" title="${shareBtnTitle}"></a>';

    var defaultPrefix = "shareBtn";
    var defaultShareInfo = {
        qzone: {
            urlTemplate: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&summary=${content}&site=&pics=${src}",
            shareBtnTitle: 'QQ空间',
            shareBtnType: 'qzone',
            prefix: defaultPrefix
        },
        qqweibo: {
            urlTemplate: "http://share.v.t.qq.com/index.php?c=share&a=index&url=${url}&title=${content}&pic=${src}",
            shareBtnTitle: '腾讯微博',
            shareBtnType: 'qqweibo',
            prefix: defaultPrefix
        },
        sinaweibo: {
            urlTemplate: "http://service.weibo.com/share/share.php?url=${url}&title=${content}&pic=${src}",
            shareBtnTitle: '新浪微博',
            shareBtnType: 'sinaweibo',
            prefix: defaultPrefix
        },
        qq: {
            urlTemplate: "http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&desc=&summary=${content}&site=&pics=${src}",
            shareBtnTitle: 'QQ好友',
            shareBtnType: 'qq',
            prefix: defaultPrefix
        },
        baidu: {
            urlTemplate: "http://hi.baidu.com/pub/show/share?url=${url}&title=${title}&content=${content}",
            shareBtnTitle: '百度空间',
            shareBtnType: 'baidu',
            prefix: defaultPrefix
        },
        renren: {
            urlTemplate: "http://widget.renren.com/dialog/share?resourceUrl=${url}&title=${title}&description=${content}&pic=${src}",
            shareBtnTitle: '人人网',
            shareBtnType: 'renren',
            prefix: defaultPrefix
        }
    };
    var defaultData = {
        title: "title",
        content: "content",
        src: "src",
        url: "",
        shares: defaultConfig,
        template: defaultHTMLTemplate,
        info: defaultShareInfo
    };
    function format(str, data) {
        return str.replace(/\${([^{}]*)}/g, function (a, b) {
            return data[b] || "";
        });
    };
    function isArray(data) {
        return Object.prototype.toString.call(data) == "[object Array]";
    };
    // 深复制
    function extend() {
        if (arguments.length <= 1) {
            return arguments[0];
        }
        var obj = arguments[0];
        var data = arguments[1];

        for (var i in data) {
            if (typeof data[i] != "object" || isArray(data[i])) {
                obj[i] = data[i];
            } else {
                obj[i] = extend(obj[i] || {}, data[i]);
            }
        }
        var arr = [].slice.call(arguments, 2);
        arr.unshift(obj);
        return extend.apply(this, arr);;
    };

    var shareFunc = function (config) {
        var def = extend({}, defaultData, config || {});
        def.title = encodeURIComponent(def.title);
        def.content = encodeURIComponent(def.content);
        def.src = encodeURIComponent(def.src);
        def.url = encodeURIComponent(def.url);

        var html = "";
        // 遍历 shares
        for (var i in def.shares) {
            var type = def.shares[i];
            var item = def.info[type];
            if (item) {
                item.shareLink = format(item.urlTemplate, def);
                html += format(def.template, item);
            }
        }
        // 根据 defaultShareInfo 初始化链接
        return html;
    };
    return shareFunc.format = format, shareFunc.extend = extend, shareFunc.defaultData = defaultData, shareFunc;
})());


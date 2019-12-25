~
    function (e, t) {
        var n; ~
            function (n) {
                n.URL = {
                    root: "",
                    getMoreGame: function () {
                        /* return n.dc("more"),
                       "weixin" != n.checkNavigator() || null != n.wxUserInfo && 0 != n.wxUserInfo.subscribe && void 0 != n.wxUserInfo.subscribe ? "http://www.doudou.in/": "http://mp.weixin.qq.com/s?__biz=MzA5Nzk2OTIxNw==&mid=201099443&idx=1&sn=00a1d77cf1458023761bc403ec59b1d5#rd"*/
                        //confirm("111")
                        // try {
                        //     parent.moregame();
                        // } catch (e) { };
                        return "../directions.html";
                    },
                    getConcern: function () {
                        return "http://mp.weixin.qq.com/s?__biz=MzA5Nzk2OTIxNw==&mid=201099443&idx=1&sn=00a1d77cf1458023761bc403ec59b1d5#rd"
                    },
                    appId: "wxf91bab01569cc168"
                }, n.getGameId = function () {
                    var e = location.href;
                    e = e.slice(e.indexOf("://") + 3);
                    var t = e.split("/")[2];
                    return t
                }, n.getGamePath = function () {
                    var e = location.href;
                    return e = e.slice(0, e.lastIndexOf("/") + 1)
                };
                var i = /mobile|Mobile/g.test(navigator.userAgent) && ("createTouch" in document || "ontouchstart" in e),
                    o = i ? "touchstart" : "mousedown",
                    r = i ? "touchmove" : "mousemove",
                    a = i ? "touchend touchcancel" : "mouseup";
                n.eventTouchStart = o,
                    n.eventTouchMove = r,
                    n.eventTouchEnd = a,
                    n.dc = function (t) {
                        // e.Dc_SetButtonClickData && Dc_SetButtonClickData(n.getGameId(), t)
                    },
                    n.checkNavigator = function () {
                        return /mobile|Mobile/g.test(navigator.userAgent) ? /MicroMessenger/i.test(navigator.userAgent) ? "weixin" : e.DDInnerJS ? "doudou" : "mobile" : "pc"
                    },
                    n.getCookie = function (e) {
                        var t = document.cookie.match(new RegExp(";?s*" + encodeURIComponent(e) + "=([^;]*)"));
                        return t ? t[1] : ""
                    },
                    n.setCookie = function (e, t, n) {
                        var i = new Date;
                        i.setDate(i.getDate() + n),
                            document.cookie = e + "=" + escape(t) + (null === n ? "" : ";expires=" + i.toGMTString())
                    },
                    n.wxUserInfo = function () {
                        if ("weixin" == n.checkNavigator() && e == e.top && e.location.href.indexOf("#rd") < 0) {
                            var i = function (t) {
                                var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                                    i = e.location.search.substr(1).match(n);
                                return null != i ? unescape(i[2]) : null
                            },
                                o = function () {
                                    var e = "./getWxUserInfo.json?openId=" + r + "&appType=1&callback=?";
                                    t.getJSON(e,
                                        function (e) {
                                            n.wxUserInfo = e
                                        })
                                };
                            try {
                                var r = n.getCookie.doudouOpenId
                            } catch (a) { }
                            var c = i("code");
                            if (void 0 == r && null == c) e.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf91bab01569cc168&redirect_uri=" + encodeURIComponent(e.location.href.replace("www.doudou.in", "doudou.a0bi.com").replace(/#rd$/g, "")) + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
                            else if (void 0 == r && null != c) {
                                var s = "./getWxUserInfo.json?code=" + c + "&appType=1&callback=?";
                                t.getJSON(s,
                                    function (e) {
                                        try {
                                            e.openid && (n.setCookie("doudouOpenId", e.openid, 90), r = e.openid, o(r))
                                        } catch (t) { }
                                    })
                            } else void 0 != r && o(r)
                        }
                        return null
                    }()
            }(n || (n = {}));
        var n; ~
            function (e) {
                function n(e, t) {
                    this.elemId = e,
                        this.hideClass = t || "bt-hide"
                }
                n.prototype = {
                    beforeShow: function () { },
                    show: function () {
                        this.beforeShow();
                        var e = this;
                        setTimeout(function () {
                            t("#" + e.elemId).removeClass(e.hideClass)
                        },
                            1)
                    },
                    hide: function () {
                        t("#" + this.elemId).addClass(this.hideClass)
                    }
                },
                    e.popupBox = n
            }(n || (n = {}));
        var n; ~
            function (e) {
                e.proxy = function (e, t) {
                    return function () {
                        e.apply(t, arguments)
                    }
                }
            }(n || (n = {}));
        var myScore;
        var n; ~
            function (e) {
                var n = function (e) {
                    this.__publisher__ = e
                };
                n.prototype = {
                    on: function (t, n) {
                        this.__publisher__.on(t, e.proxy(n, this))
                    },
                    fire: function (e) {
                        this.__publisher__.trigger(e, [].slice.call(arguments, 1))
                    },
                    off: function (t, n) {
                        n ? this.__publisher__.off(t, e.proxy(n, this)) : this.__publisher__.off(t)
                    }
                },
                    e.makePublisher = function (e) {
                        var i = typeof e,
                            o = new n(t("<div></div>"));
                        "function" == i ? (e.prototype.__publisher__ = o.__publisher__, t.extend(e.prototype, n.prototype)) : "object" == i && (e.__publisher__ = o.__publisher__, t.extend(e, n.prototype))
                    }
            }(n || (n = {}));
        var n; ~
            function (e) {
                t(function () {
                    ~
                        function () {
                            // var t = document.domain;
                            // t.indexOf("4399") < 0 && (location.href = e.URL.root + "/" + e.getGameId() + "/")
                        }()
                })
            }(n || (n = {}));
        var n; ~
            function (e) {
                function t() {
                    return i || (i = document.body || document.getElementsByTagName("body")[0]),
                        i
                }
                function n() {
                    return document.createElement("div")
                }
                var i;
                e.getDomBody = t,
                    e.getNewDiv = n
            }(n || (n = {}));
        var n; ~
            function (e) {
                var n = "bt-lock-screen",
                    i = function (n) {
                        var i = e.getNewDiv();
                        i.id = n;
                        var o = e.getDomBody();
                        return o.appendChild(i),
                            t(i)
                    },
                    o = function (t) {
                        e.popupBox.call(this, t || n)
                    };
                o.__super__ = e.popupBox,
                    o.prototype = t.extend({},
                        e.popupBox.prototype, {
                        beforeShow: function () {
                            var e = this.getElem();
                            e.size() <= 0 && (e = i(this.elemId), e.addClass("bt-lock-screen bt-animation bt-hide")),
                                e.css("height", document.height)
                        },
                        remove: function () {
                            var e = this.getElem();
                            e.size() > 0 && (e.addClass("bt-hide"), setTimeout(function () {
                                e.remove()
                            },
                                200))
                        },
                        getElem: function () {
                            return t("#" + this.elemId)
                        }
                    }),
                    e.lockScreen = function (e) {
                        return new o(e)
                    }
            }(n || (n = {}));
        var n; ~
            function (e) {
                var n = {
                    id: "bt-advertisement",
                    html: "广告",
                    time: 1500
                },
                    i = function (i) {
                        var o = t.extend({},
                            n, i || {}),
                            r = t("#" + o.id),
                            a = new e.lockScreen(o.lockId);
                        if (r.size() <= 0) {
                            var c = t(e.getNewDiv()).attr({
                                id: o.id
                            }).addClass(o.id),
                                s = o.html;
                            c.html(s),
                                e.getDomBody().appendChild(c[0]),
                                r = c
                        }
                        this.event = o.id + "_timeup";
                        var d = this;
                        if (o.time > 0) {
                            var l = this.event;
                            this.off(l),
                                r.data("timer", setTimeout(function () {
                                    r.remove(),
                                        a.hide(),
                                        d.fire(l),
                                        o = null,
                                        this.elem = this.lock = d.show = d.hide = null
                                },
                                    o.time <= 0 ? 1500 : o.time))
                        }
                        this.elem = r,
                            this.lock = a,
                            this.show = function (e) {
                                e && this.elem.html(e),
                                    this.elem.removeClass("bt-hide"),
                                    this.lock.show()
                            },
                            this.hide = function () {
                                this.elem.addClass("bt-hide"),
                                    this.lock.hide()
                            },
                            this.remove = function () {
                                this.lock.remove(),
                                    this.elem.remove()
                            }
                    };
                e.makePublisher(i),
                    e.advertisement = function (e) {
                        return new i(e)
                    }
            }(n || (n = {}));
        var n; ~
            function (e) {
                var i = null,
                    o = null,
                    r = function (r, a) {
                        if (r > 0 && !i && (i = t(n.getNewDiv()), i.addClass("bt-game-loading"), i.html('<table><tr><td><div class="bt-text"></div></td></tr></table>'), e.getDomBody().appendChild(i[0]), o = i.find(".bt-text")), i) if (a) o.html(a);
                        else {
                            var c = Math.round(100 * r);
                            o.html("加载进度:" + c + "%")
                        }
                        r >= 1 && (i && i.remove(), i = null)
                    };
                e.gameLoading = r
            }(n || (n = {}));
        var n; ~
            function (t) {
                function n(t, n) {
                    var i, o = e.innerWidth,
                        r = e.innerHeight;
                    if (o >= t && r >= n);
                    else if (t > o && n > r) {
                        var a = o / t,
                            c = r / n;
                        c >= a ? (i = t, t = o, n = n * t / i) : (i = n, n = r, t = t * n / i)
                    } else t > o ? (i = t, t = o, n = n * o / i) : n > r && (i = n, n = r, t = t * r / i);
                    var s = (r - n) / 2,
                        d = (o - t) / 2;
                    return {
                        width: t,
                        height: n,
                        top: s,
                        left: d
                    }
                }
                function i(e, t, i, o, r) {
                    var a = n(t, i);
                    switch (e.css({
                        width: a.width,
                        height: a.height,
                        top: "center" == o ? a.top : "left" == o ? 0 : o,
                        left: "center" == r ? a.left : "left" == r ? 0 : r
                    }), o) {
                        case "top":
                            e.css({
                                top:
                                    0
                            });
                            break;
                        case "center":
                            e.css({
                                top:
                                    a.top
                            });
                            break;
                        case "bottom":
                            e.css({
                                bottom:
                                    0
                            });
                            break;
                        default:
                            e.css({
                                top:
                                    o
                            })
                    }
                    switch (r) {
                        case "left":
                            e.css({
                                left:
                                    0
                            });
                            break;
                        case "center":
                            e.css({
                                left:
                                    a.left
                            });
                            break;
                        case "right":
                            e.css({
                                right:
                                    0
                            });
                            break;
                        default:
                            e.css({
                                left:
                                    r
                            })
                    }
                    e.trigger("resizePlayArea", [a])
                }
                function o(e, n, o, r, a) {
                    t.checkHScreen(function () {
                        setTimeout(function () {
                            i(e, n, o, r, a)
                        },
                            500)
                    })
                }
                t.resizePlayArea = o
            }(n || (n = {}));
        var n; ~
            function () { }(n || (n = {}));
        var n; ~
            function (t) {
                function n(n) {
                    var i = e.parent.window;
                    i.document;
                    try {
                        var o = function () {
                            i.setTimeout(function () {
                                i.confirm('关注微信，就可以收藏这个游戏哦！') && (n ? n() : i.location.href = t.URL.getConcern())
                            },
                                200)
                        };
                        e.top == e ? (null == t.wxUserInfo || t.wxUserInfo && (0 == t.wxUserInfo.subscribe || void 0 == t.wxUserInfo.subscribe)) && o() : i.G && i.G.wxUserInfo && i.G.wxUserInfo.info && 0 == i.G.wxUserInfo.info.subscribe && o()
                    } catch (r) { }
                }
                t.attentOurGame = n
            }(n || (n = {}));
        var n; ~
            function (e, t) {
                function n(t, n) {
                    n || (e.addEventListener("orientationchange",
                        function () {
                            i(t)
                        }), e.addEventListener("resize",
                            function () {
                                i(t)
                            })),
                        i(t)
                }
                var i = function (t) {
                    t && t(e.innerWidth > e.innerHeight)
                };
                t.checkHScreen = n
            }(e.top || e, n || (n = {}));
        var n; ~
            function (i) {
                var o = function (t, n) {
                    return e.DDInnerJS ? (DDInnerJS.setScreenLandScape && DDInnerJS.setScreenLandScape(), void 0) : (this.myCallback = n, this.tipsCount = 0, i.checkHScreen(i.proxy(this.callback, this), !1), t && (this.once = t), void 0)
                };
                o.prototype = {
                    hscreen: function () {
                        this.buildScreen(),
                            this.once && this.tipsCount <= 0 ? this.screen && this.screen.show() : this.once || this.screen && this.screen.show(),
                            this.tipsCount++
                    },
                    vscreen: function () {
                        this.screen && this.screen.hide(),
                            this.myCallback && this.myCallback(this.tipsCount)
                    },
                    getScreenOption: function () {
                        return {
                            id: "bt-h-scrren",
                            html: "<table><tr><td><img class='bt-h-screen-img' src='" + i.URL.root + "./common/bt-play-h-screen.png' /></td></tr></table>",
                            time: 0,
                            lockId: "bt-hide-lock"
                        }
                    },
                    buildScreen: function () {
                        !this.screen && (this.screen = n.advertisement(this.getScreenOption()))
                    },
                    callback: function (e) {
                        e ? this.vscreen() : this.hscreen()
                    }
                };
                var r = function (t, n) {
                    return e.DDInnerJS ? (DDInnerJS.setScreenLandPortrait && DDInnerJS.setScreenLandPortrait(), void 0) : (o.call(this, t, n), void 0)
                };
                r.__super__ = o,
                    r.prototype = t.extend({},
                        o.prototype, {
                        hscreen: function () {
                            o.prototype.vscreen.call(this)
                        },
                        vscreen: function () {
                            o.prototype.hscreen.call(this)
                        },
                        getScreenOption: function () {
                            return {
                                id: "bt-v-scrren",
                                html: "<table><tr><td><img class='bt-v-screen-img' src='" + i.URL.root + "./common/bt-play-v-screen.png' /></td></tr></table>",
                                time: 0,
                                lockId: "bt-hide-lock"
                            }
                        }
                    }),
                    i.onlyHScreen = function (e, t) {
                        return new o(e, t)
                    },
                    i.onlyVScreen = function (e, t) {
                        return new r(e, t)
                    }
            }(n || (n = {}));
        var n; ~
            function (e) {
                function t() { }
                e.playLogoAdv = t
            }(n || (bgGame = {})),
            function (e) {
                e.getScript = function (e, t) {
                    var n = document.createElement("script");
                    n.async = "async";
                    n.src = e;
                    t && (n.onload = t);
                    document.getElementsByTagName("head")[0].appendChild(n)
                }
            }(t);
        var n; ~
            function (n) {
                function i() {
                    var e = n.advertisement({
                        id: c,
                        html: "<img class='bt-play-share-tip-img' src='" + n.URL.root + "./common/bt-play-share-tip.png' />",
                        time: 0
                    });
                    e.show(),
                        setTimeout(function () {
                            e.elem.on(n.eventTouchStart,
                                function () {
                                    return e.remove(),
                                        e = null,
                                        !1
                                })
                        },
                            500)
                }
                function o() {
                    DDInnerJS.setShare("4399.com", dataForWeixin.title, dataForWeixin.url, dataForWeixin.src),
                        DDInnerJS.share()
                }
                function r() {
                    setTimeout(function () {
                        if (s) {
                            //var o = '<div class="bt-sysAlertWin tC" id="bt-shareWin">						<div class="bt-shareWin">							<div class="hd tC">								分享至：							</div>							<div class="bd">								<div id="bt-shareWrap_js" class="tC"></div>							</div>						</div>					</div>					<div id="bt-lockWindow" class="lockWindow"></div>';
                            var o = '';
                            t("body").append(o);
                            var r, a = document.title,
                                c = document.body || t("body")[0],
                                d = Math.max(c.clientHeight, e.innerHeight),
                                l = Math.max(c.clientWidth, e.innerWidth),
                                u = t("#bt-lockWindow"),
                                h = ["sinaweibo", "qzone", "qq", "renren"],
                                f = ["sinaweibo", "qzone", "qq"],
                                m = {},
                                p = {
                                    title: a,
                                    content: a,
                                    url: location.href,
                                    shares: f,
                                    src: dataForWeixin.src,
                                    // template: '<div class="shareBtn ${prefix}_${shareBtnType}"><a target="_blank" href="${shareLink}" title="${shareBtnTitle}"></a><span class="shareTxt tC">${shareBtnTitle}</span></div>'
                                    template: ''
                                },
                                v = n.URL.root + "/common/qrcode.jpg",
                                g = function (e, t) {
                                    var n = buildShare.extend({},
                                        p, t);
                                    return "sinaweibo" != e || t.gameIcon || (n.src = encodeURIComponent(t.src ? t.src : v)),
                                        n
                                },
                                b = function (e, t, n) {
                                    return e.replace(/\${([^{}]*)}/g,
                                        function (e, i) {
                                            return t[i] ? n ? encodeURIComponent(t[i]) : t[i] : e
                                        })
                                };
                            if (m.sinaweibo = {
                                urlTemplate: b(buildShare.defaultData.info.sinaweibo.urlTemplate, {
                                    src: encodeURIComponent(v)
                                },
                                    !0)
                            },
                                dataForWeixin.platform) for (platform in dataForWeixin.platform) {
                                    var w;
                                    h.indexOf(platform) >= 0 && (w = g(platform, dataForWeixin.platform[platform]), m[platform] = {
                                        urlTemplate: b(buildShare.defaultData.info[platform].urlTemplate, w, !0)
                                    }),
                                        p.shares.indexOf(platform) >= 0 || p.shares.push(platform)
                                }
                            var x = {};
                            t.extend(x, p, {
                                info: m
                            }),
                                r = buildShare(x),
                                t("#bt-shareWrap_js").html(r),
                                u.css("height", d).show(),
                                t("#bt-shareWin").css("display", "inline-block");
                            var _ = t("#bt-shareWin .bt-shareWin").width(),
                                k = l / _;
                            1 > k && t("#bt-shareWin .bt-shareWin").css("-webkit-transform", "translate(" + Math.floor(.05 * l) + "px,0) scale(" + (.9 * k).toFixed(2) + ")"),
                                u.on(n.eventTouchStart,
                                    function () {
                                        u.remove(),
                                            t("#bt-shareWin").remove()
                                    })
                        } else i()
                    },
                        100)
                }

                function a() {
                    var a = e.parent.window,
                        c = a.document;
                    t(c).find("#shareBtn");
                    //a.gameConsole && a.gameConsole.clickShareBtn ? a.gameConsole.clickShareBtn() : ("weixin" == n.checkNavigator() ? i() : "doudou" == n.checkNavigator() ? o() : r(), n.dc("share"))
                    //console.log("e.playScoreMsg :" + myScore);
                    var str = myScore;
                    try { parent.__4399finishgame(str); } catch (e) { }
                }
                var c = "bt-play-share-tip",
                    s = !1;
                t.getScript(n.URL.root + "./common/share.js",
                    function () {
                        s = !0
                    }),
                    n.playShareTip = a
            }(n || (n = {}));
        var n; ~
            function (e) {
                function t(t) {
                    //confirm("111")
                    // confirm(t) //&&
                    //e.playShareTip()
                    myScore = t;

                }
                e.playScoreMsg = t
            }(n || (n = {}));
        var n; ~
            function (n) {
                var i = e.parent.window,
                    o = i.document,
                    r = 0,
                    a = t(document).find("link[rel='shortcut icon']").attr("href");
                a = (- 1 == a.search("http") ? n.getGamePath() : "") + a;
                var c = {
                    width: "66",
                    src: a,
                    url: i.location.href.replace("isPreview=true", "isPreview=false"),
                    title: document.title,
                    desc: document.title,
                    callback: function () {
                        0 >= r && n.attentOurGame(),
                            r++ ,
                            n.dc("realshare")
                    }
                };
                e.dataForWeixin = c,
                    i.DDInnerJS && i.DDInnerJS.setShare("4399.com", c.title, c.url, c.src);
                var s = function () {
                    i.WeixinJSBridge.on("menu:share:appmessage",
                        function () {
                            i.WeixinJSBridge.invoke("sendAppMessage", {
                                img_url: c.src,
                                img_width: c.width,
                                img_height: c.width,
                                link: c.url,
                                desc: c.desc,
                                title: c.title
                            },
                                function (e) {
                                    c.callback(e)
                                })
                        }),
                        i.WeixinJSBridge.on("menu:share:timeline",
                            function () {
                                i.WeixinJSBridge.invoke("shareTimeline", {
                                    img_url: c.src,
                                    img_width: c.width,
                                    img_height: c.width,
                                    link: c.url,
                                    desc: c.desc,
                                    title: c.title
                                },
                                    function (e) {
                                        c.callback(e)
                                    })
                            }),
                        i.WeixinJSBridge.on("menu:share:weibo",
                            function () {
                                i.WeixinJSBridge.invoke("shareWeibo", {
                                    content: c.title,
                                    url: c.url
                                },
                                    function (e) {
                                        c.callback(e)
                                    })
                            }),
                        i.WeixinJSBridge.on("menu:share:facebook",
                            function () {
                                i.WeixinJSBridge.invoke("shareFB", {
                                    img_url: c.src,
                                    img_width: c.width,
                                    img_height: c.width,
                                    link: c.url,
                                    desc: c.desc,
                                    title: c.title
                                },
                                    function (e) {
                                        c.callback(e)
                                    })
                            })
                };
                "undefined" == typeof i.WeixinJSBridge ? o.addEventListener ? o.addEventListener("WeixinJSBridgeReady", s, !1) : o.attachEvent && (o.attachEvent("WeixinJSBridgeReady", s), o.attachEvent("onWeixinJSBridgeReady", s)) : s(),
                    n.setShare = function (e) {
                        c.platform && (c.platform = void 0),
                            t.extend(c, e || {}),
                            e && e.desc || (c.desc = c.title),
                            o.title = document.title = c.title
                    }
            }(n || (n = {}));
        var n; ~
            function (e) {
                var t = e.getGameId();
                if (t) {
                    var n = new Image;
                    n.src = "./playGame.json?gameId=" + e.getGameId()
                }
            }(n || (n = {}));
        var n; ~
            function (e) {
                var n = function (n) {
                    try {
                        if (n = parseFloat(n), isNaN(n)) return;
                        var i = "doudou_" + e.getCookie("dduid") + "_" + e.getGameId(),
                            o = parseFloat(localStorage[i]);
                        if (!isNaN(o) && o >= n) return;
                        localStorage[i] = n,
                            t.getJSON("./recordPlayedGames.json?callback=?", {
                                gameId: e.getGameId(),
                                highScore: n
                            },
                                function () { })
                    } catch (r) { }
                };
                e.setHighScore = n
            }(n || (n = {})),
            e.btGame = n
    }(window, $);
(function () {
    var a = Math.abs;
    require = function b(d, c, a) {
        function e(g, h) {
            if (!c[g]) {
                if (!d[g]) {
                    var j = "function" == typeof require && require;
                    if (!h && j)
                        return j(g, !0);
                    if (f)
                        return f(g, !0);
                    var k = new Error("Cannot find module '" + g + "'");
                    throw k.code = "MODULE_NOT_FOUND",
                    k;
                }
                var i = c[g] = {
                    exports: {}
                };
                d[g][0].call(i.exports, function (a) {
                    return e(d[g][1][a] || a);
                }, i, i.exports, b, d, c, a);
            }
            return c[g].exports;
        }
        for (var f = "function" == typeof require && require, g = 0; g < a.length; g++)
            e(a[g]);
        return e;
    }({
        Drag013: [function (b, c) {
            "use strict";
            cc._RF.push(c, "2d047Z1wltJJ4g0kyAdaS1u", "Drag013"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        target: {
                            default: null,
                            type: cc.Node
                        },
                        initPos: null
                    },
                    onLoad: function () {
                        this.registerEvent(),
                            this.initPos = this.node.getPosition();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function (b) {
                        var c = b.getLocation()
                            , d = this.node.parent.convertToNodeSpaceAR(c)
                            , e = this.target.getPosition();
                        100 > a(d.x - e.x) && 100 > a(d.y - e.y) ? (this.node.parent.getComponent("Level013").showRight(),
                            this.node.position = e) : this.node.position = this.initPos;
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag015: [function (b, c) {
            "use strict";
            cc._RF.push(c, "3d80fbF8T5LX5OfJER5pnJg", "Drag015"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        target: {
                            default: null,
                            type: cc.Node
                        },
                        initPos: null
                    },
                    onLoad: function () {
                        this.registerEvent(),
                            this.initPos = this.node.getPosition();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function (b) {
                        var c = b.getLocation()
                            , d = this.node.parent.convertToNodeSpaceAR(c)
                            , e = this.target.getPosition();
                        100 > a(d.x - e.x) && 100 > a(d.y - e.y) ? (this.node.position = e,
                            this.scheduleOnce(function () {
                                this.node.parent.getComponent("Level015").isReady = !0;
                            }, .02)) : (this.node.position = this.initPos,
                                this.node.parent.getComponent("Level015").isReady = !1);
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag023: [function (b, c) {
            "use strict";
            cc._RF.push(c, "63e41zkSihJN4E8mvGd29kk", "Drag023"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1,
                        isTarget: !1,
                        otherRect: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () {
                        this.finished || this.isTarget && 110 > a(this.node.position.x - this.otherRect.position.x) && 40 > a(this.node.position.y - this.otherRect.position.y) && (this.node.position = this.otherRect.position,
                            this.finished = !0,
                            this.node.parent.parent.getComponent("Level023").showRight());
                    },
                    onEventEnd: function () {
                        this.finished || this.isTarget && 110 > a(this.node.position.x - this.otherRect.position.x) && 40 > a(this.node.position.y - this.otherRect.position.y) && (this.node.position = this.otherRect.position,
                            this.finished = !0,
                            this.node.parent.parent.getComponent("Level023").showRight());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag024: [function (a, b) {
            "use strict";
            cc._RF.push(b, "0ff21lkj3BJQ6BDepTpYpi3", "Drag024"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () {
                        this.finished || 100 > this.node.position.x && 100 > this.node.position.y && (this.finished = !0,
                            this.node.active = !1,
                            this.node.parent.getComponent("Level024").drop());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag027: [function (b, c) {
            "use strict";
            cc._RF.push(c, "13a2eTyHaJAjIIOwl0i3291", "Drag027"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1,
                        midTarget: {
                            default: null,
                            type: cc.Node
                        },
                        otherTarget: {
                            default: null,
                            type: cc.Node
                        },
                        black: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () {
                        this.finished || 50 > a(this.node.position.x - this.midTarget.position.x) && 50 > a(this.node.position.y - this.midTarget.position.y) && 70 > a(this.node.position.x - this.otherTarget.position.x) && 70 > a(this.node.position.y - this.otherTarget.position.y) && (this.finished = !0,
                            this.black.active = !0,
                            this.node.parent.getComponent("Level027").showRight());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag028: [function (b, c) {
            "use strict";
            cc._RF.push(c, "5b807fItWNCW7t1wXyOEDa0", "Drag028"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1,
                        isKnife: !1,
                        me: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () {
                        this.finished || this.isKnife && 50 > a(this.node.position.x - this.me.position.x) && 50 > a(this.node.position.y - this.me.position.y) && (this.finished = !0,
                            this.node.position = this.me.position,
                            this.node.parent.getComponent("Level028").showRight());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Drag029: [function (b, c) {
            "use strict";
            cc._RF.push(c, "7255eAmUHxHv6oYy8H7GuCI", "Drag029"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1,
                        isPaper: !1,
                        coin: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () {
                        this.finished || this.isPaper && 50 > a(this.node.position.x - this.coin.position.x) && 50 > a(this.node.position.y - this.coin.position.y) && (this.finished = !0,
                            this.node.position = this.coin.position,
                            this.node.parent.getComponent("Level029").showRight());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Draggable008: [function (a, b) {
            "use strict";
            cc._RF.push(b, "b3990KA125NM4Og00a5ssmt", "Draggable008"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () {
                        this.finished || -250 > this.node.getPositionY() && (this.finished = !0,
                            this.node.parent.getComponent("Level008").showRight());
                    },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Draggable: [function (a, b) {
            "use strict";
            cc._RF.push(b, "82ca5osM+FDxbiRdbOdtA/q", "Draggable"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function (a) {
                        var b = a.getLocation()
                            , c = this.node.parent.convertToNodeSpaceAR(b);
                        this.node.position = c;
                    },
                    onEventCancel: function () { },
                    onEventEnd: function () { },
                    update: function () { },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Hold004: [function (a, b) {
            "use strict";
            cc._RF.push(b, "cb41fvvVGdEXbsgb4HbV2rh", "Hold004"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        timer: 0,
                        isTouching: !1,
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () {
                        this.isTouching = !0;
                    },
                    onEventMove: function () { },
                    onEventCancel: function () {
                        this.isTouching = !1;
                    },
                    onEventEnd: function () {
                        this.isTouching = !1;
                    },
                    update: function (a) {
                        this.finished || (this.isTouching ? this.timer += a : this.timer = 0,
                            2 < this.timer && (this.finished = !0,
                                this.node.parent.getComponent("Level004").showRight()));
                    },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Hold012: [function (a, b) {
            "use strict";
            cc._RF.push(b, "6bada+dofxHuZMnpsaFioNI", "Hold012"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        index: 0
                    },
                    onLoad: function () {
                        this.registerEvent(),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUP, this);
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () {
                        0 == this.index ? (this.node.parent.parent.getComponent("Level012").btn_1_isTouching = !0,
                            cc.log(this.node.parent.parent.getComponent("Level012").btn_1_isTouching)) : (this.node.parent.parent.getComponent("Level012").btn_2_isTouching = !0,
                                cc.log(this.node.parent.parent.getComponent("Level012").btn_2_isTouching));
                    },
                    onEventMove: function () { },
                    onEventCancel: function () {
                        0 == this.index ? (this.node.parent.parent.getComponent("Level012").btn_1_isTouching = !1,
                            cc.log(this.node.parent.parent.getComponent("Level012").btn_1_isTouching)) : (this.node.parent.parent.getComponent("Level012").btn_2_isTouching = !1,
                                cc.log(this.node.parent.parent.getComponent("Level012").btn_2_isTouching));
                    },
                    onEventEnd: function () {
                        0 == this.index ? (this.node.parent.parent.getComponent("Level012").btn_1_isTouching = !1,
                            cc.log(this.node.parent.parent.getComponent("Level012").btn_1_isTouching)) : (this.node.parent.parent.getComponent("Level012").btn_2_isTouching = !1,
                                cc.log(this.node.parent.parent.getComponent("Level012").btn_2_isTouching));
                    },
                    onKeyDown: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.node.parent.parent.getComponent("Level012").btn_1_isTouching = !0;
                                break;

                            case cc.KEY.z:
                                this.node.parent.parent.getComponent("Level012").btn_2_isTouching = !0;
                        }
                    },
                    onKeyUP: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.node.parent.parent.getComponent("Level012").btn_1_isTouching = !1;
                                break;

                            case cc.KEY.z:
                                this.node.parent.parent.getComponent("Level012").btn_2_isTouching = !1;
                        }
                    },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Level0010: [function (a, b) {
            "use strict";
            cc._RF.push(b, "61845pgjk5OCJkUV/dYjL1+", "Level0010"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("仔细看右下角，虽然不是很清楚。。。", "这都找得到，施主果然好眼力！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level0011: [function (a, b) {
            "use strict";
            cc._RF.push(b, "b5b0cBWKFND44Cj2TbwcXTe", "Level0011"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("点击文字’亚历山大‘", "策划：皮这一下，我很开心！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level001: [function (a, b) {
            "use strict";
            cc._RF.push(b, "573aflvhiJHxYHYVFwmVWsL", "Level001"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("大象咯，大象被画得最小！", "画得小也是小呀！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level002: [function (a, b) {
            "use strict";
            cc._RF.push(b, "56c39ehLPpJ15zduLpWUNV/", "Level002"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("这是第几题了，满屏幕找找看！", "同样是九年义务教育，你为何如此优秀！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level003: [function (a, b) {
            "use strict";
            cc._RF.push(b, "fb402V9ApZGZZp2RVQ4yVzq", "Level003"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("左下角的兔子可以拖动，试试看吧！", "这都找得到，施主真是好眼力呀！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level004: [function (a, b) {
            "use strict";
            cc._RF.push(b, "26b2ewgQy1DRKzHojanZdpW", "Level004"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        line: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("用手按钮体温计底部，多按一会儿！", "体温多少，量一下自然就知道咯！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel(),
                            this.showLine();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    },
                    showLine: function () {
                        this.line.active = !0;
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level005: [function (a, b) {
            "use strict";
            cc._RF.push(b, "96a63lPHqdOubDklXyqXg2f", "Level005"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        numLabel: {
                            default: null,
                            type: cc.Label
                        },
                        clickTimes: 0
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("点10下，别被右面的数字误导！", "同样是腰间盘，为何你如此突出！"),
                            this.clickTimes = 0,
                            this.numLabel.string = "" + this.clickTimes;
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    onRedBtnClick: function () {
                        this.clickTimes++ ,
                            this.numLabel.string = 7 >= this.clickTimes ? "" + this.clickTimes : "" + (this.clickTimes - 1);
                    },
                    onPassBtnClick: function () {
                        10 == this.clickTimes ? this.OnRightBtnClick() : (this.clickTimes = 0,
                            this.numLabel.string = "" + this.clickTimes,
                            this.wrong.active = !0,
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3));
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level006: [function (a, b) {
            "use strict";
            cc._RF.push(b, "c204eQWk4dGHZJlvpdc5Yl2", "Level006"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("用手指在脏的地方擦几下就好啦！", "一点儿灰尘，用手擦擦就好了嘛！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level007: [function (a, b) {
            "use strict";
            cc._RF.push(b, "19191aImAJJf64C/GZQyWUu", "Level007"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        stars: {
                            default: [],
                            type: [cc.Node]
                        },
                        starLabel: {
                            default: null,
                            type: cc.Label
                        },
                        nextBtn: {
                            default: null,
                            type: cc.Node
                        },
                        shareBtn: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("这么好玩儿的游戏，给个五星推荐吧！", "不管有没有分享，谢谢你玩儿我们的游戏！"),
                            this.nextBtn.active = !1,
                            this.shareBtn.active = !1;
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    onStarBtnClick: function (a, b) {
                        for (var c = 0; c < this.stars.length; c++)
                            this.stars[c].active = c <= b;
                        0 == b ? (this.starLabel.string = "别这样嘛！",
                            this.nextBtn.active = !1,
                            this.shareBtn.active = !1) : 1 == b ? (this.starLabel.string = "再多给几颗星嘛，谢谢啦！",
                                this.nextBtn.active = !1,
                                this.shareBtn.active = !1) : 2 == b ? (this.starLabel.string = "嗯，还不错！",
                                    this.nextBtn.active = !1,
                                    this.shareBtn.active = !1) : 3 == b ? (this.starLabel.string = "接近咯……",
                                        this.nextBtn.active = !1,
                                        this.shareBtn.active = !1) : 4 == b && (this.starLabel.string = "顺便推荐给下伙伴们吧！冰天雪地裸体跪求！",
                                            this.nextBtn.active = !0,
                                            this.shareBtn.active = !0);
                    },
                    onShareBtnClick: function () {
                        console.log("share");
                        //分享
                        if (window.h5api) {
                            // window.h5api.share();
                        }
                        // wx.shareAppMessage({
                        //     title: "这么搞笑的游戏谁做的，真是太贱了！",
                        //     imageUrl: "res/share.png"
                        // });
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level008: [function (a, b) {
            "use strict";
            cc._RF.push(b, "8f481HXusZGTbW2gkZv1inV", "Level008"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("手指按住电梯往下拖拽，试试看吧！", "这个电梯有点儿恐怖，我们换个电梯坐吧！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level009: [function (a, b) {
            "use strict";
            cc._RF.push(b, "af93fxxpPRDZ5pTivtMCedj", "Level009"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        finished: !1,
                        spider: cc.Node
                    },
                    onLoad: function () {
                        var a = this;
                        setTimeout(() => {
                            a.showRight();
                            a.finished = !0;
                        }
                            , 2000);
                        // wx.onAccelerometerChange(function(b) {
                        //     if (.5 < b.x || -.5 > b.x) {
                        //         if (a.finished) return;
                        //         a.showRight(), wx.vibrateShort(), a.finished = !0;
                        //     }
                        // }), 
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    onDestroy: function () {
                        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    onKeyDown: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.showRight();
                                break;

                            case cc.KEY.z:
                        }
                    },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("摇一摇手机，把它摇下去！", "蜘蛛：摇什么摇，老子睡午觉呢！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel(),
                            this.spider.active = !1;
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level010: [function (a, b) {
            "use strict";
            cc._RF.push(b, "1f991oJ3AJGUastNCrzx6PY", "Level010"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        num1_label: {
                            default: null,
                            type: cc.Label
                        },
                        num2_label: {
                            default: null,
                            type: cc.Label
                        },
                        num1: 0,
                        num2: 0
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("别被图中的钟表迷惑，看看手机，现在到底是几点了！", "看来以后看时间，还是得找个准的表！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    },
                    onAdd1_Click: function () {
                        this.num1++ ,
                            this.num1 = 23 < this.num1 ? 23 : this.num1,
                            this.num1_label.string = "" + this.num1;
                    },
                    onAdd2_Click: function () {
                        this.num2++ ,
                            this.num2 = 59 < this.num2 ? 59 : this.num2,
                            this.num2_label.string = "" + this.num2;
                    },
                    onMinus1_Click: function () {
                        this.num1-- ,
                            this.num1 = 0 > this.num1 ? 0 : this.num1,
                            this.num1_label.string = "" + this.num1;
                    },
                    onMinus2_Click: function () {
                        this.num2-- ,
                            this.num2 = 0 > this.num2 ? 0 : this.num2,
                            this.num2_label.string = "" + this.num2;
                    },
                    onCheckBtnClick: function () {
                        var a = new Date()
                            , b = a.getHours()
                            , c = a.getMinutes();
                        b == this.num1 && c == this.num2 ? this.showRight() : (this.wrong.active = !0,
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3));
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level011: [function (a, b) {
            "use strict";
            cc._RF.push(b, "75b078lf7NCq7sjaxnX7FHj", "Level011"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        uiManager: {
                            default: null,
                            type: null
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.uiManager.setHintAndPassedLabel("分享给朋友们，让别人知道你有多厉害！", "本关卡没有pass string!");
                    },
                    onShareBtnClick: function () {
                        console.log("这么搞笑的游戏谁做的，真是太贱了！")
                        if (window.h5api) {
                            // window.h5api.share();
                            // window.location.href = "https://www.baidu.com/";
                        }
                        // wx.shareAppMessage({
                        //     title: "这么搞笑的游戏谁做的，真是太贱了！",
                        //     imageUrl: "res/share.png"
                        // });
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level012_1: [function (a, b) {
            "use strict";
            cc._RF.push(b, "65722/4pV9FUIFWPhe54I4G", "Level012_1"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("离‘我们’两个字最近的‘水果’。", "玉米不是水果哦！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level012: [function (a, b) {
            "use strict";
            cc._RF.push(b, "244delQyY9GD7sniTjXHfW0", "Level012"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        btn_1_isTouching: !1,
                        btn_2_isTouching: !1,
                        finished: !1,
                        lightedLamp: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("人体可以导电，两手同时抓住电线两头试试！", "危险警告：生活中不要真的用手抓电线，以免触电！");
                    },
                    update: function () {
                        this.finished || this.btn_1_isTouching && this.btn_2_isTouching && (this.finished = !0,
                            this.showRight());
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel(),
                            this.lightedLamp.active = !0;
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level013: [function (a, b) {
            "use strict";
            cc._RF.push(b, "2a775zvBVVNZI7Neyh+clza", "Level013"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把气球拖拽给文字‘小明’", "图中那个男孩不叫小明哦！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level014: [function (a, b) {
            "use strict";
            cc._RF.push(b, "924a3REGX9PoputVVTm4Xn2", "Level014"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        numLabel: {
                            default: null,
                            type: cc.Label
                        },
                        carNum: 0
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("尝试拖动小车，另外，文字‘小汽车’也算一个哦！", "一不小心就被自己的机智帅到了！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    },
                    addNum: function () {
                        this.carNum++ ,
                            this.numLabel.string = "" + this.carNum;
                    },
                    minusNum: function () {
                        this.carNum-- ,
                            this.numLabel.string = "" + this.carNum;
                    },
                    onYesBtnClick: function () {
                        10 == this.carNum ? this.showRight() : (this.carNum = 0,
                            this.numLabel.string = "" + this.carNum,
                            this.wrong.active = !0,
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3));
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level015: [function (a, b) {
            "use strict";
            cc._RF.push(b, "d31b7x7OZ1Lkrt/9v7lBCMJ", "Level015"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        isReady: !1,
                        finished: !1
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把‘下一关’三个字拖到空白按钮上去。", "找不到的东西，就创造一个出来吧！");
                    },
                    OnRightBtnClick: function () {
                        this.isReady && this.showRight();
                    },
                    showRight: function () {
                        1 != this.finished && (this.right.active = !0,
                            this.uiManager.passLevel(),
                            this.finished = !0);
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level016: [function (a, b) {
            "use strict";
            cc._RF.push(b, "a082a5JUWxNkYDJ4UJkfXhs", "Level016"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("手指在木堆上摩擦，摩擦生热，使其燃烧！", "摩擦，摩擦，似魔鬼的步伐...");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level017: [function (a, b) {
            "use strict";
            cc._RF.push(b, "33a58CImQxHxaBrGlhnc1vC", "Level017"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        finished: !1
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把手机倒过来看。", "敲黑板：逆向思维！逆向思维！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level018: [function (a, b) {
            "use strict";
            cc._RF.push(b, "af345+lKAtBcZCMKU93ZONf", "Level018"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("桌子移开，开关在后面！", "还是被你找到了，优秀！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level020: [function (a, b) {
            "use strict";
            cc._RF.push(b, "616b70QvEREoKMjrKl3NhSo", "Level020"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("就是图中牛尾巴指向的那个按钮啊！", "我走过最长的路是你的套路！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level021: [function (a, b) {
            "use strict";
            cc._RF.push(b, "5a04claNCpNIYCPJw2OZWYM", "Level021"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        waterOut: !1,
                        water: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onLoad: function () {
                        var a = this;
                        setTimeout(() => {
                            a.water.active = !0;
                            a.waterOut = !0;
                        }
                            , 3000);
                        // wx.onAccelerometerChange(function(b) {
                        //     if (.1 < b.y) {
                        //         if (a.waterOut) return;
                        //         a.water.active = !0, wx.vibrateShort(), a.waterOut = !0;
                        //     }
                        // }),
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    onDestroy: function () {
                        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    onKeyDown: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.water.active = !0,
                                    this.waterOut = !0;
                                break;

                            case cc.KEY.z:
                        }
                    },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("手机到过来试试看！", "倒出来就知道有没有水咯！");
                    },
                    OnRightBtnClick: function () {
                        this.waterOut && this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level022: [function (a, b) {
            "use strict";
            cc._RF.push(b, "9358dwOAulEKZuQPj4EJk2a", "Level022"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("在女厕所标识上擦几下，裙子擦掉，就变成男厕所标识了！", "这题不是人造革，是真的皮！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level023: [function (a, b) {
            "use strict";
            cc._RF.push(b, "923bdnjguVAo6v/QgRsPjNE", "Level023"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把红色方块拖到黄色方块中去！", "那黄色加蓝色是什么颜色呢，小绿同学？！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level024: [function (a, b) {
            "use strict";
            cc._RF.push(b, "7b2b4/XT2xI/7cNsUn9actF", "Level024"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        dropNum: 0
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("全部拖入黑洞中，包括标题！", "没有游戏可以玩的时候，我也想钻进黑洞中！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    },
                    drop: function () {
                        this.dropNum++ ,
                            4 == this.dropNum && this.showRight();
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level025: [function (a, b) {
            "use strict";
            cc._RF.push(b, "23b2dqVPPZGLLRKXZemqLRA", "Level025"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        },
                        numLabel: {
                            default: null,
                            type: cc.Label
                        },
                        carNum: 0
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("衣服自身的洞，就上划破的，记得衣服是双面的哦！", "突然意识到，新衣服也不是‘完好无损’了！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    },
                    addNum: function () {
                        this.carNum++ ,
                            this.numLabel.string = "" + this.carNum;
                    },
                    minusNum: function () {
                        this.carNum-- ,
                            this.numLabel.string = "" + this.carNum;
                    },
                    onYesBtnClick: function () {
                        8 == this.carNum ? this.showRight() : (this.carNum = 0,
                            this.numLabel.string = "" + this.carNum,
                            this.wrong.active = !0,
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3));
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level026: [function (a, b) {
            "use strict";
            cc._RF.push(b, "754628jn7pMjLjgEl5NY7je", "Level026"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把手机翻过去，就看不到咯！", "眼睛捂起来，真的不要看！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level027: [function (a, b) {
            "use strict";
            cc._RF.push(b, "5eb1fDV74ZL76a4drNhThLV", "Level027"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把白云拖到一起，可以形成乌云。", "恭喜你，掌握了最新的人工降雨方式！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level028: [function (a, b) {
            "use strict";
            cc._RF.push(b, "9790fKk8hpIaoaSXipIZGVA", "Level028"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("把刀拖动到‘我’字上面去。", "我只要刀，不要飞镖、木刺和棒子。");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Level029: [function (a, b) {
            "use strict";
            cc._RF.push(b, "d4a01bJoMZKY5J3sTJ4Avq+", "Level029"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        right: {
                            default: null,
                            type: cc.Node
                        },
                        wrong: {
                            default: null,
                            type: cc.Node
                        },
                        uiManager: {
                            default: null,
                            type: null
                        },
                        wrongBtns: {
                            default: [],
                            type: [cc.Button]
                        }
                    },
                    onLoad: function () { },
                    start: function () {
                        this.uiManager = cc.find("Managers/UIManager").getComponent("UIManager"),
                            this.right.active = !1,
                            this.wrong.active = !1,
                            this.uiManager.setHintAndPassedLabel("用报纸盖住金币！", "还好藏住了，差点让你们知道我有六毛钱！");
                    },
                    OnRightBtnClick: function () {
                        this.showRight();
                    },
                    showRight: function () {
                        this.right.active = !0,
                            this.uiManager.passLevel();
                    },
                    showWrong: function (a, b) {
                        this.wrong.active = !0;
                        var c = this.wrongBtns[b].node.getPosition();
                        this.wrong.setPosition(c),
                            this.scheduleOnce(function () {
                                this.wrong.active = !1;
                            }, .3);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        LevelBtn: [function (a, b) {
            "use strict";
            cc._RF.push(b, "1f0e5uV1WhC4L8mPJd2OsvA", "LevelBtn"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        levelNum: 1,
                        levelNumLabel: {
                            default: null,
                            type: cc.Label
                        },
                        unlockSprite: {
                            default: null,
                            type: cc.SpriteFrame
                        },
                        lockSprite: {
                            default: null,
                            type: cc.SpriteFrame
                        },
                        levelPnl: cc.Node,
                        levelManager: {
                            default: null,
                            type: cc.Node
                        }
                    },
                    onEnable: function () {
                        this.setBtnSprite();
                    },
                    start: function () {
                        this.levelNumLabel.string = "" + this.levelNum;
                    },
                    setBtnSprite: function () {
                        this.getComponent(cc.Sprite).spriteFrame = cc.sys.localStorage.getItem("BestUnlockedLevel") >= this.levelNum ? this.unlockSprite : this.lockSprite;
                    },
                    onLevelBtnClick: function () {
                        var a = cc.sys.localStorage.getItem("BestUnlockedLevel");
                        this.levelNum > a || (this.levelPnl.active = !1,
                            this.levelManager.getComponent("LevelManager").currentLevelNum = this.levelNum,
                            this.levelManager.getComponent("LevelManager").createNewLevel());
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        LevelManager: [function (a, b) {
            "use strict";
            cc._RF.push(b, "0041dYXxbdIg5uWFz8hwlFR", "LevelManager"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        inGamePnl: {
                            default: null,
                            type: cc.Node
                        },
                        levels: {
                            default: [],
                            type: [cc.Prefab]
                        },
                        currentLevelPrefab: {
                            default: null,
                            type: cc.Node
                        },
                        lastClonedLevel: {
                            default: null,
                            type: cc.Node
                        },
                        currentLevelNum: 1,
                        currentHint: ""
                    },
                    start: function () {
                        null != cc.sys.localStorage.getItem("BestUnlockedLevel") && "" != cc.sys.localStorage.getItem("BestUnlockedLevel") || cc.sys.localStorage.setItem("BestUnlockedLevel", 1),
                            null != cc.sys.localStorage.getItem("LastPlayedLevel") && "" != cc.sys.localStorage.getItem("LastPlayedLevel") || cc.sys.localStorage.setItem("LastPlayedLevel", 1);
                    },
                    createNewLevel: function () {
                        this.destroyOldLevel(),
                            this.currentLevelPrefab = this.levels[this.currentLevelNum - 1],
                            this.lastClonedLevel = cc.instantiate(this.currentLevelPrefab),
                            this.lastClonedLevel.parent = this.inGamePnl;
                    },
                    destroyOldLevel: function () {
                        null != this.lastClonedLevel && this.lastClonedLevel.destroy();
                    },
                    onGame03TitleClick: function () {
                        3 == this.currentLevelNum && this.lastClonedLevel.getComponent("Level002").showRight();
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Motion017: [function (a, b) {
            "use strict";
            cc._RF.push(b, "6e66bODlmVLE42H4PYkN0Xt", "Motion017"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1
                    },
                    onLoad: function () {
                        var a = this;
                        setTimeout(() => {
                            a.node.getComponent("Level017").showRight();
                            a.finished = !0;
                        }
                            , 2000);
                        // wx.onAccelerometerChange(function(b) {
                        //     if (.1 < b.y) {
                        //         if (a.finished) return;
                        //         a.node.getComponent("Level017").showRight(), a.finished = !0;
                        //     }
                        // }), 
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    update: function () { },
                    onDestroy: function () { },
                    onKeyDown: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.node.getComponent("Level017").showRight();
                        }
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        Motion026: [function (a, b) {
            "use strict";
            cc._RF.push(b, "a46b9QUXqZElZaEvXOROMuZ", "Motion026"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        finished: !1
                    },
                    onLoad: function () {
                        var a = this;
                        setTimeout(() => {
                            a.node.getComponent("Level026").showRight();
                            a.finished = !0;
                        }
                            , 3000);
                        // wx.onAccelerometerChange(function(b) {
                        //     if (.1 < b.z) {
                        //         if (a.finished) return;
                        //         a.node.getComponent("Level026").showRight(), a.finished = !0;
                        //     }
                        // }), 
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    },
                    update: function () { },
                    onDestroy: function () { },
                    onKeyDown: function (a) {
                        switch (a.keyCode) {
                            case cc.KEY.a:
                                this.node.getComponent("Level026").showRight();
                        }
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        MultiTouch012: [function (b, c) {
            "use strict";
            cc._RF.push(c, "3dfb20z0LJLKr19rzLy5e28", "MultiTouch012"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        left: cc.Node,
                        right: cc.Node,
                        finished: !1,
                        leftPosLabel: {
                            default: null,
                            type: cc.Label
                        },
                        rightPosLabel: {
                            default: null,
                            type: cc.Label
                        }
                    },
                    onLoad: function () {
                        var b = this;
                        b.node.on(cc.Node.EventType.TOUCH_START, function (c) {
                            var d = c.getTouches();
                            if (2 <= d.length) {
                                var f = d[0]
                                    , e = d[1]
                                    , g = b.left.parent.convertToNodeSpaceAR(f.getLocation())
                                    , h = b.left.parent.convertToNodeSpaceAR(e.getLocation());
                                if (b.leftPosLabel.string = "x: " + g.x + " y: " + g.y,
                                    b.rightPosLabel.string = "x: " + h.x + " y: " + h.y,
                                    b.finished)
                                    return;
                                g.x < h.x ? 50 > a(g.x - b.left.position.x) && 50 > a(g.y - b.left.position.y) && 50 > a(h.x - b.right.position.x) && 50 > a(h.y - b.right.position.y) && (b.finished = !0,
                                    b.node.getComponent("Level012").showRight()) : 50 > a(h.x - b.left.position.x) && 50 > a(h.y - b.left.position.y) && 50 > a(g.x - b.right.position.x) && 50 > a(g.y - b.right.position.y) && (b.finished = !0,
                                        b.node.getComponent("Level012").showRight());
                            } else
                                b.rightPosLabel.string = "touch count: " + c.getTouches();
                        }, b.node),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (a) {
                                switch (a.keyCode) {
                                    case cc.KEY.a:
                                        b.finished = !0,
                                            b.node.getComponent("Level012").showRight();
                                }
                            }, b.node);
                    },
                    start: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        PromoBtn: [function (a, b) {
            "use strict";
            cc._RF.push(b, "38bdeIS9HtH64nO9GbEtY8i", "PromoBtn"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    start: function () {
                        this.schedule(function () {
                            cc.log("hehe");
                        }, 3);
                    },
                    onPromoBtnClick: function () {
                        //更多游戏
                        console.log("more games onPromoBtnClick");
                        if (window.h5api) {
                            // window.h5api.showRecommend();
                        }
                        // wx.navigateToMiniProgram({
                        //     appId: "wx14b6306bd50a2a52",
                        //     path: "page/index/index?id=123",
                        //     extraData: {
                        //         id: 123
                        //     },
                        //     envVersion: "release",
                        //     success: function(a) {
                        //         console.log("跳转成功" + a);
                        //     },
                        //     fail: function(a) {
                        //         console.log("跳转失败" + a);
                        //     }
                        // });
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        SwingAnim: [function (a, b) {
            "use strict";
            cc._RF.push(b, "39f90tLxj1JZaJ2NmrNe3Th", "SwingAnim"),
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    start: function () {
                        var a = cc.repeatForever(cc.sequence(cc.rotateTo(.2, 3), cc.rotateTo(.2, -3), cc.rotateTo(.2, 3), cc.rotateTo(.2, -3), cc.rotateTo(.2, 0), cc.rotateTo(.5, 0)));
                        this.node.runAction(a);
                    }
                }),
                cc._RF.pop();
        }
            , {}],
        UIManager: [function (a, b) {
            "use strict";
            cc._RF.push(b, "e58d8/tUwZDlK9VibLz4dF7", "UIManager");
            var c = cc.Enum({
                start: 0,
                inGame: 1,
                passed: 2
            });
            cc.Class({
                extends: cc.Component,
                properties: {
                    levelManager: {
                        default: null,
                        type: cc.Node
                    },
                    mainPnl: {
                        default: null,
                        type: cc.Node
                    },
                    inGamePnl: {
                        default: null,
                        type: cc.Node
                    },
                    passedPnl: {
                        default: null,
                        type: cc.Node
                    },
                    hintTip: {
                        default: null,
                        type: cc.Node
                    },
                    levelsPnl: {
                        default: null,
                        type: cc.Node
                    },
                    gameState: {
                        default: c.start,
                        type: c
                    },
                    hintLabel: {
                        default: null,
                        type: cc.Label
                    },
                    passedLabel: {
                        default: null,
                        type: cc.Label
                    },
                    inGameLevelNum: {
                        default: null,
                        type: cc.Label
                    },
                    promoIcons: [cc.SpriteFrame],
                    promoNum: 1
                },
                onLoad: function () {

                    console.log(cc.Canvas.instance);

                    // 适配解决方案
                    let _canvas = cc.Canvas.instance;
                    // 设计分辨率比
                    let _rateR = _canvas.designResolution.height / _canvas.designResolution.width;
                    // 显示分辨率比
                    let _rateV = cc.winSize.height / cc.winSize.width;
                    console.log("winSize: rateR: " + _rateR + " rateV: " + _rateV);
                    if (_rateV > _rateR) {
                        _canvas.fitHeight = false;
                        _canvas.fitWidth = true;
                        console.log("winSize: fitWidth");
                    } else {
                        _canvas.fitHeight = true;
                        _canvas.fitWidth = false;
                        console.log("winSize: fitHeight");
                    }
                    // wx.showShareMenu(), wx.onShareAppMessage(function() {
                    //     return {
                    //         title: " 非常搞笑的解谜游戏，你也来试试！",
                    //         imageUrl: "res/share.png"
                    //     };
                    // });
                    if (window.h5api) {
                        // window.h5api.canPlayAd((obj) => {
                        //     let noticeBut = this.inGamePnl.getChildByName("HintBtn");
                        //     noticeBut.active = obj.canPlayAd;
                        // }
                        // );
                    }
                },
                start: function () {
                    this.mainPnl.active = !0,
                        this.inGamePnl.active = !0,
                        this.passedPnl.active = !1;
                    // var a = wx.getSystemInfoSync(), b = wx.createBannerAd({
                    //     adUnitId: "",
                    //     style: {
                    //         left: 0,
                    //         top: 0,
                    //         width: 300
                    //     }
                    // });
                    // b.onResize(function() {
                    //     b.style.left = a.screenWidth / 2 - b.style.realWidth / 2, b.style.top = a.screenHeight - b.style.realHeight;
                    // }), b.show(), b.onError(function() {
                    //   //  console.log(errMsg + errCode);
                    // });
                },
                passLevel: function () {
                    this.gameState = c.passed,
                        this.scheduleOnce(function () {
                            this.passedPnl.active = !0;
                        }, .4);
                    var a = this.levelManager.getComponent("LevelManager").currentLevelNum + 1;
                    cc.sys.localStorage.getItem("BestUnlockedLevel") < a && cc.sys.localStorage.setItem("BestUnlockedLevel", a);
                },
                setHintAndPassedLabel: function (a, b) {
                    this.hintLabel.string = a,
                        this.passedLabel.string = b,
                        this.inGameLevelNum.string = "Q." + this.levelManager.getComponent("LevelManager").currentLevelNum,
                        this.gameState = c.inGame,
                        cc.sys.localStorage.setItem("LastPlayedLevel", this.levelManager.getComponent("LevelManager").currentLevelNum);
                },
                onStartBtnClick: function () {
                    this.gameState = c.inGame,
                        this.mainPnl.active = !1;
                    var a = cc.sys.localStorage.getItem("LastPlayedLevel");
                    this.levelManager.getComponent("LevelManager").currentLevelNum = a,
                        this.levelManager.getComponent("LevelManager").createNewLevel();
                },
                onLevelsBtnClick: function () {
                    this.mainPnl.active = !1,
                        this.levelsPnl.active = !0;
                },
                onLevelsPnlBackClick: function () {
                    this.levelsPnl.active = !1,
                        this.mainPnl.active = !0;
                },
                onInGameHomeClick: function () {
                    this.gameState == c.inGame && (this.levelsPnl.active = !0,
                        this.levelManager.getComponent("LevelManager").destroyOldLevel());
                },
                onInGameHintClick: function (e) {
                    var a = this;
                    //a.hintTip.active = !0;
                    // if (window.h5api) {
                    //     function adCallback(obj) {
                    //         if (obj.code === 10000) {
                    //             console.log('playing');
                    //             //正在播放
                    //         } else if (obj.code === 10001) {
                    //             //播放完成
                    //             console.log('end');
                    //             obj.isEnded = true;
                    //             (obj && obj.isEnded || void 0 === obj) && (a.hintTip.active = !0);
                    //         } else {
                    //             e.target.active = false;
                    //             alter("明日再送提示~");
                    //         }
                    //     }
                    //     ; window.h5api.playAd(adCallback);
                    // }

                    // var a = this, b = wx.createRewardedVideoAd({
                    //   adUnitId: "adunit-897f164efc9826db"
                    // });
                    // b.load().then(function() {
                    //     return b.show();
                    // }).catch(function(a) {
                    //     return console.log(a.errMsg);
                    // }), b.onClose(function(b) {

                    //     (b && b.isEnded || void 0 === b) && (a.hintTip.active = !0);
                    // }), b.onError(function() {
                    //     console.log(errMsg + errCode);
                    // });
                },
                onInHintOKClick: function () {
                    this.hintTip.active = !1;
                },
                onNextLevelBtnClick: function () {
                    // this.passedPnl.active = !1,
                    //     this.levelManager.getComponent("LevelManager").currentLevelNum++ ,
                    //     this.levelManager.getComponent("LevelManager").createNewLevel();
                    console.log("点击跳转至说明页");
                    try {
                        var directions = plus.webview.create("../directions.html", "directions");
                        directions.evalJS('plus.key.addEventListener("backbutton", function () {plus.webview.currentWebview().close();});');
                        directions.show();
                    } catch (error) {
                        window.location.href = "../directions.html";
                    }
                },
                onPassedToLevelsPnlClick: function () {
                    this.passedPnl.active = !1,
                        this.levelsPnl.active = !0,
                        this.levelManager.getComponent("LevelManager").destroyOldLevel();
                },
                onShareBtnClick: function () {
                    console.log("shareonShareBtnClick");
                    if (window.h5api) {
                        // window.h5api.share();
                    }
                    // wx.shareAppMessage({
                    //     title: "感觉智商收到了侮辱。。。谁能帮我解出这题？",
                    //     imageUrl: "res/share.png"
                    // });
                },
                onPromoBtnClick: function () {
                    console.log("more game onPromoBtnClick");
                    if (window.h5api) {
                        // window.h5api.showRecommend();
                    }
                    // wx.navigateToMiniProgram({
                    //     appId: "wx14b6306bd50a2a52",
                    //     path: "page/index/index?id=123",
                    //     extraData: {
                    //         id: 123
                    //     },
                    //     envVersion: "release",
                    //     success: function(a) {
                    //         console.log("跳转成功" + a);
                    //     },
                    //     fail: function(a) {
                    //         console.log("跳转失败" + a);
                    //     }
                    // });
                }
            }),
                cc._RF.pop();
        }
            , {}],
        Wipe006: [function (a, b) {
            "use strict";
            cc._RF.push(b, "d04246S7t5JpJTLB2o+R1qp", "Wipe006"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        timer: 3,
                        isWiping: !1,
                        dust: {
                            default: null,
                            type: cc.Node
                        },
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function () {
                        this.isWiping = !0;
                    },
                    onEventCancel: function () {
                        this.isWiping = !1;
                    },
                    onEventEnd: function () {
                        this.isWiping = !1;
                    },
                    update: function (a) {
                        this.finished || this.isWiping && (this.timer -= a,
                            0 < this.timer ? this.dust.opacity = 255 * (this.timer / 3) : (this.node.parent.getComponent("Level006").showRight(),
                                this.finished = !0));
                    },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Wipe016: [function (a, b) {
            "use strict";
            cc._RF.push(b, "c668bkl3FlAsoEF1yI6ORTU", "Wipe016"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        timer: 3,
                        isWiping: !1,
                        fire: {
                            default: null,
                            type: cc.Node
                        },
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function () {
                        this.isWiping = !0;
                    },
                    onEventCancel: function () {
                        this.isWiping = !1;
                    },
                    onEventEnd: function () {
                        this.isWiping = !1;
                    },
                    update: function (a) {
                        this.finished || this.isWiping && (this.timer -= a,
                            0 < this.timer || (this.node.parent.getComponent("Level016").showRight(),
                                this.fire.active = !0,
                                this.finished = !0));
                    },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}],
        Wipe022: [function (a, b) {
            "use strict";
            cc._RF.push(b, "abdf2xbrnxMkbQbvI7rYB3X", "Wipe022"),
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        timer: 3,
                        isWiping: !1,
                        dust: {
                            default: null,
                            type: cc.Node
                        },
                        finished: !1
                    },
                    onLoad: function () {
                        this.registerEvent();
                    },
                    registerEvent: function () {
                        this.node.on("touchstart", this.onEventStart, this),
                            this.node.on("touchmove", this.onEventMove, this),
                            this.node.on("touchcancel", this.onEventCancel, this),
                            this.node.on("touchend", this.onEventEnd, this);
                    },
                    init: function () { },
                    onEventStart: function () { },
                    onEventMove: function () {
                        this.isWiping = !0;
                    },
                    onEventCancel: function () {
                        this.isWiping = !1;
                    },
                    onEventEnd: function () {
                        this.isWiping = !1;
                    },
                    update: function (a) {
                        this.finished || this.isWiping && (this.timer -= a,
                            0 < this.timer ? this.dust.opacity = 255 * (this.timer / 3) : (this.node.parent.getComponent("Level022").showRight(),
                                this.finished = !0));
                    },
                    onDestroy: function () { }
                }),
                cc._RF.pop();
        }
            , {}]
    }, {}, ["LevelBtn", "LevelManager", "PromoBtn", "SwingAnim", "UIManager", "Level001", "Level002", "Draggable", "Level003", "Hold004", "Level004", "Level005", "Level006", "Wipe006", "Level007", "Draggable008", "Level008", "Level009", "Level0010", "Level010", "Level0011", "Level011", "Hold012", "Level012", "Level012_1", "MultiTouch012", "Drag013", "Level013", "Level014", "Drag015", "Level015", "Level016", "Wipe016", "Level017", "Motion017", "Level018", "Level020", "Level021", "Level022", "Wipe022", "Drag023", "Level023", "Drag024", "Level024", "Level025", "Level026", "Motion026", "Drag027", "Level027", "Drag028", "Level028", "Drag029", "Level029"]);
}
)();

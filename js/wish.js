(function(html) {
    html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/www.wishpond.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.8.3"
    }
};
! function(a, b, c) {
    function d(a) {
        var b, c, d, e, f = String.fromCharCode;
        if (!k || !k.fillText) return !1;
        switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) {
            case "flag":
                return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 56826, 8203, 55356, 56819), 0, 0), c = j.toDataURL(), b !== c && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447), 0, 0), c = j.toDataURL(), b !== c);
            case "emoji4":
                return k.fillText(f(55358, 56794, 8205, 9794, 65039), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55358, 56794, 8203, 9794, 65039), 0, 0), e = j.toDataURL(), d !== e
        }
        return !1
    }

    function e(a) {
        var c = b.createElement("script");
        c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }
    var f, g, h, i, j = b.createElement("canvas"),
        k = j.getContext && j.getContext("2d");
    for (i = Array("flag", "emoji4"), c.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
        c.DOMReady = !0
    }, c.supports.everything || (g = function() {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
        "complete" === b.readyState && c.readyCallback()
    })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);
document.querySelector('.navbar-brand img').src = 'https://onsched.com/assets/img/transdark.png';
$(document).on('click', '.items-index a', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
$(window).on("scroll", function() {
    var bottom_of_object = $('.popup-background').offset().top + $('.popup-background').outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
        setTimeout(function() {
            $('.popup-background').addClass('fadeIn');
        }, 1000);
    }
    var $sec1 = $('#landing-pages').offset().top;
    var $sec2 = $('#social-promotions').offset().top;
    var $sec3 = $('#website-popups').offset().top;
    var $sec4 = $('#lead-tracking').offset().top;
    var $sec5 = $('#email-marketing').offset().top;
    var $sec6 = $('#integrations').offset().top;
    var $sec7 = $('#get-started').offset().top;
    if ($(this).scrollTop() < $sec1) {
        $('.items-index a').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec1 && $(this).scrollTop() <= $sec2) {
        $('.items-index [href="#landing-pages"]').addClass('is-selected');
        $('.items-index :not([href="#landing-pages"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec2 && $(this).scrollTop() <= $sec3) {
        $('.items-index [href="#social-promotions"]').addClass('is-selected');
        $('.items-index :not([href="#social-promotions"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec3 && $(this).scrollTop() <= $sec4) {
        $('.items-index [href="#website-popups"]').addClass('is-selected');
        $('.items-index :not([href="#website-popups"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec4 && $(this).scrollTop() <= $sec5) {
        $('.items-index [href="#lead-tracking"]').addClass('is-selected');
        $('.items-index :not([href="#lead-tracking"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec5 && $(this).scrollTop() <= $sec6) {
        $('.items-index [href="#email-marketing"]').addClass('is-selected');
        $('.items-index :not([href="#email-marketing"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() >= $sec6 && $(this).scrollTop() <= $sec7) {
        $('.items-index [href="#integrations"]').addClass('is-selected');
        $('.items-index :not([href="#integrations"])').removeClass('is-selected');
    }
    if ($(this).scrollTop() > $sec7) {
        $('.items-index [href="#get-started"]').removeClass('is-selected');
    }
});
$(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
            if ($(this).css("opacity") == 0) {
                $(this).addClass('in');
            }
        } else {
            if ($(this).css("opacity") == 1) {
                $(this).removeClass('in');
            }
        }
    });
});

function detectSticky() {
    if (typeof Stickyfill === "object") {
        clearInterval(ifStickyfillExists);
        var stickyElement = document.querySelector('.col-sticky');
        Stickyfill.add(stickyElement);
    }
}
var ifStickyfillExists = setInterval(detectSticky, 500);
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
    document.querySelector('head').appendChild(msViewportStyle)
};
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.hoverIntent) {
        factory(jQuery);
    }
})(function($) {
    'use strict';
    var _cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };
    var INSTANCE_COUNT = 0;
    var cX, cY;
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };
    var compare = function(ev, $el, s, cfg) {
        if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) {
            $el.off('mousemove.hoverIntent' + s.namespace, track);
            delete s.timeoutId;
            s.isActive = true;
            delete s.pX;
            delete s.pY;
            return cfg.over.apply($el[0], [ev]);
        } else {
            s.pX = cX;
            s.pY = cY;
            s.timeoutId = setTimeout(function() {
                compare(ev, $el, s, cfg);
            }, cfg.interval);
        }
    };
    var delay = function(ev, $el, s, out) {
        delete $el.data('hoverIntent')[s.id];
        return out.apply($el[0], [ev]);
    };
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++;
        var cfg = $.extend({}, _cfg);
        if ($.isPlainObject(handlerIn)) {
            cfg = $.extend(cfg, handlerIn);
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector
            });
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut
            });
        }
        var handleHover = function(e) {
            var ev = $.extend({}, e);
            var $el = $(this);
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) {
                $el.data('hoverIntent', (hoverIntentData = {}));
            }
            var state = hoverIntentData[instanceId];
            if (!state) {
                hoverIntentData[instanceId] = state = {
                    id: instanceId
                };
            }
            if (state.timeoutId) {
                state.timeoutId = clearTimeout(state.timeoutId);
            }
            var namespace = state.namespace = '.hoverIntent' + instanceId;
            if (e.type === 'mouseenter') {
                if (state.isActive) {
                    return;
                }
                state.pX = ev.pageX;
                state.pY = ev.pageY;
                $el.on('mousemove.hoverIntent' + namespace, track);
                state.timeoutId = setTimeout(function() {
                    compare(ev, $el, state, cfg);
                }, cfg.interval);
            } else {
                if (!state.isActive) {
                    return;
                }
                $el.off('mousemove.hoverIntent' + namespace, track);
                state.timeoutId = setTimeout(function() {
                    delay(ev, $el, state, cfg.out);
                }, cfg.timeout);
            }
        };
        return this.on({
            'mouseenter.hoverIntent': handleHover,
            'mouseleave.hoverIntent': handleHover
        }, cfg.selector);
    };
});
$('.navbar-nav').each(function() {
    var $this = $(this);
    $this.find('li:has(ul) > a').addClass('dd-submenu-title');
    $this.find('li').hoverIntent({
        interval: 100,
        over: function() {
            $('ul:first', this).css({
                visibility: 'visible',
                display: 'none'
            }).slideDown(250);
            var pathSet = $(this).parents('.navbar-nav li').find('a:first');
            $('.navbar-nav li a.dd-path').not(pathSet).removeClass('dd-path');
        },
        timeout: 200,
        out: function() {
            $('ul:first', this).css({
                visibility: 'hidden'
            });
        }
    }).hover(function() {
        var pathSet = $(this).parents('.navbar-nav li').find('a:first');
        $(pathSet).addClass('dd-path');
    }, function() {});
    $this.hoverIntent(function() {}, function() {
        $('a.dd-path', this).removeClass('dd-path');
    });
});
$('.mobile-navbar select').change(function() {
    window.location = $(this).find('option:selected').val();
});
var $navBar = $('.navbar'),
    $signup = $('.navbar-nav li:last-child > a[href*="https://www.wishpond.com/pricing/"]');
var newPadding = $navBar.outerHeight() + parseInt($('.content-section:first').css('paddingTop'));
$('.content-section:first').css({
    paddingTop: newPadding
});
$(window).scroll(function() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        toggle = scroll > 10;
    $navBar.toggleClass('nav-shadow', scroll > 10);
    $signup.toggleClass('nav-stretch', scroll > 10);
});
$('#menu-item-117 > a, #menu-item-41781 > a, #menu-item-41781 > a, #menu-item-42030 > a').click(function(e) {
    e.preventDefault();
});;
AmbassadorAPI = {
    params: {},
    setAmbassadorParams: function() {
        var str = window.location.search;
        str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function($0, $1, $2, $3) {
            AmbassadorAPI.params[$1] = $3;
        });
    },
    setWishpondCookies: function() {
        if (!AmbassadorAPI.params.mbsy) {
            return
        }
        if (!AmbassadorAPI.params.campaignid) {
            return
        }
        $.ajax({
            url: 'https://www.wishpond.com/corp/set_cookies.json',
            crossDomain: true,
            method: 'POST',
            data: {
                mbsy: AmbassadorAPI.params.mbsy,
                campaignid: AmbassadorAPI.params.campaignid
            }
        });
    }
}
$(document).ready(function() {
    AmbassadorAPI.setAmbassadorParams();
    AmbassadorAPI.setWishpondCookies();
});
/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            z[b] = !1, aa()
        }, d.onload = function() {
            z[b] = 1 === d.width, aa()
        }, d.src = c, "pending"
    }

    function f() {
        L = !1, O = a.devicePixelRatio, M = {}, N = {}, s.DPR = O || 1, P.width = Math.max(a.innerWidth || 0, y.clientWidth), P.height = Math.max(a.innerHeight || 0, y.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, r = [P.height, P.width, O].join("-"), P.em = s.getEmValue(), P.rem = P.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === A.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || _(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), W.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : X.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : W.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(S), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    } else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    } else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(T), m >= l) return n;
            g = c(U), h = [], "," === g.slice(-1) ? (g = g.replace(V, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = function() {},
        u = b.createElement("img"),
        v = u.getAttribute,
        w = u.setAttribute,
        x = u.removeAttribute,
        y = b.documentElement,
        z = {},
        A = {
            algorithm: ""
        },
        B = "data-pfsrc",
        C = B + "set",
        D = navigator.userAgent,
        E = /rident/.test(D) || /ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        F = "currentSrc",
        G = /\s+\+?\d+(e\d+)?w/,
        H = /(\([^)]+\))?\s*(.+)/,
        I = a.picturefillCFG,
        J = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        K = "font-size:100%!important;",
        L = !0,
        M = {},
        N = {},
        O = a.devicePixelRatio,
        P = {
            px: 1,
            "in": 96
        },
        Q = b.createElement("a"),
        R = !1,
        S = /^[ \t\n\r\u000c]+/,
        T = /^[, \t\n\r\u000c]+/,
        U = /^[^ \t\n\r\u000c]+/,
        V = /[,]+$/,
        W = /^\d+$/,
        X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Y = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Z = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        $ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = Z(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in M))
                    if (M[b] = !1, d && (e = b.match(a))) M[b] = e[1] * P[e[2]];
                    else try {
                        M[b] = new Function("e", c(b))(P)
                    } catch (f) {}
                    return M[b]
            }
        }(),
        _ = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        aa = function(a) {
            var c, d, e, f = a || {};
            if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                for (s.setupRun(f), R = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                s.teardownRun(f)
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : t, F in u || (F = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in u, s.supSizes = "sizes" in u, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
        u.srcset = "data:,a", a.src = "data:,a", s.supSrcset = u.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = A, s.supSrcset && (s.sel += ",img[" + C + "]"), s.DPR = O || 1, s.u = P, s.types = z, q = s.supSrcset && !s.supSizes, s.setSize = t, s.makeUrl = Z(function(a) {
        return Q.href = a, Q.href
    }), s.qsa = function(a, b) {
        return a.querySelectorAll(b)
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? $(a) : !0
    }, s.calcLength = function(a) {
        var b = $(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? z[a] : !0
    }, s.parseSize = Z(function(a) {
        var b = (a || "").match(H);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = y.style.cssText,
                e = a.style.cssText;
            c.style.cssText = J, y.style.cssText = K, a.style.cssText = K, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), y.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in N) || A.uT) {
            var b = s.calcLength(n(a));
            N[a] = b ? b : P.width
        }
        return N[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = _, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[F], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = E && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = v.call(a, "src"), j.src ? w.call(a, B, j.src) : x.call(a, B)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = v.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: v.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && G.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g), h && s.supSrcset && !j.supported && (e ? (w.call(a, C, e), a.srcset = "") : x.call(a, C)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!R || L || O !== a.devicePixelRatio) && f()
    }, s.supPicture ? (aa = t, s.fillImg = t) : ! function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c, d, e = function() {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = y.clientHeight,
            i = function() {
                L = Math.max(a.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== h, h = y.clientHeight, L && s.fillImgs()
            };
        Y(a, "resize", g(i, 99)), Y(b, "readystatechange", e)
    }(), s.picturefill = aa, s.fillImgs = aa, s.teardownRun = t, aa._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (A[b] = a[0], R && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; I && I.length;) a.picturefillCFG.push(I.shift());
    a.picturefill = aa, "object" == typeof module && "object" == typeof module.exports ? module.exports = aa : "function" == typeof define && define.amd && define("picturefill", function() {
        return aa
    }), s.supPicture || (z["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
(function() {
    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf('webkit') > -1 || ua.indexOf('opera') > -1 || ua.indexOf('msie') > -1) && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var element = document.getElementById(location.hash.substring(1));
            if (element) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(element.nodeName)) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
})();
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.4 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
! function(a, b) {
    function c() {
        y = D = z = A = B = C = K
    }

    function d(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function e(a) {
        return parseFloat(a) || 0
    }

    function f() {
        F = {
            top: b.pageYOffset,
            left: b.pageXOffset
        }
    }

    function g() {
        return b.pageXOffset != F.left ? (f(), void z()) : void(b.pageYOffset != F.top && (f(), i()))
    }

    function h(a) {
        setTimeout(function() {
            b.pageYOffset != F.top && (F.top = b.pageYOffset, i())
        }, 0)
    }

    function i() {
        for (var a = H.length - 1; a >= 0; a--) j(H[a])
    }

    function j(a) {
        if (a.inited) {
            var b = F.top <= a.limit.start ? 0 : F.top >= a.limit.end ? 2 : 1;
            a.mode != b && p(a, b)
        }
    }

    function k() {
        for (var a = H.length - 1; a >= 0; a--)
            if (H[a].inited) {
                var b = Math.abs(t(H[a].clone) - H[a].docOffsetTop),
                    c = Math.abs(H[a].parent.node.offsetHeight - H[a].parent.height);
                if (b >= 2 || c >= 2) return !1
            }
        return !0
    }

    function l(a) {
        isNaN(parseFloat(a.computed.top)) || a.isCell || "none" == a.computed.display || (a.inited = !0, a.clone || q(a), "absolute" != a.parent.computed.position && "relative" != a.parent.computed.position && (a.parent.node.style.position = "relative"), j(a), a.parent.height = a.parent.node.offsetHeight, a.docOffsetTop = t(a.clone))
    }

    function m(a) {
        var b = !0;
        a.clone && r(a), d(a.node.style, a.css);
        for (var c = H.length - 1; c >= 0; c--)
            if (H[c].node !== a.node && H[c].parent.node === a.parent.node) {
                b = !1;
                break
            }
        b && (a.parent.node.style.position = a.parent.css.position), a.mode = -1
    }

    function n() {
        for (var a = H.length - 1; a >= 0; a--) l(H[a])
    }

    function o() {
        for (var a = H.length - 1; a >= 0; a--) m(H[a])
    }

    function p(a, b) {
        var c = a.node.style;
        switch (b) {
            case 0:
                c.position = "absolute", c.left = a.offset.left + "px", c.right = a.offset.right + "px", c.top = a.offset.top + "px", c.bottom = "auto", c.width = "auto", c.marginLeft = 0, c.marginRight = 0, c.marginTop = 0;
                break;
            case 1:
                c.position = "fixed", c.left = a.box.left + "px", c.right = a.box.right + "px", c.top = a.css.top, c.bottom = "auto", c.width = "auto", c.marginLeft = 0, c.marginRight = 0, c.marginTop = 0;
                break;
            case 2:
                c.position = "absolute", c.left = a.offset.left + "px", c.right = a.offset.right + "px", c.top = "auto", c.bottom = 0, c.width = "auto", c.marginLeft = 0, c.marginRight = 0
        }
        a.mode = b
    }

    function q(a) {
        a.clone = document.createElement("div");
        var b = a.node.nextSibling || a.node,
            c = a.clone.style;
        c.height = a.height + "px", c.width = a.width + "px", c.marginTop = a.computed.marginTop, c.marginBottom = a.computed.marginBottom, c.marginLeft = a.computed.marginLeft, c.marginRight = a.computed.marginRight, c.padding = c.border = c.borderSpacing = 0, c.fontSize = "1em", c.position = "static", c.cssFloat = a.computed.cssFloat, a.node.parentNode.insertBefore(a.clone, b)
    }

    function r(a) {
        a.clone.parentNode.removeChild(a.clone), a.clone = void 0
    }

    function s(a) {
        var b = getComputedStyle(a),
            c = a.parentNode,
            d = getComputedStyle(c),
            f = a.style.position;
        a.style.position = "relative";
        var g = {
                top: b.top,
                marginTop: b.marginTop,
                marginBottom: b.marginBottom,
                marginLeft: b.marginLeft,
                marginRight: b.marginRight,
                cssFloat: b.cssFloat,
                display: b.display
            },
            h = {
                top: e(b.top),
                marginBottom: e(b.marginBottom),
                paddingLeft: e(b.paddingLeft),
                paddingRight: e(b.paddingRight),
                borderLeftWidth: e(b.borderLeftWidth),
                borderRightWidth: e(b.borderRightWidth)
            };
        a.style.position = f;
        var i = {
                position: a.style.position,
                top: a.style.top,
                bottom: a.style.bottom,
                left: a.style.left,
                right: a.style.right,
                width: a.style.width,
                marginTop: a.style.marginTop,
                marginLeft: a.style.marginLeft,
                marginRight: a.style.marginRight
            },
            j = u(a),
            k = u(c),
            l = {
                node: c,
                css: {
                    position: c.style.position
                },
                computed: {
                    position: d.position
                },
                numeric: {
                    borderLeftWidth: e(d.borderLeftWidth),
                    borderRightWidth: e(d.borderRightWidth),
                    borderTopWidth: e(d.borderTopWidth),
                    borderBottomWidth: e(d.borderBottomWidth)
                }
            },
            m = {
                node: a,
                box: {
                    left: j.win.left,
                    right: J.clientWidth - j.win.right
                },
                offset: {
                    top: j.win.top - k.win.top - l.numeric.borderTopWidth,
                    left: j.win.left - k.win.left - l.numeric.borderLeftWidth,
                    right: -j.win.right + k.win.right - l.numeric.borderRightWidth
                },
                css: i,
                isCell: "table-cell" == b.display,
                computed: g,
                numeric: h,
                width: j.win.right - j.win.left,
                height: j.win.bottom - j.win.top,
                mode: -1,
                inited: !1,
                parent: l,
                limit: {
                    start: j.doc.top - h.top,
                    end: k.doc.top + c.offsetHeight - l.numeric.borderBottomWidth - a.offsetHeight - h.top - h.marginBottom
                }
            };
        return m
    }

    function t(a) {
        for (var b = 0; a;) b += a.offsetTop, a = a.offsetParent;
        return b
    }

    function u(a) {
        var c = a.getBoundingClientRect();
        return {
            doc: {
                top: c.top + b.pageYOffset,
                left: c.left + b.pageXOffset
            },
            win: c
        }
    }

    function v() {
        G = setInterval(function() {
            !k() && z()
        }, 500)
    }

    function w() {
        clearInterval(G)
    }

    function x() {
        I && (document[L] ? w() : v())
    }

    function y() {
        I || (f(), n(), b.addEventListener("scroll", g), b.addEventListener("wheel", h), b.addEventListener("resize", z), b.addEventListener("orientationchange", z), a.addEventListener(M, x), v(), I = !0)
    }

    function z() {
        if (I) {
            o();
            for (var a = H.length - 1; a >= 0; a--) H[a] = s(H[a].node);
            n()
        }
    }

    function A() {
        b.removeEventListener("scroll", g), b.removeEventListener("wheel", h), b.removeEventListener("resize", z), b.removeEventListener("orientationchange", z), a.removeEventListener(M, x), w(), I = !1
    }

    function B() {
        A(), o()
    }

    function C() {
        for (B(); H.length;) H.pop()
    }

    function D(a) {
        for (var b = H.length - 1; b >= 0; b--)
            if (H[b].node === a) return;
        var c = s(a);
        H.push(c), I ? l(c) : y()
    }

    function E(a) {
        for (var b = H.length - 1; b >= 0; b--) H[b].node === a && (m(H[b]), H.splice(b, 1))
    }
    var F, G, H = [],
        I = !1,
        J = a.documentElement,
        K = function() {},
        L = "hidden",
        M = "visibilitychange";
    void 0 !== a.webkitHidden && (L = "webkitHidden", M = "webkitvisibilitychange"), b.getComputedStyle || c();
    for (var N = ["", "-webkit-", "-moz-", "-ms-"], O = document.createElement("div"), P = N.length - 1; P >= 0; P--) {
        try {
            O.style.position = N[P] + "sticky"
        } catch (Q) {}
        "" != O.style.position && c()
    }
    f(), b.Stickyfill = {
        stickies: H,
        add: D,
        remove: E,
        init: y,
        rebuild: z,
        pause: A,
        stop: B,
        kill: C
    }
}(document, window), window.jQuery && ! function($) {
    $.fn.Stickyfill = function(a) {
        return this.each(function() {
            Stickyfill.add(this)
        }), this
    }
}(window.jQuery);
/*! Menu */
!function(e){e.fn.pbtMenu=function(){return this.each(function(){for(var t=e(this),a=t.find(".widget ul > li").children("a"),n=a.length,r=0;r<n;r++){var i=a.eq(r),s=i.text();if("_"!==s.charAt(0))if("_"===a.eq(r+1).text().charAt(0)){var u=i.parent();u.append('<ul class="sub-menu sm-1"/>')}"_"===s.charAt(0)&&(i.text(s.replace("_","")),i.parent().appendTo(u.children(".sub-menu")))}for(r=0;r<n;r++){var c=a.eq(r),d=c.text();if("_"!==d.charAt(0))if("_"===a.eq(r+1).text().charAt(0)){var p=c.parent();p.append('<ul class="sub-menu sm-2"/>')}"_"===d.charAt(0)&&(c.text(d.replace("_","")),c.parent().appendTo(p.children(".sm-2")))}t.find(".sub-menu").parent("li").addClass("has-sub"),t.children(".widget").addClass("is-ready")})}}(jQuery);

/*! Lazy */
!function(o){o.fn.pbtLazy=function(n){return n=o.extend({onScroll:!0},n),this.each(function(t,c,e){var r=o(this),a=o(window),h=r.data("src"),l=r.width()>=1?r.width():1,s=(l=Math.round(l+l/10),r.height()>=1?r.height():1),i="w"+l+"-h"+(s=Math.round(s+s/10))+"-p-k-no-nu";function u(){var o=new Image;o.onload=function(){r.attr("style","background-image:url("+this.src+")").addClass("pbt-lazy")},o.src=t}h.match("resources.blogblog.com")&&(h="undefined"!=typeof noThumbnail?noThumbnail:"//1.bp.blogspot.com/-rI4UCIrwEI4/YN3nGkf0nCI/AAAAAAAAAD0/DQ6fW7eCps8NL7S0oh374KFg1MsWUf2GQCLcBGAsYHQ/s72-c/ptb-nth.png"),h.match(".googleusercontent.com")&&h.match("=")&&(e=h.split("="),h=e[1]&&""!=e[1].trim()?e[0]+"=w72-h72-p-k-no-nu":h),h.match(".googleusercontent.com")&&!h.match("=")&&(h+="=w72-h72-p-k-no-nu"),t=h.match("/s72-c")?h.replace("/s72-c","/"+i):h.match("/w72-h")?h.replace("/w72-h72-p-k-no-nu","/"+i):h.match("=w72-h")?h.replace("=w72-h72-p-k-no-nu","="+i):h,1==n.onScroll?a.on("load resize scroll",function o(){a.scrollTop()+a.height()>=r.offset().top&&(a.off("load resize scroll",o),u())}).trigger("scroll"):a.on("load",function o(){a.off("load",o),u()}).trigger("load")})}}(jQuery);

/*! Tabs */
!function(a){a.fn.pbtTabs=function(e){return e=a.extend({onHover:!1,isLinked:!1,animated:!0,transition:"fadeInUp"},e),this.each(function(){var t=a(this),n=t.children("[data-tab]"),i="active";if(1==e.onHover)var s="mouseenter";else s="click";t.prepend('<ul class="tab-items"></ul>'),n.each(function(){1==e.animated&&a(this).addClass("animated");var n=a(this).data("url");n?(n=1==e.isLinked?n:"#",n=1==e.onHover?n:"#"):(n="#",e.isLinked=!1),t.find(".tab-items").append('<li><a href="'+n+'">'+a(this).data("tab")+"</a></li>")}).eq(0).addClass(e.transition).addClass(i),t.find(".tab-items a").on(s,function(){1==e.isLinked&&1==e.onHover||a(this).on("click",function(a){a.preventDefault()});var t=a(this).parent().index();return a(this).closest(".tab-items").find(".active").removeClass("active"),a(this).parent().addClass("active"),n.removeClass(e.transition).removeClass(i).eq(t).addClass(e.transition).addClass(i),!1}).eq(0).parent().addClass("active")})}}(jQuery);

/*! Table of Contents | v0.4.1 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

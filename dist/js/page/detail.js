"use strict";define(["jquery","getUrl","template","text!../../tql/detail.html"],function(o,t,i,a){var c=t("activeid");o.getJSON("/book/detail",{activeid:c},function(t){console.log(t);var e=t.item;e.word_count=Math.round(e.word_count/1e4),i(a,e,"#wrap"),o(".book-dash-text").on("click",function(){location.href="/page/read.html?activeid="+c})})});
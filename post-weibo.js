// ==UserScript==
// @name         发送仅自己可见微博
// @version      0.1
// @description  默认发送仅自己可见微博
// @author       coddylau
// @match        https://weibo.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function(){
  let flag = 1
  let timer
  timer = setInterval(() => {
    flag++
    if(flag>3){
      clearInterval(timer)
    }
      $('.limits .S_txt1')[0].click();
      $('li[rank="1"] a')[0].click();
  }, 1000);
})()
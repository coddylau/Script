// ==UserScript==
// @name         发送仅自己可见微博
// @version      0.1
// @description  默认发送仅自己可见微博
// @author       coddylau
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==

(function(){
  let flag = 1
  let timer
  timer = setInterval(() => {
    flag++
    if(flag>3){
      clearInterval(timer)
    }
      document.querySelector('.limits .S_txt1').click()
      document.querySelector('li[rank="1"] a').click()
  }, 1000);
})()
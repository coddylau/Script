// ==UserScript==
// @name         微博Zen
// @version      0.1
// @description  删除微博影响注意力的部分
// @author       coddylau
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  addLoadEvent(zen)
  //将内容推送删除
  function zen() {
    let item = document.querySelector('#v6_pl_content_friendsfeed')
    // 上部分导航栏删除
    document.querySelector('.WB_global_nav').remove()
    // 左侧的分组删除
    document.querySelector('.WB_main_l').remove()
    // 删除发送框上面的话题
    document.querySelector('div[node-type="recommendTopic"]').remove()


    let cb = () => {
      // 删除推送的新微博提示
      document.querySelector('#home_new_feed_tip') && document.querySelector('#home_new_feed_tip').remove()
    }
    let observer = new MutationObserver(cb)
    observer.observe(item, { childList: true })
  }
  // 防止window onload回调重复出现
  function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func
    } else {
      window.onload = function () {
        oldOnload()
        func()
      }
    }
  }
})();
// ==UserScript==
// @name         发送仅自己可见微博
// @version      0.2
// @description  默认发送仅自己可见微博
// @author       coddylau
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==



(function () {
  "use strict";
  addLoadEvent(postMyself)

  function postMyself() {
    let log = console.log
    let postArea = document.querySelector("textarea.W_input")
    let postBtn = document.querySelector('.func_area')
    // 点击发送微博选项
    document.querySelector('a[action-type="showPublishTo"]').click()

    // 查看是否有仅自己可见按钮
    let cb = () => {
      postArea.click()
      // observer.disconnect()
    }
    let observer = new MutationObserver(cb)
    observer.observe(postBtn, { childList: true })

    // 点击仅自己可见按钮
    postArea.addEventListener('change', () => {
      let tap = document.querySelectorAll('li[action-type="select"]')
      // 检查仅自己可见按钮是否被选中
      if (tap && tap[2].classList[0] === 'cur') { return }
      let flag = 1
      let timer
      timer = setInterval(() => {
        flag++
        if (flag > 3) {
          clearInterval(timer)
          return
        }
        // 点击仅自己可见
        document.querySelector('li[rank="1"] a').click()
      }, 500);
    })
  }
  
  // 防止window onload回调重复出现
  function addLoadEvent(func) {
    var oldOnload = window.onload
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
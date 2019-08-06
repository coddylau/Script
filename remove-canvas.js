// ==UserScript==
// @name         删除canvas
// @version      0.1
// @description  部分网站canvas占用电脑太多性能
// @author       coddylau
// @match        *://*/*
// @exclude     http://1*
// @exclude     https://*.bilibili.com/*
// @exclude     https://weibo.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  addLoadEvent(removeCanvas)

  // 删除canvas
  function removeCanvas() {
    let log = console.log
    let canvasList = document.querySelectorAll('canvas')
    if (canvasList.length) {
      // log(`本页有${canvasList.length}处canvas`)
      canvasList.forEach((canvas, index) => {
        if (canvas.width > 300) {
          canvas.remove()
          log(`已删除canvas${index + 1}处`)
        }
      })
    }
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
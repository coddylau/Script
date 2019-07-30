// ==UserScript==
// @name         删除canvas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  部分网站canvas占用电脑太多性能
// @author       coddylau
// @match        *://*/*
// @exclude     http://127.0.0.1*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  window.onload = function () {
    let log = console.log
    let canva = document.querySelectorAll('canvas')
    if (canva.length) {
      log(`本页有${canva.length}处canvas`)
      canva.forEach((value, index) => {
        value.remove()
        log(`已删除canvas${index + 1}处`)
      })
    }
  }
})();
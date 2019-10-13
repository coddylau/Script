// ==UserScript==
// @name         选中所有 up 主
// @version      0.2
// @description  哔哩哔哩选中所有 up 主
// @author       coddylau
// @match        https://space.bilibili.com/*/fans/follow*
// @grant        none
// ==/UserScript==


; (function () {
  'use strict'
  addLoadEvent(main)

  function selectAllUp() {
    var btn = document.querySelector('.follow-action-bottom li')
    var cloneBtn = btn.cloneNode()
    cloneBtn.innerHTML = '选中全部'
    cloneBtn.style.cursor = 'pointer'
    btn.after(cloneBtn)

    document.addEventListener('click', function (ev) {
      ev = ev || event
      if (ev.target === cloneBtn) {

        let follow = document.querySelectorAll('div.follow-select')

        follow.forEach((item, index) => {
          if (index >= 20) return
          item.click()
        })
      }

    })
  }

function main() {
  let batch = document.querySelector('.batch')
  if (!batch) return
  batch.addEventListener('click', function () {
    setTimeout(() => {
      selectAllUp()
    }, 0)
  })

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
})()
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
  window.onload = function () {
    let postBtn = document.querySelector('.func_area')

    document.querySelector('.limits .S_txt1').click()
    
    // 监视发送微博子节点
    let cb = () => {
      document.querySelector('.layer_menu_list').style.display = 'none'
    }
    let observer = new MutationObserver(cb)
    observer.observe(postBtn, { childList: true })

    document.querySelectorAll(".W_input")[1].addEventListener('change', () => {
      if (document.querySelectorAll('li[action-type="select"]')[2].classList[0] === 'cur') { return }
      let flag = 1
      let timer
      timer = setInterval(() => {
        flag++
        if (flag > 3) {
          clearInterval(timer)
          return
        }
        document.querySelector('li[rank="1"] a').click()
      }, 500);
    })

  }
})();
// ==UserScript==
// @name         维基百科密码免输入
// @version      0.1
// @description  try to take over the world!
// @author       coddylau
// @match        https://zh.wikipedia.hk.cn/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
  'use strict';
  let inpu = document.querySelector('input[type="password"]')
  inpu.value='weijibaike'
  $('input[type="submit"]')[0].click()
})();
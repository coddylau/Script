// ==UserScript==
// @name         维基百科密码免输入
// @version      0.1
// @description  try to take over the world!
// @author       coddylau
// @match        https://zh.wikipedia.hk.cn/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let inpu = document.querySelector('input[type="password"]')
  inpu.value='weijibaike'
  document.querySelector('input[type="submit"]').click()
})();
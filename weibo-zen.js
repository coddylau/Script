// ==UserScript==
// @name         微博Zen
// @version      0.2
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
    // 推送节点

    let item = document.querySelector('#v6_pl_content_friendsfeed') || document.querySelector('div[node-type=homefeed]')
    let nodeList = []

    // 头部搜索框节点
    nodeList.push(document.querySelector('.gn_search_v2 > .placeholder'))
    // 右侧书和明星推荐
    nodeList.push(document.querySelector('#v6_pl_rightmod_rank'))
    // 右侧话题
    let arr = document.querySelectorAll('.WB_right_module')
    if (arr) {
      arr = Array.prototype.slice.call(arr)
      nodeList = nodeList.concat(arr)
    }

    // 输入框上部分
    let recommendTopic = document.querySelector('div[node-type="recommendTopic"]')
    if (recommendTopic) {
      recommendTopic.remove()
    }

    // 去除头像页背景图片动画
    let backimg = document.querySelector('.banner_transition')

    if (backimg) {
      backimg.style.transition = 'none'
    }

    // 传递节点数组隐藏节点
    function hideNode(list) {
      list.forEach(value => {
        if (value.style) {
          value.style.display = 'none'
        }
      })
    }

    nodeList = nodeList.filter(value => {
      return value !== null
    })
    hideNode(nodeList)

    if (item) {
      let cb = () => {
        // 删除推送的新微博提示
        document.querySelector('#home_new_feed_tip') && document.querySelector('#home_new_feed_tip').remove()
      }
      let observer = new MutationObserver(cb)
      observer.observe(item, { childList: true })
    }
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
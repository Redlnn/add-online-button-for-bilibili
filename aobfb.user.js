// ==UserScript==
// @name        B站新版主页加入观看列表按钮
// @description Add "online" button to new homepage of Bilibili
// @namespace   https://github.com/Redlnn/add-online-button-for-bilibili
// @match       *://www.bilibili.com/
// @include     *://www.bilibili.com/
// @grant       none
// @version     1.0
// @author      Red_lnn
// @description 2022/1/13 下午4:49:12
// @license     AGPL-3.0-only
// @run-at      document-end
// @supportURL  https://github.com/Redlnn/add-online-button-for-bilibili
// @homepageURL https://github.com/Redlnn/add-online-button-for-bilibili
// ==/UserScript==

function getCookie(name) {
    var cookieList = document.cookie.split('; ')
    for (var i = 0; i < cookieList.length; i++) {
        var temp = cookieList[i].split('=')
        if (temp[0] == name) return decodeURI(temp[1])
    }
}

;(function () {
    if (getCookie('i-wanna-go-back') != '-1') return 0
    var swipe = document.getElementsByClassName('recommended-swipe')
    if (swipe.length == 0) return 0
    var newDiv = document.createElement('div')
    newDiv.style.height = '48px'
    newDiv.style['padding-top'] = '10px'
    newDiv.style.display = 'flex'
    newDiv.style['flex-wrap'] = 'nowarp'
    newDiv.style['align-content'] = 'center'
    newDiv.style['justify-content'] = 'center'
    newDiv.style['align-items'] = 'center'
    var newLink = document.createElement('a')
    newLink.href = 'https://www.bilibili.com/video/online.html'
    newLink.innerHTML = '观看列表'
    newLink.style.background = '#f4f4f4'
    newLink.style.width = '100%'
    newLink.style.height = '38px'
    newLink.style['line-height'] = '38px'
    newLink.style['text-align'] = 'center'
    newLink.style.border = '1px solid #e7e7e7'
    newLink.style['border-radius'] = '5px'
    newLink.onmouseenter = function () {
        newLink.style.color = '#00AEEC'
    }
    newLink.onmouseleave = function () {
        newLink.style.color = ''
    }
    newLink.setAttribute('target', '_blank')
    newDiv.appendChild(newLink)
    swipe[0].appendChild(newDiv)
})()

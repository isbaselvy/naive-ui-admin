let userAgent = window.navigator.userAgent // 取得浏览器的userAgent字符串
let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
if (isIE || isIE11) {
  document.addEventListener('mouseover', function (e) {
    if (e.target.getAttribute('class') === 'cell el-tooltip') {
      e.target.setAttribute('title', e.target.innerText)
    }
  })
}

function resize () {
    // 系统整体缩放
    let cliWidth = document.documentElement.clientWidth || document.body.clientWidth
    let cliHeight = document.documentElement.clientHeight || document.body.clientHeight
    let contW = 1920
    let contH = 1080
    let w = cliWidth / contW
    let h = cliHeight / contH
    let appDom = document.querySelector('#app')
    let size = cliWidth / cliHeight
    if (cliWidth === screen.width) {
      appDom.style.transform = 'scale(' + w + ',' + h + ')'
      $('body').css('height', '100%')
      $('body').css('width', '100%')
      $('html').css('overflow-y', 'hidden')
      $('html').css('overflow-x', 'hidden')
    } else if (size > contW / contH) {
      appDom.style.transform = 'scale(' + w + ',' + w + ')'
      $('body').css('height', 1080 / 1920 * cliWidth + 'px')
      $('body').css('width', cliWidth + 'px')
      $('html').css('overflow-y', 'auto')
      $('html').css('overflow-x', 'hidden')
    } else {
      appDom.style.transform = 'scale(' + h + ',' + h + ')'
      $('body').css('width', 1920 * cliHeight / 1080 + 'px')
      $('body').css('height', cliHeight + 'px')
      $('html').css('overflow-x', 'auto')
      $('html').css('overflow-y', 'hidden')
    }
    appDom.style.transformOrigin = 'top left'
    appDom.style.width = contW + 'px'
    appDom.style.height = contH + 'px'
  }
function isDesktop(JumpURL) {
    var userAgent = navigator.userAgent;
    // 移动设备关键词
    var mobileKeywords = ['Mobile', 'Android', 'iPhone', 'iPad', 'Windows Phone', 'BlackBerry', 'Nokia', 'SymbianOS', 'OPPO', 'vivo', 'Huawei', 'Xiaomi', 'Honor', 'BB10', 'Touch'];
    var mobileChecked = 'false';
    // 判断是否包含移动设备关键词
    for (var i = 0; i < mobileKeywords.length; i++) {
      var keyword = mobileKeywords[i];
      if (userAgent.includes(keyword)) {
        mobileChecked = 'true';
      }
    }
    if (mobileChecked != 'true') {
      window.location.href = JumpURL;
    }
  }
  
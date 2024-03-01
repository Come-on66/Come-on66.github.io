function isDesktop(JumpMode,JumpURL) {
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
  if (mobileChecked === 'true') {
    if (JumpMode === 'false'){
    alert("Orz 非常抱歉，目前暂未开放手机访问通道或对手机进行专项适配。\n- 您可以期待后续银发候鸟B端APP上线。\n- 感谢您的支持！");}
    else
    window.location.href = JumpURL;
  }
}

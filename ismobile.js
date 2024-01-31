function isDesktop() {
    const userAgent = navigator.userAgent;
    // 移动设备关键词
    const mobileKeywords = ['Mobile', 'Android', 'iPhone', 'iPad', 'Windows Phone', 'BlackBerry', 'Nokia', 'SymbianOS', 'OPPO', 'vivo', 'Huawei', 'Xiaomi', 'Honor', 'BB10', 'Touch'];

    // 判断是否包含移动设备关键词
    for (let keyword of mobileKeywords) {
        if (userAgent.includes(keyword)) {
            alert("Orz 非常抱歉，目前暂未开放手机访问通道或对手机进行专项适配。\n- 您可以期待后续银发候鸟B端APP上线。\n- 感谢您的支持！");
        }
    }

    return true;
}

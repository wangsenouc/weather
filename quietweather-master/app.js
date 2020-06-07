App({
  onLaunch () {
    // wx.cloud.init({
    //   env: 'envid',
    //   traceUser: true,
    // })
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systeminfo = res
        this.globalData.isIPhoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    isIPhoneX: false,
    key: '1290dd4707ac41caa7c708ecb3ba8be8',
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/', //天气图标的url
    requestUrl: {
      weather: 'https://free-api.heweather.com/s6/weather?location=',
      //hourly: 'https://free-api.heweather.com/s6/weather/hourly',
      //hourly: 'https://free-api.heweather.com/s6/weather/hourly?location=',
    },
  },
})
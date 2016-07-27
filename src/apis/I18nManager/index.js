type I18nManagerStatus = {
  allowRTL: (allowRTL: boolean) => {},
  isRTL: boolean
}

const I18nManager: I18nManagerStatus = {
  allowRTL() {},
  isRTL: false
}

module.exports = I18nManager

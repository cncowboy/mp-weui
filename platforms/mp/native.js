// import wx from '@axetroy/wxapp-promisify';
// import MySwitch from './switch'

/* eslint-disable */

const Native = {}
Native.install = function (Vue) {
  // Vue.component('my-switch', MySwitch)
  Vue.prototype.$getPickerEventValue = (e, range) => {
    const value = parseInt(e.mp.detail.value)
    console.log('picker value:', value)
    let i = 0
    for (let key in range) {
      if (i === value) {
        return range[key]
      }
      i++
    }
    return null
  }
  Vue.prototype.$getEventValue = (e) => {
    return e.mp.detail.value
  }

}

export default Native

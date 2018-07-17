// import wx from '@axetroy/wxapp-promisify';
import MySwitch from './switch'

/* eslint-disable */

const Native = {}
Native.install = function (Vue) {
  Vue.component('my-switch', MySwitch)
}

export default Native

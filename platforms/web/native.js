import Picker from './picker'
import MySwitch from './switch'

/* eslint-disable */
const Native = {}
Native.install = function (Vue) {
  Vue.component('picker', Picker)
  Vue.component('my-switch', MySwitch)
}

export default Native

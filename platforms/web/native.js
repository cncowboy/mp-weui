import Picker from './picker'
import MySwitch from './switch'

/* eslint-disable */
const Native = {}
Native.install = function (Vue) {
  Vue.component('picker', Picker)
  Vue.component('switch', MySwitch)

  Vue.prototype.$getPickerEventValue = (e, range) => {
    return e
  }
}

export default Native

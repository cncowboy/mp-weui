import Picker from './picker'

/* eslint-disable */
const Native = {}
Native.install = function (Vue) {
  Vue.component('picker', Picker)

  Vue.prototype.$getPickerEventValue = (e, range) => {
    return e
  }
  Vue.prototype.$getEventValue = (e) => {
    return e
  }
}

export default Native

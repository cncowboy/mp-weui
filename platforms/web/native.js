import MyPicker from './my-picker'

/* eslint-disable */
const Native = {}
Native.install = function (Vue) {
  Vue.component('picker', MyPicker)
}

export default Native

import Picker from './picker'

/* eslint-disable */
const Native = {}
Native.install = function (Vue) {
  Vue.component('picker', Picker)

  Vue.prototype.$getPlatform = () => {
    return 'web'
  }
  Vue.prototype.$getPickerEventValue = (e, mode, range) => {
    const padLeft = (str, length) => { 
      if(str.length >= length) 
        return str; 
      else
        return padLeft('0' + str, length); 
    }
    if (mode==='date') {
      const items = e.map(item=>padLeft(item.value + '', 2))
      return items.join('-')
    } else if (mode==='time') {
      const items = e.map(item=>padLeft(item.value + '', 2))
      return items.join(':')
    }
    return e
  }
  Vue.prototype.$getDefaultValueForPicker = (mode, defaultValue, range) => {
    if (mode === 'selector') {
      return defaultValue
    } else if (mode === 'multiSelector') {
      const values = defaultValue.split(',')
      return values
    } else if (mode === 'date') {
    } else if (mode === 'time') {
    }
    return defaultValue
  }
  Vue.prototype.$getInputEventValue = (e) => {
    return e.target.value
  }
  Vue.prototype.$getActionSheetEventValue = (e, menus) => {
    let idx = 0
    if (typeof(menus) === 'object') {
      for (const key in menus) {
        if (e.menuKey === key) return idx
        idx++
      }    
    }

    for (const [key, item] of menus) {
      if (key === e.menuKey) return idx
      idx++
    }
    return -1
  }
}

export default Native

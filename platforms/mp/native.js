// import wx from '@axetroy/wxapp-promisify';
// import MySwitch from './switch'

/* eslint-disable */

const Native = {}
Native.install = function (Vue) {
  // Vue.component('my-switch', MySwitch)
  Vue.prototype.$getPlatform = () => {
    return 'weapp'
  }
  Vue.prototype.$getPickerEventValue = (e, mode, range) => {
    const value = parseInt(e.mp.detail.value)
    console.log('picker value:', value)
    if (mode === 'selector') {
      if (range) {
        let i = 0
        for (let key in range) {
          if (i === value) {
            return range[key]
          }
          i++
        }
      }
    } else if (mode==='multiSelector') {
      const result = []
      if (range) {
        let colIndex = 0
        for (let colKey in range) {
          let rowIndex = 0
          const rows = range[colKey]
          for (let rowKey in rows) {
            if (value[colIndex] === rowIndex) {
              result.push(rows[rowKey])
              break;
            }
            rowIndex++
          }
          colIndex++
        }
        return result
      }
    } else if (mode==='date') {

    } else if (mode==='time') {
      
    }    
    return e.mp.detail.value
  }
  Vue.prototype.$getEventValue = (e) => {
    return e.mp.detail.value
  }
  Vue.prototype.$getActionSheetEventValue = (e) => {
    return e.tapIndex
  }

}

export default Native

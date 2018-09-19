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
    return e
  }
  Vue.prototype.$getEventTouches = (e) => {
    return e.touches
  }
  Vue.prototype.$getSystemInfo = () => {
    // const supportOrientation = (typeof window.orientation === 'number' && typeof window.onorientationchange === 'object')
    let orientation = window.orientation;
    switch(orientation){
      case 90:
      case -90:
        orientation = 'landscape'
        break
      default:
        orientation = 'portrait'
        break
    }
    return {
      // screenHeight: document.body.clientHeight, //网页可见区域宽
      // screenWidth: document.body.clientWidth, //网页可见区域高

      screenHeight: window.screen.height, //屏幕物理分辨率的高
      screenWidth: window.screen.width, //屏幕物理分辨率的宽
      windowWidth: window.screen.availWidth, //屏幕可用工作区高度
      windowHeight: window.screen.availHeight, //屏幕可用工作区宽度

      pixelRatio: window.devicePixelRatio,
      orientation: orientation
    }
  }
  Vue.prototype.$previewImage = (opts) => {
    
  }
}

export default Native

import wx from '@axetroy/wxapp-promisify';

/* eslint-disable */

let Native = {};
Native.install = function (Vue, options) {
  let opt = {
    defaultType:'bottom',
    duration:'2500'
  };
  for(let property in options){
    opt[property] = options[property];
  }
  function extend(opts, option) {
    let opt = opts || {}
    for (let key in opt) {
      if (typeof opt[key] === 'object') {
        for (let k in opt[key]) {
          option[key][k] = opt[key][k]
        }
      } else {
        option[key] = opt[key]
      }
    }
    return option
  }

  Vue.prototype.$native = wx;
};

Vue.use(Native);

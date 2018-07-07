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

  /*
  opts:{
  title:
  icon:
  duration: 毫秒,
  success: 成功回调,
  fail,
  complete
  }
   */
  Vue.prototype.$toast = function(opts){
    wx.showToast(opts);
  };
  /*
  opts:{
  title:
  icon:
  duration: 毫秒,
  success: 成功回调,
  fail,
  complete
  }
   */
  Vue.prototype.$showLoading = function(opts){
    wx.showLoading(opts);
  };
  Vue.prototype.$hideLoading = function(){
    wx.hideLoading();
  };
  Vue.prototype.$showModal = function(opts){
    wx.showModal(opts);
  };
  Vue.prototype.$getSystemInfo = function(opts){
    wx.getSystemInfo(opts);
  };
  Vue.prototype.$showActionSheet = function(opts){
    wx.showActionSheet(opts);
  };
  Vue.prototype.$previewImage = function(opts){
    wx.previewImage(opts);
  };
};
Vue.use(Tips);


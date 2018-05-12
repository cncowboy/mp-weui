import Vue from 'vue';
import { Actionsheet } from 'vux';

export default {

  startPullDownRefresh () {
    console.log('startPullDownRefresh');
  },
  showNavigationBarLoading () {
    Vue.prototype.$loading('加载中');
  },
  hideNavigationBarLoading () {
    if (!document.querySelector('.lx-load-mark')) return;
    Vue.prototype.$loading.close();
  },

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
  showToast (opts) {
    const args = {
      text: opts.title,
    };
    Vue.prototype.$vux.toast.show(args);
  },
  showModal ({ title }) {
    const args = {
      text: opts.title,
    };
    Vue.prototype.$vux.toast.show(args);
  },
  stopPullDownRefresh () {
    console.log('stopPullDownRefresh');
  },
  showLoading (opts) {
    const args = {
      text: opts.title,
    };
    Vue.prototype.$vux.loading.show(args);
  },

  hideLoading() {
    Vue.prototype.$vux.loading.hide();
  },

  getSystemInfo(opts) {
    const bodyW = document.body.clientWidth;
    const bodyH = document.body.clientHeight;
    if (!opts.success) {
      return false;
    }
    opts.success({screenWidth: bodyW, screenHeight: bodyH});
  },
  showActionSheet({itemList, itemColor, success}) {

    let actionSheetTpl = Vue.extend({
      template: `<Actionsheet :menus="menus" show-cancel @on-click-menu="" />`,
      data() {
        return {
          menus: itemList,
          successCB: success,
        }
      },
      methods: {
        onClickMenu(menuKey, menuItem) {
          successCB(menuKey);
        },
      }
    })
    let actionSheetVue = new actionSheetTpl().$mount()
    let tpl = actionSheetVue.$el
    document.body.appendChild(tpl)
    return actionSheetVue
  },
  previewImage(opts){

  },
};

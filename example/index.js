// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Example from './Example'
import router from './router'
// import previewDirective from '../src/directive/preview'
// const EVENT_BUS = new Vue({
//   data () {
//     return {
//       GM_PREVIEW: {
//         show: false,
//         current: {},
//         imagesList: [],
//         loading: false
//       }
//     }
//   }
// })
// Vue.prototype.$eventBus = Vue.prototype.$eventBus || EVENT_BUS
// previewDirective(Vue, Vue.prototype.$eventBus)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#example',
  template: '<Example/>',
  components: {
    Example
  }
})

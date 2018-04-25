// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import API from './api'
import axios from 'axios'
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Vue.use(QuillEditor)

Vue.prototype.$http = axios
Vue.prototype.$API = API
Vue.use(ElementUI)

// https://www.zhihu.com/question/267915818/answer/330435625
// https://blog.csdn.net/z852064121/article/details/75460408
Vue.prototype.POST = function (URI, params, respCallback) {
  this.$http.post(URI, params).then(response => {
    let data = response.data
    if (data.errcode === this.$API.ErrCode.UNAUTHORIZED) {
      this.$store.commit('changeLoginedState', false)
      this.$router.push('login-page')
    } else if (data.errcode === this.$API.ErrCode.OK) {
      this.$store.commit('changeLoginedState', true)
    }
    respCallback(data)
  }).catch(error => {
    console.log(error)
  })
}

Vue.prototype.GET = function (URI, params, respCallback) {
  this.$http.get(URI, {params: params}).then(response => {
    let data = response.data
    if (data.errcode === this.$API.ErrCode.UNAUTHORIZED) {
      this.$store.commit('changeLoginedState', false)
      this.$router.push('login-page')
    } else if (data.errcode === this.$API.ErrCode.OK) {
      this.$store.commit('changeLoginedState', true)
    }
    respCallback(data)
  }).catch(error => {
    console.log(error)
  })
}

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login-page' && store.state.logined) {
    next(from.fullPath)
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const that = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$util = {
  resetEditNavItem (target) {
    for (let i = 0; i < that.$store.state.editNavItems.length; i++) {
      let item = that.$store.state.editNavItems[i]
      if (item.to === target.to) {
        let len = that.$store.state.editNavItems.length - i
        that.$store.state.editNavItems.splice(i, len)
        break
      }
    }
    that.$store.state.editNavItems.push(target)
  }
}

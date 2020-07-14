import Vue from 'vue/dist/vue.common.js'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
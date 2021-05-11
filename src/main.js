import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store'

import Alert from './components/Alert.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  Alert,
  render: h => h(App)
}).$mount('#app')

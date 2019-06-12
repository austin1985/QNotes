import Vue from 'vue'
import App from './App.vue'
import vueConfig from 'vue-config'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import configs from './app.config'

Vue.config.productionTip = false
Vue.use(SuiVue)
Vue.use(vueConfig, configs)

new Vue({
  render: h => h(App),
}).$mount('#app')



 

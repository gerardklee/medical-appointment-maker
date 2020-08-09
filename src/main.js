import Vue from 'vue';
import App from './App.vue';
import './plugins/bootstrap-vue.js';
import './styles/patientinfo.css';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app'
)

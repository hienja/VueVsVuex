import Vue from 'vue';
import App from './App2.vue';
import store from './store/index';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');

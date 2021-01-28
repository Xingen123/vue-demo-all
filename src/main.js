import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// vue-good-table
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';

Vue.config.productionTip = false;
Vue.use(Antd);
// vue-good-table
Vue.use(VueGoodTablePlugin);

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

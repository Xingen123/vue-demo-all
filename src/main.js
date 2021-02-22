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

// vue-js-grid
import Grid from 'vue-js-grid';
import hl from 'highlight.js'; // 导入代码高亮文件
import 'highlight.js/styles/a11y-dark.css'; // 导入代码高亮样式
import VideoPlayer from 'vue-video-player';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

// 自定义一个代码高亮指令
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hl.highlightBlock(block);
  });
});
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueGoodTablePlugin);
Vue.use(Grid);
Vue.use(VideoPlayer);

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

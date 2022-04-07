import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import store from './store';
import router from './routers';
import 'ant-design-vue/dist/antd.less';

import IconFont from './components/Iconfont/index.vue';

createApp(App).use(Antd).use(store).use(router).component('IconFont', IconFont).mount('#app');

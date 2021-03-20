import router from './router.js';
import store from './store/index.js';

import App from './components/app.js';

var app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
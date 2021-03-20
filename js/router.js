import store from './store/index.js';

const Home = () => import('./components/home.js');

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
  ]
});

export default router;
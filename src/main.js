// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/index'
import router from './router'
import Vuex from 'vuex'
import {store} from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'


Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI, { locale })


/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App)
});

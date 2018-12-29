import Vue from 'vue';
import AppHelmut from './src/index.vue'

import FundamentalVue from 'fundamental-vue';
Vue.use(FundamentalVue);

new Vue({
    el: "#demo",
    components: {
        app: AppHelmut
    }
});
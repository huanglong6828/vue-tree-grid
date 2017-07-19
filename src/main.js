import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App }
})
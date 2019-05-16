import Vue from './vue.js';
import MainTemplate from './templates/main-template.js'
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Kedatangan from './components/kedatangan.js';
import Wafat from './components/wafat.js';

// routes must be define 
// Vue.use(VueRouter);

new Vue({
    el: '#app',
    components: {
      'navbar': Navbar,
      'Header': Header,
      'Footer': Footer,
      'Kedatangan': Kedatangan,
      'Wafat': Wafat
    },
    template: MainTemplate,
})
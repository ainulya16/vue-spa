import Vue from './vue.js';
import MainTemplate from './templates/main-template.js'
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Kedatangan from './components/kedatangan.js';

Vue.use(VueRouter);

new Vue({
    el: '#app', // This should be the same as your <div id=""> from earlier.
    components: {
      'navbar': Navbar,
      'Header': Header,
      'Footer': Footer,
      'Kedatangan': Kedatangan,
    },
    template: MainTemplate,
    // data: function () {
    //   return {
    //     text: 'Hello',
    //     data_kedatangan: [],
    //   }
    // },
    

})
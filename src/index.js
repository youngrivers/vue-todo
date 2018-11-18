import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)
root.setAttribute('id', 'app');
new Vue({
        render: (h) => h(App)
    }).$mount(root)
    /* let app = new Vue({
        el: '#app',
        //template: '<App/>',
        //components: { App },
        data: {
            ss: 'hello world!'
        }
    }); */
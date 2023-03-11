import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

//to outcome refreshing user problems
import { projectAuth } from './firebase/config'
let app;
projectAuth.onAuthStateChanged(()=> {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})



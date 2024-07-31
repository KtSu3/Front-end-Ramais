import './assets/main.css'
import { Quasar, Notify } from 'quasar'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import langBR from 'quasar/lang/pt-BR.js'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(router)

app.use(Quasar, {

  lang: langBR,
  plugins: {Notify},
  
  config: {
    // notify: 
    // dark:
  },


})



// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')


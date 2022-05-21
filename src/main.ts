import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zc2NvZGUyNiIsImEiOiJjbDNmY251YXAwbXVxM2VwNmhuaXllb2Z2In0.aFxua-I4Vu4SIJ-8qsFt2g'

if( !navigator.geolocation ){
  alert('Tu navegador no soporta el GeoLocation')
  throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

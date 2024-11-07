import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import './tailwind.css'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import { IonThumbnail } from '@ionic/vue';
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
//import '@ionic/vue/css/palettes/ligth.system.css';

/* Theme variables */
//import './theme/variables.css';
import { addIcons } from 'ionicons';
import './theme/variables.css';
import { StatusBar, Style } from '@capacitor/status-bar'
addIcons({
  'home': 'public//home.svg',
  'flag-de': 'assets/flags/de.svg'
});
const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});


StatusBar.setStyle({ style: Style.Light }); 
// Para texto oscuro y barra clara 
StatusBar.setStyle({ style: Style.Dark }); 
// Para texto claro y barra oscura // Configurar el color de fondo de la barra de estado (solo Android) 
StatusBar.setBackgroundColor({ color: '#f6f6f8' }); // Cambia el color según tus necesidades // Mostrar/Ocultar la barra de estado 
//StatusBar.show

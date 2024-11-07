<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content">
        <ion-header class="no-shadow-title">
          <ion-toolbar>
            <ion-title>Mi cuenta</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item router-link="/tabs/tab1" :button="true" @click="navigateTo">Home</ion-item>
            <ion-item router-link="/tabs/home" :button="true" @click="navigateTo">Perfil</ion-item>
            <ion-item router-link="/tabs/settings">Configuración</ion-item>
            <ion-item router-link="/tabs/tab1">Salir</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane> </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { IonPage, IonHeader, IonToolbar, IonContent, IonCardTitle, IonSplitPane, IonIcon, IonList, IonTitle, IonLabel, IonMenu, IonItem } from '@ionic/vue';

import { io } from 'socket.io-client';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
const socket = io('http://localhost:5000');
const messages = ref([]);
const newMessage = ref('');
const router = useRouter()
onMounted(() => {

  onUnmounted(() => {
    socket.off('message');
  });

  const sendMessage = () => {
    if (newMessage.value.trim()) {
      socket.emit('message', newMessage.value);
      newMessage.value = '';
    }
  };


})


const navigateTo = async () => {
    console.log('navigate to');
    // await closeMenu();
    router.push('/tabs/tab1');
}
</script>
<style>
.no-shadow-title {
  box-shadow: none;
}

</style>
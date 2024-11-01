<template> <ion-page> <ion-header> <ion-toolbar> <ion-title>Segmento 1</ion-title> </ion-toolbar> </ion-header>
        <ion-content>
            <p>Contenido del Segmento 1</p>
        </ion-content> </ion-page> </template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonThumbnail, IonImg } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
<style>
.custom-toolbar {
  height: 200px;
  /* Ajusta este valor según tus necesidades */
  background-color: #0A2253;
  color: white;
  border-bottom-left-radius: 15px;
  /* Ajusta el valor según lo que desees */
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
}

.toolbar-title {
  flex: 1;
  text-align: left;
  /* Alinea horizontalmente a la izquierda */
  font-size: 30px;
}

.no-background{
  background-color: #F3F5FD;
  box-shadow: none;
 
}
</style>
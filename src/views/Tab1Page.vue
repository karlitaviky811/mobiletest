<template>
  <ion-page>
    <ion-header class="no-background">
      <ion-toolbar color="#0A2253" class="bg-[#0A2253] custom-toolbar shadow-lg">
        <ion-img src="/home-toolbar.svg" class="w-[180px] mx-2 bg-transparent"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false">
      <ExploreContainer class="bg-[#F3F5FD] h-full" />
    </ion-content>
  </ion-page>
</template>

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
<template>
  <ion-page>
    <ion-header class="no-background">
      <ion-toolbar color="white" class="bg-[#0A2253] custom-toolbar shadow-lg">
        <h2 style="color:black; margin:10px;">Hola, Luis Perez</h2>
        <!--ion-img src="/home-toolbar.svg" class="w-[180px] mx-2 bg-transparent"></ion-img-->
        <ion-label style="color:black; margin:10px;">Daka y asociados</ion-label>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false" style="margin-top:30px;">
    
      <ion-card color="success">
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
    
        <ion-card-content> Card Content </ion-card-content>
      </ion-card>
    
      <ion-card color="warning">
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
    
        <ion-card-content> Card Content </ion-card-content>
      </ion-card>
    
      <ion-card color="light">
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
    
        <ion-card-content> Card Content </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

</script>
<style>
.custom-toolbar {
  height: 100px;
  /* Ajusta este valor según tus necesidades */
  background-color: white;
  color: white;
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
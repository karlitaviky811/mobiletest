<template>
  <ion-page>
    <ion-tabs class="bg-toolbar">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="p-[17px] shadow-sm bg-toolbar">
        <ion-tab-button tab="tab1" href="/tabs/tab1" class="bg-toolbar">
          <ion-icon :icon="'/home.svg'"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2" class="bg-toolbar">
          <ion-icon :icon="'/withdraw.svg'"></ion-icon>
          <ion-label>Servicios</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3" class="bg-toolbar">
          <ion-icon aria-hidden="true" :icon="'/promotions.svg'" />
          <ion-label>Repuestos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/tab4" class="bg-toolbar">
          <ion-icon aria-hidden="true" :icon="'/notifications.svg'" />
          <ion-label>Notificaciones</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
<style>
.bg-toolbar{
  background-color: #fff;
}
</style>
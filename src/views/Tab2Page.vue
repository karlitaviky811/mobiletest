<template>
  <ion-page>
    <ion-header class="no-shadow flex justify-center">
      <ion-toolbar class="center-toolbar">
        <div class="custom-width">
          <ion-title class="w-auto center-title font-roboto text-xl text-xl">Servicios</ion-title>
        </div>
        <ion-segment value="segment1" @ionChange="segmentChanged"> <ion-segment-button value="detail"> <ion-label>Segmento 1</ion-label> </ion-segment-button> <ion-segment-button value="segment2"> <ion-label>Segmento 2</ion-label> </ion-segment-button> </ion-segment>

      </ion-toolbar>
    </ion-header>
        <ItemOrders @detail="goToGrandchild"></ItemOrders>
  
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, IonTabs } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import ItemOrders from '@/components/ItemOrders.vue';
import { useIonRouter } from '@ionic/vue';
import { useRouter } from 'vue-router';
const ionRouter = useIonRouter();

const router = useRouter()
function goToGrandchild() {
  console.log('en el emit')

  router.push('/tabs/tab2/child-a');
};

const segmentChanged = (event:any) => { router.push(`/${event.target.value}`); };
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;400;700&display=swap');

.no-shadow {
  box-shadow: none;
}


.container-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.center-toolbar {
  display: flex;
  justify-content: center;
  /* Alinea horizontalmente al centro */
  align-items: center;
  /* Alinea verticalmente */
}

.center-title {
  text-align: center;
  /* Asegúrate de que esté centrado */
  width: 100%;
  color: #282828;
  font-weight: 600;
}
</style>

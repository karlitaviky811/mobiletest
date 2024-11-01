<template>
  <ion-page>
    <ion-header class="no-shadow flex justify-center">
      <ion-toolbar class="center-toolbar">
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon :icon="'/arrow-prev-small.svg'"></ion-icon>
          </ion-button>
        </ion-buttons>
        <div class="custom-width">
          <ion-title class="w-auto center-title font-roboto text-xl text-xl">Detalle de Servicio</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="12">
            <ion-list style="gap: 2px">

              <ion-item :button="true" @click="goToGrandchild">
                <ion-col size="7" size-md="12">
                  <ion-label class="custom-title">Fecha: 15/10/2024 </ion-label>
                  <ion-label class="text-md custom-subtitle">Estatus: Pendiente por repuesto</ion-label>
                </ion-col>
                <ion-col size="5" size-md="12">
                  <ion-chip color="warning" class="chip-status">Pendiente</ion-chip>
                  <div style="display: flex; justify-content: center; align-items: center;">
                  </div>
                </ion-col>
              </ion-item>

              <ion-item :button="true" @click="goToGrandchild">
                <ion-col size="12" size-md="12" style="display: flex ;flex-direction: column; gap: 4px;">
                  <ion-label class="custom-title">Dirección</ion-label>
                  <ion-label class="text-md custom-subtitle">125, 2nd street, California, 19288</ion-label>
                </ion-col>

              </ion-item>

              <ion-item :button="true" @click="goToGrandchild">
                <ion-col size="12" size-md="12" style="display: flex ;flex-direction: column; gap: 4px;">
                  <ion-label class="custom-title">Servicio</ion-label>
                  <ion-label class="text-md custom-subtitle">Reparación</ion-label>
                </ion-col>

              </ion-item>

              <ion-item :button="true" @click="goToGrandchild">
                <ion-col size="12" size-md="12" style="display: flex ;flex-direction: column; gap: 4px;">
                  <ion-label class="custom-title">Detalles</ion-label>
                  <ion-label class="text-md custom-subtitle">Reparación de aire acondicionado</ion-label>
                </ion-col>

              </ion-item>
            </ion-list>
            <ion-accordion-group expand="inset">
              <ion-accordion value="first">
                <ion-item slot="header" color="light">
                  <ion-label>Diagnostico</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">First Content</div>
              </ion-accordion>
              <ion-accordion value="second">
                <ion-item slot="header" color="light">
                  <ion-label>Reparación</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Second Content</div>
              </ion-accordion>
              <ion-accordion value="third">
                <ion-item slot="header" color="light">
                  <ion-label>Cierre</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">Third Content</div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-col>

        </ion-row>
      </ion-grid>
    </ion-content>


  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonSegment, IonSegmentButton,IonAccordion, IonAccordionGroup, IonLabel ,IonButton, IonItem, IonList, IonThumbnail, IonCol, IonGrid, IonRow, IonChip, IonIcon, useIonRouter } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import ItemOrders from '@/components/ItemOrders.vue';
import { useRouter } from 'vue-router';
const ionRouter = useIonRouter();
const router = useRouter()
const goToGrandchild = () => {
  console.log('en el emit')

  router.push('/tabs/tab2');
};
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

.chip-status {
  color: #FF8800;
  border: 1px solid #FF8800
}
</style>
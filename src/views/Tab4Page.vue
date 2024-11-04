<template>
    <ion-page>
      <ion-header class="no-shadow-title flex justify-center">
        <ion-toolbar class="center-toolbar">
          <div class="custom-width">
            <ion-title class="w-auto center-title font-roboto text-xl text-xl"
              style="padding: 10px;">Servicios</ion-title>
          </div>
        </ion-toolbar>
  
      </ion-header>
      <ion-content :fullscreen="false" style="margin-top:30px;">
      <ion-segment value="segment1" @ionChange="segmentChanged">
        <ion-segment-button value="detail">
          <ion-icon name="grid-outline"></ion-icon>
          <ion-label>Nuevos</ion-label>
        </ion-segment-button>
        <ion-segment-button value="approve">
          <ion-label>Aprobados</ion-label>
        </ion-segment-button>
        <ion-segment-button value="history">
          <ion-label>Historial</ion-label>
        </ion-segment-button>
      </ion-segment>
  
      <ItemOrders @detail="goToGrandchild"></ItemOrders>
    </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonSearchbar } from '@ionic/vue';
  import { onMounted, ref } from 'vue';
  
  import ItemOrders from '@/components/ItemOrders.vue';
  
  import { useRouter } from 'vue-router';
  
  
  const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  const results: any = ref(data);
  
  const router = useRouter()
  function goToGrandchild() {
    router.push('/tabs/detail');
  }
  
  const segmentChanged = (event: any) => { console.log('hereeee', event.target.value)} //router.push(`/${event.target.value}`); };
  
  function handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    results.value = data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  </script>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;400;700&display=swap');
  
  .no-shadow-title {
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
  
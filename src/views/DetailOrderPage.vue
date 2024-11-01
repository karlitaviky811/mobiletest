<template>
    <ion-page>
        <ion-header class="no-shadow flex justify-center">
            <ion-toolbar class="center-toolbar">
                <ion-buttons slot="start">
                    <ion-button> Start </ion-button>
                </ion-buttons>
                <div class="custom-width">
                    <ion-title class="w-auto center-title font-roboto text-xl text-xl">Detalle de Servicio</ion-title>
                </div>

            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true"> <ion-segment value="default">
                <ion-segment-button value="default">
                    <ion-label class="font-roboto font-sm">Pendientes</ion-label>
                </ion-segment-button>
                <ion-segment-button value="segment">
                    <ion-label class="font-roboto">Historico</ion-label>
                </ion-segment-button>
            </ion-segment>

            <ItemOrders></ItemOrders>
        </ion-content>

    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import ItemOrders from '@/components/ItemOrders.vue';

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
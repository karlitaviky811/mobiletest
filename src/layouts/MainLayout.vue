<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
        </ion-tabs>
  </ion-page>
  
</template>

<script lang='ts' setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { playCircle, radio, library, search } from 'ionicons/icons';

</script>

<style scoped>

</style>
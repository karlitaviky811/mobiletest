<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Example</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
        <ion-item button :detail="true" :detailIcon="caretForwardOutline">
    <ion-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
      <p>Detail icon set to caret-forward-outline</p>
    </ion-label>
  </ion-item>
  <ion-item button  :detail="true" :detailIcon="caretForwardOutline">
    <ion-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
      <p>Detail icon set to caret-forward-outline</p>
    </ion-label>
  </ion-item>
      <ion-list :inset="true">
        <ion-item>
          <ion-input label="First Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Last Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-toggle>
            <ion-label>Allow Notifications</ion-label>
            <ion-note color="medium">Unsubscribe at any time</ion-note>
          </ion-toggle>
        </ion-item>
      </ion-list>
  
      <ion-list :inset="true">
        <ion-item>
          <ion-textarea label="Comments" label-placement="floating" rows="5"></ion-textarea>
        </ion-item>
      </ion-list>
  
      <ion-note color="medium" class="ion-margin-horizontal">
        Your comments will be kept anonymous and will only be used to improve the reliability of our products.
      </ion-note>
    </ion-content>
  </template>
  
<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { caretForwardOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
    setup() {
      return {
        caretForwardOutline,
      };
    },
  });
</script>
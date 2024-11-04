<template>
  <ion-page>
    <ion-header class="no-background">
      <ion-toolbar color="white" class="bg-[#0A2253] custom-toolbar shadow-lg">
        <ion-row>
          <ion-col size="1">
            <ion-icon :icon="menuOutline" size="large" style="padding:10px;"></ion-icon>
          </ion-col>
          <ion-col size="7" class="margin:10px; gap: 10px;">

            <h2 style="color:white; margin:10px;padding:10px;" class="roboto-thin">Hola, Luis Perez</h2>
            <ion-label style="color:white; margin:10px;padding:10px; " class="roboto-thi">Daka y
              asociados
            </ion-label>
          </ion-col>
          <ion-col size="2" class="margin:10px; gap: 10px;">
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="light">
      <div style="margin-top: 30px;">
        <ion-label class="home-subtitle roboto-thin" style="margin-top: 150px;">Servicios</ion-label>
      </div>
      <ion-grid fixed>
        <ion-row>
          <ion-col size="6">
            <ion-card color="white" class="card">
              <ion-card-header>
                <div style="width: 100%;display: flex;align-items: center;justify-content: center; padding: 15px;">
                  <ion-img src="/technician.svg" style="height: 60px;width: 60px;"></ion-img>
                </div>

                <div style="display: flex;justify-content: center;align-items: center;gap: 4px;">
                  <ion-card-title>Nuevos</ion-card-title>
                  <ion-badge slot="end">22</ion-badge>
                </div>
              </ion-card-header>

              <ion-card-content> </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="white" class="card">
              <ion-card-header>
                <div style="width: 100%;display: flex;align-items: center;justify-content: center; padding: 15px;">
                  <ion-img src="/tools.svg" style="height: 60px;width: 60px;"></ion-img>
                </div>

                <div style="display: flex;justify-content: center;align-items: center;gap: 4px;">
                  <ion-card-title>En proceso</ion-card-title>
                  <ion-badge slot="end">22</ion-badge>
                </div>
              </ion-card-header>

              <ion-card-content> </ion-card-content>
            </ion-card>
          </ion-col>
          <!--ion-col size="6">
            <ion-card color="white" class="card">
              <ion-card-header>
                <div style="width: 100%;display: flex;align-items: center;justify-content: center; padding: 15px;">
                  <ion-img src="/technician.svg" style="height: 60px;width: 60px;"></ion-img>
                </div>

                <div style="display: flex;justify-content: center;align-items: center;gap: 4px;">
                  <ion-card-title>Histórico</ion-card-title>
                  <ion-badge slot="end">22</ion-badge>
                </div>
              </ion-card-header>

              <ion-card-content> Card Content </ion-card-content>
            </ion-card>
          </ion-col-->


          <ion-col size="6">
            <ion-card color="white" class="card">
              <ion-card-header>
                <div style="width: 100%;display: flex;align-items: center;justify-content: center; padding: 15px;">
                  <ion-img src="/technician.svg" style="height: 60px;width: 60px;"></ion-img>
                </div>

                <div style="display: flex;justify-content: center;align-items: center;gap: 4px;">
                  <ion-card-title>Histórico</ion-card-title>
                  <ion-badge slot="end">22</ion-badge>
                </div>
              </ion-card-header>

            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';
import { logoIonic } from 'ionicons/icons';
</script>
<style>
.custom-toolbar {
  height: 150px;
  /* Ajusta este valor según tus necesidades */
  background-color: #0A2253;
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
  box-shadow: none;
}

.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: white;
}

.home-subtitle {
  margin: 20px;
  color: black;
  font-weight: 500;
  font-size: 20px;
}

.home-content {
  background: #F3F5FD;
  box-shadow: none;
}


.card {
  background-color: white;
  box-shadow: none;
  border-radius: 20px;
}
</style>
<template>
  <ion-page>
    <ion-header class="no-background modal-error">
      <ion-toolbar class="custom-toolbar content ">
        <ion-row>
          <ion-menu-button></ion-menu-button>

          <ion-col size="9" class="margin:10px; gap: 10px;z-index:100;">
            <h2 style="color:black; margin:10px;padding:10px;" class="roboto-thin">Hola, Luis Perez</h2>
            <ion-label style="color:black; margin:10px;padding:10px; " class="roboto-thi">Daka y
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
import { IonPage, IonHeader, IonMenuButton, IonToolbar, IonContent, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCol, IonRow, IonGrid, IonBadge, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';
import { logoIonic } from 'ionicons/icons';
</script>
<style>
/*.custom-toolbar {
  height: 150px;
  border-radius: 15px;
  background-color: #0A2253;
  background-color:  #ffffff;
  color: white;
  display: flex;
  align-items: center;

}
  */
.custom-toolbar {
  height: 150px;
  border-radius: 15px;
  background-color: #ffffff;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 15px;
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

}

.toolbar-title {
  flex: 1;
  text-align: left;
  /* Alinea horizontalmente a la izquierda */
  font-size: 30px;
}

.no-background {
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

.bg-class {
  
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  }

  ion-menu-button{
    --color: black;
    --background: white;
  }
</style>
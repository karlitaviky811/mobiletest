<template>
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col size="12" size-md="12">
                    <ion-list style="gap: 2px">

                        <ion-item :button="true"  @click="buttonClick()" style="width: 100%;" >
                            <ion-col size="7" size-md="12">
                                <ion-label class="custom-title">Plumber needed for plumbing...</ion-label>
                                <ion-label class="text-md custom-subtitle">Machine fitter needed.</ion-label>
                            </ion-col>
                            <ion-col size="5" size-md="12">
                                <ion-chip color="warning" class="chip-status">Pendiente</ion-chip>
                                <div style="display: flex; justify-content: center; align-items: center;">
                                    <ion-icon :icon="'/time.svg'"></ion-icon>
                                    <ion-label class="custom-hours">2 hours ago</ion-label>
                                </div>
                            </ion-col>
                        </ion-item>

                   


                    </ion-list>
                </ion-col>

            </ion-row>
        </ion-grid>

    </ion-content>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonThumbnail, IonCol, IonGrid, IonRow, IonChip, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useIonRouter } from '@ionic/vue';
import { defineEmits } from 'vue'
const emit = defineEmits(['inFocus', 'detail'])
const ionRouter = useIonRouter();


const router = useRouter();
defineProps({
    name: String,
});

function buttonClick() {
    console.log('heree')
    emit('detail')
}

function handleClick(item: string) {
    ionRouter.push('/detail');
}

</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

.align-top-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* Alinear en la parte superior */
}

.custom-label {
    color: red;
    /* Cambia el color según tus necesidades */
}

.custom-subtitle {
    color: #7f7f7f;
    font-size: 14px;
}

.custom-title {
    color: #000000;
    font-size: 14px;
    font-weight: 600;
}

.custom-hours {
    color: #b3b3b3;
    font-size: 12px;

}

.chip-status {
    color: #FF8800;
    border: 1px solid #FF8800
}

ion-item {
    cursor: pointer;
}
</style>
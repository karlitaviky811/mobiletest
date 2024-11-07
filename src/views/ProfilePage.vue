<template>

    <ion-menu menu-id="menu" content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title class="menu-title" slot="start">Joe Doe</ion-title>
                <ion-buttons slot="end">
                    <ion-button class="menu-button" @click="closeMenu">
                        <ion-icon size="large" slot="end" src="../../assets/icons/cross.svg"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-top">
            <ion-list>
                <ion-menu-toggle>
                    <ion-item :detail="true" button @click="navigateTo">
                    <ion-icon aria-hidden="true" src="../../assets/icons/user.svg" slot="start"></ion-icon>
                    <ion-label>
                        <p class="menu-label">My Profile</p>
                    </ion-label>
                </ion-item>
                </ion-menu-toggle>
                
                <ion-item lines="full">
                    <ion-icon aria-hidden="true" src="../../assets/icons/contacts.svg" slot="start"></ion-icon>
                    <ion-label>
                        <p class="menu-label">Contact us</p>
                    </ion-label>
                </ion-item>
                <ion-item lines="full">
                    <ion-icon aria-hidden="true" src="../../assets/icons/star.svg" slot="start"></ion-icon>
                    <ion-label>
                        <p class="menu-label">Rate</p>
                    </ion-label>
                </ion-item>
                <ion-item lines="full">
                    <ion-icon @click="setOpen(true)" aria-hidden="true" src="../../assets/icons/log-out.svg" slot="start"></ion-icon>
                    <ion-label>
                        <p class="menu-label">Logout</p>
                    </ion-label>
                </ion-item>
            </ion-list> 

        </ion-content>
        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-title class="menu-title" slot="start">Footer</ion-title>
                <ion-buttons slot="end">
                <ion-button class="menu-button">
                    Version 1.0
                </ion-button>
            </ion-buttons>
             </ion-toolbar>
             
        </ion-footer>

    </ion-menu>

    <ion-page id="main-content">

        

        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                    <ion-title size="large">My Profile</ion-title>
                </ion-buttons>
                
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding-top">

            <ion-item>
                <ion-label>
                    <h3>Profile photo</h3>
                </ion-label>
                <ion-avatar>
                    <img @click="handleEditImage" alt="Silhouette of a person's head"  />
                </ion-avatar>
            </ion-item>

            <ion-item :detail="true" button @click="navigateTo">
                <ion-label>
                <h3>Name</h3>
                </ion-label>
            </ion-item>

            <ion-item button :detail="true">
                <ion-label>
                    <h3>Email</h3>
                </ion-label>
        
            </ion-item>

            <ion-item button :detail="true">
                <ion-label>
                    <h3>Contact</h3>
                </ion-label>
                <ion-label slot="end">
                    <h4>+92 3470967396</h4>
                </ion-label>
            </ion-item>

            <ion-item button :detail="true">
                <ion-label>
                <h3>Gender</h3>
                </ion-label>
            </ion-item>        
        </ion-content>

         <ion-modal :is-open="isOpen" @ionModalDidDismiss.prevent="handleDismiss">
            <ion-content>
                <div class="notification">
                    <div class="notification__avatar" :class="[notificationColor]">
                        <ion-icon src="../../assets/icons/logout_icon.svg" size="large"></ion-icon>
                    </div>
                    
                    <div class="flex flex-col justify-center items-center mt-4 mb-6">
                        <p class="text-xl font-semibold font-robotoflex text-[#282828]">Come back soon!</p>
                        <p class="text-sm text-[#9E9E9E] text-center font-robotoflex">Are you sure you want to logout?</p>
                    </div>

                    <ion-button @click="logout" class="notification__button" fill="solid">Yes, Logout</ion-button>

                    <ion-button @click="setOpen(false)" class="text-red-500 font-medium font-roboto"  fill="clear">Cancel</ion-button>
                </div>
            </ion-content>
        </ion-modal>
    </ion-page>
  
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';

import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonRouterOutlet, 
    IonBackButton, 
    IonButton, 
    IonItem,
    IonLabel,
    IonAvatar,
    IonNavLink,
    IonMenu,
    IonList,
    IonFooter,
    menuController,
    IonModal,
    IonIcon,
    IonMenuToggle,
} from '@ionic/vue';
import {
    airplane
} from 'ionicons/icons';
import { ref, defineProps, defineOptions } from 'vue';

const router = useRouter();
const isOpen = ref(false);
const notificationColor = ref('notification__error');

const handleEditImage = () => {
    router.push('/main/edit-photo');
}

const closeMenu = async () => {
    await menuController.close('menu')
}

const setOpen = (open: boolean) => (isOpen.value = open);

const handleDismiss = () => {
    console.log('dismiss');
    isOpen.value = false;
}

const navigateTo = async () => {
    console.log('navigate to');
    // await closeMenu();
    
    router.push('/main/profile');
}

const logout = () => {
    isOpen.value = false;
}

</script>

<style lang="scss" scoped>

ion-item {
    --padding-bottom: 32px;

    --border-color: #F3F5FD;
}

ion-avatar {
    --border-radius: 4px;
}

.menu-button {
    --padding-end: 0;
}

ion-thumbnail {
  --size: 140px;
  --border-radius: 40px;
}

.text {
    color: $pink;
    background: $orange;
}

ion-avatar {
    --border-radius: 4px;
}

ion-modal {
    --height: 389px !important;
    --border-radius: 18px;
}

h3 {
    color: #000000;
    font-size: 15px;
    font-family: "robotoflex";
    font-weight: 700;
}

.menu-label {
    font-size: 15px;
    font-weight: 400;
    font-family: 'robotoflex';
    color: #000000;
}

.menu-title {
    font-size: 22px;
    font-weight: bold;
    font-family: 'robotoflex';
    color: #282828;
    padding-left: 23px;
    text-align: left;
}

.notification {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 42px 48px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.notification__success {
  background: #0FCC5D;
}

.notification__error {
  background: #FC5151;
}

.notification__info {
  background: #58A6FB;
}


.notification__purple {
  background: #957BF9;
}

ion-button.notification__button  {
  width: 224px;
  --border-radius: 6px;
  --background: #282828;
}

.notification .notification__avatar {
  width: 90.66px;
  height: 90.66px;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  /* background: #3FAD46; */
}

.notification .notification__avatar ion-icon {
  width: 29px;
  height: 29px
}

.notification .notification__title {
  font-size: 20px;
  font-weight: 600;
  font-family: 'robotoflex';
  color: #282828;
  margin-top: 15.34px;
}

.notification .notification__button button {
  width: 224px;
}

.avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 29px;
}

ion-button.button {

    display: flex;
    font-size: 20px;
    color: pink;

    --border-radius: 30px;



    &--primary {

        background: blue !important;
    }
 
}

</style>
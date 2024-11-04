<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-img src="/login.svg" alt=""></ion-img>

            <ion-grid class="container-form">
                <ion-row class="ion-justify-content-center">
                    <ion-text>
                        <h1 class="sign_in_title">Log in</h1>
                    </ion-text>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-padding-bottom" size="12">
                        <ion-label class="label">Email</ion-label>
                        <ion-input
                            fill="outline"
                            shape="round"
                            class="input-text"
                            placeholder="email@example.com"
                            v-model="loginForm.email"
                        ></ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-label class="label">Password</ion-label>
                        <ion-input 
                            fill="outline" 
                            shape="round" 
                            type="password"
                            class="input-text"
                            placeholder="Enter your password"
                            v-model="loginForm.password"
                        ></ion-input>  
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <ion-button @click="handleLogin" class="button-rounded" color="primary" expand="block">Log In</ion-button>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <div class="sign_in_footer">
                            <ion-text>
                                <h3 class="sign_in_with">Log in with</h3>
                            </ion-text>
                
                            <div class="wrapper-icons">
                                <ion-icon src="../../assets/icons/google_icon.svg" size="large"></ion-icon>
                                <ion-icon src="../../assets/icons/facebook_icon.svg" size="large"></ion-icon>
                                <ion-icon src="../../assets/icons/github_icon.svg" size="large"></ion-icon>
                            </div>
                        </div>
                        
                    </ion-col>
             
                </ion-row>

                <ion-row class="ion-justify-content-center">
                    <p style="font-weight: 500">
                        No account?<ion-text @click.prevent="handleSignup" color="primary" class="sign_in_up"> Sign up</ion-text>
                    </p>
                </ion-row>
            </ion-grid>
            <p>LoginForm: {{ JSON.stringify(loginForm, null, 3) }}</p>
        
        </ion-content>
    </ion-page>
  
</template>

<script lang='ts' setup>
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput, 
    IonItem, 
    IonList,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonIcon,
} from '@ionic/vue';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginForm = reactive({
    email: '',
    password: ''
});

const handleLogin = () => {
    console.log('logging... 😊');
    router.push('/tabs/tab1');
}

const handleSignup = () => {
    console.log('signup 😁');
    router.push('/register');
}

</script>

<style scoped>

.input-text {
    margin-top: 8px;
}

.label {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
}

.container-form {
    margin-top: 1rem;
}

.wrapper-icons {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
}

.sign_in_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.sign_in_title {
    font-size: 1.5rem;
    font-weight: bold;
}

.sign_in_with {
    font-size: 18px;
}

.sign_in_up {
    font-weight: 500;
}

.button-rounded {
    height: 46px;
    margin-top: 2rem;
}

</style>
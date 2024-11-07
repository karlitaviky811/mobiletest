<template>
    <ion-page class="btn-grad">
        <span>7 de Abril</span>
        <ion-content class="ion-padding">
            <ion-img src="/hand-drawn-electrician-cartoon-illustration_23-2151016726.jpg" alt=""></ion-img>

            <ion-grid class="container-form">
                <ion-row class="ion-justify-content-center">
                    <ion-text>
                        <h1 class="sign_in_title">Log in</h1>
                    </ion-text>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-padding-bottom" size="12">
                        <ion-label class="label">Email</ion-label>
                        <ion-input fill="outline" shape="round" class="input-text" placeholder="email@example.com"
                            v-model="loginForm.email"></ion-input>
                    </ion-col>
                    <ion-col size="12">
                        <ion-label class="label">Password</ion-label>
                        <ion-input fill="outline" shape="round" type="password" class="input-text"
                            placeholder="Enter your password" v-model="loginForm.password"></ion-input>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <ion-button @click="handleLogin" class="button-rounded" expand="block" shape="round">Iniciar sesión</ion-button>
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
                        No account?<ion-text @click.prevent="handleSignup" color="primary" class="sign_in_up"> Sign
                            up</ion-text>
                    </p>
                </ion-row>
            </ion-grid>
            <!--p>LoginForm: {{ JSON.stringify(loginForm, null, 3) }}</p-->

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
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonIcon,
    IonButton,
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

.ion-padding{
    background-color: transparent;
}
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
    border-radius: 30px;
}

.btn-grad {
    margin: 10px;
    

    transition: 0.5s;
    background-size: 100% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}





ion-button {
    --background: #0A2253;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: #fff;


    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
}
</style>
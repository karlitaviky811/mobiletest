<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="(message, index) in messages" :key="index" class="chat-bubble"
                    :class="{ 'mine': message.sender === 'me' }">
                    <div style="display: flex; flex-direction: column;margin-top: 15px;margin-bottom: 15px;">
                        <ion-label>{{ message.message }}</ion-label>
                        <ion-label>{{ message.username }}</ion-label>
                    </div>

                </ion-item>
            </ion-list>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-input v-model="newMessage" placeholder="Escribe un mensaje"></ion-input> <ion-button
                    @click="sendMessage">Enviar</ion-button>
            </ion-toolbar> </ion-footer> </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { io, Socket } from 'socket.io-client';
import { IonPage, IonHeader, IonToolbar, IonContent, IonLabel, IonTitle, IonButton, IonGrid, IonItem, IonFooter, IonInput, IonList } from '@ionic/vue';


const socket = io('http://localhost:5000', {
    auth: {
        username: 'test@gmail.com'  // Sustituye 'your-authentication-token' por tu token real
    },
    transports: ['websocket'],  // Ajusta los transportes
    reconnection: true,         // Configura la reconexión
    reconnectionAttempts: 5,    // Número de intentos de reconexión
    reconnectionDelay: 1000     // Tiempo de espera entre intentos
});
const messages: any = ref([]);
const newMessage = ref('');


onMounted(() => {
    socket.on('chat message', (message, username) => {

        console.log('server offset', username)
        messages.value.push({ message: message, username: username, sender: '' }
        );
    });
});

onUnmounted(() => {
    socket.off('message');
});

function sendMessage() {
    console.log('hereeeerrre', newMessage.value)
    if (newMessage.value) {
        console.log('hereeeerrre', newMessage.value)
        socket.emit('chat message', newMessage.value, 'test@gmail.com');
        newMessage.value = '';
    }
}
</script>

<style scoped>
ion-content {
    display: flex;
    flex-direction: column;
}

ion-footer {
    position: sticky;
    bottom: 0;
}


.chat-bubble {
    max-width: 70%;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    border: 1px gray;
    background-color: #f1f1f1;
    align-self: flex-start;
}

.mine {
    background-color: #007bff;
    color: #f1f1f1;
    align-self: flex-end;
}
</style>
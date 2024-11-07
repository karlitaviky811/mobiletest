<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Chat</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="(message, index) in messages" :key="index" class="chat-bubble" :class="{ 'mine': message.sender === userId }">
            <ion-label>{{ message.text }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-input v-model="newMessage" placeholder="Escribe un mensaje"></ion-input>
          <ion-button @click="sendMessage">Enviar</ion-button>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { io } from 'socket.io-client';
  
  export default {
    setup() {
      const socket = io('http://localhost:5000');
      const roomId = 'general'; // Reemplaza con una lógica de sala dinámica
      const userId = 'user1'; // Reemplaza con una lógica de usuario real
      const messages = ref([]);
      const newMessage = ref('');
  
      onMounted(() => {
        socket.emit('joinRoom', { roomId });
  
        socket.on('message', (message) => {
          messages.value.push(message);
        });
      });
  
      onUnmounted(() => {
        socket.off('message');
      });
  
      const sendMessage = () => {
        if (newMessage.value.trim()) {
          const message = { text: newMessage.value, sender: userId };
          socket.emit('message', { roomId, message });
          messages.value.push(message);
          newMessage.value = '';
        }
      };
  
      return { messages, newMessage, sendMessage };
    }
  };
  </script>
  
  <style scoped>
  .chat-bubble {
    max-width: 70%;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background-color: #f1f1f1;
    align-self: flex-start;
  }
  
  .mine {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
  }
  </style>
  

  
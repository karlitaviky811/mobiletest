<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { io } from 'socket.io-client';
import { ref, onMounted, onUnmounted } from 'vue';
const socket = io('http://localhost:5000');
    const messages = ref([]);
    const newMessage = ref('');

onMounted(() => {
 
    onUnmounted(() => {
      socket.off('message');
    });

    const sendMessage = () => {
      if (newMessage.value.trim()) {
        socket.emit('message', newMessage.value);
        newMessage.value = '';
      }
    };


})
</script>

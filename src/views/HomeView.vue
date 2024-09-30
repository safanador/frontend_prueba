<template>
    <div id="app">
      <!-- Muestra la pantalla de carga durante 3 segundos -->
      <SplashScreenView v-if="showSplashScreen" />
      <!-- Muestra Home.vue después de la pantalla de carga -->
      <DashboardView v-else />
    </div>
  </template>
  
  <script>
  import SplashScreenView from './Components/SplashScreenView.vue';
  import DashboardView from './Components/DashboardView.vue';
  
  export default {
    components: {
      SplashScreenView,
      DashboardView,
    },
    data() {
      return {
        showSplashScreen: true, // Controla si mostrar la pantalla de carga
      };
    },
    mounted() {
      // Cambia a la pantalla principal después de 7 segundos
      setTimeout(() => {
        this.showSplashScreen = false;
      }, 7000); // 
    },
  };
  </script>
  
  <style>
  
  </style>
  
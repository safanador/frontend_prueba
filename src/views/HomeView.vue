<script>
import SplashScreenView from './Components/SplashScreenView.vue'
import DashboardView from './Components/DashboardView.vue'

export default {
  components: {
    SplashScreenView,
    DashboardView
  },
  data() {
    return {
      showSplashScreen: true // Controla si mostrar la pantalla de carga
    }
  },
  mounted() {
    // Cambia a la pantalla principal después de 7 segundos
    setTimeout(() => {
      this.showSplashScreen = false
    }, 7000)
  }
}
</script>

<template>
  <div class="container">
    <SplashScreenView v-if="showSplashScreen" />
    <DashboardView v-else />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la pantalla */
}

.container > * {
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  .container > * {
    aspect-ratio: 9 / 16; /* Relación de aspecto 9:16 */
  }
}
</style>

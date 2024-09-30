<template>
    <div v-if="loading" class="splash-screen">
      <div v-if="loadingTime > 1500" class="logo-container">
        <div>LOGO</div>
        <div>RESTAURANTE</div>
      </div>
      <div class="loaderBox">
        <div v-if="loadingTime > 3500" class="loader"></div>
      </div>
    </div>
    <router-view v-else />
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        loading: true,
        loadingTime: 0,
      };
    },
    mounted() {
      const interval = setInterval(() => {
        this.loadingTime += 500;
        if (this.loadingTime >= 7000) {
          clearInterval(interval);
          this.loading = false;
        }
      }, 500);
    },
  };
  </script>
  
  <style scoped>
   .logo-container {
    text-align: center;
    font-size: x-large;
    margin-bottom: 80%;
  }
  .splash-screen {
    background-color: black;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .loaderBox{
    height: 30px;
    width: 30px;
  }
  .loader {
    border: 5px solid #666262;
    border-radius: 50%;
    border-top: 5px solid white;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  </style>
  
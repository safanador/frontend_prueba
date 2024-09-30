<template>
    <nav class="navbar">
      <BsArrowLeftShort class="icon" @click="goBack"/>
      <h2 class="title">Random Cocktail</h2>
      <div>
        <RouterLink  :to="'/order'">
        <AkClipboard class="clip-icon"/>
        </RouterLink>
        <CoFlagCo class="clip-icon"/>
      </div>
    </nav>
  </template>

  <script setup>
    import { AkClipboard } from '@kalimahapps/vue-icons';    
    import { RouterLink  } from 'vue-router'; // Importa RouterLink
    import { BsArrowLeftShort } from '@kalimahapps/vue-icons';
    import { CoFlagCo } from '@kalimahapps/vue-icons';

    const goBack = () => {
        window.history.back(); // Regresa a la ventana anterior
    };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    opacity: 100%;
    color: white;
    padding: 10px;
    background: rgb(1, 16, 14);
  }
  .title {
    font-size: large;
    color: #00a99d;
  }

  .icon, .clip-icon{
        width: 42px;
        height: 42px;
        margin: 4px 20px;
        z-index: 9001; /* Asegúrate de que los íconos también estén sobre otros elementos */

    }
  .clip-icon {
        width: 32px;
        height: 32px;
        margin: 4px 6px;
  }

  </style>
  

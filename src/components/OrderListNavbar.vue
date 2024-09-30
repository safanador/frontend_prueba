<template>
    <nav class="navbar">
      <BsArrowLeftShort class="icon" @click="goBack"/>
    </nav>
  </template>

  <script setup>
    import { BsArrowLeftShort } from '@kalimahapps/vue-icons';

    const goBack = () => {
        window.history.back(); // Regresa a la ventana anterior
    };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    opacity: 100%;
    color: white;
    padding: 10px;
    background: rgb(1, 16, 14);
  }

  .icon{
        width: 42px;
        height: 42px;
        margin: 4px 20px;
    }

  </style>
  

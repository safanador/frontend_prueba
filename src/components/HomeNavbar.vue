<template>
    <nav class="navbar">
      <div class="title">Reservation</div>
      <div class="icons">
        <RouterLink :to="'/randomcocktail'">
          <LaCocktailSolid class="icon"/>
        </RouterLink>
        <span class="divider"></span>
        <RouterLink :to="'/order'">
          <AnOutlinedShoppingCart class="icon"/>
        </RouterLink>
      </div>
    </nav>
  </template>

  <script setup>
    import { LaCocktailSolid } from '@kalimahapps/vue-icons';
    import { AnOutlinedShoppingCart } from '@kalimahapps/vue-icons';
    import { RouterLink  } from 'vue-router'; // Importa RouterLink
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: black;
    opacity: 90%;
    color: white;
    padding: 4px;
  }
  .title {
    font-size: x-large;
  }
  .i{
    justify-content: center;
    align-items: center;
    padding: 4px 20px;
  }

  .icon{
        width: 32px;
        height: 32px;
        margin: 4px 20px;
    }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .divider {
    height: 30px;
    border-left: 1px solid white;
  }
  </style>
  

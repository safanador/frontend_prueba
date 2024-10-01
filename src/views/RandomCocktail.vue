<template>
    <RandomCocktailNavbar />
    <div class="drink-card">
      <!-- Imagen -->
      <img :src="cocktailData.strDrinkThumb" alt="Drink Image" class="drink-image" />
      <!-- Titulo -->
      <div class="drink-title">
        <p v-if="cocktailData.strDrink">{{ cocktailData.strDrink }}</p>
        <p v-else>No hay descripción disponible para esta bebida.</p>
      </div>
      <!-- Descripción -->
      <div class="drink-info">
        <h2 class="title">Preparación</h2>
        <p v-if="cocktailData.strInstructions">{{ cocktailData.strInstructions }}</p>
        <p v-else>No hay descripción disponible para esta bebida.</p>
      </div>
  
      <!-- Ingredientes -->
      <div class="ingredients">
        <h3 class="ingredients-title">Ingredientes</h3>
        <ul v-if="hasIngredients">
          <li v-if="cocktailData.strIngredient1">{{ cocktailData.strIngredient1 }}</li>
          <li v-if="cocktailData.strIngredient2">{{ cocktailData.strIngredient2 }}</li>
          <li v-if="cocktailData.strIngredient3">{{ cocktailData.strIngredient3 }}</li>
          <li v-if="cocktailData.strIngredient4">{{ cocktailData.strIngredient4 }}</li>

        </ul>
        <p v-else>No hay ingredientes disponibles.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import RandomCocktailNavbar from "../components/RandomCocktailNavbar.vue";
  import { ref, onMounted, computed } from 'vue'; // Asegúrate de importar 'computed' aquí
  import { fetchCocktailData } from '@/services/theCocktailApi.js';
  
  const cocktailData = ref({});
  
  // Computed property to check if there are any ingredients
  const hasIngredients = computed(() => {
    return cocktailData.value.strIngredient1 || cocktailData.value.strIngredient2 || cocktailData.value.strIngredient3 ||
           cocktailData.value.strIngredient4 
  });
  
  const loadCocktailData = async () => {
    try {
      const allCocktailData = await fetchCocktailData();
      console.log(allCocktailData.drinks[0]);
      cocktailData.value = allCocktailData.drinks[0];
    } catch (error) {
      console.error('Error al cargar los datos del cóctel:', error);
    }
  };
  
  onMounted(() => {
    loadCocktailData();
  });
  </script>
  
  <style scoped>
  .drink-card {
    background-color: #00100e;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  
  .drink-image {
    width: 90%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .drink-title {
    font-size: x-large;
    font-weight: 700;
    color: #00a99d;
    margin-bottom: 10px;
  }
  
  .drink-info {
    text-align: justify;
    margin-bottom: 20px;
    width: 90%;
  }
  
  .title {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #00a99d;
    text-align: start;
  }
  .ingredients-title {
    margin-bottom: 5px;
    font-size: 1.1rem;
    color: #00a99d;
  }
  
  .ingredients {
    width: 90%;
  }
  
  ul {
    padding-left: 20px;
  }
  
  li {
    list-style-type: disc;
    margin-bottom: 5px;
  }
  
  p {
    margin: 0;
  }
  </style>
  
<template>
  <div class="random-cocktail-container">
    <RandomCocktailNavbar />
    <div class="aspect-wrapper">
      <div class="drink-card">
        <!-- Imagen -->
        <img :src="cocktailData.strDrinkThumb" alt="Drink Image" class="drink-image" />
        <!-- Título -->
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
    </div>
  </div>
</template>

<script setup>
import RandomCocktailNavbar from '../components/RandomCocktailNavbar.vue'
import { ref, onMounted, computed } from 'vue'
import { fetchCocktailData } from '@/services/theCocktailApi.js'

const cocktailData = ref({})

// Computed property to check if there are any ingredients
const hasIngredients = computed(() => {
  return (
    cocktailData.value.strIngredient1 ||
    cocktailData.value.strIngredient2 ||
    cocktailData.value.strIngredient3 ||
    cocktailData.value.strIngredient4
  )
})

const loadCocktailData = async () => {
  try {
    const allCocktailData = await fetchCocktailData()
    console.log(allCocktailData.drinks[0])
    cocktailData.value = allCocktailData.drinks[0]
  } catch (error) {
    console.error('Error al cargar los datos del cóctel:', error)
  }
}

onMounted(() => {
  loadCocktailData()
})
</script>

<style scoped>
.random-cocktail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #00100e;
  color: white;
}

.aspect-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.drink-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
  width: 100%;
  max-width: 450px; /* Limita el ancho del contenido */
  background-color: #00100e;
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

/* Relación de aspecto en pantallas mayores a 768px */
@media (min-width: 768px) {
  .aspect-wrapper {
    aspect-ratio: 9 / 16;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drink-card {
    height: 100%; /* Se ajusta al contenedor */
    overflow-y: auto;
  }
}
</style>

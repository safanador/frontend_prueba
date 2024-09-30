<template>
    <MenuListNavbar />
    <div class="menu">
      <div v-for="(category, categoryName) in menuData" :key="categoryName" class="category-section">
        <h2 :class="['category-title', { 'sticky': activeCategory === categoryName }]" ref="categoryRefs[categoryName]">{{ categoryName }}</h2>
        <hr class="divider" />
        <div v-for="dish in category" :key="dish.id" class="dish-card">
          <img :src="dish.imageUrl" alt="Dish image" class="dish-image" />
          <div class="dish-info">
            <h3 class="dish-title">{{ dish.title }}</h3>
            <p class="dish-price">{{ dish.price }} €</p>
            <p class="dish-description">{{ dish.description }}</p>
            <div class="icons">
              <AkCirclePlus class="add-icon"/>
              <AnOutlinedHeart class="favorite-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import MenuListNavbar from "../components/MenuListNavbar.vue";
  import { AkCirclePlus } from '@kalimahapps/vue-icons';
  import { AnOutlinedHeart } from '@kalimahapps/vue-icons';
  import { fetchMenuData } from '@/services/api'; 
  import { useRoute } from 'vue-router'; 

  // Estructura de datos para el menu
  const menuData = ref({});
  const activeCategory = ref(null);
  const categoryRefs = ref({});
  const route = useRoute(); // Obtener la ruta actual

 // Función para cargar los datos del menú
const loadMenuData = async () => {
  try {
    const allMenuData = await fetchMenuData(); // Obtiene todos los datos del menú
    filterMenuData(allMenuData); // Filtra los datos según la ruta
  } catch (error) {
    console.error('Error al cargar los datos del menú:', error);
  }
};

// Función para filtrar los datos según la ruta
const filterMenuData = (data) => {
    const category = route.path === '/lunchmenu' ? 'lunch_menu' :
                     route.path === '/appetizerlist'?'appetizer_list' :
                     route.path === '/cocktaillist' ? 'cocktail_list' :
                     route.path === '/winemenu' ? 'wine_menu' : null;
  if (category && data[0][category]) {
    //console.log(data[0][category])
    menuData.value = data[0][category]; 
  } else {
    menuData.value = {}; // Si no hay categoría, asigna un objeto vacío
  }
};

// Configura el scroll y carga los datos al montar el componente
onMounted(() => {
  loadMenuData(); // Carga los datos al montar el componente
  window.addEventListener('scroll', handleScroll);
  categoryRefs.value = Object.keys(menuData.value).reduce((acc, key) => {
    acc[key] = null;
    return acc;
  }, {});
});

// Limpia el listener al desmontar el componente
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
  
  // Function to handle the scroll and make the title sticky
  const handleScroll = () => {
    for (const categoryName in categoryRefs.value) {
      const categoryRef = categoryRefs.value[categoryName];
      if (categoryRef && categoryRef.getBoundingClientRect().top <= 0) {
        activeCategory.value = categoryName;
      } else if (categoryRef && categoryRef.getBoundingClientRect().top > 0) {
        activeCategory.value = null;
      }
    }
  };
  
  // Set up scroll listener
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    categoryRefs.value = Object.keys(menuData.value).reduce((acc, key) => {
      acc[key] = null;
      return acc;
    }, {});
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .menu {
    padding: 16px;
    background-color: #00100e;
  }
  
  .category-section {
    margin-bottom: 20px;
  }
  
  .category-title {
    display: flex;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: #00a99d;
    text-transform: capitalize;
    justify-content: center;
    width: 50%;
    left: 21%;
    position: relative;
    transition: all 0.3s;
  }
  
  .category-title.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #00100e;
    z-index: 10;
    padding: 10px;
    border-bottom: 2px solid #00a99d;
  }
  
  .category-title:first-letter {
    text-transform: uppercase;
  }
  
  .divider {
    width: 90%;
    margin: 0 auto 16px;
    border: 1px solid #00a99d;
  }
  
  .dish-card {
    display: flex;
    background: #041a17;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  .dish-image {
    width: 160px;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
  }
  
  .dish-info {
    margin-left: 14px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }
  
  .dish-title {
    font-weight: 500;
    font-size: medium;
  }
  
  .dish-price {
    color: white;
    font-size: large;
    font-weight: 700;
  }
  
  .dish-description {
    margin: 4px 0;
  }
  
  .icons {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    justify-content: end;
  }
  
  .add-icon {
    cursor: pointer;
    font-size: 1.85rem;
  }
  
  .favorite-icon {
    cursor: pointer;
    font-size: 2rem;
  }
  </style>
  